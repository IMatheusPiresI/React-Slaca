import { useContext } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";
import { Container } from "./styles";

export function Datails() {
    const { language } = useContext(ChangeLanguage);

    return(
        <Container>
            <header>
                <h4>Detalhes</h4>
            </header>
            <div className="container-details">
                <div>
                    {language ? <p>Presentation Type:<strong>Poster</strong></p> : <p>Tipo de Apresentação:<strong>Pôster</strong></p> }
                    {language ? <p>Thematic axis:<strong>Food and health (AS)</strong></p>: <p>Eixo temático:<strong>Alimentação e saúde (AS)</strong></p>}
                    {language ? <p>Keywords:<strong>Functional foods, school meals</strong></p> : <p>Palavras-chaves:<strong>Alimentos funcionais, alimentação escolar</strong></p>}
                </div>

                <div>
                    <h4>{language ? 'Authors' : 'Autores'}</h4>
                    <p>Galileo Galilei<sup>1</sup></p>
                    <p>Berta Lange de Morretes<sup>2</sup></p>
                    <p>Isaac Newton<sup>3</sup></p>
                    <p>Cesar Lattes<sup>1</sup></p>
                    <p>Sthephen Hawking<sup>4</sup></p>
                </div>

                <div>
                    <p><sup>1</sup>{language ? 'Campinas State University' :'Universidade Estadual de Campinas'}</p>
                    <p><sup>2</sup>{language ? 'University of Sao Paulo' :'Universidade de São Paulo'}</p>
                    <p><sup>3</sup>{language ? 'National Institute for Space Research' : 'Instituto Nacional de Pesquisas Espaciais'}</p>
                    <p><sup>4</sup>{language ? 'Federal University of Rio de Janeiro' : 'Universidade Federal do Rio de Janeiro'}</p>
                </div>
            </div>
        </Container>
    )
}