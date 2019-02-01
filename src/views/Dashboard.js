import React from 'react';
import {Button} from 'react-bootstrap';
import API from '../utils/API';

export default class Dashboard extends React.Component {
    constructor (props) {
        super (props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render () {
        return (
        <div className="Dashboard">
            <Button
            onClick={this.disconnect}
            bsSize="large"
            type="submit"
            >
            Se déconnecter
            </Button>
        </div>
        )
    }
}
