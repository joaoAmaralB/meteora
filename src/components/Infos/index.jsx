import React from 'react'
import style from './Infos.module.css'
import infos from '../../jsons/infos.json'

function Infos() {
  return (
    <div className={style.infos__container}>
        <h1 className={style.infos__title}>Conheça todas as nossas facilidades</h1>

        <ul className={style.infos__list}>
            {
                infos.map((info) => {
                    return (
                        <li key={info.title} className={style.list_item}>
                            <img src={info.image} alt={info.title} />

                            <div className={style.text__container}>
                                <h3>{info.title}</h3>

                                <p>{info.description}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Infos