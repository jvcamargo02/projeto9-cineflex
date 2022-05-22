import { useState } from "react"
import styled from "styled-components"

export default function Seat({seat, available, color, index, selectSeat, setSelectSeat}){  
    const [isAvailable, setIsAvailable] = useState(color)

    function select(){
        if (isAvailable==="--select-seat-color"){
            setIsAvailable("--back-header-color")
        } else if(available===true){
            setIsAvailable("--select-seat-color")
            const select = [...selectSeat, {index, seat}]
            setSelectSeat(select)
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