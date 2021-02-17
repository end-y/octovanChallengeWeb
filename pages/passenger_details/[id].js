import Layout from '../../components/layout'
import axios from "axios"
import { useState } from 'react'
import {PassengerCard, PassengerUl, Button, Modal, ModalItem,Form, Icon} from "../../styles/styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
const PassengerDetails = ({passanger}) => {
    // Modal, isim ve hata modalını oluşturan hook'lar...
    const [name, setName] = useState(passanger["name"])
    const [modal, setModal] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    // Kullanıcıyı güncelleyen fonksiyon... Then ile modal veya error modalını açmaya programlandı...
    const registerUser = async (event) => {
      event.preventDefault()
      await axios.patch(`https://api.instantwebtools.net/v1/passenger/${passanger["_id"]}`,{
        "name" : event.target.name.value
      }).then(function (response) {
        console.log(response.data);
        setName(event.target.name.value)
        setModal(false)
      })
      .catch(function (error) {
        console.log(error);
        setModal(false)
        setErrorModal(true)
      });
    }
    return (
      // card kompenenti...
        <Layout>
          <PassengerCard style={{marginTop:150}}>
            <PassengerUl>
              <li>
              <div>Passenger Name: <b>{name}</b></div>
              <div>Trips: <b>{passanger["trips"]}</b></div>
              </li>
              <Button onClick={() => setModal(!modal)} style={{float:'right'}}><Icon><FontAwesomeIcon style={{width:25}} icon={faEdit} /></Icon></Button>
            </PassengerUl>
          </PassengerCard>
        {/* Modal kompenenti */}
          <Modal modal={modal}>
            <ModalItem>
              <Form onSubmit={registerUser}>
                <span>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" value={name} onChange={(name) => setName(name.target.value)} autoComplete="name" required />
                </span>
                <Button style={{width:50, height:40, marginLeft:15}} type="submit"><FontAwesomeIcon style={{width:15}} icon={faCheck} /></Button>
                <Button onClick={() => setModal(false)} style={{width:50, height:40,marginLeft:15}} type="submit"><FontAwesomeIcon style={{width:12}} icon={faTimes} /></Button>
              </Form>
            </ModalItem>
            </Modal>
            {/* Hata olduğunda çıkacak modal... */}
            <Modal modal={errorModal}>
            <ModalItem>
              <Form>
                <div style={{textAlign:"center"}}><p>During update occured a problem. Please retry.</p></div>
                <Button onClick={() => setErrorModal(false)} style={{width:50, height:40,marginLeft:15}} type="submit"><FontAwesomeIcon style={{width:12}} icon={faTimes} /></Button>
              </Form>
            </ModalItem>
            </Modal>
        </Layout>
    )
}

// veri alışverişlerinde olabildiğince Next JS'in data fecth yöntemleri kullanıldı....
// olası tüm yolları iletmeye yarayan fonksiyon...
export async function getStaticPaths() {
    let res = await axios.get(`https://api.instantwebtools.net/v1/passenger`)
    let data = await res.data
    return {
      paths: data.data.map(e => {
          return { params: {id: e["_id"]}} 
      }),
      fallback: false 
    };
  }
// gelen yollardan hedefe ulaşmasını sağlayan fonksiyon...
export async function getStaticProps({params}) {
    let res = await axios.get(`https://api.instantwebtools.net/v1/passenger/${params.id}`)
    let passenger = await res.data
    return {
      props:{
        passanger:passenger
      }
    }
}
export default PassengerDetails