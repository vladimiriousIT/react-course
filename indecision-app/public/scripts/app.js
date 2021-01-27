'use strict';

console.log('App.js is Running!');

// const templateApp = (
//     <div>
//         <h1>The Movie is: {app.title}</h1> 
//         <p>Subtitles: {app.subtitles}</p> 
//         {app.subtitles && <p>{app.subtitles}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
//         <ol>
//         <li>Item One</li>
//         <li>Item Two</li>
//         </ol>
//     </div>);

var count = 0;
var addOne = function addOne() {
    console.log('plusOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);
console.log(templateTwo);

//create two new button
// Make Button "-1" set up minusOne() and register - log 'minusOne'
// Make Reset buttor "reset" - setup reset() log "reset"

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
