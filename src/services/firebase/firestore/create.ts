import firestore from "./index";
import { Question } from "../../../types/question";

export const insertQuestionAtFirestore = async (
  body: any
): Promise<Question> => {
  const { assignee, title, description, category, complexity } = body;

  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionReference = firestore.collection(collectionName);

  const question: Question = {
    assignee,
    title,
    description,
    category,
    complexity,
    answers: [],
    resolved: false,
    created: new Date(),
    updated: new Date(),
  };

  await collectionReference.add(question);

  return question;
};
