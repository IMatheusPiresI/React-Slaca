import { Container } from "./styles";

interface CloseModal {
    closeModal: (newState: boolean) => void;
}

export function SucessComponent({closeModal}: CloseModal){
        return(
            <Container>
                <h4>Seu tópico foi enviado com sucesso! :D</h4>
                <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
                <a href="*">Descubra outros trabalhos!</a>
                <button onClick={() => closeModal(false)}>criar novo tópico</button>
            </Container>
    )
}