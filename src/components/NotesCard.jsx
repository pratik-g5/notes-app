import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditExisting } from '../redux/noteSlice';

const NotesCard = ({ index, note }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(toggleEditExisting(index))}>
        <div className="p-2 w-48 h-48 border border-gray-600 rounded-lg mr-3 shadow-xl bg-slate-200 cursor-pointer hover:scale-105">
          <h1 className="p-2 text-xl font-bold border-b-2 border-black">
            {note?.heading}
          </h1>
          <p className="pt-2 text-gray-700">
            {note?.note.slice(0, 80)} {note.note.length > 50 && '.....'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
