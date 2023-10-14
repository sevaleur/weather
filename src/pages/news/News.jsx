import { useEffect, useState } from 'react'
import Title from '../../components/Title.jsx'
import useGetData from '../../hooks/useGetData'

const News = () => {

    const [ error, loading, data, getData ] = useGetData()

    useEffect(() => {
        callAPI()
    }, [])

    const callAPI = () => 
    {
        getData('https://newsapi.org/v2/everything?q=tesla&from=2022-10-29&sortBy=publishedAt&apiKey=' + process.env.REACT_APP_NEWSAPIKEY)
    }

  return (
    <div className='News'>
        <Title headline="Dagens Nyheder"/>
        {error && <h2>Der er fejl</h2>}
        {loading && <h2>Loader</h2>}

        {
            data && console.log(data)
        }
        {
            data && data.articles.map((a, i) => 
                <div key={"news" + i}>
                    <h2>
                        {a.title}
                    </h2>
                    <p>
                        {new Date(a.publishedAt).toLocaleString("da-dk", {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'})}
                    </p>
                    <p>
                        {a.description}
                    </p>
                    <img src={a.urlToImage} alt={a.title} width="200"/>
                </div>
            )
        }
    </div>
  )
}

export default News