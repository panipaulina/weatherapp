import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function CityLink({ details }: any) {
  return (
    <Link href={`/city/${details.id}`} className={styles.link}>
      <div>
        {details.name} {details.main.temp.toFixed(0)}&deg;
      </div>
      <div>
        <Image
          src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
          alt="icon"
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
}
