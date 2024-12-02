import s from './Inicio.module.scss'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeirasessaoinicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                <img src={imagem} alt="" />
            </section>
            <section className={s.porquedoarsection}>
                <h2>Por que devo doar</h2>
                <div className={s.containerCards}>
                    <section>
                        <img src={imagem1} alt="imagem de um circulo de pessoas interligadas por uma linha" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={imagem2} alt="imagem de uma pessoa segurando um livro preto" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={imagem3} alt="imagem de uma mão idealizando ideias" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={imagem4} alt="imagem de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}