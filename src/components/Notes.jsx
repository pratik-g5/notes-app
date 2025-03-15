import React from 'react';
import Header from './Header';
import Editor from './Editor';
import { useSelector } from 'react-redux';
import AddNote from './addNote';
import NotesDashboard from './NotesDashboard';
import EditExisting from './EditExisting';

const Notes = () => {
  const noteData = useSelector((store) => store?.note);
  const { showEditor, notes } = noteData;
  const editExisting = noteData.editExisting.edit;

  return (
    <div>
      <Header />
      <div className="p-4 m-3 border border-black rounded-lg h-[80vh]">
        {editExisting ? (
          <EditExisting />
        ) : showEditor ? (
          <Editor />
        ) : (
          <NotesDashboard notes={notes} />
        )}
        {!editExisting && <AddNote />}
        {/* <AddNote /> */}
      </div>
    </div>
  );
};

export default Notes;
