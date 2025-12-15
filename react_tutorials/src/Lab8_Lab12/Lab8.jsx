import React from 'react';

class CityNameChanges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Mysore'
        };
        console.log('constructor: set city to Mysore');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: component mounted');
        setTimeout(() => {
            this.setState({ city: 'Banglore' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: Decide to re-render or not');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Before update');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component updated');
    }

    render() {
        console.log('render method : rendering city');
        return (
            <div style={{fontFamily:'Arial', textAlign:'center', padding:'10px'}}>
                <h1>City: {this.state.city}</h1>
            </div>
        );
    }
}

export default CityNameChanges;
