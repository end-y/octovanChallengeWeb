import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import axios from "axios"
import Card from '../components/card';
import Pagination from '../components/pagination';
import { InputText, SearchBar } from '../styles/styles';
const Passengers = ({data,page,size}) => {
    // yolcuların listelendiği komponent...
    // Aslında döküman search isteği yoktu. Ama ben rahat olacağını düşünürek bir de küçük search sistemi yapmak istedim.
    const [search, setSearch] = useState("")
    return (
        <Layout>
            <SearchBar>
                <InputText placeholder="Search passengers" value={search} onChange={(e) => setSearch(e.target.value)} />
            </SearchBar>
            {/* search çalıştığında çalışacak filtreleme metodu... */}
            {data.data.filter(e => !e.name.toLowerCase().indexOf(search.toLowerCase())).map((e,i) => {
                return(
                // Card komponentinden bool'larda ternany condition'ın bulunma sebebi havayolu firmalarının bazırların fetch olmamasıdır. 
                <Card 
                key={e["_id"]} 
                n={i+1}
                page={page}
                size={size} 
                name={e["name"]} 
                bool1={!e.airline["name"] ? e.airline[0]["name"] : e.airline["name"]} 
                bool2={!e.airline["slogan"] ? e.airline[0]["slogan"] : e.airline["slogan"]} 
                bool3={!e.airline["logo"] ? e.airline[0]["logo"] : e.airline["logo"]}  
                href={{pathname:"passenger_details/[id]",query:{page:page,size:size}} } 
                as={`/passenger_details/${e["_id"]}`}
                />
                )
            })}
            <Pagination data={data} size={size} page={page} />
        </Layout>
    )
    
}
// serverside propslarını tutan next js işlemi...
export async function getServerSideProps({query:{page=0,size=10}}) {
    let res = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)
    let data = await res.data
    return {
      props:{
        data:data,
        page: +page,
        size: +size
    }
  }
}

export default Passengers