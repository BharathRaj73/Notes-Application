import React from "react";
import { Link } from "react-router-dom";

const Noteitem = ({ note }) => {
  return (
    <div>
      <Link to={`/edit-note/${note.id}`} className="note">
        <h4>
          {note.titlelength > 50
            ? note.title.substr(0, 50) + "..."
            : note.title}
        </h4>
        <p>{note.date}</p>
      </Link>
    </div>
  );
};

export default Noteitem;
