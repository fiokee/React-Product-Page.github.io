import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {mobile,tablet,lapTop} from '../Responsive'

const Container = styled.header`
   box-shadow: 2px 5px #f0eaea;
   padding: 30px;
   display : flex;
   height: 6rem;
   align-items: center;
   justify-content: space-around;
   padding: 0 24px;
   position: relative;
   top:0;
    `
const Nav = styled.nav`
   ${tablet({
    position:"absolute",
    width:"80%",
    height:"80vh",
    backgroundColor:"#fff",
    top: "6rem",
    transition:"all .4s ease-in-out",
    zIndex:"1000"
   })}
`
const Logo = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color:#000;
    ${tablet({
        fontSize:'40px',
        fontWeight: 'bolder',
        color:'#000',
        width: '100vh',
        margin: '20px'
        
    })}
    ${lapTop({
        fontSize: '16px',
    })}
    `
    const NavItem = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    width: 40%;
    font-size: 17px;
    justify-content: space-between;
    ${tablet({
        marginTop:"30px",
        flexDirection:"column",
       textAlign:'justify'
    })}
    `
    const NavList = styled.li`
    margin: 0 20px;
    font-size: 20px;
    font-weight: 400;
    `
    const CartContainerIcon =styled.div`
    display: flex;
    position:relative;
    `
    const CartIcon = styled.img`
        color: #fff;
        outline-color: #000;
        width: 100%;
        height: auto;
    `
    const AvtarImg = styled.div`
     display: flex;
    position:relative;
    padding-left:25px;
    &:hover{
     border-radius: 25% solid hsl(26, 100%, 55%);
     cursor: pointer;
   }
    ` 
   const Cart = styled.span`
   position:relative;
   top:-12px;
   color: hsl(26, 100%, 55%);
   right: 7px;
   font-weight: 700;
   `
   const Hamburger= styled.div`
   flex-direction: column;
   border: 1px solid #ccc;
   width: 40px;
   cursor:pointer;
   display: none;
   ${tablet({display:'flex'})}
`
    const Header = ()=>{
    const [mobileNav,setMobileNav] = React.useState(false)
    return <Container>
        <Hamburger onClick={()=>(setMobileNav(!mobileNav))}>
        { mobileNav ? <> <CloseIcon style={{fontSize:'30px'}}/></>  : <><MenuIcon style={{fontSize:'40px'}}/></>}
        </Hamburger>
        <Logo>Sneakers</Logo>
        <Nav style={{left:mobileNav ? '0' :"100%"}}>

        <NavItem>
            <NavList>
            <Link to="/" style={{textDecoration:'none',color:'inherit'}}>Collections</Link>
            </NavList>
            <NavList>
            <Link to="/men" style={{textDecoration:'none',color:'inherit'}}>Men</Link>
            </NavList>
            <NavList>
            <Link to="/women" style={{textDecoration:'none',color:'inherit'}}>Women</Link>
            </NavList>
            <NavList>
            <Link to="/about" style={{textDecoration:'none',color:'inherit'}}>About</Link>
            </NavList>
            <NavList>
            <Link to="/contact" style={{textDecoration:'none',color:'inherit'}}>Contact</Link>
            </NavList>
            </NavItem>
        </Nav>
            <CartContainerIcon>
                <CartIcon src="./images/icon-cart.svg" ></CartIcon>
                {/* <ShoppingCartIcon  style={{fontSize: '30px'}}/> */}
                <Cart>3</Cart>
            <AvtarImg>
                <Avatar src="../images/image-avatar.png"/>
            </AvtarImg>
            </CartContainerIcon>
    </Container>
}

export default Header