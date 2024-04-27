import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import NoteList from '../../../secondary/NoteList';
import AddNote from '../../../secondary/AddNote';
import { message } from 'antd';

const NOTES_KEY = 'notesApp_notes';

function Home() {
  const [notes, setNotes] = useState<{ title: string; description: string; }[]>([]);

  const { logout, isAuthenticated, isLoading } = useAuth0();

  // Cargar notas del Local Storage cuando el componente se monta
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem(NOTES_KEY);
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Error al cargar notas del Local Storage:", error);
    }
  }, []);

  // Guardar notas en el Local Storage cuando el estado cambia
  useEffect(() => {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error("Error al guardar notas en Local Storage:", error);
    }
  }, [notes]);

  // Función para agregar una nota
  const handleAddNote = (newNote: { title: string; description: string; }) => {
    if (!newNote.title.trim() || !newNote.description.trim()) {
      message.error("El título y la descripción son requeridos");
      return;
    }

    setNotes([...notes, newNote]);
    message.success("Nota agregada con éxito"); // Retroalimentación al agregar
  };

  // Función para eliminar una nota por su índice con confirmación
  const handleDeleteNote = (index: number) => {
    const confirm = window.confirm("¿Estás seguro de que quieres eliminar esta nota?");
    if (confirm) {
      const newNotes = notes.filter((_, i) => i !== index);
      setNotes(newNotes);
      message.success("Nota eliminada con éxito"); // Retroalimentación al eliminar
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    // Redirige al usuario si no está autenticado
    return (
      <div>
        <Navbar />
        <p>
          El usuario no está autenticado. ¿Quieres{" "}
          <a href="/signin" style={{ color: "red", textDecoration: "underline" }}>
            iniciar sesión
          </a>
          ?
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Cerrar sesión
      </button>
      <div>
        <AddNote onAdd={handleAddNote} />
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </div>
    </div>
  );
}

export default Home;
