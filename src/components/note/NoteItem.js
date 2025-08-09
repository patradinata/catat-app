import React from "react";

function NoteItem({ id, title, body, createdAt, isArchieved, onArchieveActionHandler, onDeleteActionHandler }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString("id-ID", options);

  return (
    <div className="note-item">
      <div className="note-item__body">
        <div className="note-item__title">{title}</div>
        <div className="note-item__desc">{body}</div>
      </div>
      <div className="note-item__footer">
        <div className="note-item__date">{formattedCreatedAt}</div>
        <div className="note-item__container-action">
          <button className="note-item__button button--arhieve" onClick={onArchieveActionHandler(id)}>
            {isArchieved ? "Pindahkan" : "Arsipkan"}
          </button>
          <button className="note-item__button button--delete" onClick={() => onDeleteActionHandler(id)}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
