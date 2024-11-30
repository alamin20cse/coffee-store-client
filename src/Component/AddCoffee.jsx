import React from 'react';
import { data } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee=event=>{
        event.preventDefault();

        const form=event.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const suplier=form.suplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={
            name,
            quantity,
            suplier,
            taste,
            category,
            details,
            photo,
        }

        console.log(newCoffee);
        // send data to the server 

        fetch(`http://localhost:5000/coffee`,{

            method:'POST',
            headers:{

                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{

            console.log(data);
            if(data.insertedId)
            {

                Swal.fire({
                    title: 'SuccesFul! ',
                    text: 'User added f',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })


            }
        })



    }





    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add New Coffee
        </h1>
        <p className="text-center text-gray-600 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input name='name'
              type="text"
              placeholder="Enter coffee name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <input
              type="text" name='quantity'
              placeholder="Enter coffee chef"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Supplier
            </label>
            <input
              type="text" name='suplier'
              placeholder="Enter coffee supplier"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Taste</label>
            <input
              type="text" name='taste'
              placeholder="Enter coffee taste"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              type="text" name='category'
              placeholder="Enter coffee category"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Details</label>
            <input
              type="text" name='details'
              placeholder="Enter coffee details"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Photo</label>
            <input
              type="text" name='photo'
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;