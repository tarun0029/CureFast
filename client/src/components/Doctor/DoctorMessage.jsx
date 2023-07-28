import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Sidebar from "./shared/Sidebar";
import axios from "axios";

const socket = io.connect("http://localhost:5000");

export default function DoctorMessage() {
  const { id } = useParams(); // patientId
  const { user } = useSelector((state) => state.user);
  const [chatId, setChatId] = useState(id + user._id);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const getAllChats = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/doctor/getAllChats`,
        {
          chatId: chatId,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setMessageList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChats();
  }, [user]);

  useEffect(() => {
    if (chatId !== "") {
      socket.emit("join_room", chatId);
    }
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        chatId: chatId,
        author: user._id,
        message: currentMessage,
        time: new Date(Date.now()) + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      console.log(currentMessage);
      setCurrentMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div class="relative bg-indigo-200 flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-600">Emma</span>
          <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
        </div>
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <div>
                    {messageList?.map((chat, index) => (
                      <div key={index} class="grid grid-cols-12 gap-y-2">
                        {chat?.author === user?._id ? (
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>{chat.message}</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>{chat.message}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button
                    onClick={sendMessage}
                    class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
