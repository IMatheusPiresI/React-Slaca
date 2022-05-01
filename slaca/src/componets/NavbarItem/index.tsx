import { Container } from "./styles";

interface NavbarItemProps {
    text: string;
    isOpen: boolean;
}

export function NavbarVerticalItem({text, isOpen}: NavbarItemProps){
    return(
        <Container
            isOpen={isOpen}
        >
            <a href="*">{text}</a>
        </Container>
    )
}