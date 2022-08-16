import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { useRouter } from "next/router";
import { useState } from "react";
import { firebase } from "../../lib/firebase";
import Modal from "react-modal";
import { FcCancel } from "react-icons/fc";


Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "9%",
    left: "9%",
    right: "9%",
    bottom: "9%",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalnote, setModalnote] = useState(false);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState("");
  const [books, setBooks] = useState([]);

  const router = useRouter();

  const add = () => {
    firebase.firestore().collection("books").add({
      name: name,
      author: author,
      list: list,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: "admin",
    });

    setName("");
    setAuthor("");
    setList("");
  };

  return (
    <div className="w-full h-16 bg-slate-100">
      <div style={{ display: "flex" }} className="justify-between">
        <div className="ml-5 mt-4 mb-4 mr-3">
          <h3>
            <VscLibrary style={{ fontSize: "35px" }} />
          </h3>
        </div>

        <div className="mr-5 mt-3 mb-3 ml-3">
          <button
            id="logout"
            type="submit"
            onClick={() => setModalnote(true)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              color: "azure",
              background: "#000",
              border: "none",
            }}
          >
            Add Book
          </button>
        </div>

        {/* modal starts here */}

        <Modal
          isOpen={modalnote}
          onRequestClose={() => setModalnote(false)}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
        >
          <div
            className="flex"
            style={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <h1 style={{ margin: "8px", fontSize: "20px" }}> </h1>
            <button
              style={{
                fontSize: "25px",
                margin: "10px",
                border: "none",
                backgroundColor: "transparent",
              }}
              onClick={() => setModalnote(false)}
            >
              <FcCancel />
            </button>
          </div>
          <div style={{ margin: "8px" }}>
            <center>
              <h2 style={{ fontSize: "25px", margin: "10px" }}>Add Book</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                
                  color: "black",
                  border: "1px solid gray",
                  marginTop: "10px",

                }}
                placeholder="Book Name"
                className="sm:text-sm sm:m-3 p-4 rounded-lg shadow-lg md:text-2xl md:mr-7 md:ml-7 md:mb-3"
              />{" "}
              <br />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                style={{
                  color: "black",
                  border: "1px solid gray",
                  marginTop:'10px',
                }}
                placeholder="Author"
                className="sm:text-sm sm:m-3 p-4 rounded-lg shadow-lg md:text-2xl md:mr-7 md:ml-7 md:mb-3"
              />{" "}
              <br />
              <input
                type="number"
                value={list}
                onChange={(e) => setList(e.target.value)}
                required
                style={{
                  color: "black",
                  border: "1px solid gray",
                  marginTop: "10px",
                
                }}
                placeholder="Book Position"
                className="sm:text-sm   p-4 rounded-lg shadow-lg md:text-2xl "
              />
              <br />
              <button
                type="submit"
                onClick={add}
                className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                style={{
                  marginBottom: "15px",
                  marginTop: "20px",
                  padding: "14px",
                  borderRadius: "6px",
                  color: "azure",
                  background: "#000",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                Upload
              </button>
            </center>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
