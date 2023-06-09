import {MdDeleteForever} from "react-icons/md";

const Note=({id,text,date})=>{
	return(
		<div className="note">
		<h6>{text}</h6>
		<div className="note-footer">
		<small>{date}</small>
		<MdDeleteForever className="delete-icon" size="1.3em"/>
		</div>
		</div>
		);
}

export default Note;