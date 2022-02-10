import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as Left, } from '../assets/left.svg'
import {ReactComponent as Delete, } from '../assets/delete.svg'

const NotePage = () =>
{
    const location = useLocation();
    const navigate = useNavigate()
    const [note, setNote] = useState(null);
    const id = location.pathname.split("/")[2];

    const getNote =async (id)=>
    {
        if(id ==='new') return
        const res = await fetch(`/notes/${id}`)
        const data = await res.json()
        setNote(data)
    }
     const updateNote = (id)=>
    {
        fetch(`/notes/${id}/`,
            {
                method: "PUT",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(note)
            }).then( () =>{navigate("/")})
    }
     const createNote = ()=>
    {
        fetch(`/notes/`,
            {
                method: "POST",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(note)
            }).then( () =>{navigate("/")})
    }
     const deleteNote = (id)=>
    {
        fetch(`/notes/${id}/`,
            {
                method: "DELETE",
                headers: {'Content-Type': "application/json"},
            }).then( () =>{ navigate("/")})
    }
    useEffect( () =>
    {
        getNote(id).then(() => {})

    }, [id]);

    const handleClick=()=>
    {
        if(id !== 'new' && note.body === '')
        {
            deleteNote(id)
        }
        else if(id !== 'new')
        {
            updateNote(id)
        }
        else if(id ==='new' && note !==null)
        {
            createNote()
        }
    }
    const delete_note=()=>
    {
        deleteNote(id)
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to={'/'} >
                       <Left onClick={handleClick}/>
                    </Link>
                </h3>
                {id !=='new'?( <button onClick={delete_note} ><Delete/></button>):
                    (<button onClick={handleClick}>Done</button>)
                }

            </div>
            <textarea onChange={(e) =>{setNote({...note, 'body':e.target.value})}} value={note?.body}/>
        </div>
    );
}
export default NotePage
