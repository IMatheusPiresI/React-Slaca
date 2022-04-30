import { Container } from "./styles";

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { useContext, useState } from "react";
import { TopicContext } from "../../context/CreateTopics";
import { setTimeout } from "timers/promises";

interface Topic {
    subject: string,
    content: string,
    id:number,
}



export function Topic({subject, content, id}: Topic ){
    const { allTopics, setAllTopics } = useContext(TopicContext);
    const [showRemoveButton, setShowRemoveButton] = useState(false);

    function attTopics(){
        const newTopics = localStorage.getItem('topic');
        const attTopics = newTopics && JSON.parse(newTopics);
        setAllTopics(attTopics);
    }

    function handleRemoveItem(e: any): void{
        allTopics.splice(Number(e.target!.dataset.id), 1);
        localStorage.setItem('topic', JSON.stringify(allTopics));
        attTopics();
    }

    function hideRemoveButtonTopic() {
        if(showRemoveButton){
            const setFalse = setInterval(() => {
                setShowRemoveButton(false);
                clearInterval(setFalse);
            },5000)
        }
    }
    hideRemoveButtonTopic();

    return(
        <Container>
            <h5>{subject}</h5>
            <p>Carlos Henrique Santos</p>
            <p>{content}</p>
            <div>
                <button onClick={() => setShowRemoveButton(!showRemoveButton)}>
                    <BsThreeDotsVertical/>
                </button>
                <button>
                    <BsFillSuitHeartFill/>
                </button>
                <p>1 like</p>
                <p>1 resposta</p>
            </div>
            {showRemoveButton && 
                <div className="box-btn-remove">
                    <button data-id={id} onClick={handleRemoveItem}><FaTrashAlt/> Excluir</button>
                </div>
            }
        </Container>
    )
}