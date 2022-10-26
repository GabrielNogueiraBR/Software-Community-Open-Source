import { NextApiRequest, NextApiResponse } from "next";
import firestore from "../../../services/firebase/firestore";
import * as yup from "yup";
import { Question, QuestionCategory } from "../../../types/question";

const schema = yup.object().shape({
  title: yup.string(),
  category: yup.string().oneOf(Object.values(QuestionCategory)),
  complexity: yup.number().min(0).max(5),
  resolved: yup.boolean(),
});

type Filters = {
  title: string;
  category: string;
  complexity: number;
  resolved: boolean;
}

export const filterQuestions = (questions: Question[], filters: Filters): Question[] => {
  const { category, complexity, resolved, title } = filters;

  return questions.filter((question) =>{
    let filterCategory = true;
    let filterComplexity = true;
    let filterResolved = true;
    let filterTitle = true;

    if (category) filterCategory = question.category === category;
    if (complexity) filterComplexity = question.complexity === complexity;
    if (resolved) filterResolved = question.resolved === resolved;
    if (title) filterTitle = question.title.toLowerCase().includes(title.toLowerCase());

    return filterCategory && filterComplexity && filterResolved && filterTitle;
  });
}

export const findQuestionsAtFirestore = async (): Promise<Question[]> => {
  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionRef = firestore.collection(collectionName);
  const documents = await collectionRef
    .select(
      'assignee',
      'title', 
      'description', 
      'category', 
      'complexity', 
      'answers', 
      'resolved', 
      'resolvedJustification',
      'resolvedDate', 
      'created', 
      'updated', 
      'data'
    )
    .get()
    .then((res) => res.docs);

  return documents.map((data) => {
    const fields = data['_fieldsProto'];
    const ref = data['_ref'];
    
    const id = ref['_path']['segments'][1]; 

    const obj = {} as Question;
    obj['id'] = id;

    for (const [field, value] of Object.entries(fields)) {
      obj[field] = value['integerValue'] 
        ?? value['stringValue'] 
        ?? (value['timestampValue'] && Number(value['timestampValue'].seconds * 1000))
        ?? value['booleanValue'] 
        ?? (value['arrayValue'] && value['arrayValue'].values)
        ?? (value['mapValue'] && value['mapValue'].fields);
    }

    return obj;
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).end("Method not allowed");
    }

    const { query } = req;

    const isValid = await schema.isValid(query);

    if (!isValid) {
      return res.status(400).end("Data format invalid");
    }

    const { category, complexity, resolved, title } = query as any as Filters;
    const questions = await findQuestionsAtFirestore();
    const filteredQuestions = filterQuestions(
      questions,
      { category, complexity, resolved, title }
    );

    return res.status(200).json(filteredQuestions);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}