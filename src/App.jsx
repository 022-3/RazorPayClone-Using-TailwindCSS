//import { useState } from 'react'
import suitePayment from './assets/images/payment-suite.png';
//import images from './assets/hero1.jpg';
import india from './assets/icons8-india-48.png'
import logo from './assets/images/logo.svg'
import dotsImg from './assets/images/feature-section1-dottedrows.png'
import dotedImg from './assets/images/feature-section1-dottedrows.png'
import dotLine from './assets/images/instant-settlement-bg.svg'
import razor from './assets/images/razorpayX.svg'
import BusinessBack from './assets/images/buisness-banking.png'
import featureBanner from './assets/images/feature-section-2BG.svg'
import banner from './assets/images/core-features-sectionBg.svg'
import payment from './assets/images/hero-illustration.jpg'
import heroShap from './assets/images/hero-shape.svg'
import doted from './assets/images/feature-section1-dottedrows.png'
import arrow from './assets/icons8-arrow-100.png'
import CTAbg from './assets/images/CTABg.svg'

import { FaLongArrowAltRight ,  FaCcAmazonPay ,FaCheck } from "react-icons/fa";
import { FaChevronLeft , FaChevronRight} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

import { MdCorporateFare , MdSensorOccupied , MdOutlineShoppingCartCheckout , MdEditDocument } from "react-icons/md";

import './App.css'

import footer from './assets/banner1.jpg'

//import Card from './components/Card'

function App() {
 
  return (
    <>
  <div className='overflow-x-hidden relative w-full'>
    <nav className='bg-deepBlue '>
    <div className='relative w-[1080px] mx-auto flex items-center  justify-between '>

    <a href="/" className='logo flex py-6 px-6 font-bold text-2xl text-white'><img className='h-[30px]  object-cover' src={logo} alt="" /></a>
      <ul className='flex items-center  text-sm tablet:space-x-3 laptop:space-x-5  tablet:text-[13px] laptop:text-sm font-medium  space-x-5 text-white '>
        <li className='transition-all py-4 duration-400 relative group  lg:block hover:text-lightBlue  cursor-pointer'>
          <a href="#">Payment</a>
          <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200'></div>
        </li>
        <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Line of Credit</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
          <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Corporate Card</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
        <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Payroll</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
        <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Resources</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
        <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Suports</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
        <li className='transition-all py-4 duration-200 relative group  lg:block hover:hover:text-lightBlue cursor-pointer'>
          <a href="#">Pricing</a>
          <div className=' absolute bottom-0 w-full h-1 hover:bg-blue-400 hidden group-hover:block transition-all duration-200'></div>
        </li>
  </ul>

 

    <div className='flex space-x-4'>
      <a href='/'  type="button" className=''><img className=' h-10' src={india} alt=""/></a>
      <button type='button' className='py-2 px-4 outline-2 rounded-sm border-blue-500 border text-sm text-white '>Login</button>
      <button type='button' className='flex py-2 items-center text-center outline-none px-4 rounded text-blue-500 bg-[#ffffff] font-bold hover:text-blue-600 transition-all duration-200'>Sign Up <span className='pl-1 pt-0.5'><FaLongArrowAltRight />
        </span>
      </button>
    </div>


    </div>
    </nav>
    <section className='bg-deepBlue relative'>
       <div className="w:10/12  max-w-[1080px] mx-auto items-center flex  tablet:flex-col laptop:flex-row justify-between">
        <div className="space-y-8 px-[2rem] py-8">
          <h1 className='text-white font-bold text-[40px] leading-[1.2]'style={{textShadow:'0px 1px 1px pink'}} >Power Your Finance grow Your Bussiness</h1>
          <div className='w-6 h-1 bg-blue-400 mt-4'></div>
          <p className='text-white  text-[16px] leading-7 mt-3 opacity-70'>Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital..</p>
           <p className='text-white  text-[16px] leading-7 mt-3 opacity-70'>Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital..</p>   
             <button className='bg-blue-400 hover:bg-blue-500 text-white font-bold mt-5 transition-all duration-200 py-[10px] px-[18px] '>Search Here</button>
        </div>
        <img src={payment} alt=""  className='max-w-[600px]' /> 
       </div> 


       <div className='w-[103%] h-[full] absolute left-0 right-0'>
        <img src={heroShap} alt="" className='w-full object-fill' />
       </div>


    </section>
    
    <section className=' relative overflow-hidden mt-[15rem] '>
      <img src={dotsImg} alt="" width={'220px'} loading='lazy' className='absolute -top-[4rem] left-[10rem] -z-10 inline-block ' />
      <img src={doted} alt="" width={'220px'} loading='lazy' className='absolute top-[3rem] right-0 inline-block rotate-180' />
      
      <div className='w-11/12  mt-6 pt-4  mx-auto max-w-[1080px] ' >   
       <h2 className='font-mullish text-2xl mt-10 text-center items-center font-bold leading[2] text-blue-950' style={{textShadow:'0px 1px 1px black'}}> Accept  Payments with Razorpay Payment</h2>
       <h2 class="font-mullish mt-3 text-center text-4xl leading-[1.2] font-extrabold  md:hidden">Explore Razorpay Payment Suite</h2>
       <div className='flex h-1 w-10 bg-blue-400 mx-auto  mt-3 '></div>


        <div className='flex items-center text-center w-full min-h-[520px] justify-between mt-5 tablet:flex-col laptop:flex-row rounded-md relative p-10 py-8 border border-gray-600'> 
         <div className=' text-start items-start flex flex-col justify-between  w-full'>
            <h3 class="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                Supercharge your business with the all‑powerful
                <span class="text-lightBlue"> Payment Gateway</span>
            </h3>
           <div className='space-y-2 mt-3'>              
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" /><span> Industry Leading Success Rate </span></p>
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" />Superior Checkout Experience</p>
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" />100+ Payment Method</p>
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" /> Easy to Integrate </p>
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" />Instant Settlements from day 1 </p>
            <p className='flex items-center gap-1 text-center mb-2'><FaCheck className="text-[0.6rem] text-green-500" />100+ Instant Settlements from day 1 </p>
           </div>
           <div className='flex mt-4 items-center space-x-4 flex-col-reverse  tablet:flex-row'>
             <button className='bg-blue-400 py-2  space-x-2 px-4 text-white flex text-center font-bold items-center hover:bg-blue-300'> Sign Up now <span className='pl-1'><FaLongArrowAltRight /></span> </button>
             <button className=' flex  text-center py-2 px-4 font-bold items-center border bg-slate-200 hover:bg-slate-300 ' style={{borderRight:'4mm ridge rgba(211, 220, 50, .6)'}} > Know More <span className='pl-1 text-lg font-bold'><MdOutlineKeyboardArrowRight /></span> </button>
           </div>
         </div>  
         <img className='mb-5 w-full  max-w-[680px]   tablet:max-w-[400px] leptop:max-w-[600px] tablet:block laptop:block ' src={suitePayment} alt="" /> 
        </div> 

      <div className='w-full grid grid-cols-3 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mt-[3rem]'>
      <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
        
        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>

        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] w-full h-full card flex-col rounded-tr-[50px] border border-slate-400 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
       </div>  

       

      </div>
     

    </section>
  
  <section className=' mt-[3rem] py-6 px-6 bg-no-repeat bg-cover pb-[500px]  pt-[16rem]' style={{backgroundImage:`url(${featureBanner})`}}>
    <div className='mt-[3rem] max-w-[1080px] mx-auto items-center w:10/12 relative '>
      <h2 className='items-center text-center text-[30px] mt-[4rem] text-white font-bold' style={{textShadow:'0px 2px 1px red'}} >Accept  Payments with Razorpay Payment</h2>
      <div className='h-1 w-6 mx-auto bg-cyan-400  mt-2 '></div>
      <div className=' relative flex justify-between mt-6 min-h[440px]  flex-col  text-white shadow-3xl ' >
        <img  src={dotsImg} alt="" loading='lazy' className=' absolute -top-[142px] -left-[140px] w-[200px]'  />
        <img  src={doted} alt="" width={'300px'} loading='lazy' className='absolute top-[150px] -right-[180px] w-[200px]'  />
        <div className='flex tablet:flex-col laptop:flex-row items-center text-center bg-[#181c2e] p-6 py-6 border border-slate-700 z-20 rounded-md'>
          <div className=' '>
             <h3 class="font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]"
                  >Manage your company’s finances with {" "}
                  <img src={razor} alt="" width={"168px"} height={"32px"} className="inline" /> <span class="text-greenLight"> Business Banking</span>
              </h3>
            
          
              <ul className='mt-5'>
                <li className='flex space-x-2 mb-1 items-center text-center'>
                  <span className='pt-1 text-blue-500'><HiOutlineChevronDoubleRight/></span>
                  <span> Industry Leading Success Rate</span>
                </li>
                <li className='flex space-x-2 mb-1 items-center text-center'>
                  <span className='pt-1 text-blue-500'><HiOutlineChevronDoubleRight/></span>
                  <span>Superior Checkout Experience</span>
                </li>
                <li className='flex space-x-2 mb-1 items-center text-center'>
                  <span className='pt-1 text-blue-500'><HiOutlineChevronDoubleRight/></span>
                  <span>Easy to Integrate</span>
                </li>
                <li className='flex space-x-2 mb-1 items-center text-center'>
                  <span className='pt-1 text-blue-500'><HiOutlineChevronDoubleRight/></span>
                  <span>Instant Settlements from day 1</span>
                </li>
                <li className='flex space-x-2 mb-1 items-center text-center'>
                  <span className='pt-1 text-blue-500'><HiOutlineChevronDoubleRight/></span>
                  <span>In-depth Reporting and Insights</span>
                </li>  
              </ul>
             <div className='flex flex-row space-x-4 mt-6'>
              <div className='relative flex flex-col-reverse tablet:flex-row'>        
                  <button className='bg-blue-500  py-2 tablet:w-fit tablet:justify-start  px-3 space-x-2  text-white flex  items-center    font-bold hover:bg-blue-400 transition-all duration-200' style={{width:'180px'}} > 
                  Sign Up now  
                  <div className='absolute right-3 w-10 h-[50px] bg-green-500 sk skew-x-[20deg] items-center text-center py-5 flex justify-center ' ><FaLongArrowAltRight className="skew-x-[-20deg]" /></div>
                  </button>
               </div>
              <button className=' flex  text-center py-2 border px-4 font-bold items-center hover:bg-slate-100 ' style={{borderRight:'4mm ridge rgba(211, 220, 50, .6)'}} > Know More <span className=' text-2xl font-bold'><MdOutlineKeyboardArrowRight className="" /></span> </button>
             </div>
           </div>
          <img className='w-full max-w-[600px] tablet:max-w-[400px] laptop:max-w-[600px] tablet:block laptop:block' src={BusinessBack} alt="" style={{mixBlendMode:'lighten'}} />
        </div>
      </div>

      <div className="mx-auto mb-5 mt-[4rem] max-w-[1080px] h-auto">
       <div className='grid grid-cols-3 tablet:grid-cols-2 laptop:grid-cols-3 gap-4'>
        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] text-gray-200 w-full h-full card flex-col rounded-tr-[50px] rounded-bl-[50px] border border-gray-700 hover:text-white pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-white mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>

        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] text-gray-200 w-full h-full card flex-col rounded-tr-[50px] rounded-bl-[50px] border border-gray-700 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-white mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>

        <div className='relative w-full min-h-[15rem] cursor-pointer mb-3' >
         <img className='z-10 absolute right-2 top-2' src={arrow} alt="" width={'70px'}/>
         <div className=" z-[100] text-gray-200 w-full h-full card flex-col rounded-tr-[50px] rounded-bl-[50px] shadow-xl border border-gray-700 pl-5 py-5 pr-5">
           <h2 className='leading-[1.5] text-[25px] font-bold'>Premitive Links</h2>
           <p className='text-[16px] mt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Eius voluptatem repellat dicta aperiam reprehenderit odio.</p>
            <a href="#" className='text-center font-bold items-center flex text-medium text-blue-700 hover:text-black mt-7 '>Know more <span className='pt-1'><MdOutlineKeyboardArrowRight /></span> </a>
         </div>
        </div>
       </div>
       </div>
       <div className=' flex mt-[4rem] py-4 gap-y-6 px-6 space-x-4 outline-dotted shadow-3xl items-center  justify-center tablet:flex tablet:flex-col laptop:flex-row laptop:flex'>
          <p className='flex text-[18px] text-slate-300 space-x-1 items-center text-center  px-3'>
          Check out the live demo to learn how RazorpayX works.
            <span className='pl-1 text-red-500'> No sign-up required!</span>
          </p>

          <button className=' relative bg-blue-500 pr-2 py-2   px-3 space-x-2  text-white flex  items-center   font-bold hover:bg-blue-400 transition-all duration-200' style={{width:'220px'}} > 
              Check out the demo 
                  <div className='absolute right-3 w-10 h-[50px] bg-yellow-600 sk skew-x-[20deg] items-center text-center py-5 flex justify-center ' ><FaLongArrowAltRight className="skew-x-[-20deg]" /></div>
          </button> 
       </div>
      </div>
   
  </section>

  <section className='bg-white relative'>
    <div className=' relative max-w-[1080px] mx-auto items-center w:11/12 pt-4 mt-[3rem]'>
      <img src={dotedImg}  loading='lazy' className='w-[230px] absolute left-[300px] -top-[6rem] -z-[10] '  alt="" style={{mixBlendMode:''}} />
      <img src={dotsImg} loading='lazy' className='w-[230px] absolute -right-[3.5rem] -top-[6rem] -z-[10]'   alt="" style={{mixBlendMode:''}} />
      <div className='px-[1rem] relative grid grid-cols-3 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-10 gap-x-4 z-[100]'>
        <div className=' px-4 flex relative items-center z-0 '>
              <h1 className='text-[2rem] leading-[1.5] font-bold '>New in The <br />
                <span className='text-blue-700'> Razorpay <br /></span>
               {" "} Products Suite
              </h1>
        </div>
        <div className=' cursor-pointer   px-7  py-7 rounded-md shadow-1xl  hover:scale-105 transition-all duration-200' style={{backgroundImage:`url(${dotLine})`}} >
          <MdCorporateFare className="text-white text-[3rem] mb-4 bg-blue-700 py-2 px-2 rounded-full" />
          <h3 className='text-[1.3rem] text-black font-bold'>Corprote Cards</h3>
          <p className='mt-2 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facilis deleniti vitae perferendis earum aliquid voluptate.. 
           </p>
           <a href="" className='flex items-center text-center space-x-2 mt-4' >Know More <MdOutlineKeyboardArrowRight className="text-[1.5rem]" /> </a>
        </div>
        <div className='px-7 py-7 rounded-md shadow-1xl cursor-pointer hover:scale-105 transition-all duration-200' style={{backgroundImage:`url(${dotLine})`}}>
        <MdSensorOccupied className="text-white text-[3rem] mb-4 bg-blue-700 py-2 px-2 rounded-full" />
          <h3 className='text-[1.3rem] text-black font-bold'>Corprote Cards</h3>
          <p className='mt-2 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facilis deleniti vitae perferendis earum aliquid voluptate.. 
           </p>
           <a href="" className='flex items-center text-center space-x-2 mt-4' >Know More <MdOutlineKeyboardArrowRight className="text-[1.5rem]" /> </a>
        </div>
        <div className='px-7 py-7 rounded-md shadow-1xl cursor-pointer hover:scale-105 transition-all duration-200' style={{backgroundImage:`url(${dotLine})`}}>
        <FaCcAmazonPay className="text-white text-[3rem] mb-4 bg-blue-700 py-2 px-2 rounded-full" />
          <h3 className='text-[1.3rem] text-black font-bold'>Payment Button</h3>
          <p className='mt-2 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facilis deleniti vitae perferendis earum aliquid voluptate.. 
           </p>
           <a href="" className='flex items-center text-center space-x-2 mt-4' >Know More <MdOutlineKeyboardArrowRight className="text-[1.5rem]" /> </a>
        </div>
        <div className='px-7 py-7 rounded-md shadow-1xl cursor-pointer hover:scale-105 transition-all duration-200 'style={{backgroundImage:`url(${dotLine})`}}>
        <MdOutlineShoppingCartCheckout className="text-white text-[3rem] mb-4 bg-blue-700 py-2 px-2 rounded-full" />
          <h3 className='text-[1.3rem] text-black font-bold'>Corprote Cards</h3>
          <p className='mt-2 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facilis deleniti vitae perferendis earum aliquid voluptate.. 
           </p>
           <a href="" className='flex items-center text-center space-x-2 mt-4' >Know More <MdOutlineKeyboardArrowRight className="text-[1.5rem]" /> </a>
        </div>
        <div className='px-7 py-7 rounded-md shadow-1xl cursor-pointer hover:scale-105 transition-all duration-200' style={{backgroundImage:`url(${dotLine})`}}>
        <MdEditDocument className="text-white text-[3rem] mb-4 bg-blue-700 py-2 px-2 rounded-full" />
          <h3 className='text-[1.3rem] text-black font-bold'>Corprote Cards</h3>
          <p className='mt-2 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facilis deleniti vitae perferendis earum aliquid voluptate.. 
           </p>
           <a href="" className='flex items-center text-center space-x-2 mt-4' >Know More <MdOutlineKeyboardArrowRight className="text-[1.5rem]" /> </a>
        </div>
      </div>
      <div className='mt-7 space-x-6 grid grid-cols-3'  >
      
      </div>
    </div>
  </section>

<section className='w-full bg-cover bg-center mt-[3rem] relative corefeaturesection' style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>
    <div className='max-w-[1080px] mx-auto items-center w:10/12 py-[2rem]  text-white'>
    <h2 className='items-center text-center text-[40px]   font-bold' style={{textShadow:'0px 2px 1px red',letterSpacing:'0.1rem'}} >Features</h2>
    <div className='h-1 w-10 mx-auto bg-gray-200  mt-2 '></div>
    <p className='mx-auto items-center text-center text-[14px] font-bold mb-4  mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Expedita excepturi nulla qui quibusdam quae illo facere. Molestias veniam nostrum eius!</p>
     
  <div className='flex-row grid grid-cols-4 py-1 px-1 mt-[2rem] mb-[1rem] space-x-3 tablet:grid-cols-2 laptop:grid-cols-4 gap-y-10 gap-x-4'>
   <div className='shadow-md py-5 px-5 '>
     <img src="../src/assets/images/instant-activation-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
   <div className='shadow-md py-5 px-5'>
   <img src="../src/assets/images/api-driven-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div> 
   <div className='shadow-md py-5 px-5 '>
   <img src="../src/assets/images/easy-integration.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
   <div className='shadow-md py-5 px-5 '>
   <img src="../src/assets/images/dashboard-reporting-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
 
  
   <div className='shadow-md py-5 px-5'>
   <img src="../src/assets/images/api-driven-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
   <div className='shadow-md py-5 px-5'>
   <img src="../src/assets/images/instant-activation-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div> 
   <div className='shadow-md py-5 px-5'>
   <img src="../src/assets/images/payment-modes.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
   <div className='shadow-md py-5 px-5 '>
   <img src="../src/assets/images/industry-support-icon.svg" alt=""   />  
     <h2 className='mt-2 font-bold'>Instent Activation</h2>
     <p className='text-[13px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum sint doloribus quia modi
      eveniet incidunt veniam velit.!!
     </p>
   </div>
  
   </div>
    </div>    
</section>

<section className='bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]'>
  <div className='w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row'>
   <div className='flex '>
      <div className='flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16'>
        <h2 className='font-mullish text-[2rem] font-bold text-deepBlueHead'>Join The 50,00,000+ businesses using Razorpay </h2>
        <div className='h-1 w-10  bg-cyan-600  mt-2 '></div>
        <p className='font-mullish mt-[1rem] opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate impedit
           repellendus quas quod inventore illo quidem harum esse fugit 
          repudiandae eius consequuntur quia modi?</p>
         <p className='font-mullish mt-[1rem] opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Et iusto blanditiis, explicabo voluptatum sunt beatae.</p> 
       </div>
       <div class="h-[500px] w-[600px] relative overflow-y-hidden mx-auto">
        <div className='absolute companies1  w-full h-[150px] top-0 z-50' style={{background:'linear-gradient(180deg, #f4f8ff, #fff0)'}} ></div>
        <img src="../src/assets/images/comanies.png" alt="" className='absolute  h-auto object-cover companiesList' />
        <div className="absolute companies2 w-full h-[150px] bottom-0 z-50"></div>
      </div>
   </div>
  </div>
</section>

<section className='relative'>
 <div className='max-w-[1080px] mx-auto items-center w:10/12 py-[2rem] relative '>
    <img src="../src/assets/images/feature-section1-dottedrows.png" alt="" className="absolute w-[200px] top-[8rem] left-[2rem] -z-10" />

    <h2 className='items-center text-center text-[25px]   font-bold'  >An Experience
         <br /> People Love to Talk About</h2>
    <div className='h-1 w-10 mx-auto bg-blue-400  mt-2 '></div>

  {/*  left button*/ }
   <button className='w-[80px] h-[80px] bg-gray-200 flex justify-center py-4 px-4 rounded-full items-center text-center absolute left-0 top-1/2'>
    <div className='w-[100%] h-[100%] bg-gray-300 rounded-full flex justify-center items-center mix-blend-multiply'>
    <FaChevronLeft className="text-[2rem] font-bold text-gray-500" />
    </div>
   </button>

{/*  right button*/ }
   <button className='w-[80px] h-[80px] bg-gray-200 flex justify-center py-4 px-4 rounded-full items-center text-center absolute right-0 top-1/2'>
    <div className='w-[100%] h-[100%] bg-gray-300 rounded-full flex justify-center items-center mix-blend-multiply'>
    <FaChevronRight className="text-[2rem] font-bold text-gray-500" />
    </div>
   </button>

   {/*   main content */ }

  <div className='flex desktop:flex-row py-4 px-[4rem] my-20 justify-between space-x-[10rem]  max-w-[960px] items-center mx-auto  '>
   
    <img src="../src/assets/images/testimonial.jpg" alt="" className='w-[280px] h-[280px] rounded-xl' />
    <div className='flex flex-col max-w-[450px]'>
       
       <img src="../src/assets/images/quotes.svg" alt="" className='w-[40px] h-[40px] -mb-2 xl:order-1' />
        
        <p class="font-mullish text-3xl font-extralight xl:order-1">
          Readymade Closed Wallet Solution For Quick Refunds</p>
        <a href="#" class="text-grayText italic underline xl:order-1">Learn More</a>
        <p class="font-mullish font-extrabold text-2xl -order-1 xl:order-1">Lorem Ipsum</p>
        <p class="font-mullish font-medium xl:order-1">CEO, XYZ Engineering Company</p>
        
        <img src="../src/assets/images/fake-company-logo.png" alt="" width="80px" height="40px" class=" xl:order-1" />
     
    </div> 
  </div>

  <div className='mx-auto w-full items-center justify-center text-center flex space-x-2'>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
     <div className='h-[10px] w-[10px] rounded-full bg-gray-400'></div>
  </div>

 </div>

</section>

<section className='w-full h-full bg-no-repeat bg-cover relative ctaSection min-h-[510px]' style={{backgroundImage:`url(${CTAbg})`}} >
   <div className='items-center justify-center mx-auto  flex w-11/12 max-w-[1080px] relative space-x-20 pt-16'>
   
     <div className='flex flex-col gap-5 mt-12 max-w-[600px]'>
     <h2 class="font-mullish font-bold text-2xl text-white">Supercharge your business with Razorpay</h2>
        <div class="w-6 h-1 bg-greenLight"></div>
        <p class="font-mullish text-white">Sign up now to experience the future of payments and offer <br /> your customers the best checkout experience.</p>

        <ul class="flex flex-row flex-wrap gap-x-6 text-white gap-y-3">
          <li class="font-mullish text-white flex flex-row items-center text-center space-x-2 ">
           <FaCheck className="text-[1rem] text-green-500" />
            <span>Quick Onboarding </span>
          </li>
          <li class="font-mullish text-white flex flex-row items-center text-center space-x-2">
          <FaCheck className="text-[1rem] text-green-500" />
            <span>Access to entire product suite</span>
          </li >
          <li class="font-mullish text-white flex flex-row items-center text-center space-x-2">
          <FaCheck className="text-[1rem] text-green-500" />
            <span>API access </span>
          </li>
          <li class="font-mullish text-white flex flex-row items-center text-center space-x-2">
          <FaCheck className="text-[1rem] text-green-500" />
            <span>24x7 support
            </span>
          </li>
        </ul>
        <button className='bg-gray-200 pr-2 py-2  relative  px-3 space-x-2  text-black flex  items-center   font-bold hover:bg-gray-300 transition-all duration-200' style={{width:'180px'}} > 
               Sign Up now  
            <div className='absolute right-3 w-10 h-[50px] bg-blue-400 sk skew-x-[20deg] items-center text-center py-5 flex justify-center ' ><FaLongArrowAltRight className="skew-x-[-20deg]" /></div>
        </button>

     </div>

     {/*--right side wali image-->*/}
     <img src="../src/assets/images/ctaImg.svg" alt="" className="mt-[3rem] pt-3 w-[240px] h-[280px] lg:block" />
      

   </div>
</section>




</div>




  <footer className=" bg-cover bg-no-repeat bg-center w-[full] h-[full]" style={{backgroundImage:`url(${footer})`}}>

    <div className="w-10/12 pt-[400px] pb-10 tablet:pt-[100px] tablet:my-0 tablet:w-11/12 max-w-[1080px] mx-auto flex  space-y-6 laptop:space-y-0 laptop:space-x-4 laptop:flex-row ">
     <div className='space-x-6 items-center justify-between flex tablet:pt-[100px] tablet:my-0 tablet:w-11/12 max-w-[1080px] mx-auto   space-y-6 laptop:space-y-0 laptop:space-x-4 laptop:flex-row '>
      <div class="flex  flex-col tablet:max-w-[340px] laptop:max-w-[260px]">
        <img
          src="../src/assets/images/logo.svg" loading="lazy" width={"120px"} height={"24px"} />
        <p class="text-sm text-gray-200 my-3 font-mullish">
          Razorpay is the only payments solution in India that allows
          businesses to accept, process and disburse payments with its product
          suite. It gives you access to all payment modes including credit
          card, debit card, netbanking, UPI and popular wallets including
          JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
        </p>
        
        <p class="text-[0.625rem] text-gray-200 my-3 font-mullish">
          Disclaimer: The RazorpayX powered Current Account and VISA corporate
          credit card are provided by RBI licensed banks. Your RazorpayX
          powered account is provided by our partner bank, in accordance with
          RBI regulations. RazorpayX itself is not a bank and doesn't hold or
          claim to hold a banking license.
        </p>
        <p class="text-sm text-gray-200 my-3 font-mullish">
          Manage your marketplace, automate bank transfers, collect recurring
          payments, share invoices with customers and avail working capital
          loans - all from a single platform. Fast forward your business with
          Razorpay.
        </p>
        <p class="text-[0.625rem] text-gray-200 my-3 font-mullish">
          Disclaimer: The RazorpayX powered Current Account and VISA corporate
          credit card are provided by RBI licensed banks. Your RazorpayX
          powered account is provided by our partner bank, in accordance with
          RBI regulations. RazorpayX itself is not a bank and doesn't hold or
          claim to hold a banking license.
        </p>
        <p class="font-mullish uppercase font-bold text-gray-300 mt-3">
          Subscribe to our newsletter
        </p>
        <form class="relative bg-white w-[280px] mt-3 mb-4">
          <input placeholder="Your email address" className="pr-15 text-black  font-mullish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200" />
          <button className="h-[100%] bg-blue-300 absolute space-x-4  right-0 top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-black flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200" >
            Subscribe <FaLongArrowAltRight className="text-[1rem]" />
          </button>
        </form>
        <div className="flex items-start space-x-4">
          <img src="../src/assets/images/footer-certificate-1.png" loading={'lazy'} width={"100"} height={"50"} className="cursor-pointer"/>
          <img src="../src/assets/images/footer-certificate-2.jpg" loading="lazy" width={"122"} height={"80"} className="cursor-pointer"/>
        </div>
      </div>
     <div className='flex  flex-col space-y-4  tablet:space-y-0 tablet:flex-row tablet:space-x-4 justify-between text-white'>
        <div className='space-y-3'>
         <div>
            <h2 className='text-white font-bold'>BANKING PLUS</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>RazorpayX</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Current Accounts</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Payouts</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Payout Links</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Corporate Credit Card</a></li>
            <li className=' space-x-2'><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>
              View Live Demo <span className='py-1 px-1 bg-green-400 text-black font-bold rounded-sm text-xs'> New</span>
             </a>
            </li>
           </ul>
          </div>
           
          <div>
           <h2 className='text-white font-bold'> LENDING</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Razorpay Capital</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Instant Settlements</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>PWorking Capital Loans</a></li>
           </ul>
          </div>

          <div>
           <h2 className='text-white font-bold'>  RISK & FRAUD</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Thirdwatch</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>PrePay CoD{" "}
            <span className='py-1 px-1 bg-green-400 text-black font-bold rounded-sm text-xs'> New</span>
            </a></li>
           </ul>
          </div>
          <div>
           <h2 className='text-white font-bold'> MORE</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Route</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Invoices</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Freelancer Payments</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>International</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Flash Checkout</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>UPI</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>RazorpayX Payroll</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Checkout Demo</a></li>
           </ul>
          </div>
      
         </div>
     </div>

     <div className='flex flex-col space-y-4 tablet:space-y-0 tablet:flex-row tablet:space-x-4 justify-between text-white'>
        <div className=' space-y-3'>
         <div>
            <h2 className='text-white font-bold'>   ACCEPT PAYMENTS</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Payment Gateway</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Payment Pages</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Payment Links</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>QR Code</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Subscriptions</a></li>
            <li className=' space-x-2'><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>{" "}
              View Live Demo 
             </a>
            </li>
           </ul>
          </div>
           
          <div>
           <h2 className='text-white font-bold'> DEVELOPERS</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Docs</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Integrations</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>API Reference</a></li>
           </ul>
          </div>

          <div>
           <h2 className='text-white font-bold'>RESOURCES </h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Blogs</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Events</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Customer Stories
            
            </a></li>
           </ul>
          </div>

          <div>
           <h2 className='text-white font-bold  uppercase'>Solutions</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Educations</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>E- Commerce</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Saas</a></li>
           </ul>
          </div>
          <div>
           <h2 className='text-white font-bold'>  FREE TOOLS</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>GST Calculator</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Online TDS Payment</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 space-x-3'>GST Number Search{" "} 
             <span className='py-1 px-1 bg-green-400 text-black font-bold rounded-sm text-xs '> New</span>
            </a></li>
            </ul>
          </div>
          

         </div>
      </div>

      <div className='flex flex-col space-y-4 tablet:space-y-0 tablet:flex-row tablet:space-x-4 justify-between text-white'>
        <div className=' space-y-3'>
         <div>
            <h2 className='text-white font-bold'>COMPANY</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>About us</a></li>
            <li className=' space-x-3'><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Caeers{" "}
            <span className='py-1 px-1 bg-green-400 text-black font-bold rounded-sm text-xs'> we are Hiring!</span>
            </a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Terms of Use</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Responsible Disclosure</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Privacy Policy</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Grievance Redressal</a></li>
            <li className=' space-x-2'><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 '> Partners</a></li>
            <li className=' '><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 '> White Papers</a></li>
            <li className=' '><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 '> Corporate Information</a></li>
            <li className=' '><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 '> HELP & SUPPORT</a></li>
            <li className=' '><a href="#" className='space-x-3 text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200 '> Support</a></li>
           </ul>
          </div>
           
          <div>
           <h2 className='text-white font-bold'> FIND US ONLINE</h2>
           <ul className='space-x-4 mt-3 flex'>
              <li className='cursor-pointer '>
                <a href="#">
                  <img src="../src/assets/images/facebook-icon.svg" alt="" loading={'lazy'} />
                </a>
              </li>
              <li className='cursor-pointer '>
                <a href="#">
                  <img src="../src/assets/images/twitter-icon.svg" alt="" loading={'lazy'} />
                </a>
              </li>
              <li className='cursor-pointer '>
                <a href="#" >
                  <img src="../src/assets/images/instagram-icon.svg" alt="" loading={'lazy'} />
                </a>
              </li>
              <li className='cursor-pointer '>
                <a href="#" className=''>
                  <img className='bg-white text-white'  src="../src/assets/images/github-icon.svg" alt="" loading={'lazy'} />
                </a>
              </li>
              <li className='cursor-pointer '>
                <a href="#">
                  <img  src="../src/assets/images/linkedin-icon.svg" alt="" loading={'lazy'} />
                </a>
              </li>
          </ul>
          </div>

          <div>
           <h2 className='text-white font-bold'>  RISK & FRAUD</h2>
           <ul className='space-y-2'>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>Thirdwatch</a></li>
            <li className=''><a href="#" className='text-blue-300 hover:text-blue-400 font-mullish font-medium text-[0.8rem] transition-all duration-200'>PrePay CoD
            <span className='py-1 px-1 bg-green-400 text-black font-bold rounded-sm text-xs'> New</span>
            </a></li>
           </ul>
          </div>

          <div>
           <h2 className='text-white font-medium'> REGD. OFFICE ADDRESS</h2>
           <p class=" f font-thin text-sm mt-4 whitespace-nowrap">
              Razorpay Software Private Limited, <br />1st Floor, SJR Cyber,
              <br />22 Laskar Hosur Road, Adugodi, <br />Bengaluru, 560030,
              <br />Karnataka, India <br />CIN: U72200KA2013PTC097389
            </p><br /><hr />
            <div class="font-mullish mt-3">
              <p class="text-sm">&copy; Razorpay 2022</p>
              <p class="text-sm">All Rights Reserved   Designed By <a className="underline text-blue-400" href="#"><br /> Er. Archana Singh </a></p>
            </div>
          </div>
         </div>
      </div>

    </div>
   </div>    
     
        
    
    
  </footer> 
  </>
  )
}

export default App
