import React from 'react'

import { categories } from '../Data'

const ArticleAsides = () => {
  return (
    <>

    <aside id="categories" className="card">
          <h2>Categories</h2>
          <ul className="list" >
          {categories.map((category) => {
                const {id, name, url} = category
            return (
            <li key={id}>
              <a href={url}>
                <i className="fas fa-chevron-right" /> {name}
              </a>
            </li>
            )
          })}
          </ul>
        </aside>

        <aside className="card bg-secondary">
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?
          </p>
          <a href="/src/pages/Register.jsx" className="btn btn-dark btn-block">
            Join Now
          </a>
        </aside>
        </>
  )
}

export default ArticleAsides