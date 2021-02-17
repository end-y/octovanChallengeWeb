import Layout from '../components/layout'
import { MainContainer } from '../styles/styles'
let Home = () => {
  return (
    // Uygulama ekranında karşınıza çıkan hoşgeldiniz ekranı
    <Layout>
        <MainContainer>
          <div style={{marginLeft: "8vw",marginRight:"8vw", marginTop:"10vw"}}>
          <h1 style={{fontSize:50}} >About</h1>
          <hr/>
          <br />
          <p style={{fontSize:20}}>This web app is coded for a challenge. The main aim is to list passengers that fetched from instantwebtools.net and update some their informations</p>
          </div>
        </MainContainer>
    </Layout>
  )
}

export default Home