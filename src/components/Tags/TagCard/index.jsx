import style from './TagCard.module.css'

function TagCard({ name, imagem }) {
  return (
    <div className={style.tagcard}>
      <img src={imagem} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default TagCard