import { Container } from './styles'
import { ImBold } from 'react-icons/im'
import { ImItalic } from 'react-icons/im'

export function FormTopic() {
  return (
    <Container>
        <h4>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</h4>
        <div>
          <label htmlFor="title">Assunto</label>
          <input type="text" id="title" placeholder='Defina um tópico sucinto para notificar os autores...'/>
        </div>
        <div>
          <label htmlFor="content">Conteúdo</label>
          <textarea name="" id="content"></textarea>
          <div className='format'>
              <p>
                <span><ImBold/></span>
                <span><ImItalic/></span>
              </p>
              <button>Enviar</button>
          </div>
        </div>
    </Container>
  )
}
