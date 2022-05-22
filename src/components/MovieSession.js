import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Seat from './Seat'

export default function MovieSession() {

    const { showtimeid } = useParams()
    const [seats, setSeats] = useState([])
    const [selectSeat, setSelectSeat] = useState([])


    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeid}/seats`)
        promisse.then(response => { setSeats(response.data.seats) })

    }, [])
    console.log(seats)
    console.log(selectSeat)

    return (
        <Container>
            <h5>Selecione o(s) assento(s) </h5>
            <ul>
                {seats.map((seat) => seat.isAvailable === false ?
                    <Seat 
                        key={seat.id} 
                        index={seat.id} 
                        seat={seat.name} 
                        available={seat.isAvailable} 
                        color={"--unavailable-seat-color"} 
                        /> :
                    <Seat 
                        key={seat.id} 
                        index={seat.id} 
                        seat={seat.name} 
                        available={seat.isAvailable}
                        selectSeat={selectSeat}
                        setSelectSeat={setSelectSeat} 
                        color={"--back-header-color"} 
                        />)}
            </ul>
            <Subtitle>
                <SubtitleItem>
                    <Button color={"--select-seat-color"}/>
                    <p>Selecionado</p>
                </SubtitleItem>
                <SubtitleItem>
                    <Button/>
                    <p>Disponível</p>
                </SubtitleItem>
                <SubtitleItem>
                    <Button color={"--unavailable-seat-color"}/>
                    <p>Indisponível</p>
                </SubtitleItem>
            </Subtitle>
            {selectSeat.map((seatId) => <input></input>)}
        </Container>
    )
}


const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;

    ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;
}`

const Subtitle = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 25px;
 gap: 30px;
`

const SubtitleItem = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`
const Button = styled.div`
 width: 26px;
 height: 26px;
 border-radius: 12px;
 background-color: var(${props => props.color});
 border: 1px solid ${props => props.color !== undefined ? `var(${props.color})` : "var(--back-header-color)"};
 line-height: 26px;
 text-align: center;
`
  
