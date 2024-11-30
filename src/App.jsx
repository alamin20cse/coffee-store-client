import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Component/CoffeeCard';

function App() {
  // Load initial coffee data
  const loadedCoffees = useLoaderData();
  // Manage coffee state locally
  const [Coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-6xl">Coffee: {Coffees.length}</h1>

      {/* Display all coffee cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {Coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            Coffees={Coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
