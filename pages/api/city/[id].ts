import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  const cityDetailsResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.API_KEY}`,
    { next: { revalidate: 5400 } }
  );

  if (!cityDetailsResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const cityDetails = await cityDetailsResponse.json();

  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${cityDetails.coord.lat}&lon=${cityDetails.coord.lon}&units=metric&appid=${process.env.API_KEY}`,
    { next: { revalidate: 5400 } }
  );

  if (!forecastResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await forecastResponse.json();
  return res.status(200).json({ forecast: data, city: cityDetails });
}
