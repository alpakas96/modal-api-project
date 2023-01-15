function Poems({ poemsArray, onClick}) {
  return (
    <div className="Poems">
      {poemsArray.map((poem, i) => (
        <div key={i} onClick={onClick} data-index={i}>
          <h1>{poem.title}</h1>
          <h3>{poem.author}</h3>
        </div>
      ))}
    </div>
  )
}

export default Poems;