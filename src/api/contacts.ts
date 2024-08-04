import { CONTACTS_REQ_TYPE, CONTACT_TYPE } from "../types/Contact";
import { axios_instance } from ".";
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from "axios";


export const fetchAllContacts = createAsyncThunk<CONTACTS_REQ_TYPE, {limit:number, skip:number}>("contacts/fetchAll",
    async ({limit, skip}, thunkApi) =>{
    try {
        const result = await axios_instance.get<CONTACTS_REQ_TYPE>("/passenger", {params:{
            limit,
            skip
        }});
        return thunkApi.fulfillWithValue(result.data);
    } catch (error) {
        const err = error as AxiosError
        return thunkApi.rejectWithValue(err.response?.status)
    }
})

export const findContactByContactId = createAsyncThunk<CONTACT_TYPE, {contactId:string}>("contact/find",
    async ({contactId}, thunkApi) =>{
    try {
        const result = await axios_instance.get<CONTACT_TYPE>(`/passenger/${contactId}`);
        return thunkApi.fulfillWithValue(result.data);
    } catch (error) {
        const err = error as AxiosError
        return thunkApi.rejectWithValue(err.response?.status)
    }

})

export const searchContact = createAsyncThunk<CONTACTS_REQ_TYPE, {searchQuery:string | number ,limit:number}>("contacts/fetchAll",
    async ({searchQuery, limit}, thunkApi) =>{
    try {
        const criteria = isNaN(Number(searchQuery))? `{"first_name":{"contains":"${searchQuery}"}}`:`{"phone":{"contains":"${searchQuery}"}}`;
        const result = await axios_instance.get<CONTACTS_REQ_TYPE>(`/passenger?where=${criteria}&limit=${limit}`);
        return thunkApi.fulfillWithValue(result.data);
    } catch (error) {
        const err = error as AxiosError
        return thunkApi.rejectWithValue(err.response?.status)
    }

})