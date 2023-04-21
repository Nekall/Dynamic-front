import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head"

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Video from "@/components/Video";
import DropNames from "@/components/DropNames";
import Reviews from "@/components/Reviews";
import Prefooter from "@/components/Prefooter";

// Styles
import styles from "@/styles/Home.module.scss";

const Home = ({ dataHero }: any) => {
  const router = useRouter();
  //const [title, setTitle] = useState(data.title);

  const refreshData = () => router.replace(router.asPath);
/*
  const changeName = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/title`, {
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
*/
  return (
    <>
      <Head>
        <title>ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ</title>
        <meta name="description" content="ᴅʏɴᴀᴍɪᴄ ғʀᴏɴᴛ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero title={dataHero.title} subtitle={dataHero.subtitle} description={dataHero.description} cta1={dataHero.cta1} cta2={dataHero.cta2} />
        <Cards />
        <Video />
        <DropNames />
        <Reviews />
        <Prefooter />
        {/*<form className={styles.form} onSubmit={(e)=>changeName(e)}>
          <input className={styles.title} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="submit" hidden />
        </form>*/}
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/title`);
  //const data = await res.json();

  const resHero = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero`);
  const dataHero = await resHero.json();

  return {
    props: {
      dataHero
    }
  }
}

export default Home;