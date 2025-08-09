import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.handleLimitTitle = this.handleLimitTitle.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  handleLimitTitle(event) {
    const inputTitle = event.target.value;
    let title = "";

    if (inputTitle.length > 40) {
      title = inputTitle.substring(0, 40);
    } else {
      title = inputTitle;
    }

    this.setState(() => {
      return {
        title: title,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.state(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <aside className="note-form">
        <h1 className="spacing">Buat Catatan</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-form__title-limit">Sisa karakter: {this.state.title.length} /40</p>
          <input className="note-form__title" type="text" placeholder="Tulis Judul..." value={this.state.title} onChange={this.handleLimitTitle} required />
          <textarea rows="10" className="note-form__body" type="text" placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} resize="false"></textarea>
          <button type="submit">Catat</button>
        </form>
      </aside>
    );
  }
}

export default NoteForm;
