import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";
import { QuestionCategory } from "../../../types/question";
import { insertQuestionAtFirestore } from "../../../services/firebase/firestore/create";

const schema = yup.object().shape({
  assignee: yup.object().shape({
    name: yup.string().required(),
  }),
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().oneOf(Object.values(QuestionCategory)).required(),
  complexity: yup.number().min(0).max(5).required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).end("Method not allowed");
    }

    const { body } = req;

    const isValid = await schema.isValid(body);

    if (!isValid) {
      return res.status(400).end("Data format invalid");
    }

    const question = await insertQuestionAtFirestore(body);

    return res.status(200).json(question);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
