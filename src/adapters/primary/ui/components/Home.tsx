import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import NoteList from '../../../secondary/NoteList';
import AddNote from '../../../secondary/AddNote';


const NOTES_KEY = 'notesApp_notes';
function Home() {
  const [notes, setNotes] = useState<{ title: string; description: string; }[]>([]);

  // Cargar notas del Local Storage cuando el componente se monta
  useEffect(() => {
    const storedNotes = localStorage.getItem(NOTES_KEY);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Guardar notas en el Local Storage cuando el estado cambia
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  // Función para agregar una nota
  const handleAddNote = (newNote: { title: string; description: string; }) => {
    setNotes([...notes, newNote]);
  };

  // Función para eliminar una nota por su índice
  const handleDeleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const { logout } = useAuth0();

  const {
    // user, 
    isAuthenticated,
    isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
 

  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <>
          {/* <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p> */}

          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
          <div>
            
            <AddNote onAdd={(newNote: { title: string; description: string; }) => handleAddNote(newNote)} />
            <NoteList notes={notes} onDelete={handleDeleteNote} />
          </div>
        </>
      ) : (
        <p>
          El usuario no se ha logueado ¿Deseas{" "}
          <a
            href="/signin"
            style={{ color: "red", textDecoration: "underline" }}
          >
            loguearte
          </a>
          ?
        </p>
      )}
    </div>
  );
}

export default Home;
