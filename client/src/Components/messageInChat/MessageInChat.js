import React from "react";
import { Figure } from "react-bootstrap";
import "./style.css"

function MessageInChat() {
    return (
        <div>
                <Figure className="my-1 p-2 ">
                    <div className="row">
                    <div className="col-md-2 my-auto">
                        <Figure.Image
                            className="border rounded-circle chatPic"
                            alt=""
                            src="http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"
                        />
                    </div>
                    <div className="col-md-10 my-auto">
                        <Figure.Caption>
                            No hay problema, mi señorita, por dejar sus tuberías muy limpias!
                        </Figure.Caption>
                    </div>
                    </div>
                </Figure>
        </div>
    )
}

export default MessageInChat