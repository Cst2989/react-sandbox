import React, { Fragment, useState, useEffect, useRef } from 'react';
import * as styles from './autocomplete.module.scss';

const Label = (props) => {
    return (
        <label className={`${styles.autocompleteLabel}`}>{props.label}</label>
    )
}
const Avatar = ({avatar = null, initials='N/A', }) => {
    return (
        <span className={`${styles.autocompleteResultsItemAvatar}`}>
            { avatar ? <img alt={initials } src={avatar.url} /> : initials }
        </span>
    )
}
const ItemInfo = ({name = 'N/A', email='N/A'}) => {
    return (
        <span className={`${styles.autocompleteResultsItemInfo}`}>
            <span className={`${styles.autocompleteResultsItemInfoName}`}>{name}</span>
            <span className={`${styles.autocompleteResultsItemInfoEmail}`}>{email}</span>
        </span>
    )
}
const Dropdown = ({data = [], active= 0, emit = () => null }) => {
    let refs = useRef(Array.from({ length: data.length }).map(() => React.createRef()));
    
    const selectItem = (item) => {
        emit(item.name)
    }
    useEffect(() => {
        if (active > 2) {
            refs.current[active - 1].current.scrollIntoView();
        } else {
            refs.current[0].current.scrollIntoView();
        }
    }, [active]);
    return (
        <Fragment>
            <ul className={`${styles.autocompleteResults}`}>
                {data.map((item, i) => (
                    <li key={i + 1} ref={refs.current[i]} className={`${styles.autocompleteResultsItem} ` + (active === i + 1 ? `${styles.autocompleteResultsItemActive}` : '' )} onClick={() => selectItem(item)}>
                        <Avatar avatar={item.avatar} initials={item.initials}  /> 
                        <ItemInfo name={item.name} email={item.email} />
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

const Autocomplete = ({data = [], label='Default Label', placeholder='Default Placeholder'}) => {
    const [inputText, setInputText] = useState('');
    const [active, setActive] = useState(false);
    const [filteredData, setFilterData] = useState([])
    const [activeItem, setActiveItem] = useState(0)

    const filterData = (value) => {
        const matchingItems = data.filter((item) => {
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
            setInputText(filteredData[activeItem - 1].name)
            setFilterData(data)
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
        setFilterData(data);
    }, [data]);

    return (
        <Fragment>
            <div className={`${styles.autocomplete} ` + ( active ? `${styles.autocompleteActive}` : '') }>
                <Label label={label} />
                <input 
                    type="text"  
                    data-active={active}
                    data-active-item = {activeItem}
                    className={`${styles.autocompleteInput}`}
                    value={inputText}  
                    onChange={(event) => filterData(event.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setActive(true)} 
                    onBlur={() => setActive(false)} 
                    placeholder={placeholder}
                />
                <div className={`${styles.autocompleteCaret}`}></div>
                {filteredData.length > 0 && 
                <Dropdown active={activeItem} data={filteredData} emit={setInputText} />
                }
            </div>
            
        </Fragment>
    )
}
export default Autocomplete;