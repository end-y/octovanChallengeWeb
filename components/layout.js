import Link from 'next/Link'
import Navigation from '../components/navigation'
import Head from 'next/head'
import nProgress from 'nprogress';
import Router from 'next/router'

const Layout = ({children}) => {
  //nprogress eventlerini kontrol eden kodlar...
  Router.events.on("routeChangeStart", () => {
    nProgress.start()
  })
  Router.events.on("routeChangeComplete", () => {
    nProgress.done()
  })
  Router.events.on('routeChangeError', () => {
    console.log("hata var")
  })
    return(
      // Temel layout'un döndüğü bölüm...
    <>
      <Head>
        <title>Passenger App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        <meta charset="UTF-8" />
        <meta name="description" content="This web app is coded for a challenge. The main is to list passengers that fetched from instantwebtools.net and update some informations" />
        <meta name="keywords" content="Passengers, Airlines, Fake Api, Octovan" />
        <meta name="author" content="Ender Yazıcı" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      {/* Navigation ileride kolay güncellenecek şekilde tasarlandı, Sadece sayfa oluşturmanız ve diziye eklemeniz yeterli. */}
      <Navigation navigation={["/", "/Passengers"]} />
      <main>
          {children}
      </main>
    </>
    )
}

export default Layout