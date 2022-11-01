import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { updateCategoryAtFirestore } from "../../../../services/firebase/firestore/update";

const schema = yup.object().shape({
  name: yup.string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "PATCH") {
      res.setHeader("Allow", "PATCH");
      return res.status(405).send({ message: "Method not allowed" });
    }

    const { body, query } = req;
    const categoryId = query.id as string;

    const isValid = await schema.isValid(body);

    if (!isValid) {
      return res.status(400).send({ message: "Data format invalid" });
    }

    try {
      await updateCategoryAtFirestore(categoryId, body);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Error while updating question." });
    }

    return res.status(200).end();
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
