// import React, { Component } from 'react'
import React from 'react'
import {FacebookShareButton, FacebookIcon, TwitterIcon,TwitterShareButton, WhatsappShareButton, WhatsappIcon} from "react-share";
// export class NewsItem extends Component {
  const NewsItem = (props)=>{
    const shareUrl = 'https://www.facebook.com/'
    const shareUrlt = 'https://www.twitter.com/'
  // render() {
    // let{title,description,imgUrl,newsUrl,author,date,source} =props;
    let{title,description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3"> 

        <div className="cards my-3">
          <div 
          // this is the code to fix the badge inside the card
          style= {{display:'flex',
          justifyContent:'flex-end',
         position:'absolute'}}>
        {/* <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span> */}
        <span className=" badge rounded-pill bg-danger">{source}</span>
</div>
  {/* <img src={imgUrl} className="card-img-top" alt="..."/> */}
  {/* <img src={!imgUrl?"https://c.ndtvimg.com/2023-10/bpk9iqmg_joe-biden-afp_625x300_17_October_23.jpeg":imgUrl} className="card-img-top" alt="..."/> */}
                {/* ownlogic implemented */}
  {/* <img src={imgUrl?imgUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/8E86/production/_131468463_gettyimages-101885398.jpg"} className="card-img-top" alt="..."/> */}
  <img src={imgUrl?imgUrl:"https://1.bp.blogspot.com/-AjY2eYhHAk0/XkdZ1lTDclI/AAAAAAAAAC8/pj1OJ6aUpz4PjiHTNt-qXrTElXe1iIiKQCLcBGAsYHQ/s1600/IMG_20200108_151538_222.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color: props.mode==='dark'?'white':'#080a31'}} className="card-title">{title}</h5>
    <p style={{color: props.mode==='dark'?'white':'#080a31'}} className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}  </small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read More..</a>
    {/* <h6>Share now</h6> */}
    {/* facebook--- */}
    <FacebookShareButton className='mx-2' url={shareUrl}>
 <FacebookIcon size={30}/>
</FacebookShareButton>
{/* twitter-- */}
 <TwitterShareButton className='mx-2' url={shareUrlt}>
 <TwitterIcon size={30}/>
</TwitterShareButton>
{/* whatsapp ---- */}
<WhatsappShareButton className='mx-2' url={shareUrlt}>
 <WhatsappIcon size={30}/>
</WhatsappShareButton>

  </div>
      </div>
       </div>
    )
  // }
}

export default NewsItem;
