import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFillCameraFill, BsFillQuestionOctagonFill, BsFillTelephoneOutboundFill } from "react-icons/bs";


const Contact = () => {
    return (
        <section className="mb-32 container my-24 mx-auto md:px-6">
            <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex flex-wrap items-center">
                    <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                        <div className="h-[500px] w-full">
                            <iframe src="https://maps.google.com/maps?q=123MainStreetChicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                            <h2 className="text-2xl px-3 pt-10 font-bold text-dark font-jost md:text-[40px]">
                                Get in Touch
                            </h2>
                        </div>
                        <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-400 text-2xl p-4 text-primary">
                                            <BsFillTelephoneOutboundFill />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-white">
                                            Technical support
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            support@shareplate.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            +1 234-567-87
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-400 text-2xl p-4 text-primary">
                                            <BsFillQuestionOctagonFill />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-white">
                                            Donation Questions
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            donate@shareplate.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            +1 234-567-88
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-400 text-3xl p-4 text-primary">
                                            <AiOutlineFileSearch />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-white">General Inquiries</p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            info@sharepalate.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-400 p-4 text-2xl text-primary">
                                            <BsFillCameraFill></BsFillCameraFill>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold dark:text-white">Media and Press</p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            media@shareplate.com
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-200">
                                            +1 234-567-90
                                        </p>
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

export default Contact;