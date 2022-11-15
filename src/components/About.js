import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-cener">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md: text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mb-8">
                        Hi, I'm Cory.
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">
                        I was born in Arizona but have spent the majority of my life in Utah. I also lived in Germany for 6 months and saw 15 different countries in that time, it was one of the greatest experiences of my life. I've always loved sports and played volleyball at the college club and semi-professional level. I graduated from Brigham Young University with a bachelor's in Psychology. I spent several years in sales then got my mortgage loan license and have been doing that for the past three years. I finally decided to pursue my passion in computer science. I completed a coding bootcampe throught the University of Utah in November 2022. I love software development and look forward to a long career in this industry.  
                    </p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* insert image of myself here */}
                    <img className="object-cover object-cneter rounded" alt="picture of me" src={require("../me.jpg")}/>
                </div>
            </div>
        </section>
    )
}

{/* <div className="flex justify-center">
<a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
    Work With Me
</a>
<a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
See My Past Work
</a>
</div> */}