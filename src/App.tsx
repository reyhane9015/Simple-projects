import { FC } from 'react';
import './App.css';

import CarComponet from "./CarComponent";


const myCar = {
  id: 1,
  brand: "Tesla",
  model: "model S",
  year: 2023,
  electric: true,
}

const App: FC = () => {
  return (
    <div className="App">
      <CarComponet  car={myCar} />
    </div>
  );
}

export default App;
