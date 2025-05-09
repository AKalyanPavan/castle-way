import Header from './Header.js'
import FormComponent from './FormComponent.js'
import HeadingSingleColour from './HeadingSingleColour.js'
import HeadingMultiColour from './HeadingMultiColour.js'
import SubHeading from './SubHeading.js'
import Fold2Card from './Fold2Card.js'
import Fold3and4Card from './Fold3and4Card.js'
import Fold5Item from './Fold5Item.js'
import Fold6Item from './Fold6Item.js'
import Fold7Item from './Fold7Item.js'

import { Fold2, Fold3, Fold4, Fold5, Fold6, Fold7 } from './Variables.js'

import Fold1Image1 from '../images/Fold1/Fold1Image1.png'
import Fold1Image2 from '../images/Fold1/Fold1Image2.png'
import Fold1Image3 from '../images/Fold1/Fold1Image3.png'

import Fold5Image4 from '../images/Fold5/Fold5Image4.png'

import quote from '../images/quote.svg'

export default function Homepage() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Montserrat']">
			<Header />
			<div className="mt-[50px] sm:flex justify-between items-top sm:gap-[50px]">
				<div className="lg:w-[600px]">
					<HeadingSingleColour text={"Castle Way Interiors"} />
					<div className="text-[#FDD30F] text-[24px] my-[10px]">
						Smart Spaces. Timeless Style.
					</div>
					<div className="text-lg font-light text-[#494848]">
						Welcome to Castle Way Interiors, where imagination meets precision and your dream spaces come to life. From cozy homes to stylish workspaces, we design interiors that speak your story — elegant, functional, and future-ready.
					</div>
					<FormComponent />
				</div>
				<div className="max-lg:hidden w-[592px]">
					<img src={Fold1Image1} className="rounded-[20px]" />
				</div>
			</div>
			<div className="flex items-center mt-[50px]">
				<div className="relative lg:w-[600px]">
					<img src={quote} />
					<div className="text-[#494848]">
						Founded in 2019 by Mr. K.P. Prabhu, an MIT alumnus with a passion for design and innovation, Castle Way blends technology, creativity, and craftsmanship into every square foot we transform.
					</div>
					<img src={quote} className="rotate-180 absolute right-[50px]" />
				</div>
				<div className="relative w-[592px] h-[300px] max-lg:hidden">
					<img src={Fold1Image2} className="absolute top-[30%] right-[30%]"/>
					<img src={Fold1Image3} className="absolute top-[0px] right-[0px]" />
				</div>
			</div>
			<div className="mt-[100px]">
				<HeadingMultiColour textLeft={"Our"} textRight={"Vision & Mission"} />
				<div className="flex max-md:flex-col max-md:items-center justify-center md:gap-[50px] gap-[30px] mt-[50px]">
					{Fold2.map((item, index) => (
						<Fold2Card data={item} />
					))}
				</div>
			</div>
			<div className="mt-[100px]">
				<HeadingMultiColour textLeft={"Why"} textRight={"Castle Way?"} />
				<SubHeading text={"Because we don’t just decorate — we elevate."} />
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[30px]">
					{Fold3.map((item, index) => (
						<Fold3and4Card data={item} />
					))}
				</div>
			</div>
			<div className="mt-[100px]">
				<HeadingMultiColour textLeft={"What"} textRight={"We Do"} />
				<SubHeading text={"We create spaces that work hard, look great, and feel like home"} />
				<div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 md:gap-[50px] gap-[30px]">
					{Fold4.map((item, index) => (
						<Fold3and4Card data={item} />
					))}
				</div>
			</div>
			<div className="mt-[100px] sm:flex justify-between items-center sm:gap-[50px]">
				<div className="lg:w-[600px] w-full">
					<HeadingSingleColour text={"Built on Quality"} customStyle="max-lg:text-center" />
					<div className="text-[#7B7B7B] my-[10px] max-lg:text-center">
						Every Castle Way interior is built with the best:
					</div>
					<div className="flex flex-col gap-[20px] pl-[20px] pt-[20px] max-lg:mx-auto w-fit">
						{Fold5.map((item, index) => (
							<Fold5Item data={item} />
						))}
					</div>
				</div>
				<div className="max-lg:hidden max-w-[592px]">
					<img src={Fold5Image4} className="rounded-[20px]" />
				</div>
			</div>
			<div className="mt-[100px] sm:flex justify-between items-center sm:gap-[50px]">
				<div className="w-full">
					<HeadingSingleColour text={"Let’s Get Started"} customStyle="text-center" />
					<div className="text-[#7B7B7B] my-[10px] text-center">
						Visit us. Call us. Tell us your dream. We’ll build it.
					</div>
					<div className="flex flex-col gap-[20px] pt-[30px] mx-auto max-w-[450px]">
						{Fold6.map((item, index) => (
							<Fold6Item data={item} />
						))}
					</div>
				</div>
			</div>
			<div className="mt-[100px] flex flex-col justify-center items-center gap-[50px]">
				{Fold7.map((item, index) => (
					<Fold7Item data={item} />
				))}
			</div>
			<div className="mt-[100px]">
				<HeadingSingleColour text={"Castle Way Interiors — Designed for Life. Crafted with Passion."} customStyle="text-center" />
			</div>
		</div>
	)
}