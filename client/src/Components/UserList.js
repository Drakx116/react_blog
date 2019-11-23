import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`localhost:3000/users`)
            .then(res => {
                console.log(res);
                this.setState({ res });
            })
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}
