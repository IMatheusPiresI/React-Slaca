import { useContext, useState } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";
import { CreateNewTopic } from "../CreateNewTopic";
import { FormTopic } from "../FormTopic";
import { TitleSession } from "../Resume/styles";
import { Container } from "./styles";

export function Discussions(){
    const [newTopic, setNewTopic] = useState<boolean>(false);
    const { language } = useContext(ChangeLanguage);
    return(
        <Container>
            <header>
                <TitleSession>{language ? 'Discussions' : 'Discussões'}</TitleSession>
            </header>
            <div>
                {newTopic ? <FormTopic/> : <CreateNewTopic setNewTopic={setNewTopic}/>}
            </div>
        </Container>
    )
}