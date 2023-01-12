import "./styles.css";
import { useState } from "react";
import Modal from "./Modal.js";

const NUM_OF_DOGS = 15;

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [stateValue, setStateFn] = useState(initialValue);
  const [modalSrc, setModalSrc] = useState(''); 

  function handleModalOpen(event) {
    setModalSrc(event.target.src);
    setModalOpen(true);
  }

  function handleModalClose() {
    // whatever code is put inside of here will be ran when the button is clicked
    setModalOpen(false);
  }

  return (
    <div className="App">
      <div className="navBar">NavBar Placeholder</div>
      {modalOpen && <Modal handleModalClose={handleModalClose} modalSrc={modalSrc} />
      }
      {[...new Array(NUM_OF_DOGS)].map((_, i) => {
        const src = `https://place.dog/300/300/?${i}`;
        return (
          <img key={i} src={src} alt="pic of dog" onClick={handleModalOpen} className="images"/>
        );
      })}
      
      
    </div>
  );
}
