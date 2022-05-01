import { createContext, ReactNode, useContext, useState } from "react";
import { TopicContext } from "./CreateTopics";

interface EditTopicContextProviderProps {
    children: ReactNode
}

interface Topic {
    subject: string,
    content: string,
}

interface EditTopicContextProps {
    handleOpenModal: (e: any) => void,
    setShowEditModal: (newState: boolean) => void,
    showEditModal: boolean,
    setContent: (newState: string) => void;
    content: string;
    setSubject: (newState: string) => void;
    subject: string;
    idTopic: number
}

const initialValue = {
    handleOpenModal: () => {},
    setShowEditModal: () => {},
    showEditModal: false,
    setContent: () => {},
    content: '',
    subject: '',
    setSubject: () => {},
    idTopic: 0,
}
export const EditTopicContext = createContext<EditTopicContextProps>(initialValue);

export const EditTopicContextProvider = ({children}: EditTopicContextProviderProps) => {
    const { allTopics } = useContext(TopicContext);
    const [showEditModal, setShowEditModal] = useState(false);
    const [content, setContent] = useState(initialValue.content)
    const [subject, setSubject] = useState(initialValue.subject)
    const [idTopic, setIdTopic] = useState(initialValue.idTopic)

    function handleOpenModal(e: any){
        const topic: Topic = allTopics[Number(e.target.dataset.id)];
        setIdTopic(Number(e.target.dataset.id));
        setContent(topic.content);
        setSubject(topic.subject);
        setShowEditModal(true);
    }

    return(
        <EditTopicContext.Provider value={{ handleOpenModal, setShowEditModal, showEditModal, content, setContent, subject, setSubject, idTopic }}>
            {children}
        </EditTopicContext.Provider>
    )
}