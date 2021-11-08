import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import {Footer} from "../components/Footer";
import {Main} from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
