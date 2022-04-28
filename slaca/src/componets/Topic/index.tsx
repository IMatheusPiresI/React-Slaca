import { Container } from "./styles";

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'

export function Topic(){
    return(
        <Container>
            <h5>Assunto da pergunta aparece aqui</h5>
            <p>Carlos Henrique Santos</p>
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
            <div>
                <button>
                    <BsThreeDotsVertical/>
                </button>
                <button>
                    <BsFillSuitHeartFill/>
                </button>
                <p>1 like</p>
                <p>1 resposta</p>
            </div>
        </Container>
    )
}