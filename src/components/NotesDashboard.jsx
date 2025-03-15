import React from 'react';
import EmptyState from './EmptyState';
import NotesList from './NotesList';

const NotesDashboard = ({ notes }) => {
  return (
    <div className="h-[60vh]">
      {notes.length === 0 ? <EmptyState /> : <NotesList />}
    </div>
  );
};

export default NotesDashboard;
