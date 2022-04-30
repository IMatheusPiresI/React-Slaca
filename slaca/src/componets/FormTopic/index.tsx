import { Container } from './styles'
import { ImBold } from 'react-icons/im'
import { ImItalic } from 'react-icons/im'
import { FormEvent, useContext, useState } from 'react'
import { TopicContext } from '../../context/CreateTopics'
import { SucessComponent } from '../SucessComponent'
import { ChangeLanguage } from '../../context/ChangeLanguege'

export function FormTopic() {
  const { content, setContent, subject, setSubject, setNewTopic } = useContext(TopicContext);
  const { language } = useContext(ChangeLanguage);
  const [showSucessComponent, setShowSucessComponent] = useState(false);

  function handleSubmit(e: FormEvent){
      e.preventDefault();
      setNewTopic(subject, content);
      setShowSucessComponent(true);
  }
  return (
    <Container onSubmit={handleSubmit}>
        <h4>{language ? 'Have a question or suggestion? Share your feedback with the authors!' : 'Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!'}</h4>
        <div>
          <label htmlFor="title">{language ? 'Subject' : 'Assunto'}</label>
          <input type="text" id="title" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={language ? 'Define a succinct topic to notify authors...' : 'Defina um tópico sucinto para notificar os autores...'} required/>
        </div>
        <div>
          <label htmlFor="content">{language ? 'Content' : 'Conteúdo'}</label>
          <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          <div className='format'>
              <p>
                <span><ImBold/></span>
                <span><ImItalic/></span>
              </p>
              <button>{language ? 'Send' :'Enviar'}</button>
          </div>
        </div>
        {showSucessComponent && <SucessComponent closeModal={setShowSucessComponent}/>}
    </Container>
  )
}
