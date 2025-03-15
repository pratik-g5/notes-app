import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    showEditor: false,
    notes: [],
    editExisting: {
      edit: false,
      index: null,
    },
  },
  reducers: {
    toggleShowEditor: (state) => {
      state.showEditor = !state.showEditor;
    },
    addNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    toggleEditExisting: (state, action) => {
      state.editExisting.edit = !state.editExisting.edit;
      state.editExisting.index = action.payload;
    },
    updateNotes: (state, action) => {
      const { index, heading, note } = action.payload;
      if (heading !== undefined) {
        state.notes[index].heading = heading;
      }
      state.notes[index].note = note;
    },
    deleteNote: (state, action) => {
      const { index } = action.payload;
      state.notes.splice(index, 1);
      //       state.notes = state.notes.filter((_, i) => i !== index);
    },
  },
});

export const {
  toggleShowEditor,
  addNotes,
  toggleEditExisting,
  updateNotes,
  deleteNote,
} = noteSlice.actions;
export default noteSlice.reducer;
