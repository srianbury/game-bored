// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function hello(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "Bri Sun" });
}

export { hello };
