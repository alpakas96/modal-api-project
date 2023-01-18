export default function AddPoem({ handleModalClose, poem, setToggle }) {

  async function handleClick () {
    await DeletePoem(poem._id)
    setToggle(prev => !prev)
    handleModalClose()
  }

  return (
          <div className="openModal">
            <h2>{poem.title}</h2>
            <h3>{poem.author}</h3>
            {poem.lines.map((line, i) => (
              <div key={i}>
               {line}
              </div>
            ))}
            <button onClick={handleModalClose}> Close Poem </button>
            {/* create button with handleModalclose and delete function:  */}
            <button onClick={handleClick}> Delete Poem </button>
          </div>
      )
}