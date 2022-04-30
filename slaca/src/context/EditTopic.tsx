import { createContext, ReactNode, useContext, useState } from "react";
import { TopicContext } from "./CreateTopics";

interface EditTopicContextProvider {
    children: ReactNode
}

interface EditTopicContextProps {
    handleOpenModal: (e: any) => void,
    setShowEditModal: (newState: boolean) => void,
    showEditModal: boolean,
}

const initialValue = {
    handleOpenModal: () => {},
    setShowEditModal: () => {},
    showEditModal: false,
}
export const EditTopicContext = createContext<EditTopicContextProps>(initialValue);

export const EditTopicContextProvider = ({children}: EditTopicContextProvider) => {
    const { allTopics, setAllTopics } = useContext(TopicContext);
    const [showEditModal, setShowEditModal] = useState(false)

    function handleOpenModal(e: any){
        setShowEditModal(true);
        console.log(allTopics)
    }

    return(
        <EditTopicContext.Provider value={{ handleOpenModal, setShowEditModal, showEditModal }}>
            {children}
        </EditTopicContext.Provider>
    )
}