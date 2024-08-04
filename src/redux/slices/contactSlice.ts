import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { CONTACT_TYPE } from 'types/Contact'
import { fetchAllContacts, findContactByContactId } from '../../api/contacts'

export interface ContactState {
  list?:Array<CONTACT_TYPE>
  total: number
  skip: number
  error?: SerializedError
  loading?: boolean
  recentList: Array<CONTACT_TYPE>
  details?: CONTACT_TYPE
}

const initialState: ContactState = {
  list: undefined,
  total: 0,
  skip: 0,
  error: undefined,
  recentList: [],
  details: undefined
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addToRecentList:(state, action: PayloadAction<CONTACT_TYPE>) => {
        if(state.recentList.length === 4)
          state.recentList?.shift();
        state.recentList.push(action.payload);
      },
    goToNextPage: (state) => {
      if(state.skip < state.total)
        state.skip = state.skip + 1
    },
    goToPervPage: (state) => {
      if(state.skip > 0)
        state.skip = state.skip - 1
    },
    goToFirstPage: (state) => {
      state.skip = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(findContactByContactId.fulfilled, (state, action) => {
      state.details = action.payload;
      if(state.recentList.length === 4)
        state.recentList?.shift();
      if(!state.recentList.find((item) => item.id === action.payload.id))
        state.recentList.push(action.payload);
      state.loading = false;
    })
    builder.addCase(findContactByContactId.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(findContactByContactId.rejected, (state, action) => {
      state.error = action.error;
    })
    builder.addCase(fetchAllContacts.fulfilled, (state, action) => {
      state.list = action.payload.items;
      state.total = action.payload.meta.total;
      state.loading = false;
    })
    builder.addCase(fetchAllContacts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchAllContacts.rejected, (state, action) => {
      state.error = action.error;
    })
  },
})

export const { addToRecentList, goToNextPage, goToPervPage, goToFirstPage } = contactSlice.actions

export default contactSlice.reducer