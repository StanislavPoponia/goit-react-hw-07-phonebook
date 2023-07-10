export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts = [], filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
}; 


// import { createSelector } from '@reduxjs/toolkit';
// import { getFilter } from 'redux/filter/filter-selectors';
// export const getContacts = store => store.contacts.items;

// export const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts = [], filter) => {
//     const normalizedFilter = filter.toLowerCase();
//      return contacts.filter(({ name }) => {
//       const normalizedName = name.toLowerCase();
//        return normalizedName.includes(normalizedFilter);
//     });
//   } 
// );