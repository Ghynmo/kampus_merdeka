import React from 'react'
import './newsitem.css'
import imgExample from '../images/bg-img.png'

export default function NewsItem() {
    return (
        <div className="newsItem-container">
            <div className="news-thumbnail"><img src={imgExample} alt="NewsThumbnail" /></div>
            <div className="news-text">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi mollitia veritatis dolorum nam beatae?</p>
            </div>
        </div>
    )
}
