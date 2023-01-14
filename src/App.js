import "./styles.css";
import { useState, useEffect } from "react";
import Modal from "./Modal.js";
import apiCall from "./APIcall";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [stateValue, setStateFn] = useState(initialValue);
  const [modalSrc, setModalSrc] = useState(''); 

  function handleModalOpen(event) {
    setModalSrc(event.target.key);
    setModalOpen(true);
  }

  function handleModalClose() {
    // whatever code is put inside of here will be ran when the button is clicked
    setModalOpen(false);
  }

  return (
    <div className="App">
      <div className="navBar">NavBar Placeholder</div>
      <Poems onClick={handleModalOpen}/>
      {modalOpen && <Modal elementsToDisplay={modalSrc}handleModalClose={handleModalClose} />
      }
    </div>
)};

