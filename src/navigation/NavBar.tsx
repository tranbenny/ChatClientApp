import {Component} from 'react';
import * as React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component<object, object> {

    constructor(props: object) {
        super(props);
    }

    public render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home/chat">Chat</Link></li>
                    <li><Link to="/home/upload">File Upload</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;