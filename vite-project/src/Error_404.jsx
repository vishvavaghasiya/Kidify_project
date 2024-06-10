import React from 'react'
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";




const Error_404 = () => {
	return (

		<section className='flex items-center justify-center'>

			<div className=" h-[700px] w-[1400px] bg-pink-100  ">
				<div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 ">

					<div className="">
						

						<div className=" ">
							<div className="text-5xl  font-bold mb-10 text-nowrap ">Page not available</div>
							<div className="text-xl  font-bold mb-14 leading-7 ">
								Sorry, but the page you were looking for could not be found.
							</div>
							<div className="text-md	">
								You can return to our <a href="http://fy.local/"><u>home page</u></a>, or drop us a line  if you can't find what you're looking for.						</div>
						</div>


					</div>
					<div className="w-full ml-96  my-12 -mx-20  hover:-translate-x-6 hover:scale-100">
						<img src="./src/assets/404.jpg" className="" alt="Page not found" />
					</div>

				</div>

				<div class="row flex justify-evenly my-14 mt-40">
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-5 font-xl-bold">Chat to sales</strong>
								<p class="font-md">
									Speak to our teamcom
									<a href="mailto:sales@kidify.com">sales@kidify.com</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-5 font-xl-bold">Call us</strong>
								<p class="font-md">
									<a href="tel:+01 568 253">+01 568 253</a>
									<a href="tel:+01 568 253">+01 568 253</a>										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-5 font-xl-bold">Postal mail</strong>
								<p class="font-md">
									456 Park Avenue South, Apt 7B
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 mb-15">
						<div class="cardContact cardChat">
							<div class="cardInfo">
								<strong class="d-block mb-5 font-xl-bold">Social Network</strong>
								<p class="font-md">
									456 Park Avenue South, Apt 7B
									New York, NY 10016										</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Error_404