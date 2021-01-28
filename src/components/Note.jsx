import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

var Note = (props) => (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button 
            onClick={() => {
                props.delNote(props.id)
            }}>
            <DeleteOutlineIcon />    
        </button>
    </div>
)
export default Note;