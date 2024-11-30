import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const {
    _id,
    name,
    quantity,
    suplier,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      suplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    // Send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Update Successful!',
            text: 'Coffee details have been updated successfully.',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } else {
          Swal.fire({
            title: 'No Changes Made!',
            text: 'No updates were detected.',
            icon: 'info',
            confirmButtonText: 'Okay',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while updating coffee.',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
        console.error('Error updating coffee:', error);
      });
  };

  return (
    <div>
      <h1 className="text-6xl">Update Coffee: {name}</h1>

      <form
        onSubmit={handleUpdateCoffee}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            name="name"
            type="text"
            defaultValue={name}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Quantity</label>
          <input
            type="text"
            defaultValue={quantity}
            name="quantity"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Supplier</label>
          <input
            type="text"
            defaultValue={suplier}
            name="suplier"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Taste</label>
          <input
            type="text"
            defaultValue={taste}
            name="taste"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <input
            type="text"
            defaultValue={category}
            name="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Details</label>
          <input
            type="text"
            defaultValue={details}
            name="details"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-2">Photo</label>
          <input
            type="text"
            defaultValue={photo}
            name="photo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
