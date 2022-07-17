import styled from "@emotion/styled";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { editUser, getUsers } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;

const EditUser = () => {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);
  const { id } = useParams();
  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  useEffect(() => {
    loadUserDetails();
  }, []);
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUserDetails = async () => {
    // console.log(user);
    await editUser(user, id);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          name="name"
          onChange={(e) => onValueChange(e)}
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          name="username"
          onChange={(e) => onValueChange(e)}
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          name="email"
          onChange={(e) => onValueChange(e)}
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          name="phone"
          onChange={(e) => onValueChange(e)}
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
