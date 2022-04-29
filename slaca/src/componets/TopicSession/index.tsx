import { useContext, useEffect } from "react";
import { TopicContext } from "../../context/CreateTopics";
import { Topic } from "../Topic";
import { Container } from "./styles";

interface Topic {
    id: number;
    subject: string;
    content: string;
}

export function TopicSession(){
    const { allTopics, setAllTopics } = useContext(TopicContext);

    useEffect(() => {
        if(localStorage.getItem('topic')){
            const topics= localStorage.getItem('topic');
            const allTopicsSession = topics && JSON.parse(topics)
            return setAllTopics(allTopicsSession);
        }
    },[setAllTopics, allTopics])

    return(
        <Container>
            {allTopics.map((topic: Topic) => {
                return(
                    <Topic
                        dataId={topic.id}
                        key={topic.subject}
                        subject={topic.subject}
                        content={topic.content}
                    />
                )
            })}
        </Container>
    )
}