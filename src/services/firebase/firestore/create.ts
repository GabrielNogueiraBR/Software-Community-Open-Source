import firestore from "./index";
import { Question } from "../../../types/question";
import { Category } from "../../../types/category";

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

export const insertCategoryAtFirestore = async (
  body: any
): Promise<Category> => {
  const { name } = body;

  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "category"
      : "category_dev";

  const collectionReference = firestore.collection(collectionName);

  const category: Category = {
    name,
    created: new Date(),
    updated: new Date(),
  };

  const reference = await collectionReference.add(category);
  category.id = reference.id;

  return category;
};
