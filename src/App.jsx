import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./Notes";
import AddMore from "./AddMore";

function App() {
  const [notes, setNotes] = useState(fetchFromLocalStorage());

  useEffect(() => {
    // Save notes to local storage whenever notes change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function fetchFromLocalStorage() {
    const doesNotesExist = localStorage.getItem("notes");
    if (doesNotesExist && doesNotesExist.length > 0) {
      try {
        const savedNotes = JSON.parse(doesNotesExist);
        return savedNotes;
      } catch (e) {
        console.error("Error parsing JSON from localStorage:", e);
      }
    }
    return [];
  }

  return (
    <div>
      <AddMore setNotes={setNotes} />
      <Notes notes={notes || []} setNotes={setNotes} ß />
    </div>
  );
}

export default App;
