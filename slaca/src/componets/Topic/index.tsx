import { Container } from "./styles";

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { Fragment, useContext, useEffect, useState } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";
import { RemoveTopicContext } from "../../context/RemoveTopics";
import { EditTopicContext } from "../../context/EditTopic";
import { ModalEdit } from "../ModalEditTopic";

interface TopicProps {
    subject: string,
    content: string,
    id:number,
}

export function Topic({subject, content, id}: TopicProps ){
    const [showRemoveButton, setShowRemoveButton] = useState(false);
    const { language } = useContext(ChangeLanguage);
    const { handleRemoveItem, hideTopicOptions } = useContext(RemoveTopicContext);
    const { handleOpenModal, showEditModal } = useContext(EditTopicContext);
    const local = localStorage.getItem('topic')

    useEffect(() => {
        setShowRemoveButton(hideTopicOptions)
        if(showEditModal){
            setShowRemoveButton(false);
        }
    }, [local, showEditModal, hideTopicOptions])

    return(
        <Container>
            <h5>{subject}</h5>
            <p>Carlos Henrique Santos</p>
            <p>{content}</p>
            <div className="btn-section">
                <button onClick={() => setShowRemoveButton(!showRemoveButton)}>
                    <BsThreeDotsVertical/>
                </button>
                <button>
                    <BsFillSuitHeartFill/>
                </button>
                <p>1 like</p>
                <p>1 {language ? 'answer' : 'resposta'}</p>
            </div>
            {showRemoveButton && 
                <Fragment>
                    <div className="box-btn-remove">
                        <button data-id={id} onClick={handleRemoveItem}><FaTrashAlt/> {language ? 'Remove' : 'Remover'}</button>
                        <button data-id={id} onClick={handleOpenModal}><BsPencil/> {language ? 'Edit' : 'Editar'}</button>
                    </div>
                </Fragment>
            }
            {showEditModal && <ModalEdit/>}
        </Container>
    )
}