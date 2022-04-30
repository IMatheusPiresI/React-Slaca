import { createContext, ReactNode, useState } from "react";

interface ChildrenProvider {
    children: ReactNode;
}

interface Language {
    language:boolean
    setLanguage: (newState: boolean) => void;
}

const initialvalue = {
    language: false,
    setLanguage: () => {},
}

export const ChangeLanguage = createContext<Language>(initialvalue);

export const ChangeLanguageProvider = ({children}: ChildrenProvider) => {
    const [language, setLanguage] = useState(initialvalue.language);

    return(
        <ChangeLanguage.Provider value={{language, setLanguage}}>
            {children}
        </ChangeLanguage.Provider>
    )
}