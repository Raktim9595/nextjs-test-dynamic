import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h3>Main App</h3>
      <Link href={"/devices"}>Devices</Link>
    </main>
  );
}
