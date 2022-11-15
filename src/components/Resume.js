import React from "react";

export default function Resume() {
    return (
<section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md: text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white mb-8">
                        Here's a link to my resume. 
                    </h1>
                <div className="hover:text-blue-500 mb-4">
                    <a className="" href="https://docs.google.com/document/d/1tayVyowwZUOEk8p37ZdlYwi3_UelF21RMHgTRhbQrhw/edit?usp=sharing">
                        Click Here
                    </a>
                </div>
                </div>
            </div>

        </section>
    )
}