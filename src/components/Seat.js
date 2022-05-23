import { useState } from "react"
import styled from "styled-components"

export default function Seat({seat, available, color, index, selectSeat, setSelectSeat, setPurchases, purchases}){  
    const [isAvailable, setIsAvailable] = useState(color)

    console.log(purchases)

    function filterSelectSeat (value){
        if(value.index !== index)
        return value
    }

    function filterPurchases (value){
        if(value.idAssento !== index)
        return value
    }

    function select(){
        if (isAvailable==="--select-seat-color"){
            setIsAvailable("--back-header-color")
            let setNewArr = selectSeat.filter(filterSelectSeat)
            let setNewPur = purchases.filter(filterPurchases)
            setSelectSeat(setNewArr)
            setPurchases(setNewPur)
        } else if(available===true){
            setIsAvailable("--select-seat-color")
            const select = [...selectSeat, {index, seat}]
            setSelectSeat(select)
            setPurchases([...purchases, {idAssento: index, nome:'', cpf:''}])
        }}

        return(
            <Button onClick={select} color={isAvailable}>
            {seat}
            </Button>
        )}

   
const Button = styled.div`
 width: 26px;
 height: 26px;
 border-radius: 12px;
 background-color: var(${props => props.color});
 border: 1px solid var(${props => props.color});
 line-height: 26px;
 text-align: center;
 cursor: pointer;
`