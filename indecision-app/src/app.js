// const obj = {
//     name: 'Vladimir',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind({name: 'Greti'});
// console.log(getName());
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer :)!';
        const options = ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'];

        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handle Pick!');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);

    }
    handleRemoveAll() {
        console.log(this.props.options);
        //alert('handleRemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    // this.props.options.map((option) => <p key={option}>{option}</p>)
                    this.props.options.map((option) => <Option key={option} optionTex={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionTex}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button> Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));