import styled, {createGlobalStyle ,keyframes,css} from 'styled-components';
// renkleri kolay değiştirebilmek adına en başta değişken olarak tanımladım.
const color1 = "#ed6723"
const color2 = "#f7f7f7"
const color3 = "#fff"

// Global stylelar
const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: "Source Sans Pro", sans-serif
    }
    body{
        background: ${color3}
    }
`;
// title komponenti
export const Title1 = styled.h3`
    color: ${color1};
`;
// ana container....
export const MainContainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`
// çeşitli animasyonlar...
export const leftToRight = keyframes`
    0%{
        opacity:0;
        transform:translateY(-50px)
    }
    100%{
        transform:translateY(0px);
        opacity:1;
    }
`
export const scaleUp = keyframes`
    0%{
        transform:scale(0)
    }
    80%{
        transform:scale(1.1)
    }
    100%{
        transform:scale(1)
    }
`
// Navigation bölümü...
export const Nav = styled.nav`
    background: ${color1};
    height: 80px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:1.2rem;
    position:sticky:
    top:0;
    z-index:999;
    color:#fff;
`;
export const Container = styled.div`
    z-index:1;
    width: 100%;
    max-width:1300px;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width:991px){
        padding-right: 30px;
        padding-left: 30px
    }
`;
export const NavContainer = styled(Container)`
    display:flex;
    height: 80px;
    ${Container}
`
// Hamburger Menunun açılmasını kapanmasını kontrol eden class
export const OpenClose = styled.div`
    display: none;
    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1rem;
        cursor:pointer;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    @media screen and (max-width:960px){
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 80vh;
        position:absolute;
        top:80px;
        left: ${({click}) => (click ? 0 : "-100%")};
        opacity:1;
        transition: all 0.5s ease;
        background: ${color1};
    }
`
export const NavItem = styled.li`
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow:hidden;
    transition: .3s;
    &:after {
        position: absolute;
        transition: .3s;
        content: '';
        width: 0;
        left: 50%;
        bottom: 0;
        height: 3px;
        background: ${color2};
      }
      &:hover {
        cursor: pointer;
        &:after {
          width: 100%;
          left: 0;
        }
    @media screen and (max-width: 960px){
        width: 100%;
        &:hover{
            border: none;
        }
    }
`

export const NavLink = styled.a`
    color: #fff;
    display: flex;
    height: 100%;
    align-items:center;
    padding: 0.5rem 1rem;
    cursor:pointer;
    @media screen and (max-width: 960px){
        text-align: center;
        width: 100%;
        display: table;
        padding: 2rem;
        &:hover{
            color:#4b59f7;
            transition: all 0.3s ease;
            cursor:pointer;
        }
    }
`
// buton disabled olduğunda ve olmadığında şeklinde ikili sistem olarak oluşturdum.
export const Button = styled.button`
    
    ${({disabled}) => (!disabled ? 
        `border: 2px solid ${color1}; 
        cursor:pointer;
        transition: all .3s ease;
        &:hover{
            background: ${color1};
            color: ${color3}
        }` 
        : 
        `border: 2px solid ${color2};
        cursor:cursor;`)};
    padding:10px;
    border-radius: 5px;
`
// yolcu kartı classları
export const PassengerCard = styled.div`
    margin-top:8px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
`
export const PassengerUl = styled.ul`
li {
    opacity:0;
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border: 2px solid ${color1};
    border-radius: 12px;
    animation: ${leftToRight} 2s ease forwards;
  }
  
  .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: ${color2};
    transition: all .3s ease
    
  }
  .table-row:hover{
    box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.1);
  }
  
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
      align-content:center
    }
    li {
      display: block;
    }
    .col {
      
      flex-basis: 100%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`
// Modal classları...
export const Modal = styled.div`
    display:${({modal}) => (modal ? "block" : "none")};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`
export const ModalItem = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    border-radius: 5px;
    animation: ${scaleUp} 0.5s backwards ease
`
export const Form= styled.form`
    border: 2px solid ${color1};
    border-radius: 5px
    padding:40px;
    display:flex;
    height:150px;
    justify-content: center;
    align-items: center;
`
export const Icon = styled.div`
    display: flex;
    align-items: center;`

// search bar class'ı
export const SearchBar = styled.div`
    width: 100%;
    display:flex;
    margin-top: 20px;
    margin-bottom:30px;
`
export const InputText = styled.input`
    margin: auto auto;
    justify-content:center;
    width: 95%;
    height: 48px;
    padding:8px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`
export default GlobalStyle