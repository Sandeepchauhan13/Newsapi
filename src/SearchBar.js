// import React, {useState} from 'react';
// import articles from "./SampleOutput.json";
// import {FaSearch} from 'react-icons/fa';

// const SearchBar = () => {
//    const [searchTerm, setSearchTerm]= useState("")
  
//   return (
//     <div>
//       <div className="input-wrapper">
//         <FaSearch id="search-icon" />
//         <input placeholder = "type to search.." value={query} onChange={(e) => searchPost(e.target.value)}/>
//         </div>
//         <div className="template_Container">
//             {
//                 // data.filter((val)=>{
//                     articles.filter((val)=>{
//                     if(searchTerm == ""){
//                    return val;
//                     }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                         return val;
//                     }
//                 })
//                 .map((val) =>{
//                     return(
//                         <div className = "template" key={val.id}>
//                             <img src = {val.urlToImage} alt=""/>
//                             <h3>{val.title}</h3>
//                             <p className="date and publishedat">{publishedAt}</p>
//                             </div>
//                     )
//                 })
//             }

//         </div>
//     </div>
//   )
// }

// export default SearchBar
