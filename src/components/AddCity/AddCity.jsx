import React, { useEffect, useState } from 'react';
import './addCity.scss'
import data from '../../data/data.json'
import { addTimezoneController } from '../../controller/controller.js';

const AddCity = ({ setIsClose }) => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [timezone, setTimezone] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addTimezoneController(city, country, timezone);
        setIsClose(pre => !pre)
    }
    return (
        <div className='addCity'>

            <form action="" onSubmit={submitHandler}>
                <div className='close-Icon-btn' onClick={() => { setIsClose(pre => !pre); }}>
                    x
                </div>

                <p>Add City</p>

                <div>
                    <input type="text" placeholder='City' name="" id="" required onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <select required value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="" disabled>Select Country</option>
                        {
                            data.countries?.map((country, index) => (
                                <option value={country.code} key={index}>{country.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <select required value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                        <option value="" disabled>Select Timezone</option>
                        {
                            data.timezones?.map((timezone, index) => (
                                <option value={timezone} key={index}>{timezone}</option>
                            ))
                        }
                    </select>
                </div>

                <div><button>Add</button></div>
            </form>

        </div>
    );
}

export default AddCity;
