import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import English from '/languages/english.json'
import Thai from '/languages/thai.json'
import Chinese from '/languages/chinese.json'
import Japanese from '/languages/japanese.json'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { lng } = router.query

  const [language, setLanguage] = useState({});

  useEffect(() => {
    if (lng)
      switch (lng) {
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
  }, [lng])

  return (
    <>{lng &&
      <main className={styles.main}>
        <h1>{language.heading}</h1>
        <p>{language.content}</p>
        <div>{language.language}: <b>{lng}</b></div>
      </main>
    }
    </>
  )
}
