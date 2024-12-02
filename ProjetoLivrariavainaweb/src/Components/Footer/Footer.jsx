import s from './Footer.module.scss'
export default function Footer() {
    return (
        <Footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>4002-2556</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="imagem branca da logo do facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="imagem branca da logo do twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="imagem branca da logo do youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="imagem branca da logo do linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="imagem branca da logo do instagram" /></a>
                </nav>
            </section>
            <section className={s.copyrigth}>
                <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>
            </section>
        </Footer>
    )
}