import "./styles.css";
import { useState, useEffect } from "react";
import Modal from "./Modal.js";
import apiCall from "./APIcall";
import Poems from './PageSetup'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [stateValue, setStateFn] = useState(initialValue);
  const [poemIndex, setPoemIndex] = useState(''); 

  const [poemsArray, setPoemsArray] = useState([])

  useEffect(() => {
    apiCall().then(data => setPoemsArray(data));
  }, []);

  function handleModalOpen(event) {
    setPoemIndex(event.currentTarget.dataset.index);
    setModalOpen(true);
  }

  function handleModalClose() {
    // whatever code is put inside of here will be ran when the button is clicked
    setModalOpen(false);
  }

  return (
    <div className="App">
      <div className="navBar">NavBar Placeholder</div>
      <Poems onClick={handleModalOpen} poemsArray={poemsArray}/>
      {modalOpen && <Modal poem={poemsArray[poemIndex]} handleModalClose={handleModalClose} />
      }
    </div>
)};

