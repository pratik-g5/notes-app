import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditExisting, updateNotes } from '../redux/noteSlice';

const EditExisting = () => {
  const dispatch = useDispatch();

  const notes = useSelector((store) => store?.note?.notes);
  const editIndex = useSelector((store) => store?.note?.editExisting?.index);
  const { heading, note } = notes[editIndex];

  const [editHeading, setEditHeading] = useState(heading);
  const [editNote, setEditNote] = useState(note);

  useEffect(() => {
    if (notes && editIndex) {
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
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleToggleEdit}
      >
        Save
      </button>
    </div>
  );
};

export default EditExisting;
