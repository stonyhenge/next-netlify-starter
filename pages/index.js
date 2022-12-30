import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Le site de Maxime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Le site de Maxime" />
        <div>
           <h1> 2020 </h1>
           <ul>
              <li> <a href="https://photos.app.goo.gl/uKRmYo1679h2DHPq9"> 2020-07-11 - Fête de Suzanne et Marie-Andrée </a></li>
              <li> <a href="https://photos.app.goo.gl/JCAvZMeqnQApiUzS7"> 2020-06-13 - Fête de Charles-Olivier </a></li>
    
    
           </ul>
        </div>
    
      </main>


    </div>
  )
}
