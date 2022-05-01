import { useContext, useEffect } from "react";
import { TopicContext } from "../../context/CreateTopics";
import { Topic } from "../Topic";
import { Container } from "./styles";

interface TopicProps {
    subject: string;
    content: string;
}

export function TopicSession(){
    const { allTopics, setAllTopics } = useContext(TopicContext);
    const local  = localStorage.getItem('topic')
    
    useEffect(() => {
        if(localStorage.getItem('topic') !== null){
            const allTopic = localStorage.getItem('topic');
            const newTopics = allTopic && JSON.parse(allTopic);
            setAllTopics(newTopics);
            
        }
    }, [local, setAllTopics])

    return(
        <Container>
            {allTopics.map((topic: TopicProps, id: number) => {
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