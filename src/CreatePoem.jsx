import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIpost } from "./APIpost";

export default function CreatePoem() {
  const [poem, setPoem] = useState({
    _id: "",
    title: "",
    author: "",
    lines: [''],
    __v: 0
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await APIpost(poem);

    //does this line replace something or add something?:
    navigate(`https://poetry-api-production.up.railway.app/api/authors/${poem._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value)

    setPoem((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
    <div>
      <h1>Add a poem</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please insert your ID"
          name="_id"
          value={poem._id}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Title"
          name="name"
          value={poem.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Author"
          name="author"
          value={poem.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Poem"
          name="lines"
          value={poem.lines}
          onChange={handleChange}
        />
        <button type="submit">Create Your Poem!</button>
      </form>
    </div>
  );
};