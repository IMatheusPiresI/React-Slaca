import { useContext } from 'react'
import Modal from 'react-modal'
import { ChangeLanguage } from '../../context/ChangeLanguege';
import { EditTopicContext } from '../../context/EditTopic'
import { BoxInputs, Container } from './style';
import { IoCloseSharp } from 'react-icons/io5'

export function ModalEdit(){
    const { language } = useContext(ChangeLanguage);
    const { setShowEditModal, showEditModal } = useContext(EditTopicContext);



    return(

            <Modal
                isOpen={showEditModal}
                ariaHideApp={false}
                onRequestClose={() => setShowEditModal(false)}
                className={'modal'}
                overlayClassName={'overlay-modal'}
            >
                <Container>
                    <h2>Edite seu Tópico</h2>
                    <button className='close-modal' onClick={() => setShowEditModal(false)}><IoCloseSharp/></button>
                    <BoxInputs>
                        <div>
                            <label htmlFor="assunt">{language? 'Assunt' : 'Assunto'}</label>
                            <input type="text" name="assunt" id="assunt"/>
                        </div>
                        <div>
                            <label htmlFor="content">{language? 'Content' : 'Conteúdo'}</label>
                            <textarea name="content" id="content"></textarea>
                        </div>
                    </BoxInputs>

                    <button className='btn-final-form'>Finalizar Edição</button>
                </Container>
               
            </Modal>
    )
}