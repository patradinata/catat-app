import React from "react";
import NoteItem from "./NoteItem";

function NoteListActive({ notes, onDeleteActionHandler, onArchieveActionHandler }) {
  const notesActive = notes.filter((note) => !note.isArchieved);
  return (
    <React.Fragment>
      <h4 className="section-notelist__subtitle">Catatan Aktif</h4>
      {notesActive.length ? (
        <div className="note-list spacing">
          {notesActive.map((note) => (
            <NoteItem key={note.id} {...note} onDeleteActionHandler={onDeleteActionHandler} onArchieveActionHandler={onArchieveActionHandler} />
          ))}
        </div>
      ) : (
        <div className="note-list__empty">Tidak ada catatan</div>
      )}
    </React.Fragment>
  );
}

export default NoteListActive;
