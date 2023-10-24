'use client'
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice'
import selectedRecipientReducer from './selectedRecipientSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    selectedRecipient: selectedRecipientReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch