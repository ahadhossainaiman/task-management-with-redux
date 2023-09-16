import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
  },
});
