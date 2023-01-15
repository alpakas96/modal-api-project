export default function Modal({ handleModalClose, poem }) {
  return (
          <div className="openModal">
            <h2>{poem.title}</h2>
            <h3>{poem.author}</h3>
            {poem.lines.map((line, i) => (
              <div key={i}>
               {line}
              </div>
            ))}
            <button onClick={handleModalClose}> Close Modal </button>
          </div>
      )
}


