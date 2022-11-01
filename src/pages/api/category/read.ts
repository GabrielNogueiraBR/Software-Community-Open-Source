import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";
import { CategoryFilters } from "../../../types/filters";
import {
  filterCategories,
  findCategoriesAtFirestore,
} from "../../../services/firebase/firestore/read";

const schema = yup.object().shape({
  name: yup.string(),
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

    const { name } = query as any as CategoryFilters;
    const categories = await findCategoriesAtFirestore();
    const filteredCategories = filterCategories(categories, { name });

    return res.status(200).json(filteredCategories);
  } catch (e) {
    res.status(500).end(`Error on server: ${e}`);
  }
}
