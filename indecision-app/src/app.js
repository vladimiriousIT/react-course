console.log('App.js is Running!');

//JSX - JavaScript XML
//var template = /*#__PURE__*/React.createElement("h1", {id: "1234"}, "Something New!");
var templateOne = (
    <div>
        <h1>Indecision App</h1> 
        <p> This is Some info</p> 
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
    </div>);

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
var templateTwo = (
    <div>
    <h1>{user.userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {user.userLocation}</p>
    </div>
);

//create app object title/subtitle
//use title/subtitle in the template
//render template
var app = {
    'title': 'The Matrix',
    'subtitles': 'The Matrix Subtitles'
}

var templateObject = (
    <div>
        <h1>The Movie is: {app.title}</h1> 
        <p>Subtitles: {app.subtitles}</p> 
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(templateObject, appRoot);