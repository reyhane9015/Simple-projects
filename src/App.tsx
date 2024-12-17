import { FC } from 'react';
import './App.css';

import CarComponet from "./CarComponent";
import StatusComponent from './StatusComponent';

// Object Types
// const myCar = {
//   id: 1,
//   brand: "Tesla",
//   model: "model S",
//   year: 2023,
//   electric: true,
// }

const status = "loading"; 


const App: FC = () => {
  return (
    <div className="App">
      {/* <CarComponet  car={myCar} /> */}
      <StatusComponent status={status} />
    </div>
  );
}

export default App;
