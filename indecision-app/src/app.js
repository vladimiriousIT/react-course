console.log('App.js is Running!');

//JSX - JavaScript XML
//var template = /*#__PURE__*/React.createElement("h1", {id: "1234"}, "Something New!");
const templateInfo = (
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

const user = {
    userName: 'Vladimir Stratiev',
    userAge: 28,
    userLocation: 'Sofia'
};

// var userName = 'Vladimir Stratiev';
// var userAge = 28;
// var userLocation = 'Sofia';

function getLocation(location){
    if(location){
        return <p>Location: {location} </p>;
    }
}
const templateUser = (
    <div>
    <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
    {(user.userAge && user.userAge >= 18) && <p>Age: {user.userAge}</p> }
    {getLocation(user.userLocation)}
    </div>
);

// I --> create app object title/subtitle
//use title/subtitle in the template
//render template

// II --> only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.legth > 0 "Here are your options" "No options"

// III --> Use const if we are never reasighn
// Only wen we reasighn veriable then use let 
const app = {
    title: 'The Matrix',
    subtitles: 'Put your life in the hands of a computer',
    options: ['One Option', 'Two Options']
}

const templateApp = (
    <div>
        <h1>The Movie is: {app.title}</h1> 
        <p>Subtitles: {app.subtitles}</p> 
        {app.subtitles && <p>{app.subtitles}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(templateApp, appRoot);