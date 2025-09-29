import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  return fetch("https://68d954e190a75154f0da2227.mockapi.io/task/").then(
    (res) => res.json()
  );
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, { rejectedWithValue }) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    };

    try {
      const response = await fetch(
        "https://68d954e190a75154f0da2227.mockapi.io/task/",
        options
      );
      return await response.json();
    } catch (error) {
      return rejectedWithValue("Сталася помилка");
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (task, { rejectedWithValue }) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    };

    try {
      const response = await fetch(
        `https://68d954e190a75154f0da2227.mockapi.io/task/${task.id}`,
        options
      );
      return await response.json();
    } catch {
      return rejectedWithValue("Сталася помилка");
    }
  }
);
