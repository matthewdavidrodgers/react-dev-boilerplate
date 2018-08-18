import React from 'react';
import ReactDOM from 'react-dom';

const FunctionalComponent = ({ title }) => <h1>{title}</h1>;

const titleString = 'An empty boilerplate for a React/Webpack/Babel project (using eslint)';

ReactDOM.render(
    <FunctionalComponent title={titleString} />,
    document.getElementById('root')
);

module.hot.accept();