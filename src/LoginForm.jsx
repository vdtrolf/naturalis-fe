import React, {useState} from "react";

export default function LoginForm(props) {

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

  const {onUserInput} = props;

  const handleFormSubmit = (event) => {
    console.log(event.target.value);
    onUserInput(userId,pwd);
  }

  return (
    <>
      <div>LoginForm</div>
      <form onSubmit={handleFormSubmit} >
        <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User id" className="textfield" />
        <input type="text" id="pwd" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Password" className="textfield" />
        <input type="submit" className="ButtonClose" value="Submit" />
      </form>
    </>
  );
}