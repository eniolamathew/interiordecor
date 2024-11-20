import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;
  
    if (!url) {
      res.status(400).json({ error: "Missing image URL" });
      return;
    }
  
    try {
      res.setHeader("Cache-Control", "max-age=31536000, public");
      res.redirect(url as  string);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong!" });
    }
}