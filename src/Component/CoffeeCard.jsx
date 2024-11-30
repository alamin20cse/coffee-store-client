import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,Coffees,setCoffees}) => {
    const { _id,
        name,
        quantity,
        suplier,
        taste,
        category,
        details,
        photo, } = coffee;

    const handleDelet = _id => {
        console.log(_id);


        // sweet 

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // console.log('delet')
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data);

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your  has been deleted.",
                                icon: "success"
                            });

                            const remaingnig=Coffees.filter(cof=>cof._id!==_id)
                            setCoffees(remaingnig)



                        }





                    })




            }
        });


    }


    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-[150px]'>
                    <img className='w-full h-full'
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body">

                    <div className="flex justify-between gap-3 w-full">

                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>{quantity}</p>
                            <p>{suplier}</p>
                            <p>{details}</p>
                        </div>






                        <div>
                            <div className="join join-vertical gap-3">
                                <button className="btn btn-primary join-item">View</button>
                               <Link to={`updatecoffee/${_id}`}> <button className="btn btn-primary join-item">Edit</button></Link>
                                <button onClick={() => handleDelet(_id)} className="btn bg-red-500 join-item">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CoffeeCard;