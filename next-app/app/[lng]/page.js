'use client';

import styles from '../page.module.css'
import { useEffect, useState } from 'react'
import English from '/languages/english.json'
import Thai from '/languages/thai.json'
import Chinese from '/languages/chinese.json'
import Japanese from '/languages/japanese.json'

export default function Home({ params }) {
  const [language, setLanguage] = useState({});

  useEffect(() => {
    if (params.lng)
      switch (params.lng) {
        case "en":
          setLanguage(English)
          break;
        case "th":
          setLanguage(Thai)
          break;
        case "cn":
          setLanguage(Chinese)
          break;
        case "jp":
          setLanguage(Japanese)
          break;
        default:
          setLanguage(English)
      }
  }, [params.lng])

  return (
    <>{params.lng &&
      <main className={styles.main}>
        <h1>{language.heading}</h1>
        <p>{language.content}</p>
        <div>{language.language}: <b>{params.lng}</b></div>
      </main>
    }
    </>
  )
}
