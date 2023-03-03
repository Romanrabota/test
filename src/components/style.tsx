import React from 'react';
import  styled from "styled-components"



export const Cardcontainer = styled.div`
display : flex;
width: 100%;
flex-flow:row wrap;

@media(max-width:414px){
    display : flex;
     width: 50%;
     
 }

`



export const Cardwrapper = styled.div`
width: 420px;
height:400px; 
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin:10px;
h2 {
    text-align: center;
} 

@media(max-width:414px){
   width:395px;
   margin:10px;
   justify-content:center;
}



`

export const Name = styled.div`

display: flex;
flex-direction: column;

`

export const Userimg = styled.img`
    width:150px;
    height:150px;
    border-radius: 50%; 
`

export const Input = styled.input`
display: flex;
justify-content:center;
` 



export const Inputdiv = styled.div`
display: flex;
justify-content:center;
` 


export const Paginationdesign = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
` 


export const Description = styled.div`
@media(max-width:414px){
    margin-left:30px;
    justify-content:center;
 }

` 