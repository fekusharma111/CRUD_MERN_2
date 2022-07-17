// import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
  Fab,
} from "@mui/material";
// import Edit from "@mui/material";
import { useState, useEffect } from "react";
import { getUser, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0px auto;
`;
const THead = styled(TableRow)`
  background-color: #000000;
  & > th  {
    color: #fff;
    font-size:20px;
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const AllUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUser();
    setUser(response.data);
  };
  const deleteUserDetails = (id) => {
    deleteUser(id);
    getAllUsers();
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell>Delete</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {user.map((user, key) => (
          <TBody>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Fab
                color="secondary"
                size="large"
                aria-label="edit"
                component={Link}
                to={`/edit/${user._id}`}
                style={{ padding: "15px" }}
              >
                <i class="fa-solid fa-pencil"></i>
              </Fab>
            </TableCell>
            <TableCell>
              <Fab
                variant="contained"
                color="error"
                onClick={() => deleteUserDetails(user._id)}
                style={{ padding: "15px" }}
              >
                <i class="fa-solid fa-trash-can"></i>
              </Fab>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
