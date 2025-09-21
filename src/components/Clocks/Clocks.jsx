import React, { useEffect, useState } from 'react';
import Clock from '../Clock/Clock';
import './clocks.scss';
import moment from 'moment-timezone';


const Clocks = () => {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const [currentTime, setCurrentTime] = useState([]);

    console.log(currentTime)
    useEffect(() => {

        // const zonesArray = ["Asia/Kolkata", "America/New_York", "Europe/London", "America/Los_Angeles"];
        const zonesArray = JSON.parse(localStorage.getItem("zones"));

        // console.log(JSON.parse(localStorage.getItem("zones")))

        const id = setInterval(() => {

            setCurrentTime(() => {
                let currentTimeArray = [];
                zonesArray?.map((val, index) => {
                    let time = moment().tz(val.timezone);

                    // currentTimeArray.push(time);
                    currentTimeArray.push({
                        time,
                        "city": val.city,
                        "country": val.country

                    });
                })
                return currentTimeArray;
            })

        }, 1000)
        const timezones = moment.tz.names();

        return () => {
            clearInterval(id);
        }
    }, [currentTime])


    return (
        <div className='clocks-body'>

            {

                currentTime?.map((data, index) => (
                    <Clock key={index}
                        city={data.city}
                        country={data.country}
                        hour={data.time.format("hh")}
                        minute={data.time.format("mm")}
                        second={data.time.format("ss")}
                        isAm={data.time.format("A")}
                        day={data.time.format("dddd")}
                        date={data.time.format("DD")}
                        month={data.time.format("MMMM")}
                        year={data.time.format("YYYY")}
                        Abbreviation={data.time.format("zz")}
                        offset={data.time.format("Z")}

                    />
                ))
            }

        </div>
    );
}

export default Clocks;
