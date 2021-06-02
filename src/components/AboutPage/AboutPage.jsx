import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Technologies used:</p>
        <ul>
          <li>axios</li>
    <li>bcryptjs</li>
    <li>cookie-session</li>
    <li>dotenv</li>
    <li>express</li>
    <li>passport</li>
    <li>passport-local</li>
    <li>pg</li>
    <li>prop-types</li>
    <li>react</li>
    <li>react-dom</li>
    <li>react-redux</li>
    <li>react-router-dom</li>
    <li>react-scripts</li>
    <li>redux</li>
    <li>redux-logger</li>
    <li>redux-saga</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
