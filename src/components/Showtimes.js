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

    console.log(movie)

    return (
        <Container>
            <h5>Selecione o horário</h5>
            <ul>
                {days.map((day) =>
                    <li key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        <Buttons>
                        {(day.showtimes).map((showtime) =>  
                            <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                            <button >
                                {showtime.name}
                            </button>
                            </Link>
                            )}
                        </Buttons>
                    </li>)}
            </ul>
            <Footer>
                <img src={movie.posterURL} alt={movie.title} />
                <span>{movie.title}</span>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 100px;

ul {
    display: flex;
    padding-left: 25px;  padding-right: 25px;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 130px;
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
const Footer = styled.div`
    position: fixed;
    bottom: 0; left: 0;
    height: 115px;
    width: 100%;
    background-color: var(--back-header-color);
    font-size: 26px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 20px;
    font-family: roboto;

    img {
        width: 48px;
        height: 72px;
        padding: 8px;
        background-color: white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`