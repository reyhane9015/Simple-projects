

export type MathOperation = (x:number, y: number) => number;


const MathComponent = ({ operation } : { operation: MathOperation }) => {

    const result = operation(5,3);

    return <p>Result: {result}</p>;
};


export default MathComponent;