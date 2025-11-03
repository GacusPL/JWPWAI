import React, { useState } from "react";

export default function Zad3() {
  const [user, setUser] = useState({ name: "Kacper", age: 21 });
  const [imageVisible, setImageVisible] = useState(false);
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [style, setStyle] = useState({
    backgroundColor: "lightgray",
    color: "black",
    padding: "10px",
    borderRadius: "10px",
    transition: "0.3s",
  });

  function handleClick() {
    const updatedUser = { ...user, age: user.age + 1 };
    setUser(updatedUser);
  }

  function handleMouseOver() {
    const newStyle = { ...style };
    newStyle.backgroundColor = "lightblue";
    setStyle(newStyle);
  }

  function handleMouseOut() {
    const revertedStyle = { ...style };
    revertedStyle.backgroundColor = "lightgray";
    setStyle(revertedStyle);
  }

  function showImage() {
    setImageVisible(!imageVisible);
  }

  function loadDataFromJson() {
    const jsonData = {
      id: 1,
      title: "Dane z JSON",
      description: "Przykładowe dane wczytane z pliku JSON.",
    };
    setData(jsonData);
  }

  function uploadFile(e) {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }


  function changeStyle() {
    setStyle({
      ...style,
      backgroundColor:
        style.backgroundColor === "lightgray" ? "lightgreen" : "lightgray",
      color: style.color === "black" ? "darkblue" : "black",
    });
  }

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h2>Zad 6 — Komponenty funkcyjne</h2>

      <div style={style} onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}>
        <p>
          Użytkownik: {user.name}, wiek: {user.age}
        </p>
        <button onClick={handleClick}>Zwiększ wiek</button>
      </div>

      <hr />

      <button onClick={showImage}>Pokaż / Ukryj obraz</button>
      {imageVisible && (
        <img
          src="https://placecats.com/bella/300/200"
          alt="kot"
          style={{ display: "block", marginTop: "12px", borderRadius: "8px",margin: "auto" }}
        />
      )}

      <hr />

      <button onClick={loadDataFromJson}>Wczytaj dane z JSON</button>
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
      <hr />

      <input type="file" onChange={uploadFile} />
      {fileName && <p>Wczytano plik: {fileName}</p>}

      <hr />

      <button onClick={changeStyle}>Zmień styl</button>
    </div>
  );
}
