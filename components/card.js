import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLink from 'next/link';
import {Title1,PassengerCard, PassengerUl, Button, Icon} from "../styles/styles"
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Card = ({n,name, bool1, bool2, bool3,href,as, page, size }) => {
    return(
        // Sitedeki yolcuların kartların herbirini temsil eder.
        <PassengerCard>
            <PassengerUl>
                {/* Animation delay'lerin sıralı bir şekilde gelmesi hedeflendi */}
                <li style={{animationDelay: (n*0.2)+"s"}} className="table-row">
                    <div>
                        <Title1 >Passeger {n}: {name}</Title1>
                        <NextLink  href={href} as={as}>
                            <Button style={{marginTop:15}}>
                                <Icon>Details <FontAwesomeIcon style={{marginLeft:15,width:20}} icon={faAngleRight} /></Icon>
                            </Button>
                        </NextLink>
                    </div>
                    {/* Airline bilgilerinin yer aldığı bölüm */}
                    <div style={{textAlign:"center"}}>
                        <span>
                            <div>
                                <img style={{width:"15vw", marginBottom:8}} src={bool3} />
                            </div>
                        </span>
                        <span><div>{bool1}</div></span>
                        <span style={{fontSize:9}}><div><em>{bool2}</em></div></span>
                    </div>
                </li>
            </PassengerUl>  
        </PassengerCard>
    )
}
export default Card
