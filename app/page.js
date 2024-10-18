import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p style={{ textAlign: 'center' }}><Link href='/meals'>Meals Button</Link></p>
      <p style={{ textAlign: 'center' }}><Link href='/meals/share'>Share Meals Button</Link></p>
      <p style={{ textAlign: 'center' }}><Link href='/community'>Community Button</Link></p>
    </main>
  );
}
