import React, { Fragment, useState, useEffect, useRef } from 'react';
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
    let refs = useRef(Array.from({ length: props.data.length }).map(() => React.createRef()));
    
    const selectItem = (item, i ) => {
        props.emit(item.name)
        console.log(refs);
    }
    useEffect(() => {
        if (props.active > 2) {
            refs.current[props.active - 1].current.scrollIntoView();
        } else {
            refs.current[0].current.scrollIntoView();
        }
    }, [props.active]);
    return (
        <Fragment>
            <ul className="autocomplete__results">
                {props.data && props.data.map((item, i) => (
                    <li key={i + 1} ref={refs.current[i]} className={'autocomplete__results-item ' + (props.active === i + 1 ? 'autocomplete__results-item--active' : '' )} onClick={() => selectItem(item, i)}>
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
    const [filteredData, setFilterData] = useState([])
    const [activeItem, setActiveItem] = useState(0)

    const filterData = (value) => {
        const matchingItems = props.data.filter((item) => {
            if(item.name.replace(/\s/g,'').toLowerCase().indexOf(value.replace(/\s/g,'').toLowerCase()) > -1) {
                return true
            }
            return false
        });

        setFilterData(matchingItems);
        setInputText(value);
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            setActiveItem(0)
            setInputText(filteredData[activeItem].name)
            setFilterData(props.data)
            setActive(false)
        }
        if(event.key === 'ArrowDown') {
            if(activeItem < filteredData.length) {
                setActiveItem(activeItem + 1)
            }
        }
        if(event.key === 'ArrowUp') {
            if(activeItem > 0) {
                setActiveItem(activeItem - 1)
            }
        }
    }
    useEffect(() => {
        setFilterData(props.data);
    }, [props.data]);

    return (
        <Fragment>
            <div className={'autocomplete ' + ( active ? 'autocomplete--active' : 'autocomplete--inactive') }>
                <Label label={props.label} />
                <input 
                    type="text"  
                    className="autocomplete__input" 
                    value={inputText}  
                    onChange={(event) => filterData(event.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setActive(true)} 
                    onBlur={() => setActive(false)} 
                    placeholder={props.placeholder}
                />
                <div className="autocomplete__caret"></div>
                {filteredData.length > 0 && 
                <Dropdown active={activeItem} data={filteredData} emit={setInputText} />
                }
            </div>
            
        </Fragment>
    )
}
export default Autocomplete;