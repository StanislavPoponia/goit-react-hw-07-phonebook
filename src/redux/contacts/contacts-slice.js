import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        const contactFind = store.find(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (contactFind) {
          Notiflix.Notify.warning(`User with name ${payload.name} is already in contacts`);
          return;
        }

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