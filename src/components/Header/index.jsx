import style from './Header.module.css'


function Header() {
    return (
        <div className={style.header__container}>
            <div className={style.logo_div}>
                <img src="./desktop_logo.png" alt="" />

                <ul className={style.list_item}>
                    <li>
                        Home
                    </li>
                    <li>
                        Nossas Lojas
                    </li>
                    <li>
                        Novidades
                    </li>
                    <li>
                        Promoções
                    </li>
                </ul>
            </div>

            <div>
                <input className={style.searchbar} type="text" placeholder="Digite o produto" />
                <button className={style.searchbutton}>Buscar</button>
            </div>
        </div>
    )
}

export default Header