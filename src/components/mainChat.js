import React from 'react';
import { FaEllipsisV, FaWindowClose } from "react-icons/fa";


//css
import './mainChat.css';

const MainChat = ({selectedName, selectedUrl}) => {

    return <div className='mainChatBox'>
        <article className='topBar'>
            <img src={selectedUrl} alt={selectedName ? selectedName : 'Tywin'} />
            <h3>{selectedName ? selectedName : 'Tywin'}</h3>
            <div className='icons'>
                <FaEllipsisV className='icon1'/>
                <FaWindowClose className='icon2'/>
            </div>
        </article>
        <h4>Render the chat component here</h4>
    </div>
}

export default MainChat