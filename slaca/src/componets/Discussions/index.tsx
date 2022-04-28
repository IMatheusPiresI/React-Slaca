import { useState } from "react";
import { CreateNewTopic } from "../CreateNewTopic";
import { FormTopic } from "../FormTopic";
import { TitleSession } from "../Resume/styles";
import { Container } from "./styles";

export function Discussions(){
    const [newTopic, setNewTopic] = useState<boolean>(false);
    return(
        <Container>
            <header>
                <TitleSession>Discussões</TitleSession>
            </header>
            <div>
                {newTopic ? <FormTopic/> : <CreateNewTopic setNewTopic={setNewTopic}/>}
            </div>
        </Container>
    )
}