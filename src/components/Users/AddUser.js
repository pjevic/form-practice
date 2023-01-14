import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    // validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return;
    if (+enteredAge < 1) return;

    console.log(enteredUsername, enteredAge);

    // resetting
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" onChange={ageChangeHandler} value={enteredAge}></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
