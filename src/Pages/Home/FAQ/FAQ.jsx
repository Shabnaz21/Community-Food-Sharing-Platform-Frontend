import AccordionItem from "./AccordionItem";


const FAQ = () => {
    return (
        <section className="relative z-20 overflow-hidden pt-20 pb-12">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[820px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold font-jost text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-2xl px-3 font-bold text-dark font-jost  md:text-[40px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base px-3 text-body-color">
                                We aim to connect those with surplus food to those in need, reducing food waste and addressing hunger.
                                Explore the following frequently asked questions to better understand our mission and how you can make a positive impact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What is the purpose of this platform?"
                            text="Our platform connects individuals with surplus food to those in need, fostering a sense of community and sustainability."
                        />
                        <AccordionItem
                            header="How can I get involved and make a difference?"
                            text="You can get involved by either donating surplus food or requesting 
                            food assistance. Our platform makes it easy for you to contribute to a hunger-free community."
                        />
                        <AccordionItem
                            header="How does food sharing help reduce food waste?"
                            text="By sharing surplus food, we prevent it from ending up in landfills, 
                            thus reducing food waste and its environmental impact."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How can I stay updated on platform news and events?"
                            text="Stay informed about our initiatives, events, and success stories by following our blog and social media profiles."
                        />
                        <AccordionItem
                            header="What is the impact of my food donations on the community?"
                            text="Your food donations directly impact those in need, reducing hunger and promoting sustainability in your local community."
                        />
                        <AccordionItem
                            header="Is this platform free to use for both donors and recipients?"
                            text="Yes, our platform is completely free to use for everyone, 
                            ensuring equal access to food sharing and reducing barriers to participation."
                        />
                    </div>
                </div>
            </div>


        </section>
    );
};

export default FAQ;
