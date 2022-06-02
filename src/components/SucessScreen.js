import styled from "styled-components"

export default function SucessScreen ({purchases, selectSeat, movies}) {
     return(
         <Container>
        <h2>Pedido feito com sucesso!</h2>
        <Movie>
            <h4>Filme e sessão</h4>
            <p>{movies.movie.title}</p>
            <p>{movies.day.date}</p>
            <span>{movies.name}</span>
        </Movie>
        <Voucher>
            <h4>Ingresso(s)</h4>
            {selectSeat.map((select) => <p>Assento {select.seat}</p>)}
        </Voucher>
        <Purchases>
            <h4>Comprador(es)</h4>
            {purchases.map((purchase, index) => 
                <>
                    <p>Nome: {purchase.nome}</p>
                    <p>CPF: {purchase.cpf}</p>
                </>
                )}
        </Purchases>
         </Container>
     )
}

const Container=styled.div`
    width: 100%;
    margin-top: 100px;
    font-size: 24px;
    padding: 20px;
    box-sizing: border-box;

    h2{
        text-align: center;
        color: green;
        font-weight: 700;
    }

    h4{
        font-weight: 700;
        margin-bottom: 10px;
    }

    p{
        font-size: 22px;
        margin-top: 5px;
    }
`

const Movie= styled.div`
    margin-top: 50px;

    
`

const Voucher= styled.div`
    margin-top: 50px;
`

const Purchases= styled.div`
    margin-top: 50px;
`