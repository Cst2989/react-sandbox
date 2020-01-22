import React, { Fragment, useEffect, useState } from 'react';
import Autocomplete from '../components/autocomplete';
import axios from 'axios';

const prepareManagerData = (dataObject) => {
    return dataObject.data.map(employee => {
        return {
            name : employee.attributes.name,
            avatar: employee.attributes.avatar,
            initials: employee.attributes.firstName[0] + employee.attributes.lastName[0],
            email : dataObject.included.find(account => account.id === employee.relationships.account.data.id).attributes.email
        }
    })
} 

const HomeForm = () => {
    const [data, setData] = useState([]);

    
    const getManagersData = async () => {
        const results = await axios.get('https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json');
        if (results) {
            setData(prepareManagerData(results.data));
        }
    }
    useEffect(() => {
        getManagersData();
    }, []);
    return (
        <Fragment>
            <h3 className="heading-3 l-center"> <strong>Try it out</strong></h3>
            <Autocomplete 
                label="Managers" 
                data={data}
                placeholder="Search for Managers..."
            />
        </Fragment>
    )
}
export default HomeForm;