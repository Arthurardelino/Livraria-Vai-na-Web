import iconeLivro from '../../assets/iconeLivro.png'
import s from './QueroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.Querodoarsection}>
            <p>por favor, preencha o formulario com suas identidades</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder="Titulo"/>
                <input type="text" name="" id="" placeholder="Categoria"/>
                <input type="text" name="" id="" placeholder="Autor"/>
                <input type="text" name="" id="" placeholder="Link da Imagem" />
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}