import Header from "../components/Header"

import sobre from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'
import foto from '../assets/angel.jpg'
import Bio from "../components/Bio"

const Sobre = () => {
  return (
    <>
      <Header 
        title="Saiba mais sobre mim. " 
        image={sobre} 
      />
      <div className={styles.sobreContainer}>
        <div className={styles.cardContainer}>
          <Bio img={foto}/>
        </div>
        
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>"Oieee! Sou Angélica Claudino."</h2>
          <p className={styles.cardDescription}>Estudante de FrontEnd, atualmente atuo com suporte a sistemas de informação. Sou apaixonada por informática. </p>
        </div>

      </div>
    </>
  )
}

export default Sobre
