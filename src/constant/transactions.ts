import { ITransactions } from "@/helpers/interface/ITransactions";

const fakeTransactions: ITransactions[] = [
  {
    name: "Hamleys",
    date: new Date(),
    amount: 150,
    currency: "S$",
    type: "primary",
    id: 1,
  },
  {
    name: "Hamleys",
    date: new Date(),
    amount: -150,
    currency: "S$",
    type: "success",
    id: 2,
  },
  {
    name: "Hamleys",
    date: new Date(),
    amount: -150,
    currency: "S$",
    type: "danger",
    id: 3,
  },
  {
    name: "Hamleys",
    date: new Date(),
    amount: -150,
    currency: "S$",
    type: "primary",
    id: 4,
  },
];
export default fakeTransactions;
