import { Container } from "./styles";

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'

interface Topic {
    subject: string,
    content: string,
    dataId:number,
}

export function Topic({subject, content, dataId}: Topic ){
    return(
        <Container data-id={dataId}>
            <h5>{subject}</h5>
            <p>Carlos Henrique Santos</p>
            <p>{content}</p>
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