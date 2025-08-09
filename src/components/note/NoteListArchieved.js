import React from "react";

import NoteItem from "./NoteItem";

function NoteListArchieved({ notes, onDeleteActionHandler, onArchieveActionHandler }) {
  const notesArchieved = notes.filter((note) => note.isArchieved);

  return (
    <React.Fragment>
      <h4 className="section-notelist__subtitle">Arsip</h4>
      {notesArchieved.length ? (
        <div className="note-list spacing">
          {notesArchieved.map((note) => (
            <NoteItem key={note.id} {...note} onDeleteActionHandler={onDeleteActionHandler} onArchieveActionHandler={onArchieveActionHandler} />
          ))}
        </div>
      ) : (
        <div className="note-list__empty">Tidak ada catatan</div>
      )}
    </React.Fragment>
  );
}

export default NoteListArchieved;
