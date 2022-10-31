import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";
import { insertCategoryAtFirestore } from "../../../services/firebase/firestore/create";

const schema = yup.object().shape({
  name: yup.string().required(),
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

    //TODO: verificar se ja existe um registro com esse nome -> 409 conflito

    const question = await insertCategoryAtFirestore(body);

    return res.status(200).json(question);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
