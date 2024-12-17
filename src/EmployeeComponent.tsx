type Person = {
    name: string;
    age: number;
};


type Employee = {
    company: string;
    role: string;
};

type FullTimeEmployee = Person & Employee;



const EmployeeComponent = ({ employee } : { employee: FullTimeEmployee}) => {
    return (
        <div>
          <h2>Employee Details</h2>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
          <p>Company: {employee.company}</p>
          <p>Role: {employee.role}</p>
        </div>
      );
};

export default EmployeeComponent;