import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

export default function MovieDays() {

    const { movieid } = useParams();
    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieid}/showtimes`)
        promisse.then(response => { setMovie(response.data); setDays(response.data.days) })
    }, [])

    return (
        <Container>
            <h5>Selecione o horário</h5>
            <ul>
                {days.map((day) =>
                    <li key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        <Buttons>
                        {(day.showtimes).map((showtime) =>  
                            <Link key={showtime.id} to={`/session/${showtime.id}`}>
                            <button >
                                {showtime.name}
                            </button>
                            </Link>
                            )}
                        </Buttons>
                    </li>)}
            </ul>
        </Container>
    )
}

const Container = styled.div`
ul {
    display: flex;
    padding-left: 25px;  padding-right: 25px;
    flex-direction: column;
    gap: 25px;
}

li{
    display: flex;
    flex-direction: column;
    font-size: 20px;
}
`

const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;

button{
    width: 82px;
    height: 43px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

button:hover{
    background-color: rgb(0, 153, 255);
}
`
