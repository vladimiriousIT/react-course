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

var user = {
    'userName': 'Vladimir Stratiev',
    'userAge': 28,
    'userLocation': 'Sofia'
};

// var userName = 'Vladimir Stratiev';
// var userAge = 28;
// var userLocation = 'Sofia';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.userLocation
    )
);

//create app object title/subtitle
//use title/subtitle in the template
//render template
var app = {
    'title': 'The Matrix',
    'subtitles': 'The Matrix Subtitles'
};

var templateObject = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'The Movie is: ',
        app.title
    ),
    React.createElement(
        'p',
        null,
        'Subtitles: ',
        app.subtitles
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

var appRoot = document.getElementById('app');

ReactDOM.render(templateObject, appRoot);
