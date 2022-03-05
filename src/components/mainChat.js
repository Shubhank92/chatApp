import React, { useState } from 'react';
import { FaEllipsisV, FaWindowClose, FaBroadcastTower } from "react-icons/fa";

//css
import './mainChat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const MainChat = ({selectedName, selectedUrl, handleClose}) => {
    // const handleDropdown = () => {
    //     return 
    // }

    if(selectedName) {
        return (
        <div className='mainChatBox'>
            <article className='topBar'>
                <img src={selectedUrl} alt={selectedName} />
                <h3>{selectedName}</h3>
                <div>
                {/* FIX THIS ASAP, use toast */}
                    <Dropdown> 
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {/* <FaEllipsisV className='icon1' /> */}
                            drop
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <FaWindowClose className='icon2' onClick={handleClose}/>
                </div>
            </article>
            <h4>Render the chat component here</h4>
        </div>
    )
    } else {
        return (
            <div className='copyMainChatBox'>
                <FaBroadcastTower className='icon3'/>
                <h3>Select a user</h3>
            </div>
        )
    }

}

export default MainChat