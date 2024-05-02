import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function LeftSide() {
  const covo = [
    {
      name: "ayush",
      chat: "hello, where are you? hurruy at home?",
      time: "today",
    },
    {
      name: "jay",
      chat: "hello?",
      time: "yesterday",
    },
    {
      name: "het",
      chat: " where are you?",
      time: "today",
    },
  ];
  return (
    <>
      <div className="left-container">
        <div className="left-container-top">
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className="left-icons2">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <GroupAddIcon />
            </IconButton>
          </div>
        </div>

        <div className="left-search">
          <IconButton></IconButton>
          <SearchIcon />
          <input type="text" placeholder="search" className="search-box" />
        </div>
        <div className="conversation">
          {covo.map((item) => {
            return (
              <>
                <div className="convo-container">
                  <p className="convo-icon">{item.name[0]}</p>
                  <p className="convo-name">{item.name}</p>
                  <p className="convo-chats">{item.chat}</p>
                  <p className="convo-time">{item.time}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LeftSide;
