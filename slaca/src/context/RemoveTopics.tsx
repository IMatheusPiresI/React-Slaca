import { createContext, ReactNode, useContext, useState } from "react";
import { TopicContext } from "./CreateTopics";

interface RemoveTopicContextProviderprops {
    children: ReactNode;
}

type RemoveTopicContextProps = {
    handleRemoveItem: (e:any) => void,
    hideTopicOptions: boolean
    setHideTopicOptions: (newState: boolean) => void,
}

const initialValue = {
    handleRemoveItem: () => {},
    hideTopicOptions: false,
    setHideTopicOptions: () => {},
}

//  Criando nosso contexto TopicContext
export const RemoveTopicContext = createContext<RemoveTopicContextProps>(initialValue);


export const RemoveTopicContextProvider = ({children}: RemoveTopicContextProviderprops) => {
    const { allTopics, setAllTopics } = useContext(TopicContext);
    const [ hideTopicOptions, setHideTopicOptions ] = useState(initialValue.hideTopicOptions)

    function attTopics(){
        const newTopics = localStorage.getItem('topic');
        const attTopics = newTopics && JSON.parse(newTopics);
        setAllTopics(attTopics);
    }

    function handleRemoveItem(e: any): void{
        setHideTopicOptions(false)
        allTopics.splice(Number(e.target!.dataset.id), 1);
        localStorage.setItem('topic', JSON.stringify(allTopics));
        attTopics();
    }

    return(
        <RemoveTopicContext.Provider value={{ handleRemoveItem, setHideTopicOptions, hideTopicOptions }}>
            {children}
        </RemoveTopicContext.Provider>
    )
}