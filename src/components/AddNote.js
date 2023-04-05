import {useState} from "react";

const AddNote=({handleAdd})=>{
	const [newNote,setNewNote]=useState("");
	const characterCount=200;

	const onchangeText=(e)=>{
		if(characterCount-e.target.value.length>=0){
			setNewNote(e.target.value);
		}
		
	}
	const saveNote=()=>{
		if(newNote.trim().length>0){
			handleAdd(newNote);
			setNewNote("");
		}
	}

	return(
		<div className="note add-note">
		<textarea rows="8" cols="10" value={newNote} placeholder="Type your note here..." onChange={onchangeText}>
		</textarea>
		<div class="note-footer">
		<small>{characterCount-newNote.length} Remaining</small>
		<button onClick={saveNote} className="save-btn">SAVE</button>
		</div>
		</div>
		);
}

export default AddNote;