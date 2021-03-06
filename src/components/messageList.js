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
    const [searchVal, setSearchVal] = useState('');

    const handleClick = (userObj) => {
        setSelectedObj(userObj);
        return;
    }
    
    const onSearchChange = (e) => {
        setSearchVal(e.target.value)
        return;
    }

    const handleClose = () => {
        setSelectedName('');
        setSelectedObj({})
    }

    useEffect(() => {
        setSelectedName(selectedObj.login);
        setSelectedUrl(selectedObj.avatar_url);
    }, [selectedObj])
    
    return (
        <div className='items'>
            <div className='item1'>
                <SearchBar searchChange={onSearchChange} />
                {/* use badge compomnent in bootstrap for that online ting*/}
                <UseEffectFetchData handleClick={handleClick} searchVal={searchVal}/>
            </div>
            <div className='item2'>
                <MainChat selectedName={selectedName} selectedUrl={selectedUrl} handleClose={handleClose}/>
            </div>
        </div>
    )

}

export default MainContainer