import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Seat from './Seat'
import Input from './Input'
import SucessScreen from './SucessScreen'

export default function MovieSession() {

    const { showtimeid } = useParams()
    const [seats, setSeats] = useState([])
    const [selectSeat, setSelectSeat] = useState([])
    let purchases = []
    let seatArr = []

    console.log(selectSeat.length >= 1)

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeid}/seats`)
        promisse.then(response => { setSeats(response.data.seats) })

    }, {})

    function submitSuccessScreen(e) {
        e.preventDefault();
        selectSeat.map((seat, i) => seatArr.push(seat.index))
        const apiObject = {
            ids: seatArr,
            compradores: purchases
        }

        const promisse = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', apiObject)
        promisse.then(
            <SucessScreen />
        )
    }

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
                    <Button color={"--select-seat-color"} />
                    <p>Selecionado</p>
                </SubtitleItem>
                <SubtitleItem>
                    <Button color={"--back-header-color"} />
                    <p>Disponível</p>
                </SubtitleItem>
                <SubtitleItem>
                    <Button color={"--unavailable-seat-color"} />
                    <p>Indisponível</p>
                </SubtitleItem>
            </Subtitle>
            <form onSubmit={submitSuccessScreen}>
                {selectSeat.map((seatId, index) =>
                    <Input
                        key={index}
                        seatNum={seatId.seat}
                        seatId={seatId.index}
                        index={index}
                        purchases={purchases}
                    />)}
                {selectSeat.length >= 1 ? <button type='submit'>Reservar assento(s)</button> : null}
            </form>
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
    }

    form{
        display: flex;
        flex-direction: column;

        button{
    width: 225px;
    height: 43px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    margin-left: auto; margin-right: auto;
    margin-top: 40px;
    font-size: 18px;
    cursor: pointer;
    }}

`

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
 border: 1px solid var(${props => props.color});
 line-height: 26px;
 text-align: center;
`

