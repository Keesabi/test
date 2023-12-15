// Blog.js
import React from 'react';
import './blog.css';



const Blog = () => {
  return (
    <div id="container">
      {/* Section 1 */}
      <section>
      <img src='../medicaments/medic.png' alt='...'/>
        <div className="content">
          <h2>Compléments alimentaires : la clé de la jeunesse et de la peau éclatante grâce au collagène</h2>
          <p>Découvrez les multiples bienfaits qu'offrent les compléments alimentaires au collagène pour simplifier votre routine beauté et préserver votre jeunesse.</p>
          <a href="#" className="button">Lire la suite</a>
        </div>
      </section>

      {/* Section 2 */}
      <section>
      <img src='../medicaments/medic.png' alt='...'/>
        <div className="content">
          <h2>Compléments alimentaires : la clé de la jeunesse et de la peau éclatante grâce au collagène</h2>
          <p>Découvrez les multiples bienfaits qu'offrent les compléments alimentaires au collagène pour simplifier votre routine beauté et préserver votre jeunesse.</p>
          <a href="#" className="button">Lire la suite</a>
        </div>
      </section>

      {/* Section 3 */}
      <section>
      <img src='../medicaments/medic.png' alt='...'/>
        <div className="content">
          <h2>Compléments alimentaires : la clé de la jeunesse et de la peau éclatante grâce au collagène</h2>
          <p>Découvrez les multiples bienfaits qu'offrent les compléments alimentaires au collagène pour simplifier votre routine beauté et préserver votre jeunesse.</p>
          <a href="#" className="button">Lire la suite</a>
        </div>
      </section>
    </div>
  );
}

export default Blog;
