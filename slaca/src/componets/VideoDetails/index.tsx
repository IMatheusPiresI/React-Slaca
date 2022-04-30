import { Container } from "./style";
//  Icons
import { FaDownload } from 'react-icons/fa';
import { AiTwotoneStar } from 'react-icons/ai';

//  Imagens

import doi from '../../assets/images/doi.svg'

// Components

import { Datails } from "../Details";
import { VideoStyle } from "../VideoStyle";
import { useContext } from "react";
import { ChangeLanguage } from "../../context/ChangeLanguege";


export function VideoDetails(){
    const { language } = useContext(ChangeLanguage)
    return(
        <Container>
            <div>
                <div>
                    <h2>{language ? 'Sensory analysis of functional preparations developed for schoolchildren between 9 and 15 years old, in the city of Campinas/SP' : 'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP'}</h2>
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