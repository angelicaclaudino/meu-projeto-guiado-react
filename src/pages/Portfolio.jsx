import Header from "../components/Header"

import portfolio from '../assets/portfolio.jpg'
import styles from '../styles/pages/portfolio.module.css'
import { useEffect, useState } from "react"
import Axios from 'axios'


const Portfolio = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
  const getRepo = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/angelicaclaudino/repos`)
      setRepos(response.data)
    }
    catch(erro) {
      console.error("Erro capturado: " + erro)
    }

  }

  getRepo()

},[])

  return (
    <>
      <Header 
        title="Meus Projetos" 
        image={portfolio} 
      />
      <h1>Meus Projetos no GitHub</h1>

      <div className={styles.repoContainer}> 
        {repos.map((repo)=>(
          <div className={styles.cardRepo} key={repo.id}>
            <h4 className={styles.cardText}>{repo.name}</h4>
            <p className={styles.cardText}>{repo.description}</p>
            <a className={styles.cardLink} href={repo.html_url} target="_blank">Conferir</a>
          </div>
        ) 

        )
        
        }

      </div>
       
      
    </>
  )
}


export default Portfolio