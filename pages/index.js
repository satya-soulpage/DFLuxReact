import Head from 'next/head';
import Layout from 'layouts/layout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div className="home-img">
            <img src="/static/images/home-page.png"></img>
          </div>
        </Layout>
      </main>

      <style jsx>{`
      .home-img{
        margin-left: 31%;
        margin-top: 10%;
       }
      `}</style>
    </div>
  )
}
