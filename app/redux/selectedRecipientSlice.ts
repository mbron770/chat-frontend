"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedRecipientState {
  value: string;
}

const initialState: SelectedRecipientState = {
  value: "",
};

export const selectedRecipientSlice = createSlice({
  name: "selectedRecipient",
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRecipient } = selectedRecipientSlice.actions;
export default selectedRecipientSlice.reducer;
