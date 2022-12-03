import { createSlice } from "@reduxjs/toolkit";
import { IAlertType } from "../../types/IAlert";
import { alertClose, alertError, alertInfo, alertSuccess, alertWarning } from "./alert.action";

interface IInitState {
  isAlert: boolean
  severity: IAlertType | undefined
  message: string
}

const initialState: IInitState = {
  isAlert: false,
  severity: undefined,
  message: ''
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(alertSuccess.match, (state, { payload }) => {
        state.isAlert = true;
        state.severity = 'success';
        state.message = payload.message;
      })
      .addMatcher(alertError.match, (state, { payload }) => {
        state.isAlert = true;
        state.severity = 'error';
        state.message = payload.message;
      })
      .addMatcher(alertWarning.match, (state, { payload }) => {
        state.isAlert = true;
        state.severity = 'warning';
        state.message = payload.message;
      })
      .addMatcher(alertInfo.match, (state, { payload }) => {
        state.isAlert = true;
        state.severity = 'info';
        state.message = payload.message;
      })
      .addMatcher(alertClose.match, (state, { payload }) => {
        state.isAlert = false;
        state.severity = undefined;
        state.message = '';
      })
  }
})

export default alertSlice.reducer
