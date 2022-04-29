import { useContext, useEffect, useState } from "react";
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
        if(localStorage.getItem('topic') !== null){
            const allTopic = localStorage.getItem('topic');
            const newTopics = allTopic && JSON.parse(allTopic);
            setAllTopics(newTopics);
        }
    }, [localStorage.getItem('topic')])

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