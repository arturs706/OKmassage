import React from 'react'
import { IconContext } from "react-icons";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiMessengerLine, RiTelegramLine, RiWhatsappLine} from "react-icons/ri";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const IconMenu = styled.div`
display: flex;
flex-direction: column;
margin: 17.9rem 3.6rem;
position: absolute;
z-index: 1;
max-width: 100rem;
@media (max-width: 1345px) {
    margin: 16.9rem 3.5rem;
    }
@media (max-width: 824px) {
    position: fixed;
    margin: 16.9rem 2rem;

    }
`

function Icons(props) {
    return (
        <IconMenu>

            <IconContext.Provider value={{className: "icon-class-name" }}>
            <Fade bottom distance = "300px" delay = {3000} duration = {3000} ssrFadeout = {true}>

            <a href="https://m.facebook.com/Okmassage-107617684179566/"><RiFacebookLine/></a>
            <a href="https://www.instagram.com/ksjukis/"><RiInstagramLine/></a>
            <a href="https://www.linkedin.com/"><RiLinkedinLine/></a>
            <a href="https://www.linkedin.com/"><RiMessengerLine/></a>
            <a href="https://www.linkedin.com/"><RiTelegramLine/></a>
            <a href="https://wa.link/5j5c92"><RiWhatsappLine/></a>
            </Fade>

            </IconContext.Provider>
        </IconMenu>
    )
}

export default Icons
