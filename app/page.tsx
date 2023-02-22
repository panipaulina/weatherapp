import styles from "./page.module.css";
import CityLink from "@/app/(Home)/CityLink";

async function getData() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/group?id=3530597,241170,3413829,2775220,4164138,290030,2174003,993800,6167865,5780993&units=metric&appid=${process.env.API_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className={styles.row}>
        {data.list.map((city: any) => (
          <CityLink key={city.id} details={city} />
        ))}
      </div>
    </>
  );
}
