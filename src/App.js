
import './App.css';
import NoteList from "./components/NoteList";
import {nanoid} from "nanoid";
import {useState} from "react";


const App=()=> {
  const [note,setNote]=useState([
  {
    id:nanoid(),
    text:"This is my First Note",
    date:"12/09/2023"
  },
  {
    id:nanoid(),
    text:"This is my Second Note",
    date:"15/06/2022"
  },
  {
    id:nanoid(),
    text:"This is my Third Note",
    date:"09/10/2023"
  },
]);
  
  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    };
    const newNotes=[...note,newNote];
    setNote(newNotes);
  }
  return (
    <div className="container">
    <NoteList note={note} handleAdd={addNote}/>
    </div>
  );
}

export default App;
