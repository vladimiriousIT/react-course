console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

//const numbers = [55, 101, 1000];

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <p>{app.options.length}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button> Add Option</button>
        </form>
    </div>
);

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                /*numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                }) */
            }
            <ol>
                {/* map over app.options getting back an array of list (set key and text for each) 
                    app.options.map((option) =>{
                        return <li key={option}>{option}</li>
                    })
                 */
                app.options.map((option) => <li key={option}>{option}</li>)   
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();