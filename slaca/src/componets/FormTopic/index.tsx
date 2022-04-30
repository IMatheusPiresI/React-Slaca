import { Container } from './styles'
import { ImBold } from 'react-icons/im'
import { ImItalic } from 'react-icons/im'
import { FormEvent, useContext, useState } from 'react'
import { TopicContext } from '../../context/CreateTopics'

export function FormTopic() {
  const { content, setContent, subject, setSubject, setNewTopic } = useContext(TopicContext)

  function handleSubmit(e: FormEvent){
      e.preventDefault();

      setNewTopic(subject, content);
  }
  return (
    <Container onSubmit={handleSubmit}>
        <h4>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</h4>
        <div>
          <label htmlFor="title">Assunto</label>
          <input type="text" id="title" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Defina um tópico sucinto para notificar os autores...' required/>
        </div>
        <div>
          <label htmlFor="content">Conteúdo</label>
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
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
