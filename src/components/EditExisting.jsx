import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteNote,
  toggleEditExisting,
  updateNotes,
} from '../redux/noteSlice';

const EditExisting = () => {
  const dispatch = useDispatch();

  const notes = useSelector((store) => store?.note?.notes);
  const editIndex = useSelector((store) => store?.note?.editExisting?.index);
  const { heading, note } = notes[editIndex];

  const [editHeading, setEditHeading] = useState(heading);
  const [editNote, setEditNote] = useState(note);

  const currentNote = notes?.[editIndex];

  useEffect(() => {
    if (currentNote) {
      setEditHeading(heading);
      setEditNote(note);
    }
  }, [editIndex, notes]);

  const handleToggleEdit = () => {
    dispatch(toggleEditExisting());
    dispatch(
      updateNotes({ index: editIndex, heading: editHeading, note: editNote })
    );
  };

  const handleDeleteNote = () => {
    if (confirm('Are you sure to delete the Note?')) {
      dispatch(toggleEditExisting());
      dispatch(deleteNote({ index: editIndex }));
    } else {
      return;
    }
  };

  if (!currentNote) {
    return null;
  }

  return (
    <div className="w-6/12 mx-auto border border-gray-300 rounded-lg shadow-lg">
      <div className="border-b border-gray-300 p-4">
        <textarea
          className="text-2xl font-semibold h-14 w-full pr-2 pt-4 focus:outline-none resize-none bg-transparent placeholder-gray-500"
          placeholder="Heading"
          value={editHeading}
          onChange={(e) => setEditHeading(e.target.value)}
        ></textarea>
      </div>
      <div className="p-4">
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your notes here..."
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
        ></textarea>
      </div>
      <button
        className="w-4/12 mb-3 ml-2 font-semibold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleToggleEdit}
      >
        Save
      </button>
      <button
        className="w-2/12 items-end font-semibold mb-3 ml-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleDeleteNote}
      >
        Delete
      </button>
    </div>
  );
};

export default EditExisting;
