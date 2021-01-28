import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';


function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });
    const [isCreating, setCreate] = useState(false);

    function createNote(event) {
        const {name, value} = event.target;
        setNewNote((prevValue) => {
            return {
                ...newNote,
                [name]: value
            }
        })
    }

    function dropCreateArea(){
        setCreate(true)
    }

    return (
        <div>
            <h1 className="title">{props.title}'s Notes</h1>
        <form className="create-note">
            <Collapse in={isCreating}>
            {isCreating && <input
                onChange={createNote} 
                name="title" 
                value={newNote.title} 
                placeholder="Title" /> }
            </Collapse>
            <textarea 
                onClick={dropCreateArea}
                onChange={createNote} 
                name="content" 
                value={newNote.content} 
                placeholder="Take a note..." 
                rows={isCreating ? "3" : "1"} />
           <Collapse in={isCreating}>
            <Zoom in={isCreating}>
                <Fab aria-label="add" 
                    onClick={(event) => {
                        props.addNew(newNote);
                        event.preventDefault();
                        setNewNote({title: "", content: ""});
                        setCreate(false);
                    }}
                    className="addBtn">
                    <AddIcon />
                </Fab>
            </Zoom>
            </Collapse>   
        </form>
        </div>
    );
}

export default CreateArea;
