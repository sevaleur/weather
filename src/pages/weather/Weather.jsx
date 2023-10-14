import {useEffect, useState} from 'react'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import Title from '../../components/Title'

import useGetData from '../../hooks/useGetData'

const Weather = () => {

    const { error, loading, data, getData } = useGetData()

    const [ zip, setZip ]  = useState('8000')

    useEffect(() => 
    {
        if(zip.length === 4 && !isNaN(zip))
            getData(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},dk&units=metric&lang=da&appid=${process.env.REACT_APP_OPENWEATHER}`)
    }, [zip])

    return (
        <div className='weather'>
            <Title headline="Dagens vejr" />

            { error && <h2>Der er en fejl</h2>}
            { loading && <Loader/> }


            {
                data && <div>
                    <input type="text" placeholder='Indtast et postnummer' defaultValue={zip} onInput={e => setZip(e.target.value)} />

                    <h4>
                        Vejret i {data.name}
                    </h4>
                    <p className='cap-first display-4'>
                        { data.weather[0].description }
                    </p>
                    <p className='display-2'>
                        Temperature: {Math.round(data.main.temp)} &#8451;
                    </p>
                    <p>
                        Luftfugtighed: {data.main.humidity}%
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="ikon" />
                </div>
            }

        </div>
    )
}

export default Weather