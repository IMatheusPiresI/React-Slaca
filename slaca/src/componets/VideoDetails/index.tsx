import { Container } from "./style";
import { FaDownload } from 'react-icons/fa';
import { AiTwotoneStar } from 'react-icons/ai';
import doi from '../../assets/images/doi.svg'


export function VideoDetails(){
    return(
        <Container>
            <div>
                <div>
                    <p>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </p>
                </div>
                <div>
                    <button><FaDownload/> Dowload</button>
                    <button><AiTwotoneStar/></button>
                    <button><img src={doi} alt="icone doi"/></button>
                </div>
            </div>
        </Container>
    )
}