import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home = ({data}: any) => {
  console.log(data);
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
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

export default Home;