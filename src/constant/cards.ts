import { ICards } from "@/helpers/interface/ICards";

const fakeCards: ICards[] = [
  {
    thru: "12/20",
    number: "1234 5678 9000 1234",
    name: "John Doe",
    showNumber: false,
    freeze: false,
    cancel: false,
    id: Math.random(),
  },
  {
    thru: "12/20",
    number: "5673 5678 9000 2345",
    name: "Peter Bingham",
    showNumber: false,
    freeze: false,
    cancel: false,
    id: Math.random(),
  },
  {
    thru: "12/20",
    number: "9876 5678 9000 3456",
    name: "Lawrence Evans",
    showNumber: false,
    freeze: false,
    cancel: false,
    id: Math.random(),
  },
];
export default fakeCards;
