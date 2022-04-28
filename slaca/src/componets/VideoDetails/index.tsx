import { Container } from "./style";
//  Icons
import { FaDownload } from 'react-icons/fa';
import { AiTwotoneStar } from 'react-icons/ai';

//  Imagens

import doi from '../../assets/images/doi.svg'

// Components

import { Datails } from "../Details";
import { VideoStyle } from "../VideoStyle";


export function VideoDetails(){
    return(
        <Container>
            <div>
                <div>
                    <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                </div>
                <div>
                    <button><FaDownload/> <span>Download</span></button>
                    <button><AiTwotoneStar/></button>
                    <button><img src={doi} alt="icone doi"/></button>
                </div>
            </div>

            <div className="video-section">
                <VideoStyle/>
                <Datails/>
            </div>
        </Container>
    )
}