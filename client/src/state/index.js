/*
    This File is for setting up Redux Store.

    Store: It is an object which provides the state of the application. This object is accessible with help of the provider in the files of the project. The only way to change the state inside it is to dispatch an action on it.
    There are three important parts of the store:

    Creating Slices: 
        - initialstate: we set the Initial State of the Slice,
        - reducers: its like a function when called with the name and parameter performs the action.
*/

import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {};

// A slice is the portion of Redux code that relates to a specific set of data and actions within the store's state. A slice reducer is the reducer responsible for handling actions and updating the data for a given slice.
// Updates i.e. Toggles the mode.

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

// Export Reducer
export default globalSlice.reducer;
