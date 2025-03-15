import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNotes, toggleShowEditor } from '../redux/noteSlice';

const Editor = () => {
  const dispatch = useDispatch();
  const heading = useRef(null);
  const note = useRef(null);

  return (
    <div className="w-6/12 mx-auto border border-gray-300 rounded-lg shadow-lg">
      <div className="border-b border-gray-300 p-4">
        <textarea
          ref={heading}
          className="text-2xl font-semibold h-14 w-full pr-2 pt-4 focus:outline-none resize-none bg-transparent placeholder-gray-500"
          placeholder="Heading"
        ></textarea>
      </div>

      <div className="p-4">
        <textarea
          ref={note}
          className="w-full h-40 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your notes here..."
        ></textarea>
      </div>

      <div className="p-4 bg-gray-50 rounded-b-lg">
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            const notes = document.querySelector('textarea').value;
            dispatch(
              addNotes({
                heading: heading?.current?.value,
                note: note?.current?.value,
              })
            );
            dispatch(toggleShowEditor());
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editor;
