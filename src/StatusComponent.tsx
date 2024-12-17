

type Status = "success" | "error" | "loading";




const StatusComponent = ({ status } : { status: Status }) => {
    return (
        <div>
            <h2>Status: {status}</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Error occurred!</p>}
            {status === 'success' && <p>Operation was successful!</p>}
      </div>
    );
};


export default StatusComponent;