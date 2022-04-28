import { Container } from './styles';

import icon1 from '../../assets/images/icone1.svg'
import icon2 from '../../assets/images/icone2.svg'
import icon3 from '../../assets/images/icone3.svg'

interface CreateNewTopic {
    setNewTopic(topic: boolean): void;
}

export function CreateNewTopic({setNewTopic}: CreateNewTopic) {
  return (
    <Container>
        <h4>Compartilhe suas ideias ou dúvidas com os autores!</h4>
        <div>
            <img src={icon1} alt="mão segurando uma planta"/>
            <img src={icon2} alt="QA"/>
            <img src={icon3} alt="Idéias"/>
        </div>
        <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
        <button onClick={() => setNewTopic(true)}><span>+ </span> criar tópico</button>
    </Container>
  )
}
