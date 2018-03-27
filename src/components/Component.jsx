const React = require('react');

class App extends React.Component{
    handleClick(){
        console.log('click');
    }
    render() {
        return(
            // React.createElement('h1',null,'hola mundo con react')
            <div>
                <h1>hola mundo</h1>
                <button onClick={this.handleClick}>click</button>
            </div>
            
        )
    }
}

module.exports =  App;