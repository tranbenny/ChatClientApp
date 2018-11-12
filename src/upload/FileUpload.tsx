import axios from 'axios';
import {Component} from 'react';
import * as React from 'react';

interface IFileUploadState {
    imageURL: string;
}

class FileUpload extends Component<object, IFileUploadState> {
    
    private uploadInput: any;
    private fileName: any;

    constructor(props: object) {
        super(props);

        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    public handleUploadImage(event: React.FormEvent) {
        event.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        
        axios.post('http://localhost:3000/upload', data)
        .then((response: any) => {  
            const responseFileName: string = response.fileName;
            this.setState({
                imageURL: responseFileName
            });
        });
    }
    
    public render() {
        return (
            <div>
                <h1>File Upload</h1>
                <form onSubmit={this.handleUploadImage}>
                    <div>
                        <input ref={(ref) => {this.uploadInput = ref; }} type="file" />
                    </div>
                    <div>
                        <input ref={(ref) => {this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
                    </div>
                    <br />
                    <div> 
                        <button>Upload</button>
                    </div>
                    <img src={this.state.imageURL} alt="imt" />
                </form>
            </div>
        )
    }
}

export default FileUpload;