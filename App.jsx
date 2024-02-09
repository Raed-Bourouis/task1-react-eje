import './App.css'
import React from 'react'
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>Work</li>
        <li>Approach</li>
        <li>Culture</li>
        <li>Careers</li>
        <li>Blog</li>
      </ul>
      <button>Get in touch</button>
    </div>
  );
}

function MainArticle() {
  return (
    <div className="main-article">
      <h1>Interview — What it’s like to work remotely in big-sized product development?</h1>
      <p>People say that developing products isn’t easy. Neither is it to build long-distance relationships. But, how about doing both, simultaneously?</p>
      <p>Bruno Texeira, Lead Product Owner</p>
      <img src="#" alt="Interview" />
    </div>
  );
}

function Author({ name, role }) {
  return (
    <div className="author">
      <p>Written by {name}, {role}</p>
    </div>
  );
}

function Article({subject, date, title, content}) {

  return (
    <ul className="titre">
      <img src=""></img>
      <h6>{subject}</h6>
      <h7>{date}</h7>
      <h1>{title}</h1>
      <p>{content}</p>
    </ul>
  );

}

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainArticle />
      <Article subject="Dystopian" date="1985" title="The handmaid's tale" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic totam pariatur possimus quibusdam vero rem beatae magni, accusamus alias, explicabo adipisci illum a, dolorum nesciunt placeat odit assumenda esse. Aspernatur?"></Article>
      <Author name="Margaret Atwood" role="Authot" />
    </div>
  );
}


export default App
