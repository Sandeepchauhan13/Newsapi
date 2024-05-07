// import React, { Component } from 'react'
import React, {useEffect, useState} from 'react';s
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

// export class News extends Component {
  const News =(props)=>{
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults, setTotalResults]=useState(0)
   


  // static defaultProps={
  //   country:'in',
  //   pageSize:5,
  //   category: 'general',
  // }
  // static propTypes ={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category:PropTypes.string,
  // }


  
  // articles = [
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Yunchan Lim: 19-year-old piano sensation signs record deal",
  //       "description": "Yunchan Lim, once called \"classical music’s answer to K-pop\", signs to the UK's Decca Records.",
  //       "url": "http://www.bbc.co.uk/news/entertainment-arts-67145961",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B956/production/_131464474_yunchanlim-jameshole.jpg",
  //       "publishedAt": "2023-10-19T05:52:19.7743998Z",
  //       "content": "A 19-year-old pianist who has been called \"classical music's answer to K-pop\" has signed an exclusive deal with the UK's Decca Records.\r\nYunchan Lim stunned the music world last year when he became t… [+3219 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "US eases Venezuela oil sanctions after election deal",
  //       "description": "The US relaxes sanctions after an agreement is reached to hold elections in the country next year.",
  //       "url": "http://www.bbc.co.uk/news/world-latin-america-67153460",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1137/production/_131470440_mediaitem131470439.jpg",
  //       "publishedAt": "2023-10-19T03:52:15.2273523Z",
  //       "content": "The United States is easing sanctions on Venezuela after the South American country's government and opposition agreed to hold elections next year.\r\nSanctions will be eased on Venezuela's oil, gas an… [+2476 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Microsoft's new AI assistant can go to meetings for you",
  //       "description": "The ChatGPT-style tech can take notes, write emails, and take care of other \"drudgery\".",
  //       "url": "http://www.bbc.co.uk/news/technology-67103536",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/41F6/production/_131468861_gettyimages-607477465.jpg",
  //       "publishedAt": "2023-10-19T03:37:14.7430709Z",
  //       "content": "A ChatGPT-style AI assistant, developed by Microsoft and embedded into its office apps, will become available to all from 1 November, following trials.\r\nMicrosoft 365 Copilot can summarise meetings h… [+4775 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Naga Munchetty told to 'suck it up' over extreme menstrual problems",
  //       "description": "The presenter, who has a condition affecting her womb, tells MPs her problems were repeatedly dismissed.",
  //       "url": "http://www.bbc.co.uk/news/health-67151967",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/531C/production/_131467212_munchetty2.jpg",
  //       "publishedAt": "2023-10-19T02:37:20.0561259Z",
  //       "content": "Media caption, Naga Munchetty discusses women's health at the House of Commons\r\nBBC presenter Naga Munchetty has told a committee of MPs that doctors told her to \"suck it up\" after experiencing extre… [+2977 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Threats fly as Jim Jordan's bid to be US House Speaker turns ugly",
  //       "description": "One lawmaker received \"a barrage of threatening calls\". Another says his wife received anonymous texts.",
  //       "url": "http://www.bbc.co.uk/news/world-us-canada-67153625",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B867/production/_131470274_jordanindex.jpg",
  //       "publishedAt": "2023-10-19T02:37:18.2735742Z",
  //       "content": "Republican lawmakers say they have been targeted by intimidation tactics, including death threats, from allies of Jim Jordan as his bid for the US House of Representatives speakership falters.\r\nSever… [+3683 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Conor McGregor won't face charges after sexual assault claim",
  //       "description": "Prosecutors drop their inquiry into a woman's allegation the UFC fighter attacked her at a Miami arena.",
  //       "url": "http://www.bbc.co.uk/news/world-us-canada-67152914",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9C47/production/_131470004_gettyimages-1473834604-1.jpg",
  //       "publishedAt": "2023-10-18T22:52:16.8838904Z",
  //       "content": "UFC fighter Conor McGregor won't face charges over a claim of sexual assault at an NBA finals game in Florida in June, prosecutors have told the BBC.\r\nMr McGregor was accused of \"violently\" forcing h… [+1980 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Three law students who backed Israel letters lose job offers",
  //       "description": "An elite US law firm says statements backed by three Ivy League students do not fit with its values.",
  //       "url": "http://www.bbc.co.uk/news/world-us-canada-67152271",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8C9C/production/_131469953_gettyimages-525580356.jpg",
  //       "publishedAt": "2023-10-18T21:22:18.1493815Z",
  //       "content": "An elite law firm has rescinded job offers for three Ivy League students associated with letters expressing support for Palestinians that blamed Israel for the Hamas attacks.\r\nDavis Polk &amp; Wardwe… [+3370 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Chuck Grassley crowned 'matchmaker' after 20 staff marriages",
  //       "description": "Mr Grassley says 20 couples who met in his office have gone on to get married.",
  //       "url": "http://www.bbc.co.uk/news/world-us-canada-67136900",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1154A/production/_131468907_gettyimages-1473573503.jpg",
  //       "publishedAt": "2023-10-18T19:52:21.5870371Z",
  //       "content": "Social media users have a new nickname for 90-year-old Republican Senator Chuck Grassley - the \"ultimate\" matchmaker. \r\nIn a social media post on Monday, Mr Grassley said he had just attended a weddi… [+1867 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Biden backs Israel's account of deadly Gaza hospital explosion",
  //       "description": "Israeli and Palestinian officials have blamed each other for the blast in which hundreds may have died.",
  //       "url": "http://www.bbc.co.uk/news/world-middle-east-67142031",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/09DD/production/_131452520_b3c093f485f7f543bb64dcc81b0fb78912a18e1d0_189_3439_19361000x563.jpg",
  //       "publishedAt": "2023-10-18T18:37:18.1178104Z",
  //       "content": "US President Joe Biden has said a deadly blast at a Gaza hospital appears to have been caused by Palestinian militants, backing Israel's account of the incident as he visits the country.\r\nMr Biden, w… [+3363 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Natalee Holloway's suspected killer, Joran van der Sloot, admits to crime, says mother",
  //       "description": "Joran van der Sloot \"brutally murdered\" the Alabama teenager who went missing in Aruba, the judge said.",
  //       "url": "http://www.bbc.co.uk/news/world-us-canada-67150843",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8E86/production/_131468463_gettyimages-101885398.jpg",
  //       "publishedAt": "2023-10-18T17:37:19.8047121Z",
  //       "content": "A man long thought to have killed Alabama teenager Natalee Holloway 20 years ago has admitted to the crime, her mother has said.\r\nJoran van der Sloot pleaded guilty on Wednesday to extorting money fr… [+2157 chars]"
  //     }
  //   ]



  // capitlizeFirstText=(string) =>{

  const capitlizeFirstText=(string) =>{

    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  // constructor(props){
  //   super(props);
    // console.log("hello i a constructor from news component")//three times run coz three news item call
  //  state={
    //  articles: articles,
  //   articles:[],
  //    loading:true,
  //    page:1,
  //    totalResults:0,
  //  }
  //  document.title=`${capitlizeFirstText(props.category)}`;
    //  }
     
    //  async newsUpdate(){
    //   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
    //   setState({loading:true});
    //   let data= await fetch(url);
    //  let parsedData = await data.json()
    //  console.log(parsedData);
    //  setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
    //  loading: false})
    //  }
      const  newsUpdate= async ()=>{
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // setState({loading:true});
      setLoading(true)
      let data= await fetch(url);
     let parsedData = await data.json()
    //  console.log(parsedData);
     setArticles(parsedData.articles)
     setTotalResults(parsedData.totalResults)
     setLoading(false)
    //  setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
    //  loading: false})
     }

     useEffect(()=>{
      // updateNews();//use effect is inplace of component did mount 
      newsUpdate();//use effect is inplace of component did mount 
      document.title=`${capitlizeFirstText(props.category)}`;
      // eslint-disable-next-line
    //  },[input])
     },[])
     
  //  async  componentDidMount(){
      // console.log("componentdidmount")
    //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2bea445b7924ddfa12d1bb38c0d0be2&page=1&pageSize=${props.pageSize}`;
    //  setState({loading:true});
    //  let data= await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
    // loading: false})
    // newsUpdate();
    //  }




  //  handlePrevClick = async ()=>{
 const  handlePrevClick = async ()=>{
      // console.log("previous");
//       let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2bea445b7924ddfa12d1bb38c0d0be2&page=${state.page -1}&pageSize=${props.pageSize}`;
//       setState({loading:true});
//       let data= await fetch(url);
// let parsedData = await data.json()
// console.log(parsedData);
// setState({
// page: state.page - 1,
// articles: parsedData.articles,
// loading:false
// })
// setState({page: state.page - 1})
setPage(page-1)
// newsUpdate();
newsUpdate()
     }




    //  handleNextClick= async()=>{
   const  handleNextClick= async()=>{
// console.log("next");

// if(!(state.page + 1>Math.ceil(state.totalResults/props.pageSize))){
//   // if not off agar esa nahi hota hai logic for loading 
//   let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2bea445b7924ddfa12d1bb38c0d0be2&page=${state.page + 1}&pageSize=${props.pageSize}`;
//    setState({loading:true});
//   let data= await fetch(url);
//   let parsedData = await data.json()
//   console.log(parsedData);
//   setState({
//   page: state.page + 1,
//   articles: parsedData.articles,
//   loading:false
// })
// setState({page: state.page + 1})
setPage(page+1)
// newsUpdate();
newsUpdate()
}
// else{
//     let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b2bea445b7924ddfa12d1bb38c0d0be2&page=${state.page + 1}&pageSize=${props.pageSize}`;
//     let data= await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     setState({
//     page: state.page + 1,
//     articles: parsedData.articles
// })
// }
    //  }
   const fetchMoreData = async () => {
    // setState({Page: state.page + 1})
    // newsUpdate();
    // const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // setState({loading:true});
    let data= await fetch(url);
   let parsedData = await data.json()
  //  console.log(parsedData);
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
  //  setState
  //  ({
  //   articles: articles.concat(parsedData.articles),
  //    totalResults:parsedData.totalResults,
  //  loading: false})
    };
     
  // render() {
// console.log("render")
    return (
      <>
                {/* <h1 className="text-center" style={{margin:'35px 0px'}}>NewsWebApp - Top Headlines {capitlizeFirstText(props.category)}</h1> */}
                <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px',color: props.mode==='dark'?'white':'#080a31'}}>NewsWebApp - Top Headlines {capitlizeFirstText(props.category)}</h1>
              {/* {state.loading  && <Spinner/>} */}
              {loading  && <Spinner/>}
              {/* state.loading true hai then show spinner */}
       <InfiniteScroll
                      // dataLength={state.articles.length}
                      dataLength={articles.length}
                      // next={fetchMoreData}
                      next={fetchMoreData}
                      // hasMore={state.articles.length !== state.totalResults}
                      hasMore={articles.length !== totalResults}
                      loader={<Spinner/>}
                    >
                      <div className="container">
                  <div className="row">
                  {/* {!state.loading && state.articles.map((element)=>{ */}
                  {/* {state.articles.map((element)=>{ */}
                  {articles.map((element)=>{
                  //  !state.loading--- this logic is for when we click to next and previous button only loading will show not page  at the time of loading
                  return <div className="col-md-4" key ={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 


                    })}
                    </div>
                    </div>
        </InfiniteScroll>

                  {/* <div className="container d-flex justify-content-between"> */}
                    {/* flexbox properties d-flex justify-content-between in css version 5 */}
                    {/* d-flex justify-content-between-- button ek left side anotherone in right side */}
                  {/* <button disabled={state.page<=1} type="button"  className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>  */}
                  {/* <button  type="button"  className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>  */}
                  {/* <button disabled={state.page + 1 > Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button> */}
                  {/* <button  type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button> */}
                  {/* </div>   */}
                
                {/* </div> */}
      </>
    )
  // }
}
News.defaultProps={
  country:'in',
  pageSize:5,
  category: 'general',
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News;
