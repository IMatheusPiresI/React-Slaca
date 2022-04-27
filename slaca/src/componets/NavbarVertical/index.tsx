import { Container } from "./styles";
import logo from '../../assets/images/logo.png'
import { NavbarVerticalItem } from "../NavbarItem";

const itemsNav = [
    {text: 'Apresentação', isOpen: false},
    {text: 'Autores', isOpen: false},
    {text: 'Eixos Temáticos', isOpen: false},
    {text: 'Trabalhos', isOpen: true},
    {text: 'Contato', isOpen: false}

]

export function NavbarVertical() {
    return(
        <Container>
            <div className="header__name">
                <h1>SLACA 2019</h1>               
            </div>
            <img src={logo} alt="OLogo 13 Slaca" />
            {itemsNav.map((item, key) => {
                return(
                <NavbarVerticalItem
                    key={key}
                    text={item.text}
                    isOpen={item.isOpen}
                />
                )
            })}
        </Container>
    )
}
