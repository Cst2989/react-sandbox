import React, { Fragment, useState } from 'react';
import './autocomplete.scss';
import useConstant from 'use-constant';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {
    useAsyncAbortable,
} from 'react-async-hook';
import axios from 'axios';

const Autocomplete = (props) => {
    const Http = axios.create();
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);
    const [inputReadonly, setReadOnly] = useState(false);
    const searchForResults = async (
        text,
        abortSignal,
    ) => {
        if(text) {
            setReadOnly(true);
            const result = await Http.get(
                `/api/v1/products?page=1,100&filter=name~~${text};;`
            );
            if (result.data) {
                setResults(result.data);
            }
    
            
            setTimeout(function(){
                setReadOnly(false)
            },2000);
        }
    }
    const debouncedSearchStarwarsHero = useConstant(() =>
        AwesomeDebouncePromise(searchForResults, 500)
    );
    const search = useAsyncAbortable(
        async (abortSignal, text) => {
        // If the input is empty, return nothing immediately (without the debouncing delay!)
        if(!text) return;
        return debouncedSearchStarwarsHero(text, abortSignal);
    },
      // Ensure a new request is made everytime the text changes (even if it's debounced)
        [inputText]
    );
    const selectItem = (item) => {
        item.rank = 1; //to figure out
        item.score = 12; // to figure out
        setInputText('');
        setResults([]);
        props.emit(item)
    }
    return (
        <Fragment>
            <div className="input autocomplete">
                <input type="text" readOnly={inputReadonly}  className="form-control" value={inputText}  onChange={(event) => setInputText(event.target.value)} placeholder={props.placeholder}/>
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