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
        <h1> 2022 </h1>
        <ul>
           <li> <a href="https://photos.google.com/share/AF1QipNFqNDPqvtJ4dZOus7Nlbt4a0To0Sj4cIAqWR69dJkb_BteHTzOHJHV29EdB2rSLg?key=WVNQM0hUYTU5QkVOY25CMlZxVExuNnZDcHRTQ0J3"> Album 1 </a></li>
           <li> <a href="https://photos.google.com/share/AF1QipOYZjgKT3OOgJTaVaqqgymcchbYiOuQOlYewwD7oUz-5yLPBWPs_ryZWQAh8CL37g?key=dHh6MEdhMUtIakVzSGpCTmVYTlhsZHM0VjkzeVRB"> Album 2 </a></li>
        </ul>
      </main>

      <!--<Footer />-->
    </div>
  )
}
