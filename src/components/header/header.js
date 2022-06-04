import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './header.css';
import { Switch } from 'react-router-dom/esm/react-router-dom';
import ToggleButton from 'react-toggle-button'


const Header = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const toggleSwitch = () =>
    { 
        setIsEnabled(previousState => 
            { 
                props.useShowRandom(!previousState);
               return !previousState;
            })
    };

    const toggleDisa = (value) =>
    { 
        setIsDisabled(previousState => 
            { 
               props.useShowRandom(value);
               return value;
            })

        setIsEnabled(previousState => 
                { 
                    props.useShowRandom(false);
                   return false;
                })
    };

    var toggleButton = isDisabled ? null :  <ToggleButton
    value={ isEnabled }
    onToggle={toggleSwitch} /> 


    return (
        <div className="header d-flex wrapper-list">
            <h3>
            <Link onClick={() => toggleDisa(true)} to="/">
                        <a href="#/">StarDB</a>
            </Link>
            </h3>
            <ul className="d-flex wrapper-list">
                <li>
                    <Link to="/people/" onClick={() => toggleDisa(false)}>
                        <a href="#/people/">Персонажі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/planets/" onClick={() => toggleDisa(false)}>
                        <a href="#/planets/">Планети</a>
                    </Link>
                </li>
                <li>
                    <Link to="/starships/" onClick={() => toggleDisa(false)}>
                        <a href="#/starships/">Кораблі</a>
                    </Link>
                </li>
                <li>
                    <Link to="/films/" onClick={() => toggleDisa(false)}>
                        <a href="#/films/">Фільми</a>
                    </Link>
                </li>
                <li>
                    <Link to="/profile/" onClick={() => toggleDisa(false)}>
                        <a href="#/profile/">Профайл</a>
                    </Link>
                </li>
                <li>
                    <Link to="/contactUs/" onClick={() => toggleDisa(false)}>
                        <a href="#/contactUs/">Зворотній зв'язок</a>
                    </Link>
                </li>
                <li>
                {toggleButton}
                </li>
            </ul>
        </div>
    );
};

export default Header;