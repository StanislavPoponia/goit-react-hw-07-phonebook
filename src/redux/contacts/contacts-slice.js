import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        return [...store, payload];
      },

      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});

export default contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;