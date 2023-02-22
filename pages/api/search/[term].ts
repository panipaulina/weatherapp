import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { term } = req.query;
  const searchResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${process.env.API_KEY}`
  );

  if (!searchResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await searchResponse.json();

  return res.status(200).json(data);
}
