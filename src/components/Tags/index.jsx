import style from './Tags.module.css'
import tags from '../../jsons/tags.json'
import TagCard from './TagCard'

function Tags() {

    return (
        <div className={style.tags__container}>
            <h1>Busque por categoria:</h1>
            <div className={style.tags}>
                {tags.map(tag => {
                    return (
                        <TagCard name={tag.name} imagem={tag.imagem} key={tag.name} />
                    )
                })}
            </div>
        </div>

    )
}

export default Tags