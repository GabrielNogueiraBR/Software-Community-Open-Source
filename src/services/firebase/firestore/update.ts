import firestore from ".";

export const updateQuestionAtFirestore = async (
  id: string,
  body: any
): Promise<void> => {
  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionReference = firestore.collection(collectionName);
  await collectionReference.doc(id).update(body);
};
