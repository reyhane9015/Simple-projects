import { FC } from 'react';
import './App.css';

// import CarComponet from "./CarComponent";
// import StatusComponent from './StatusComponent';
// import EmployeeComponent from "./EmployeeComponent";
import PaymentComponent from "./PaymentComponent";

// Object Types**
// const myCar = {
//   id: 1,
//   brand: "Tesla",
//   model: "model S",
//   year: 2023,
//   electric: true,
// }

// Union Types**
// const status = "loading"; 


// Intersection Types**
// const employee = {
//   name: 'John Doe',
//   age: 30,
//   company: 'Tech Corp',
//   role: 'Software Engineer',
// };

// Literal Types**
const payment = 'credit';


const App: FC = () => {
  return (
    <div className="App">
      {/* <CarComponet  car={myCar} /> */}
      {/* <StatusComponent status={status} /> */}
      {/* <EmployeeComponent employee={employee} /> */}
      <PaymentComponent payment={payment} />
    </div>
  );
}

export default App;
