'use strict';

console.log('App.js is Running!');

//JSX - JavaScript XML
//var template = /*#__PURE__*/React.createElement("h1", {id: "1234"}, "Something New!");
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        ' This is Some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

//Create templateTwo var JSX expression
//div
//  h1 --> Vladimir Stratiev
//  p --> Age: 28
//  p --> Location: Philadelphia
//  Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Vladimir Stratiev'
    ),
    React.createElement(
        'p',
        null,
        'Age: 28'
    ),
    React.createElement(
        'p',
        null,
        'Location: Sofia'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
