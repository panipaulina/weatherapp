import styles from "./page.module.css";
import Image from "next/image";

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

async function getForecast(id: number) {
  const res = await fetch(`${baseUrl}/api/city/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function City({
  params: { id },
}: {
  params: { id: number };
}) {
  const { forecast, city } = await getForecast(id);
  console.log(baseUrl);
  return (
    <>
      <h3 className={styles.heading}>Weather details for {city.name}:</h3>
      {forecast.list.slice(0, 10).map((item: any) => (
        <div className={styles.forecastItem} key={item.dt}>
          <div>
            <ul className={styles.list}>
              <li className={styles.date}>{item.dt_txt}</li>
              <li>
                <strong>temp: {item.main.temp.toFixed(0)}&deg;</strong>
              </li>
              <li>pressure: {item.main.pressure} hPa</li>
              <li>humidity: {item.main.humidity}%</li>
              <li>wind: {item.wind.speed} m/s</li>
            </ul>
          </div>
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="icon"
            width={80}
            height={80}
          />
        </div>
      ))}
    </>
  );
}
