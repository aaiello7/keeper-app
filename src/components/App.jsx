import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Login from "./Login";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const [isLoggedIn, setLogin] = useState(false);
    const [headingText, setHeadingText] = useState("");
    const [notesList, setNotes] = useState([]);

    function logIn(name) {
        setHeadingText(name);
        setLogin(true);
    }

    function newEntry(note) {
        setNotes([...notesList, note]);
    }

    function deleteNote(id) {
        setNotes(prevValue => {
            return prevValue.filter((item, index) =>{
                return index !== id;
            });
        }
        )
    }

    return (
        <div>
            <Header />
                {!isLoggedIn ? 
                <Login 
                    newLogin={logIn}/> :
                    <div>
                    <CreateArea 
                        title={headingText}
                        addNew={newEntry}/>
                    {notesList.map((entry, index) => (
                    <Note
                        delNote={deleteNote}
                        key={index}
                        id={index}
                        title={entry.title}
                        content={entry.content}
                    />))}
                    </div>
                }
            <Footer />
        </div>
    )}

export default App;