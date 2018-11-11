import {Component} from 'react';
import * as React from 'react';
import {Route} from 'react-router-dom';
import ChatWindow from '../chat/ChatWindow';
import NavBar from '../navigation/NavBar';
import FileUpload from '../upload/FileUpload';
import WelcomePage from './WelcomePage';


class Home extends Component<object, object> {

    constructor(props: object) {
        super(props);
    }

    public render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <NavBar />
                </div>
                <div>
                    <Route exact={true} path="/home" component={WelcomePage} />
                    <Route path="/home/chat" component={ChatWindow} />
                    <Route path="/home/upload" component={FileUpload} />
                </div>
            </div>
        )
    }
}

export default Home;