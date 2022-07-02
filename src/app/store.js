import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../features/users";
import chatReducer from "../features/chat";


export const store = configureStore({
  reducer: {
    user: usersReducer,
    chat: chatReducer
  },
});
