import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';


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
   justify-content: space-around; 
`
const Logo = styled.div`
    font-size: 30px;
    font-weight: 500;
    color:#000;
    font-size: 30px;
    `
    const NavItem = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    width: 40%;
    font-size: 17px;
    justify-content: space-around;
    `
    const NavList = styled.li`
    margin: 0 20px;
    font-size: 20px;
    font-weight: 400;
    &:hover{
     padding-bottom:20px ;
     border-bottom: 5px solid hsl(26, 100%, 55%);
   }
    `
    const CartContainerIcon =styled.div`
    display: flex;
    position:relative;
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
    const Header = ()=>{
    return <Container>
        <Logo>Sneakers</Logo>
        <Nav>

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
                <ShoppingCartIcon  style={{fontSize: '30px'}}/>
                <Cart>3</Cart>
            <AvtarImg>
                <Avatar src="../images/image-avatar.png"/>
            </AvtarImg>
            </CartContainerIcon>
    </Container>
}

export default Header