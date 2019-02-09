import React, { Component } from "react"
import API from "../../utils/API"

class UploadImage extends Component {

    handleUpload = (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.append('uploadFile', document.getElementById('uploadFileInput').files[0]);
        API.saveImage(data)
            .then(res => console.log(res));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                        <input id="uploadFileInput" className="form-control" type="file" />
                    </div>

                        
                </form>

                <img src={`/api/image/5c47ca4b98f99c30afb747a4`} alt="profileImage"></img>

            </div>

        )
    }
}

export default UploadImage;