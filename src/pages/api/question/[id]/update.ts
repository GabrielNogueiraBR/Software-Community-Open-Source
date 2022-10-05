import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import firestore from "../../../../services/firebase/firestore";
import { QuestionCategory } from "../../../../types/question";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().oneOf(Object.values(QuestionCategory)).required(),
  complexity: yup.number().min(0).max(5).required(),
});

const updateQuestionAtFirestore = async (id: string, body: any): Promise<void> => {
  const collectionName =
    process.env.NEXT_PUBLIC_STAGE === "production"
      ? "question"
      : "question_dev";

  const collectionReference = firestore.collection(collectionName);
  await collectionReference.doc(id).update(body);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== "PATCH") {
      res.setHeader("Allow", "PATCH");
      return res.status(405).send({ message: "Method not allowed" });
    }

    const { body, query } = req;
    const questionId = query.id as string;

    const isValid = await schema.isValid(body);

    if (!isValid) {
      return res.status(400).send({ message: "Data format invalid" });
    }

    try {
      await updateQuestionAtFirestore(questionId, body);
    } catch (error) {
      return res.status(500).send({ message: "Error while updating question." });
    }

    return res.status(200).end();
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
