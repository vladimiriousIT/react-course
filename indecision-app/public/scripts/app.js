'use strict';

console.log('App.js is Running!');

//JSX - JavaScript XML
//var template = /*#__PURE__*/React.createElement("h1", {id: "1234"}, "Something New!");
var templateInfo = React.createElement(
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
    userName: 'Vladimir Stratiev',
    userAge: 28,
    userLocation: 'Sofia'
};

// var userName = 'Vladimir Stratiev';
// var userAge = 28;
// var userLocation = 'Sofia';

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location,
            ' '
        );
    }
}
var templateUser = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.userAge
    ),
    getLocation(user.userLocation)
);

// I --> create app object title/subtitle
//use title/subtitle in the template
//render template

// II --> only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.legth > 0 "Here are your options" "No options"
var app = {
    title: 'The Matrix',
    subtitles: 'Put your life in the hands of a computer',
    options: ['One Option', 'Two Options']
};

var templateApp = React.createElement(
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
    app.subtitles && React.createElement(
        'p',
        null,
        app.subtitles
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
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

ReactDOM.render(templateApp, appRoot);
