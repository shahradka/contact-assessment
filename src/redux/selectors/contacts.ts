import type{ RootState } from "@redux/store";

export const selectContactList = (state: RootState) => state.contact;
export const selectContactDetails = (state: RootState) => state.contact.details;
export const selectSkip = (state: RootState) => state.contact.skip;
export const selectRecentContactRecords = (state: RootState) => state.contact.recentList;