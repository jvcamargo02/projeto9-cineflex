import { useState } from "react"
import styled from "styled-components"

export default function Input ({index, seatId, purchases, seatNum}){

    purchases.push({idAssento: seatId, nome:'', cpf:''})
 
    function setName (e){
        purchases[index].nome = e 
    }

    function setCpf (e) {
        purchases[index].cpf = e
    }



    return(
        <Container> 
            <h6>Assento {seatNum}</h6> 
            <label for="name">Nome do comprador:</label>
            <input id="name" onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..." required/>
            <label for="cpf">CPF do comprador:</label>
            <input id="cpf" onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..." required/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin-top: 40px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    gap: 7px;
    margin-left: auto; margin-right: auto;

    h6{
        text-align: center;
        font-weight: 700;
        margin-bottom: 10px;
    }

    input{
        width: 300px;
        height: 51px;
        border: 1px solid var(--back-header-color);
        box-sizing: border-box;
        padding: 10px;
    }
`