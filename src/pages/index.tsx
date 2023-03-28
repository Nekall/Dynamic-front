import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head"

// Styles
import styles from "@/styles/Home.module.css";

const Home = ({data}: any) => {
  const router = useRouter();
  const [title, setTitle] = useState(data.title);

  const refreshData = () => router.replace(router.asPath);

  const changeName = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/title", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title})
    });
    const data = await res.json();
    console.log(data);
    refreshData();
  }

  return (
    <>
      <Head>
        <title>ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ</title>
        <meta name="description" content="ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ
        <hr className={styles.hr} />
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <form className={styles.form} onSubmit={(e)=>changeName(e)}>
          <input className={styles.title} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="submit" hidden />
        </form>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/title");
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default Home;