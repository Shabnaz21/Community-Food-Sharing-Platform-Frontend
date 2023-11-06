import { BiCloudUpload } from "react-icons/bi";
import Swal from "sweetalert2";
import { useDropzone } from 'react-dropzone';

const AddFood = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, price, rating, type, description, photo }
        console.log(newProduct);
        form.reset();
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
                        <form onSubmit={handleAddProduct} className=" lg:mx-40 mt-10 space-y-3">
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
                                            <input type="text" name='name' placeholder="Enter Food Name" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96 ">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='photo' placeholder="Enter Food Image URL"
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
                                            <input type="text" name='brand' placeholder="Enter Food Quantity" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Pickup Location</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='price' placeholder="Enter Pickup Location" className="input p-3 w-full input-bordered" />
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
                                            <input type="text" name='rating' placeholder="Enter Your Food Expired Date/Time" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Name</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name='type' placeholder="Enter Donator Name" className="input p-3 w-full input-bordered" />
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
                                            <input type="text" name='type' placeholder="Enter Donator Email" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Donator Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='description' placeholder="Donator Image" className="input p-3 w-full input-bordered" />
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
                                            <input type="text" name='description' placeholder="" className="input p-3 w-full input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-96">
                                        <label className="label">
                                            <span className="text-xl font-semibold">Food Status</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name='description' placeholder="Enter Food Status" className="input p-3 w-full input-bordered" />
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