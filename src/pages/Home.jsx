import Header from "../components/Header"

import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'

import home from '../assets/home.svg'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Angélica" 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Aqui você encontra um pouco dos meus códigos, projetos e vai conhecer um pouco sobre a minha forma de programar. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>E poderá entrar em contato comigo, ficarei muito feliz em lhe responder, fica a vontade e me envia uma mensagem. </p>
        </div>
      </div>
      
    </>
  )
}

export default Home
