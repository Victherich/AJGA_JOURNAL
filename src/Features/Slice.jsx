
// import { createSlice } from "@reduxjs/toolkit";

// const MySlice = createSlice({
//   name: "user",
//   initialState: {
   

//     authorInfo: null, // Added for author
//     authorToken: null, // Added for author
//     reveiwerInfo:null,
//     reveiwerToken:null,
//     EditorInfo:null,
//     EditorToken:null,

   
//   },
//   reducers: {
   
//     // 🔹 Author Reducers (NEW)
//     authorLogin: (state, { payload }) => {
//       state.authorInfo = payload.authorInfo;
//       state.authorToken = payload.authorToken;
//     },
//     authorLogout: (state) => {
//       state.authorInfo = null;
//       state.authorToken = null;
//     },

   
//   },
// });

// export const {
 
//   authorLogin,
//   authorLogout, // Export author actions
  
// } = MySlice.actions;

// export default MySlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    // 🔹 Author State
    authorInfo: null,
    authorToken: null,

    // 🔹 Reviewer State
    reviewerInfo: null,
    reviewerToken: null,

    // 🔹 Editor State
    editorInfo: null,
    editorToken: null,
  },
  reducers: {
    // 🔹 Author Reducers
    authorLogin: (state, { payload }) => {
      state.authorInfo = payload.authorInfo;
      state.authorToken = payload.authorToken;
    },
    authorLogout: (state) => {
      state.authorInfo = null;
      state.authorToken = null;
    },

    // 🔹 Reviewer Reducers
    reviewerLogin: (state, { payload }) => {
      state.reviewerInfo = payload.reviewerInfo;
      state.reviewerToken = payload.reviewerToken;
    },
    reviewerLogout: (state) => {
      state.reviewerInfo = null;
      state.reviewerToken = null;
    },

    // 🔹 Editor Reducers
    editorLogin: (state, { payload }) => {
      state.editorInfo = payload.editorInfo;
      state.editorToken = payload.editorToken;
    },
    editorLogout: (state) => {
      state.editorInfo = null;
      state.editorToken = null;
    },
  },
});

export const {
  // 🔹 Author Actions
  authorLogin,
  authorLogout,

  // 🔹 Reviewer Actions
  reviewerLogin,
  reviewerLogout,

  // 🔹 Editor Actions
  editorLogin,
  editorLogout,
} = MySlice.actions;

export default MySlice.reducer;
