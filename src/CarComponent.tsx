

type Car = {
    readonly id: number;
    brand: string;
    model: string;
    year: number;
    electric?: boolean;
};



const CarComponent = ({car} : {car: Car}) => {
    return (
        <div>
            <h2>Car Details</h2>
            <p>Brand: {car.brand}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Electric: {car.electric ? 'Yes' : 'No'}</p>
      </div>
    );
};


export default CarComponent;