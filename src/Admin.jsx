import React, {useState} from "react";

export default function Admin(props) {

  const {urls, onURLSelect} = props;

  const handleFormSubmit = (event) => {
    console.log(event.target.value);
    // onURLSelect(event.target.value);
  }

  // console.dir(urls);

  if (urls) {
    return (
      <>
        <div>Admin</div>
        <form onSubmit={handleFormSubmit} >
          <select>
            {urls.map(url => <option key={url.name}>{url.name}</option>)}
          </select>
          <input type="submit" className="ButtonClose" value="Submit" />
        </form>
      </>
    );
  }
}