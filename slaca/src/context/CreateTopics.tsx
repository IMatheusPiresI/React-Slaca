import { createContext, ReactNode, useState } from "react";

interface TopicContextProps {
    children: ReactNode;
}

type TopicContextType = {
    subject: string,
    setSubject: (newState: string) => void,
    content: string,
    setContent: (newState: string) => void,
    setNewTopic: (subject: string, content: string) => void;
    allTopics: never[];
    setAllTopics: (newState: []) => void,
}

const initialValue = {
    subject: '',
    setSubject: () => {},
    content: '',
    setContent: () => {},
    setNewTopic: () => {},
    allTopics: [],
    setAllTopics: () => {},
}

//  Criando nosso contexto TopicContext
export const TopicContext = createContext<TopicContextType>(initialValue);


export const TopicContextProvider = ({children}: TopicContextProps) => {
    const [subject, setSubject] = useState(initialValue.subject);
    const [content, setContent] = useState(initialValue.content);
    const [allTopics, setAllTopics] = useState(initialValue.allTopics);

    function setNewTopic(subject: string, content: string){
        if(localStorage.getItem('topic')){
            const topic = 
                {
                    subject: subject,
                    content: content,
                }
            
            const topics = localStorage.getItem('topic');
            const response = topics && JSON.parse(topics);

            const newTopics = [...response, topic]
        
            localStorage.setItem('topic', JSON.stringify(newTopics));
            setSubject(initialValue.subject);
            setContent(initialValue.content);
        }else{
            const topic = [
                {
                    subject: subject,
                    content: content,
                }
            ]
            localStorage.setItem('topic', JSON.stringify(topic));
            const creatingTopic = localStorage.getItem('topic');
            const createdTopic = creatingTopic && JSON.parse(creatingTopic)
            setAllTopics(createdTopic);
            setSubject(initialValue.subject);
            setContent(initialValue.content);
        }
    }


    return(
        <TopicContext.Provider value={{subject, setSubject, content, setContent, setNewTopic, allTopics, setAllTopics}}>
            {children}
        </TopicContext.Provider>
    )
}