import Note from "./Note";
import AddNote from "./AddNote";

const NoteList=({note,handleAdd})=>{
	return(
		<div className="note-list">
		{note.map((notes)=>(
			<Note id={notes.id} text={notes.text} date={notes.date}/>
		))}
		<AddNote handleAdd={handleAdd}/>
		</div>
		);
}
export default NoteList;