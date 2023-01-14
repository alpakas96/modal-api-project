export default function Modal({ handleModalClose, elementsToDisplay }) {
  return (
        <div className="overlay">
          <div className="openModal" dangerouslySetInnerHTML={elementsToDisplay}>
            <br></br>
            <button onClick={handleModalClose}> Close Modal </button>
          </div>
        </div>      
      )
}


