import { NavbarVertical } from "../NavbarVertical";
import { Container } from "./styles";
import mulher from '../../assets/images/mulher.svg'
import { useContext, useEffect, useState } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";

export function Header() {
    const [optionValue, setOptionValue] = useState('PT-BR');
    const { language, setLanguage } = useContext(ChangeLanguage);

    useEffect(() => {
        function changeLanguage():void {  
            if(optionValue === 'PT-BR'){
                return setLanguage(false)
            }
            return setLanguage(true)
        }
        changeLanguage();
    }, [optionValue])

    return(
        <Container>
            <div className="header__boxtext">
                <p>{language ? 'Proceedings of the Latin American Symposium on Food Sciences'  : 'Anais do Simpósio Latino Americano de Ciências de Alimentos'}</p>
                <p>{language ? 'Proceedings of the 13th Latin American Food Science Symposium' :'Anais do 13º Simpósio Latino Americano de Ciência de Alimentos'}</p>
                <p>ISSN: 1234-5678</p>
            </div>

            <div className='header__user'>
                <div>
                    <label htmlFor="select"><i className="fa-solid fa-globe"></i></label>
                    <select name="select" id="select" value={optionValue} onChange={(e) => setOptionValue(e.target.value)}>
                        <option value='PT-BR'>PT, BR</option>
                        <option value='EN-US'>EN, US</option>
                    </select>
                </div>
                <div>
                    <p>{language ? 'Welcome!' : 'Bem vindo!'}</p>
                    <p>alguem12@galoascience.com</p>
                </div>
                <img src={mulher} alt="foto do usuário logado" />
                <p className="header__user-num">2</p>
            </div>
            <NavbarVertical/>
        </Container>
    )
}

