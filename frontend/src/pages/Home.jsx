import React from "react";
import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/heroImg01.png";
import vedioIcon from "../assets/images/vedioIcon.png";
import featureImg from "../assets/images/featureImg.png";
import About from "../components/About/About";
import ServicesComponent from "../components/ServicesComponent/ServicesComponent";


const Home = () => {
    return (<>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">

<div className="container">

<div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

<div>

<div className="lg:w-[570px]">

<h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]

md: leading-[70px]">

One stop solution for your health problems.

</h1>
<p className="text__para">
Welcome to Exilir, where seamless remote consultations, access AI-driven diagnoses, 
and manage your health from anywhere. Empower yourself with Exilir—where 
 your health is always our top priority.

</p>
<button className="btn">
    Request a checkup
</button>
<div className="flex flex-wrap justify-center lg:justify-start gap-[30px] mt-[30px] lg:mt-[70px]">
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            10+
        </h2>
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para">Verified Doctors</p>
    </div>
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            90%
        </h2>
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para">Successful Consultations</p>
    </div>
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            10+
        </h2>
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para">Happy Customers</p>
    </div>
</div>

</div>



    <div>
        <img className="hero-img" src={heroImg01} alt="doctor"/>
    </div>
   

</div>

</div>
</div>
</section>




<section>
    <div className="container">
        <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center"> We will maintain your trust and <span className="text-lightBlueColor">health</span></h2>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-[65px] mt-[30px] lg:mt-[70px]">
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            Request a checkup
        </h2>
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para ">Fill the form and get your diagnosis report</p>
    </div>
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            Consultation with doctor
        </h2>
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para ">Book an appointment with the specialised doctors</p>
    </div>
    <div className="flex flex-col items-center gap-5 lg:gap-[30px]">
        <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
            Give feedback
        </h2> 
        <span className="w-[100px] h-2 bg-neonColor rounded-full block mt-[-14px]"></span>
        <p className="text__para ">Feedbacks will help us improve</p>
    </div>
</div>
    </div>
</section>
<About />
{/*=======Services section==========*/}
<ServicesComponent />
{/*feature content */}
<div className="xl:w-[670px]">
        <h2 className="heading">
            Get Vedio Consultation <br /> anytime
        </h2>
        <ul className="pl-4">
            <li className="text__para">
                1. Schedule an appointment.
            </li>
            <li className="text__para">
                2. Search for your physician.
            </li>
            <li className="text__para">
                3. View your physician who are available, connect with them through online vedio call tool.
            </li>

        </ul>
        <Link to="/">
            <button className="btn">
                Learn More
            </button>
        </Link>
</div>
{/*feature img */}

<div className="relative z-10 xl:w-[770px] flex justify-end mt-[10px] ml-[650px] lg:mt-0">
    <img src={featureImg} className=" newimg w-3/4 mt-[-100px]" alt="" />

    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] ml-[240px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

<div className="flex items-center justify-between">

<div className="flex items-center gap-[6px] lg:gap-3">

<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor

font-[600]">

Tue, 24

</p>

<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor

font-[400]">

10:00AM

</p>

</div>

<span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center

bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">

<img src={vedioIcon} className="w-45 h-25"/>

</span>

</div>

</div>

</div>
    </>
    );
};

export default Home;