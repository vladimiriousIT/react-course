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

var templateTwo = (
    <div>
    <h1>Vladimir Stratiev</h1>
    <p>Age: 28</p>
    <p>Location: Sofia</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);