import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './header.css';
import { Switch } from 'react-router-dom/esm/react-router-dom';
import ToggleButton from 'react-toggle-button'


const Header = (props) => {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () =>
    { 
        setIsEnabled(previousState => 
            { 
                props.useShowRandom(!previousState);
               return !previousState;
            })
    };

    return (
        <div className="header d-flex wrapper-list">
            <h3>
                <a href="#/">
                    StarDB
                </a>
            </h3>
            <ul className="d-flex wrapper-list">
                <li>
                    <Link to="/people/">
                        <a href="#/people/">Персонажі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/planets/">
                        <a href="#/planets/">Планети</a>
                    </Link>
                </li>
                <li>
                    <Link to="/starships/">
                        <a href="#/starships/">Кораблі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/">
                        <a href="#/profile/">Профайл</a>
                    </Link>
                </li>
                <li>
                <ToggleButton
  value={ isEnabled }
  onToggle={toggleSwitch} />  

                </li>
            </ul>
        </div>
    );
};

export default Header;