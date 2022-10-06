import axios from "axios";

const url = "https://react-native-bf55e-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  console.log("*** http storeExpense expenseData", expenseData);

  const response = await axios.post(url + "/expenses.json", expenseData);

  const id = response.data.name;

  return id;
  // .then((res) => {
  //   console.log(res);
  //   console.log(res.data);
  // })
  // // .catch((error) => console.log(error.res.data));
  // .catch((error) => {
  //   if (error.res) {
  //     console.log(error.res.data);
  //     console.log(error.res.status);
  //     console.log(error.res.headers);
  //   } else if (error.request) {
  //     console.log("error.request", error.request);
  //   } else {
  //     console.log("Error", error.message);
  //   }
  // });
}

export async function fetchExpenses() {
  const response = await axios.get(url + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export async function updateExpense(id, expenseData) {
  return axios.put(url + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id){
  return axios.delete(url + `/expenses/${id}.json`);
}