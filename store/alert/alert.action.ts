import { createAction } from "@reduxjs/toolkit";

export const alertSuccess = createAction<{ message: string }>('alert/success')
export const alertError = createAction<{ message: string }>('alert/error')
export const alertWarning = createAction<{ message: string }>('alert/warning')
export const alertInfo = createAction<{ message: string }>('alert/info')

export const alertClose = createAction('alert/close');