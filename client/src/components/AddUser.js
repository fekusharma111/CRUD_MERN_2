import styled from "@emotion/styled";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;

const AddUser = () => {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const AddUserDetails = async () => {
    // console.log(user);
    await addUser(user);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={(e) => onValueChange(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(e) => onValueChange(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => onValueChange(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(e) => onValueChange(e)} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => AddUserDetails()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
