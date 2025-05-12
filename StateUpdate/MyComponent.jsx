import React, { useState } from 'react';

function MyComponent() {
  // -----------------------------
  // 1. Update object in state
  // -----------------------------
  const [car, setCar] = useState({
    year: 2024,
    make: 'Ford',
    model: 'White Mustang',
  });

  const handleYearChange = (e) => {
    setCar({ ...car, year: parseInt(e.target.value) || 0 });
  };

  const handleMakeChange = (e) => {
    setCar({ ...car, make: e.target.value });
  };

  const handleModelChange = (e) => {
    setCar({ ...car, model: e.target.value });
  };

  // -----------------------------
  // 2. Manage array of cars
  // -----------------------------
  const [cars, setCars] = useState([
    { year: 2024, make: 'Ford', model: 'White Mustang' },
    { year: 2023, make: 'Toyota', model: 'Red Corolla' },
    { year: 2022, make: 'Honda', model: 'Blue Civic' },
    { year: 2021, make: 'Chevrolet', model: 'Black Camaro' },
  ]);

  const [newCar, setNewCar] = useState({
    year: '',
    make: '',
    model: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCar = () => {
    if (newCar.year && newCar.make && newCar.model) {
      const carToAdd = {
        year: parseInt(newCar.year),
        make: newCar.make.trim(),
        model: newCar.model.trim(),
      };

      setCars(prevCars => [...prevCars, carToAdd]);
      setNewCar({ year: '', make: '', model: '' });
    } else {
      alert('Please fill out all fields to add a car.');
    }
  };

  const handleRemoveCar = (index) => {
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Section 1: Update single car object */}
      <h2>Update a Single Car</h2>
      <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        placeholder="Year"
      /><br /><br />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        placeholder="Make"
      /><br /><br />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        placeholder="Model"
      /><br /><br />

      <hr style={{ margin: '30px 0' }} />

      {/* Section 2: Manage cars array */}
      <h2>Car List</h2>
      {cars.map((c, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <p>{c.year} {c.make} {c.model}</p>
          <button onClick={() => handleRemoveCar(index)}>Remove</button>
        </div>
      ))}

      <h3>Add a New Car</h3>
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={newCar.year}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={newCar.make}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={newCar.model}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;
