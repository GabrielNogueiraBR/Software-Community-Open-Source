import { NextApiRequest, NextApiResponse } from "next";

import firestore from "../../../services/firebase/firestore";

import * as yup from "yup";
import { Question, QuestionCategory } from "../../../types/question";

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
    if (req.method === "POST") {
      const { body } = req;

      if (!(await schema.isValid(body))) {
        return res.status(404).end("Data format invalid");
      }

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

      return res.status(200).json(question);
    }
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
