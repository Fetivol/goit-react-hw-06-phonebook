export const newContact = value => {
  return {
    type: 'contacts/addContact',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contacts/deleteContact',
    payload: value,
  };
};

export const filterAction = value => {
  return {
    type: 'filter/change',
    payload: value,
  };
};
