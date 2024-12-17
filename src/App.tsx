import { FC } from 'react';
import './App.css';

// import CarComponet from "./CarComponent";
// import StatusComponent from './StatusComponent';
// import EmployeeComponent from "./EmployeeComponent";
// import PaymentComponent from "./PaymentComponent";
// import MathComponent , {MathOperation} from "./MathComponent";

// import Example1 from "./Example1";
// import Example2 from "./Example2";
import Example3 from "./Example3";


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
// const payment = 'credit';


// Function Types**
// const add : MathOperation = (x,y) => x + y;
// const subtract: MathOperation = (x,y) => x - y;





const App: FC = () => {
  return (
    <div className="App">
      {/* <CarComponet  car={myCar} /> */}
      {/* <StatusComponent status={status} /> */}
      {/* <EmployeeComponent employee={employee} /> */}
      {/* <PaymentComponent payment={payment} /> */}

      {/* <MathComponent operation={add} />
      <MathComponent operation={subtract} /> */}

      {/* <Example1 /> */}

      {/* <Example2 /> */}

      <Example3 />

    </div>
  );
}

export default App;
