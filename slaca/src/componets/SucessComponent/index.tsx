import { useContext } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";
import { Container } from "./styles";

interface CloseModal {
    closeModal: (newState: boolean) => void;
}

export function SucessComponent({closeModal}: CloseModal){
    const { language} = useContext(ChangeLanguage);
        return(
            <Container>
                <h4>{language ? 'Your topic has been successfully submitted! :D' : 'Seu tópico foi enviado com sucesso! :D'}</h4>
                <p>{language ? 'Thanks for your contribution, a notification will be sent to your email once your thread is answered!' : 'Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!'}</p>
                <a href="*">{language ? 'Discover other jobs!' : 'Descubra outros trabalhos!'}</a>
                <button onClick={() => closeModal(false)}>{language ? 'create new topic' : 'criar novo tópico'}</button>
            </Container>
    )
}