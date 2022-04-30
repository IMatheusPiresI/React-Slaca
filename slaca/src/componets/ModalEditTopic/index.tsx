import { useContext } from 'react'
import Modal from 'react-modal'
import { ChangeLanguage } from '../../context/ChangeLanguege';
import { EditTopicContext } from '../../context/EditTopic'
import { BoxInputs, Container } from './style';
import { IoCloseSharp } from 'react-icons/io5'
import { TopicContext } from '../../context/CreateTopics';

export function ModalEdit(){
    const { language } = useContext(ChangeLanguage);
    const { allTopics, setAllTopics } = useContext(TopicContext)
    const { setShowEditModal, showEditModal, setContent, content, setSubject, subject, idTopic } = useContext(EditTopicContext);

    type Topic = {subject: string, content: string}[];

    function handleEditTopic(e: any){
        e.preventDefault();
        let topic: Topic = allTopics
        console.log(topic)
        topic[idTopic] = { subject: subject, content: content}
        localStorage.setItem('topic', JSON.stringify(topic));
        const getTopics = localStorage.getItem('topic');
        const newTopics = getTopics && JSON.parse(getTopics);
        setAllTopics(newTopics);
        setShowEditModal(false);
    }

    return(
        <Modal
            isOpen={showEditModal}
            ariaHideApp={false}
            onRequestClose={() => setShowEditModal(false)}
            className={'modal'}
            overlayClassName={'overlay-modal'}
        >
            <Container onSubmit={handleEditTopic}>
                <h2>Edite seu Tópico</h2>
                <button className='close-modal' onClick={() => setShowEditModal(false)}><IoCloseSharp/></button>
                <BoxInputs>
                    <div>
                        <label htmlFor="assunt">{language? 'Assunt' : 'Assunto'}</label>
                        <input type="text" name="assunt" id="assunt" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="content">{language? 'Content' : 'Conteúdo'}</label>
                        <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </BoxInputs>

                <button className='btn-final-form' type='submit'>Finalizar Edição</button>
            </Container>
            
        </Modal>
    )
}