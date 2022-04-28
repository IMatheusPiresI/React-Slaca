import { Container } from "./styles";

export function Datails() {
    return(
        <Container>
            <header>
                <h4>Detalhes</h4>
            </header>
            <div className="container-details">
                <div>
                    <p>Tipo de Apresentação:<strong>Pôster</strong></p>
                    <p>Eixo temático:<strong>Alimentação e saúde (AS)</strong></p>
                    <p>Palavras-chaves:<strong>Alimentos funcionais, alimentação escolar</strong></p>
                </div>

                <div>
                    <h4>Autores</h4>
                    <p>Galileo Galilei<sup>1</sup></p>
                    <p>Berta Lange de Morretes<sup>2</sup></p>
                    <p>Isaac Newton<sup>3</sup></p>
                    <p>Cesar Lattes<sup>1</sup></p>
                    <p>Sthephen Hawking<sup>4</sup></p>
                </div>

                <div>
                    <p><sup>1</sup>Universidade Estadual de Campinas</p>
                    <p><sup>2</sup>Universidade de São Paulo</p>
                    <p><sup>3</sup>Instituto Nacional de Pesquisas Espaciais</p>
                    <p><sup>4</sup>Universidade Federal do Rio de Janeiro</p>
                </div>
            </div>
        </Container>
    )
}