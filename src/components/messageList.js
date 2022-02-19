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
    const [searchBar, setSearchBar] = useState('');

    const handleClick = (user) => {
        setSelectedObj(user);
        return;
    }
    
    // Complete the search change widget with the help of
    // code from pokeapp
    const onSearchChange = (e) => {
        console.log(e.target.value)
        setSearchBar(e.target.value)
        return;
    }

    useEffect(() => {
        setSelectedName(selectedObj.login);
        setSelectedUrl(selectedObj.avatar_url);
    }, [selectedObj])

    return (
        <div className='items'>
            <div className='item1'>
                <SearchBar searchChange={onSearchChange}/>
                <UseEffectFetchData handleClick={handleClick}/>
            </div>
            <div className='item2'>
                <MainChat selectedName={selectedName} selectedUrl={selectedUrl}/>
            </div>
        </div>
    )
}

export default MainContainer