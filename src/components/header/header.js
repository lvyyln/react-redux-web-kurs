import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './header.css';
import ToggleButton from 'react-toggle-button'

const Header = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const toggleSwitch = () =>
    { 
            setIsEnabled(previousState => 
            { 
                props.useShowRandom(!previousState);
               return !previousState;
            })
    };

    const changeToggleVision = (value) =>
    { 
        // setIsVisible(previousState => 
        // { 
        //     props.useShowRandom(value);
        //     return value;
        // })
    };
    
    var toggleButton = isVisible ?  <ToggleButton
    value={ isEnabled }
    onToggle={toggleSwitch} /> : null;

    return (
        <div className="header d-flex wrapper-list">
            <h3>
            <Link to="/" onClick={() => changeToggleVision(false)}>
                        <a href="#/">StarDB</a>
            </Link>
            </h3>
            <ul className="d-flex wrapper-list">
                <li>
                    <Link to="/people/" onClick={() => changeToggleVision(true)}>
                        <a href="#/people/">Персонажі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/planets/" onClick={() => changeToggleVision(true)}>
                        <a href="#/planets/">Планети</a>
                    </Link>
                </li>
                <li>
                    <Link to="/starships/" onClick={() => changeToggleVision(true)}>
                        <a href="#/starships/">Кораблі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/films/" onClick={() => changeToggleVision(true)}>
                        <a href="#/films/">Фільми</a>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/" onClick={() => changeToggleVision(true)}>
                        <a href="#/profile/">Профайл</a>
                    </Link>
                </li>
                <li>
                    <Link to="/contactUs/" onClick={() => changeToggleVision(true)}>
                        <a href="#/contactUs/">Зворотній зв'язок</a>
                    </Link>
                </li>
                <li id="tg-btn">
                {toggleButton}
                </li>
            </ul>
        </div>
    );
};

export default Header;