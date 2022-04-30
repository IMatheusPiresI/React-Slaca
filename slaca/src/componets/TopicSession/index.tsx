import { useContext, useEffect, useState } from "react";
import { TopicContext } from "../../context/CreateTopics";
import { Topic } from "../Topic";
import { Container } from "./styles";

interface Topic {
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
            {allTopics.map((topic: Topic, id: number) => {
                return(
                    <Topic
                        id={id}
                        key={id}
                        subject={topic.subject}
                        content={topic.content}
                    />
                )
            })}
        </Container>
    )
}