import React, { useState } from 'react'
import Card from '../components/Card';

const Home = () => {

  const[news,setnews]=useState([]);

  fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3cd99bdf93e346f8b02ced24e1b1db0a")
    .then(res => res.json())
    .then(json => setnews(json.articles))
    .catch(err => console.error('error:' + err));
    console.log(news)
  return (
   <div className='home'>

        <div className='container'>

      {  
          news &&  news.map((item) => (
               <Card   
                 title={item.title}
                 content={item.content}
                 url={item.url}
                 image={item.urlToImage}

               />
             ))
         
           }

        </div>
    </div>
  )
}

export default Home