import Link from "next/link";
export default function Home(){
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href='/community'>Community section</Link>
      <Link href='/meals'>Meals section</Link>
    </main>
  );
}
