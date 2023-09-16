import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...action.payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...action.payload,
        });
      }
    },
    removeTask: (state, action) => {
      state.tasks.push(
        (state.tasks = state.tasks.filter((item) => item.id !== action.payload))
      );
    },
    updateStatus: (state, action) => {
      const target = state.tasks.find((item) => item.id === action.payload.id);
      target.status = action.payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
