import { BiCloudUpload } from "react-icons/bi";
import Swal from "sweetalert2";
import { useDropzone } from 'react-dropzone';
import { Helmet } from "react-helmet";
import useAxios from "../../Components/Hooks/useAxios/useAxios";



const AddFood = () => {
    const axios = useAxios();
    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.FName.value;
        const donatorName = form.DName.value;
        const donatorEmail = form.DEmail.value;
        const donatorImage = form.DImage.value;
        const foodImage = form.FPhoto.value;
        const foodQuantity = form.quantity.value;
        const pickupLocation = form.pickup.value;
        const expiredTime = form.expired.value;
        const additionalNotes = form.notes.value;
        const newFood = {
            foodImage, foodName,
            foodQuantity, pickupLocation,
            expiredTime, additionalNotes,
            donatorName, donatorImage,
            donatorEmail
        }
        console.log(newFood);
        form.reset();

        //send Data with axios
        axios.post('/foods', newFood)
            .then(data => {
                console.log(data.data);
                if (data?.data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Your surplus food successfully added for your neighbors',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            }).catch(error => {
                console.log(error);
            })
         
    }
    function DropzoneWithoutKeyboard(props) {
        const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noKeyboard: true });
        const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

        return (
            <section className="container flex flex-col items-center justify-center w-full 
            h-64 border-2 border-gray-300 border-dashed rounded-lg
            cursor-pointer bg-gray-50 ">
                <div {...getRootProps({ className: 'dropzone' })} >
                    <BiCloudUpload className="text-4xl ml-20"></BiCloudUpload>
                    <input {...getInputProps()} />
                    <p className="mb-2 text-sm text-gray-500
                                         dark:text-gray-400">
                        <span className="font-semibold">Click to upload </span> 
                         or drag and drop</p>

                </div>
                <aside>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <ul className="text-gray-900">{files}</ul>
                </aside>
                
            </section>
        );
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Share Plate | Add Food  </title>
                <meta name='description' content='Join our community food sharing platform, reduce waste, 
        and end hunger. Experience the taste of sustainability. Get started today!' />
            </Helmet>

            <div className="container mx-auto m-20">
                <div className="bg-[#f5fff8] rounded-xl mx-2 md:mx-5 p-2 pb-8 pt-8 ">
                    <div className="text-center ">
                        <h2 className="text-4xl m-4 font-semibold font-jost">Share Your Surplus - Add Food Listing</h2>
                        <p className="lg:max-w-3xl lg:mx-auto">
                            Make a difference by sharing your surplus food with those in need. Adding a food listing on our platform is quick and easy. Together, we can nourish our community and work towards a more sustainable future.
                            Let's reduce food waste and address hunger, one meal at a time.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleAddFood} className=" lg:mx-40 mt-10 space-y-3">
                            <div className="flex items-center justify-center w-full">
                            <DropzoneWithoutKeyboard />
                            </div> 
                            <div className="xl:mx-32">
                                <div className="md:flex gap-20 ">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Name</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='FName' placeholder="Enter Food Name" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96 ">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='FPhoto' placeholder="Enter Food Image URL"
                                                className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Quantity</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='quantity'
                                                placeholder="(No. of person to be served)" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Pickup Location</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='pickup'
                                                placeholder="Enter Pickup Location" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Expired Date/Time</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='expired'
                                                placeholder="Enter Expired Time in second" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Name</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='DName' placeholder="Enter Donator Name" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Email</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='DEmail' placeholder="Enter Donator Email" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='DImage' placeholder="Donator Image" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div className="md:flex gap-20">
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Additional Notes</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='notes' placeholder="" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Status</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='status' placeholder="Enter Food Status" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="form-control flex place-content-center">
                                    <input type="submit" value="Add Your Donated Food"
                                        className="text-xl font-Rancho 
                            rounded-xl bg-primary text-white border-2
                             hover:text-white md:w-[100%] xl:w-[95%]
                             mt-5 p-4 w-96 font-semibold" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddFood;