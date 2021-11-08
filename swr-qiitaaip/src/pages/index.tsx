import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import {Footer} from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      </main>
      <Footer/>
    </div>
  )
}

export default Home
