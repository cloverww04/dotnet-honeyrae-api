const _apiUrl = "/servicetickets";
const _apiUrlEmployees = "/employee";
const _apiUrlCustomer = "/customer";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id


export const getSingleServiceTicket = (id) => {
  const _apiUrlWithId = `${_apiUrl}/${id}`;
  return fetch(_apiUrlWithId).then((r) => r.json());
}

export const getEmployees = () => {
  return fetch(_apiUrlEmployees).then((r) => r.json());
}

export const getSingleEmployee = (id) => {
  const _apiUrlEmployeesWithId = `${_apiUrlEmployees}/${id}`;
  return fetch(_apiUrlEmployeesWithId).then((r) => r.json());
}

export const getCustomers = () => {
  return fetch(_apiUrlCustomer).then((r) => r.json());
}

export const getSingleCustomer = (id) => {
  const _apiUrlCustomerWithId = `${_apiUrlCustomer}/${id}`;
  return fetch(_apiUrlCustomerWithId).then((r) => r.json());
}
