import React from 'react';
import './clock.scss';
import { MdDeleteOutline } from "react-icons/md";
import { deleteCityController } from '../../controller/controller';


const Clock = ({ city, country, hour, minute, second, isAm, day, date, month, year, Abbreviation, offset }) => {

    const deleteColockHandler = (city) => {
        const confirmed = window.confirm("Are you sure you want to delete?");
        if (!confirmed) return
        deleteCityController(city)
    }

    return (
        <div className='clock' >

            <div className="clock-header">
                <div className="location">
                    <div className="country-flag-icon">
                        <img alt="Flag" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.toUpperCase()}.svg`} />
                    </div>
                    <p>{city}</p>
                </div>

                <div className="option-icon" onClick={() => deleteColockHandler(city)}>
                    <p>
                        <MdDeleteOutline />
                    </p>
                </div>
            </div>


            <div className="clock-body">
                <div className='current-time'>
                    <p>{hour}:{minute}:<span>{second}</span></p>
                    <span>{isAm}</span>
                </div>

                <div className="day-date">
                    <p>{day}, {date} {month}, {year}</p>
                </div>

            </div>

            <div className="time-zone">
                <div><p>{Abbreviation} {offset}</p></div>
            </div>
        </div>
    );
}

export default Clock;