import React, {useState, useEffect} from 'react';

//Components
import UseEffectFetchData from './fetchData';
import SearchBar from './searchBar';
import MainChat from './mainChat'

// CSS
import './messageList.css'

const MainContainer = () => {
    const [selectedName, setSelectedName] = useState('');
    const [selectedUrl, setSelectedUrl] = useState('');
    const [selectedObj, setSelectedObj] = useState({});

// figure out a way to update the obj
    const handleClick = (user) => {
        setSelectedObj(user);
        return;
    }

    useEffect(() => {
        setSelectedName(selectedObj.login);
        setSelectedUrl(selectedObj.avatar_url);
    }, [selectedObj])

    return (
        <div className='items'>
            <div className='item1'>
                <SearchBar />
                <UseEffectFetchData handleClick={handleClick}/>
            </div>
            <div className='item2'>
                <MainChat selectedName={selectedName} selectedUrl={selectedUrl}/>
            </div>
        </div>
    )
}

export default MainContainer