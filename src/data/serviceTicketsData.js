const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id


export const getSingleServiceTicket = (id) => {
  const _apiUrlWithId = `${_apiUrl}/${id}`;
  return fetch(_apiUrlWithId).then((r) => r.json());
}
