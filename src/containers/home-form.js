import React, { Fragment, useEffect, useState } from 'react';
import Autocomplete from '../components/autocomplete';
import axios from 'axios';
const HomeForm = () => {
    const [data, setData] = useState([]);
    const getManagersData = async () => {
        const results = await axios.get('https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json');
        if (results) {
            setData(results.data);
        }
    }
    useEffect(() => {
        getManagersData();
    }, [data]);
    return (
        <Fragment>
            <h3 className="heading-3 l-center"> <strong>Try it out</strong></h3>
            <Autocomplete 
                label="Managers" 
                data={data.data}
                placeholder="Search for Managers..."
            />
        </Fragment>
    )
}
export default HomeForm;