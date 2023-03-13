import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    location.href = "/en";
  }, []);

  return (
    <>
      <Head>
        <title>Simple Next Languague Switch Example</title>
        <meta name="description" content="Simple Next Languague Switch Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        loading...
      </main>
    </>
  )
}
