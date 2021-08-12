
import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
   const [articles,setArticles] = useState([]);
   useEffect(() =>{
     fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1e7b5a8d3ec84caf90324436f42ca660')
     .then(res=>res.json())
     .then(data=>setArticles(data.articles));
   },[]);
  return (
    <div>
      <h1>Headline: {articles.length}</h1>
      {
        articles.map(article =><News article={article}></News> )
      }
    </div>
  );
}

export default App;
