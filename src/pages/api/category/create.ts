import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";
import { insertCategoryAtFirestore } from "../../../services/firebase/firestore/create";
import { findCategoryByNameAtFirestore } from "../../../services/firebase/firestore/read";

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

    const alreadyExists = await findCategoryByNameAtFirestore(body.name);
    if (alreadyExists) return res.status(409).end("Category already exists");

    const category = await insertCategoryAtFirestore(body);

    return res.status(200).json(category);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
