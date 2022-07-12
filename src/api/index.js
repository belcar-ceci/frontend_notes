export const getAllNotesEndpoint = () =>
  `${process.env.REACT_APP_API_URL}/notes`;

export const getNoteByIdEndpoint = (id) =>
  `${process.env.REACT_APP_API_URL}/notes/${id}`;

export const getProfileEndpoint = () =>
  `${process.env.REACT_APP_API_URL}/profile`;
