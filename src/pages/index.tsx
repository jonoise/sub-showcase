import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <a href='http://docs.localhost:3000' rel='noopener noreferrer'>
        ir a los docs!
      </a>
    </div>
  )
}

export default Home
