import React from 'react'

import {articles} from '../Data'


const Articles = () => {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          {articles.map((article) => {
            const { id, category, img, headline, text, classAdditions } = article;
            if(id === 4 || id === 7 ){
              return (
                <article 
                className={`card ${classAdditions}`} 
                key={id}>
                <div>
                  <div 
                  className={`category category-${category.toLowerCase()}`}>{category}
                  </div>
                  <h3>
                    <a href="article.html">{headline}</a>
                  </h3>
                  <p>{text}</p>
                </div>
                <img src={img} alt=""/>
              </article>
              )
            }
            return (
              <article 
                className={`card ${classAdditions}`} 
                key={id}>
                <img src={img} alt=""/>
                <div>
                  <div 
                  className={`category category-${category.toLowerCase()}`}>{category}
                  </div>
                  <h3>
                    <a href="article.html">{headline}</a>
                  </h3>
                  <p>{text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Articles