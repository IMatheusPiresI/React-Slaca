import { NavbarVertical } from "../NavbarVertical";
import { Container } from "./styles";
import mulher from '../../assets/images/mulher.svg'

export function Header() {
    return(
        <Container>
            <div className="header__boxtext">
                <p>Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
                <p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</p>
                <p>ISSN: 1234-5678</p>
            </div>

            <div className='header__user'>
                <div>
                    <i className="fa-solid fa-globe"></i>
                    <select name="" id="">
                        <option value="">PT, BR</option>
                        <option value="">EN, US</option>
                    </select>
                </div>
                <div>
                    <p>Bem vindo!</p>
                    <p>alguem12@galoascience.com</p>
                </div>
                <img src={mulher} alt="foto do usuário logado" />
                <p className="header__user-num">2</p>
            </div>
            <NavbarVertical/>
        </Container>
    )
}

