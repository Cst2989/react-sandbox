import React, { Fragment, useState } from 'react';
import './autocomplete.scss';

const Autocomplete = (props) => {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);
    const [active, setActive] = useState(false);
    
    
    const selectItem = (item) => {
        
    }
    return (
        <Fragment>
            <div className={'autocomplete ' + ( active ? 'autocomplete--active' : 'autocomplete--inactive') }>
                <label className="autocomplete__label">{props.label}</label>
                <input 
                    type="text"  
                    className="autocomplete__input" 
                    value={inputText}  
                    onChange={(event) => setInputText(event.target.value)} 
                    onFocus={() => setActive(true)} 
                    onBlur={() => setActive(false)} 
                    placeholder={props.placeholder}
                />
                <div className="autocomplete__caret"></div>
                <ul className="autocomplete__results">
                    {props.data && props.data.map((item, i) => (
                        <li key={i} className="autocomplete__results__item" onClick={() => selectItem(item)}>
                            {item.attributes.name}
                        </li>
                    ))}
                </ul>
            </div>
            <ul className={'dropdown-menu ' + ( results.length > 0 ? 'open' : 'closed') }>
                {results.map((item, i) => (
                    <li key={i} className="item" onClick={() => selectItem(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
export default Autocomplete;