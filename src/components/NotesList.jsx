import React from 'react';
import { useSelector } from 'react-redux';
import NotesCard from './NotesCard';

const NotesList = () => {
  const notesData = useSelector((store) => store?.note.notes);

  if (notesData.length === 0) return null;

  return (
    <div className="flex">
      {notesData.map((note, index) => (
        <NotesCard
          key={index}
          index={index}
          note={note}
        />
      ))}
    </div>
  );
};

export default NotesList;
