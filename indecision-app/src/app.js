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

let count = 0;
const addOne = () => {
    console.log('plusOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateTwo);

//create two new button
// Make Button "-1" set up minusOne() and register - log 'minusOne'
// Make Reset buttor "reset" - setup reset() log "reset"

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);