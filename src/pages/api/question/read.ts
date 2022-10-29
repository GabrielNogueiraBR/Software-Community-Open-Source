import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";
import { QuestionCategory } from "../../../types/question";
import { Filters } from "../../../types/filters";
import {
  filterQuestions,
  findQuestionsAtFirestore,
} from "../../../services/firebase/firestore/read";

const schema = yup.object().shape({
  title: yup.string(),
  category: yup.string().oneOf(Object.values(QuestionCategory)),
  complexity: yup.number().min(0).max(5),
  resolved: yup.boolean(),
});

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
    const filteredQuestions = filterQuestions(questions, {
      category,
      complexity,
      resolved,
      title,
    });

    return res.status(200).json(filteredQuestions);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
