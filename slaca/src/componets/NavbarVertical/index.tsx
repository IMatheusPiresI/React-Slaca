import { Container } from "./styles";
import logo from '../../assets/images/logo.png'
import { NavbarVerticalItem } from "../NavbarItem";
import { ChangeLanguage } from "../../context/ChangeLanguege";
import { useContext } from "react";

const itemsNav = [
    {textPortuguese: 'Apresentação', textEnglish: 'Presentation', isOpen: false},
    {textPortuguese: 'Autores', textEnglish: 'Authors', isOpen: false},
    {textPortuguese: 'Eixos Temáticos', textEnglish: 'Thematic Axes', isOpen: false},
    {textPortuguese: 'Trabalhos', textEnglish: 'Works', isOpen: true},
    {textPortuguese: 'Contato', textEnglish: 'Contact', isOpen: false}

]

export function NavbarVertical() {
    const { language } = useContext(ChangeLanguage);
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
                    text={language ? item.textEnglish : item.textPortuguese}
                    isOpen={item.isOpen}
                />
                )
            })}
        </Container>
    )
}
