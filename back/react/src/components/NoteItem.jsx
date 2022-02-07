import {Link} from "react-router-dom";

const NoteItem = ({note}) =>
{
    const getTitle=(note)=>
    {
        const title = note.body.split('\n')[0]
        if(title.length>40)
        {
            return title.slice(0,40)
        }
        return title
    }
    const getTime =(note)=>
    {
        return new Date(note.update).toLocaleDateString()
    }
    const getContent=(note)=>
    {
        let title = getTitle(note)
        let content = note.body.replaceAll('\n',' ')
        content = content.replaceAll(title, '')
        if(content.length>40)
        {
            return content.slice(0,40)+'...'
        }
        else return content
    }

    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className="notes-list-item">
                    <h3>{getTitle(note)}</h3>
                    <p>
                        {getContent(note)}
                        <span style={{float:"right"}}>{getTime(note)}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}
export default NoteItem
