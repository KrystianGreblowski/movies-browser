const localStoragePersonDetailsKey = "personDetails";

export const savePersonDetailsInLocalStorage = (personDetails) =>
  localStorage.setItem(
    localStoragePersonDetailsKey,
    JSON.stringify(personDetails)
  );

export const getPersonDetailsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStoragePersonDetailsKey)) || {
    personId: 0,
    data: {},
    status: "loading",
  };
