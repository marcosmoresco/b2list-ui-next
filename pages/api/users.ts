// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: any, res: NextApiResponse) {
  const response = await axios.get(`http://demo0105651.mockable.io/users`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  res.status(200).json(response?.data);
}
