import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

const getSavedNotes = () => {
  const sessionData = sessionStorage.getItem('savedNotes');
  return sessionData ? JSON.parse(sessionData) : undefined;
};

const saveNotes = (state) => {
  const reduxStateData = JSON.stringify(state);
  sessionStorage.setItem('savedNotes', reduxStateData);
};

const retrieveNotes = getSavedNotes();

const appStore = configureStore({
  reducer: {
    note: noteReducer,
  },
  preloadedState: retrieveNotes,
});

appStore.subscribe(() => {
  saveNotes(appStore.getState());
});

export default appStore;
