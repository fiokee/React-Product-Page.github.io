import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  padding: 30px;
   display : block;
   align-items: center;
   justify-content: space-around;
   padding: 0 24px;
   margin: 60px;
   
`
const ImgCon = styled.img`
width: 35%;
border-radius: 5%;
margin-top: 60px;
`
const Content = styled.section`
display: inline-block;
align-items: center;
margin: 5rem;
width: 40%;

`
const Sneaker = styled.p`
color: #ff7d19;
font-size: 0.8125rem;
font-weight: bold;
letter-spacing: .09375rem;
padding: 0.625rem 0;
text-transform: uppercase;
`
const Item = styled.h1`
color: #000;
text-transform: capitalize;
font-size: 40px;
`
const Text = styled.p`
font-size: 1.0625rem;
line-height: 1.75rem;
color: #68707d;
`
const Wrapper = styled.div`
display: flex;

`
const Price = styled.h1`
font-size: 25px;
font-weight: bolder;
`
const OldPrice = styled.div`
text-decoration: line-through;
font-size: 18px;
font-family: 'Kumbh Sans', sans-serif;
color: #b6bcc8;
align-self: center;
`
const Percent = styled.span`
color: #ff7d19;
background: #ffede0;
margin: 0.3rem 0.9rem;
padding: 0.3rem 0.5rem;
font-weight: bolder;
align-self: center;
`
const BtnWraper = styled.div`
display:flex;
`
const BtnCounter = styled.div`
background: #b6bcc8;
    border: none;
    color: #1d2025;
    font-size: 1.125rem;
    height: 100%;
    text-align: center;
    width: 15%;
    margin: auto;
    border-radius: 7%;
`
const BtnMinus = styled.span`
align-items: center;
    color: #ff7d19;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    margin: 30px;
    justify-content: center;
    
    
`
const BtnNumber = styled.span`
align-items: center;
    color: #ff7d19;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    justify-content: center;
`
const BtnPlus =styled.span`
align-items: center;
    color: #ff7d19;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    margin: 30px;
    
`
const BtnCart = styled.button`
color:white ;
cursor: pointer;
display: inline-flex;
border: none;
background-color: #ff7d19;
width: 15%;
text-align: center;
font-size: 1.5rem;
margin: 30px;
padding: 40px;
border-radius: 5%;
`

const Home = ()=>{
    return(
        <>      
        <Header/>
        <Container>
            <ImgCon src="../images/image-product-1.jpg"/>
            <Content>

                <Sneaker>Sneaker Company</Sneaker>
               <Item>Fall limited edition Sneakers</Item> 
               <Text>These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll 
                withstand everything weather can offer.
               </Text>
               <Wrapper>

               <Price>$125.00</Price>
               <Percent>50%</Percent>
               </Wrapper>
               <OldPrice>$250.00</OldPrice>
            </Content>
            <BtnWraper>
                <BtnCounter>
                    <BtnMinus>-</BtnMinus>
                    <BtnNumber>0</BtnNumber>
                    <BtnPlus>+</BtnPlus>
                </BtnCounter>
                <BtnCart>Add to cart</BtnCart>
            </BtnWraper>
            
        </Container>
        </>
    )

}

export default Home