import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowEditor } from '../redux/noteSlice';

const AddNote = () => {
  const dispatch = useDispatch();
  const showEditor = useSelector((store) => store?.note?.showEditor);
  const handleButtonClick = () => {
    dispatch(toggleShowEditor());
  };

  return (
    <div className="flex justify-end mr-10 mb-5">
      <button
        className="p-2 text-5xl rounded-full bg-slate-200 w-14 h-14 flex items-center justify-center leading-none hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 relative group"
        onClick={handleButtonClick}
      >
        <span className="-mt-3">{!showEditor ? '+' : '-'}</span>
        <div className="absolute -top-8 w-20 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
          {!showEditor ? 'Add Note' : 'Minimize'}
        </div>
      </button>
    </div>
  );
};

export default AddNote;
