import firestore from ".";
import { Filters } from "../../../types/filters";
import { Question } from "../../../types/question";

export const getQuestionFromDocument = (questionDocument: any): Question => {
  const fields = questionDocument["_fieldsProto"];
  const ref = questionDocument["_ref"];

  const id = ref["_path"]["segments"][1];

  const obj = {} as Question;
  obj["id"] = id;

  for (const [field, value] of Object.entries(fields)) {
    obj[field] =
      value["integerValue"] ??
      value["stringValue"] ??
      (value["timestampValue"] &&
        Number(value["timestampValue"].seconds * 1000)) ??
      value["booleanValue"] ??
      (value["arrayValue"] && value["arrayValue"].values) ??
      (value["mapValue"] && value["mapValue"].fields);
  }

  return obj;
};

export const findQuestionByIdAtFirestore = async (id: string) => {
  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionReference = firestore.collection(collectionName);

  const questionDoc = await collectionReference.doc(id).get();
  const question = getQuestionFromDocument(questionDoc);

  return question;
};

export const filterQuestions = (
  questions: Question[],
  filters: Filters
): Question[] => {
  const { category, complexity, resolved, title } = filters;

  return questions.filter((question) => {
    let filterCategory = true;
    let filterComplexity = true;
    let filterResolved = true;
    let filterTitle = true;

    if (category) filterCategory = question.category === category;
    if (complexity) filterComplexity = question.complexity === complexity;
    if (resolved) filterResolved = question.resolved === resolved;
    if (title)
      filterTitle = question.title.toLowerCase().includes(title.toLowerCase());

    return filterCategory && filterComplexity && filterResolved && filterTitle;
  });
};

export const findQuestionsAtFirestore = async (): Promise<Question[]> => {
  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionRef = firestore.collection(collectionName);
  const documents = await collectionRef
    .select(
      "assignee",
      "title",
      "description",
      "category",
      "complexity",
      "answers",
      "resolved",
      "resolvedJustification",
      "resolvedDate",
      "created",
      "updated",
      "data"
    )
    .get()
    .then((res) => res.docs);

  return documents.map((data) => getQuestionFromDocument(data));
};
