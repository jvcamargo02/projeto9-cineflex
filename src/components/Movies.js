import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'  
import styled from 'styled-components'

export default function Movies({movies, setMovies}) {
    

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promisse.then(response => { setMovies(response.data) })
    }, [])

    return (

        <Main>
            {movies.length === 20 ?
            <> 
            <h5>Selecione o filme</h5>
            <ul>
                {movies.map((movie) =>
                    <li key={movie.id}>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Link>
                    </li>)}

            </ul></> : <h1>Carregando...</h1>}
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;

    ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-left: 25px;  padding-right: 25px;
    gap: 25px;
    flex-wrap: wrap;  
    }
    img {
    width: 129px;
    height: 193px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 3px;
    cursor: pointer;
    }
`