export const MediaCard = ({title, body, imageUrl}) =>{
      return(
          <>
          <h2>{title}</h2>
          <p>{body}</p>
          <img src={imageUrl}></img>
          </>
      )
}