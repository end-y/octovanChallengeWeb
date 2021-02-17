import NextLink from 'next/link';
import { useState } from "react"
import {faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Nav, NavContainer, OpenClose, NavMenu, NavItem, NavLink } from "../styles/styles"
const Navigation = ({navigation}) => {
    // dizi elemanını link şekline çeviren fonksiyon.
    const linkName = (n) => n.length <= 1 ? n.map(e => e.toLowerCase()) : n.map(e =>e.toLowerCase().split(" ").join("_"))
    var links = linkName(navigation)
    // Hamburger menu için hazırlanan state hookları...
    var [click,setClick] = useState(false)
    const iconClick = () => setClick(!click)
    return(
    <Nav>
        <NavContainer>
        <OpenClose onClick={() => iconClick()}>
            {click ? <FontAwesomeIcon icon={faTimes} style={{width:25}} /> : <FontAwesomeIcon icon={faBars} style={{width:25}} /> }
        </OpenClose>
        <NavMenu onClick={() => iconClick()} click={click}>
        {/* dizideki elemanlar teker teker yazmak yerine map fonksiyonu ile döndürüldü. */}
        {navigation.map((e,i) => {
            return(
            <NavItem key={i}>
                <NextLink href={links[i]}>
                    {/* Homepage ternany operator kontrol edildi. */}
                    <NavLink key={i}>{e == "/" ? "Homepage" : e.substring(1,e.length)}</NavLink>
                </NextLink>
            </NavItem>
            )
        })}
        </NavMenu>
        </NavContainer>
    </Nav>
    )
}
export default Navigation
