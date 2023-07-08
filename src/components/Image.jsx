import img from '../styles/components/image.module.css'

function Image(props){
    return(
        
          <img className={props.class} src={props.image}/>
                
        
    )
}

export default Image;