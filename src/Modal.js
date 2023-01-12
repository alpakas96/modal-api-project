export default function Modal({handleModalClose, modalSrc }) {
  return (
        <div className="overlay">
          <div className="openModal">
            <img src={modalSrc} alt="d o g" /> 
            <br></br>
            <button onClick={handleModalClose}> Close Modal </button>
          </div>
        </div>      
      )
}


