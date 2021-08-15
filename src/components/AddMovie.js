import React, { useState } from "react";
import Modal from "react-modal";


Modal.setAppElement("#root");

const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    image: "",
    name: "",
    description: "",
    rating: "",
    date: "",
  });

  const handlChange = (movies) => {
    setNewMovie({ ...newMovie, [movies.target.name]: movies.target.value });
  };

  const handlSubmit = () => {
    AddNewMovie(newMovie);
    setNewMovie({ name: "", date: "", rating: "", description: "", image: "" });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" onChange={handlChange} required />
          <label>Movie Rating</label>
          <input type="number" name="rating" onChange={handlChange} required />
          <label>date</label>
          <input type="text" name="date" onChange={handlChange} required />
          <label>Image movie</label>
          <input type="text" name="image" onChange={handlChange} required />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={handlChange}
            required
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            handlSubmit();
            closeModal();
          }}
        >
          Save 
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;