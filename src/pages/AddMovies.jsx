import React, { useState } from "react";

export default function AddMovies() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleAddMovie = (e) => {
    e.preventDefault();
    console.log("Movie Added:", { name, description, rating });
    // You can send this data to your backend/API here

    // Optional: Clear form after submission
    setName("");
    setDescription("");
    setRating("");
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="bg-white p-4 rounded shadow-sm w-100"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="text-center mb-4">Add a New Movie</h1>
        <form onSubmit={handleAddMovie}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Movie Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Rating (1-10)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="10"
              step="0.1"
              required
            />
          </div>
          <button type="submit" className="btn btn-indigo w-100 py-2">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
