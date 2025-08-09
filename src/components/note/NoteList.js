import React from "react";
import NoteListActive from "./NoteListActive";
import NoteListArchieved from "./NoteListArchieved";

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.props.onSearchingHandler(event.target.value);
  }

  render() {
    return (
      <section className="section-notelist">
        <div className="section-notelist__header">
          <h1>Daftar Catatan</h1>
          <input className="note-form__title" type="text" placeholder="Cari Judul..." onChange={this.onSearchHandler} required />
        </div>
        <NoteListActive notes={this.props.notes} onDeleteActionHandler={this.props.onDeleteActionClicked} onArchieveActionHandler={this.props.onDeleteActionClicked} />;
        <NoteListArchieved notes={this.props.notes} onDeleteActionHandler={this.props.onDeleteActionClicked} onArchieveActionHandler={this.props.onArchieveActionClicked} />;
      </section>
    );
  }
}

export default NoteList;
