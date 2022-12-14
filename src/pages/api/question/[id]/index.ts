import { NextApiRequest, NextApiResponse } from "next";
import { findQuestionByIdAtFirestore } from "../../../../services/firebase/firestore/read";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).end("Method not allowed");
    }

    const params = req.query;
    const id = params.id as string;

    const question = await findQuestionByIdAtFirestore(id);
    if (question) return res.status(200).json(question);

    return res.status(404).end("Question not found");
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
