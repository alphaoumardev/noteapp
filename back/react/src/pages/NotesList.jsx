import {useEffect, useState} from "react";
import NoteItem from "../components/NoteItem";
import {ReactComponent as Add} from "../assets/add.svg";
import {Link} from "react-router-dom";

const NotesList = () =>
{
    const [note, setNote] = useState([]);

    const getData= async () =>
        {
            const res = await fetch("/api/notes/")
            const data = await res.json()
            console.log(data)
            setNote(data)
        }
    useEffect( () =>
    {
        getData().then(() => {})
    },[])

    return (
        <div className="notes">
            <div className="note-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{note.length} items</p>
            </div>
            <div className="note-list">
                {note.map((no, index)=>
                    <NoteItem key={index} note={no}/>
                )}
            </div>
            <Link to="/note/new" className="floating-button">
                <Add/>
            </Link>
        </div>
    );
}
export default NotesList