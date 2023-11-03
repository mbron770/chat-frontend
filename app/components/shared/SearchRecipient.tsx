"use client";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import React from "react";
import type { RootState, AppDispatch } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setRecipient } from "../../redux/selectedRecipientSlice";

interface User {
  id: number;
  name: string;
  username: string;
  clerkID: string;
}

export default function SearchRecipient() {
  const [searchRecipient, setSearchRecipient] = useState("");
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  // const [selectedUser, setSelectedUser] = useState<String>("");

  const dispatch = useDispatch<AppDispatch>();
  const recipient = useSelector((state: RootState) => state.selectedRecipient.value)
  console.log('recipient',recipient)
  // const recipient = useSelector((state: RootState) => state.selectedRecipient.value);

  useEffect(() => {
      fetch("https://backend-3ktp.onrender.com/display_all_users", { cache: 'no-store' })
      // fetch("http://127.0.0.1:10000/display_all_users", { cache: 'no-store' } )
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((error) => console.error(error.message));
  }, []);

  // useEffect(() => {
  //     filteredUsers.forEach(user => {
  //       console.log("clerkID:", user.clerkID);
  //     //   console.log("id:", user.id);
  //     //   console.log("Name:", user.name);
  //     //   console.log("Username:", user.username);
  //     });
  //   }, [filteredUsers]);
  // console.log(selectedUser);

  return (
    <>
      <div className="w-full flex flex-col gap-2 max-w-[240px]">
        <Input
          label="Text"
          placeholder="search for a user"
          value={searchRecipient}
          onChange={(e) => {
            e.preventDefault;
            setSearchRecipient(e.target.value);
            const filtered = allUsers.filter(
              (user) =>
                (user.name &&
                  user.name
                    .toLowerCase()
                    .includes(searchRecipient.toLowerCase())) ||
                (user.username &&
                  user.username
                    .toLowerCase()
                    .includes(searchRecipient.toLowerCase()))
            );

            setFilteredUsers(filtered);
          }}
        />
      </div>
      <div className="mt-10 mb-10">
        {searchRecipient &&
          filteredUsers.map((i: User) => (
            <p
              onClick={() => {
                // setSelectedUser(i.clerkID);
                dispatch(setRecipient(i.clerkID));
              }}
              className="mb-2"
            >{`clerkID: ${i.clerkID} id: ${i.id} Name: ${i.name} Username: ${i.username}`}</p>
          ))}
      </div>
    </>
  );
}
