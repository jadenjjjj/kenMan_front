import React, { useState, useEffect } from "react";

const MangaList = () => {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    fetch("/api/mangas")
      .then((response) => response.json())
      .then((data) => setMangaList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Manga List</h2>
      <ul>
        {mangaList.map((manga) => (
          <li key={manga._id}>
            <h3>{manga.title}</h3>
            <p>Author: {manga.author}</p>
            <p>Genre: {manga.genre}</p>
            <p>Status: {manga.status}</p>
            <p>Rating: {manga.rating}</p>
            <p>Description: {manga.description}</p>
            <img src={manga.coverImage} alt={manga.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangaList;
