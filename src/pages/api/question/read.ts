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

const findQuestionAtFirestore = async (body: any): Promise<any> => {
  const { title, category, complexity, resolved } = body;

  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  // const whereConditions: string[] = [];
  // let whereConditionString = '';

  // if(title) whereConditions.push(`'title', '==', title`)
  // if(category) whereConditions.push(`'category', '==', category`)
  // if(complexity) whereConditions.push(`'complexity', '==', complexity`)
  // if(resolved) whereConditions.push(`'resolved', '==', resolved`)

  // for (let i = 0; i < whereConditions.length; i++) {
  //   whereConditionString += `.where(${whereConditions[i]})`;
  // }

  // console.log(whereConditionString)

  // const docs = await collectionRef;

  let collectionRef = firestore.collection(collectionName);

  if(title) collectionRef.where('title', '==', title)
  if(category) collectionRef.where('category', '==', category)
  if(complexity) collectionRef.where('complexity', '==', complexity)
  if(resolved) collectionRef.where('resolved', '==', resolved)

  const query = await collectionRef
    .select('title', 'description', 'complexity', 'data', 'category')
    .get()
    .then((res) => res.docs);

  return query.map((data) => {
    const fields = data['_fieldsProto'];
    const ref = data['_ref'];
    
    const id = ref['_path']['segments'][1]; 

    const obj = {
      id,
    };

    for (const [field, value] of Object.entries(fields)) {
      obj[field] = value['integerValue'] ?? value['stringValue'];
    }

    return obj;
  })
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

    const question = await findQuestionAtFirestore(query);

    return res.status(200).json(question);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}