import Head from 'next/head';
import Rodape from '../components/Rodape';
import Topo from '../components/Topo';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Filmeweb</title>
      </Head>

      <Topo />

      <div className={styles.home}>
        <h1> O seu portal exclusivo acessível sobre personagens do filme</h1>
        <h2>CLIQUE ABAIXO PARA VIZUALIZAR A DESCRIÇÃO Dos PERSONAGENS</h2>
        <a href="\objetos"> Acesse aqui para conhecer os personagens </a>
        <div>
        <Image src="/img/filmeweb/public/img/Camp rock.jpg" alt="Um Filme onde Uma adolescente quer desesperadamente passar o verão em um acampamento de rock, mas a única maneira pela qual pode entrar é trabalhando na cozinha. Quando um astro pop adolescente ouve seu canto, ele sai para encontrar qual garota é dona da voz.EDNA é uma renomada estilista, no filme OS Incríveis produzido pela Pixar Animation Studios, de moda especializada em trajes para superheróis. Edna é conhecida por sua personalidade excêntrica, seu estilo único e sua atitude assertiva. Apesar de sua estatura pequena, ela é uma figura imponente e respeitada no mundo dos super-heróis. Além de seu talento incomparável na criação de trajes, Edna também é famosa por sua aversão aos capas e sua filosofia de design prático e eficiente. " width={500} height={300} />
        </div>
      </div>

      <Rodape />
    </div>
  )
}
