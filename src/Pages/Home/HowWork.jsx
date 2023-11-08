import { BiArrowToBottom, BiHomeHeart } from 'react-icons/bi';
const HowWork = () => {
    return (
        <section>
            <div className="flex flex-wrap md:mt-20">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                        <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost md:text-[40px]">
                            Join the Food Sharing Movement
                        </h2>
                        <p className="text-base px-3 text-body-color mb-5">
                            We&apos;re on a mission to connect those with surplus food to those in need while reducing food waste.
                            This guide illustrates how individuals can connect,
                            share surplus food, and contribute to reducing food waste while addressing hunger
                            in their local communities. Let&apos;s make a difference together!
                        </p>
                    </div>
                    <div className='max-w-[920px] container mx-auto'>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Register as a Donor</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Create an account to join the Food Sharing Movement and start sharing surplus food.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                             
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Share Food Details</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Describe the food you wish to donate, its quantity, and any special instructions.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                              
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Pick-Up or Drop-Off</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Choose whether you&apos;ll drop off the food or schedule a convenient pick-up location.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                              
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Availability and Scheduling</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Specify when your donation is available and select a date for sharing.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Review and Confirm</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Double-check your donation details and confirm your contribution to the community.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Confirmation and Notifications</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Receive instant confirmation and stay updated through notifications.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiArrowToBottom className='text-2xl'></BiArrowToBottom>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Track Donation Progress</p> 
                                    </div>
                                    <div className="text-slate-500">
                                        Monitor the journey of your donation from pick-up to delivery.
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <BiHomeHeart className='text-xl'></BiHomeHeart>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <p className="font-bold text-slate-900">Delivered</p>
                                    </div>
                                    <div className="text-slate-500">
                                        Celebrate as your surplus food reaches those in need, making a positive impact.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default HowWork;