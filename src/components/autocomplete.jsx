import React, { Fragment, useState } from 'react';
import './autocomplete.scss';

const Label = (props) => {
    return (
        <label className="autocomplete__label">{props.label}</label>
    )
}
const Avatar = props => {
    return (
        <span className="autocomplete__results-item__avatar">
            { props.avatar ? <img alt={props.firstName} src={props.avatar.url} /> : props.initials }
        </span>
    )
}
const ItemInfo = props => {
    return (
        <span className="autocomplete__results-item__info">
            <span className="autocomplete__results-item__info-name">{props.name}</span>
            <span className="autocomplete__results-item__info-email">{props.email}</span>
        </span>
    )
}
const Dropdown = (props) => {
    const selectItem = (item) => {
        console.log(item) 
    }
    return (
        <Fragment>
            <ul className="autocomplete__results">
                {props.data && props.data.map((item, i) => (
                    <li key={i} className="autocomplete__results-item" onClick={() => selectItem(item)}>
                        <Avatar avatar={item.avatar} initials={item.initials}  /> 
                        <ItemInfo name={item.name} email={item.email} />
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

const Autocomplete = (props) => {
    const [inputText, setInputText] = useState('');
    const [active, setActive] = useState(false);
    
    return (
        <Fragment>
            <div className={'autocomplete ' + ( active ? 'autocomplete--active' : 'autocomplete--inactive') }>
                <Label label={props.label} />
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
                <Dropdown data={props.data} />
            </div>
            
        </Fragment>
    )
}
export default Autocomplete;