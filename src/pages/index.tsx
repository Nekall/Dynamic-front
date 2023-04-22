import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

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

const Home = ({
  dataHero,
  dataVideo,
  dataDropnames,
  dataReviews,
  dataPrefooter,
  dataFooter,
}: any) => {
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
        <Hero
          title={dataHero.title}
          subtitle={dataHero.subtitle}
          description={dataHero.description}
          cta1={dataHero.cta1}
          cta2={dataHero.cta2}
        />
        <Cards />
        <Video title={dataVideo.title} subtitle={dataVideo.subtitle} />
        <DropNames title={dataDropnames.title} names={dataDropnames.names} />
        <Reviews title={dataReviews.title} reviews={dataReviews.reviews} />
        <Prefooter
          title={dataPrefooter.title}
          description={dataPrefooter.description}
          cta1={dataPrefooter.cta1}
          cta2={dataPrefooter.cta2}
        />
        {/*<form className={styles.form} onSubmit={(e)=>changeName(e)}>
          <input className={styles.title} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="submit" hidden />
        </form>*/}
        <Footer links={dataFooter.links} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/title`);
  //const data = await res.json();

  // Hero
  const resHero = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero`);
  const dataHero = await resHero.json();

  // Video
  const resVideo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video`);
  const dataVideo = await resVideo.json();

  // DropNames
  const resDropnames = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dropnames`
  );
  const dataDropnames = await resDropnames.json();

  // Reviews
  const resReviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
  const dataReviews = await resReviews.json();

  // PreFooter
  const resPrefooter = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prefooter`
  );
  const dataPrefooter = await resPrefooter.json();

  // Footer
  const resFooter = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
  const dataFooter = await resFooter.json();

  return {
    props: {
      dataHero,
      dataVideo,
      dataDropnames,
      dataReviews,
      dataPrefooter,
      dataFooter,
    },
  };
}

export default Home;
