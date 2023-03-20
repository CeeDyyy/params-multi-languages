'use client';

import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push('/en')

  return (
    <main className={styles.main}>
      loading...
    </main>
  )
}
