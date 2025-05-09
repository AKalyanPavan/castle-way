import logo from '../images/logo.png';
import phone from '../images/phone.svg';

export default function Header() {
	return(
		<div className="py-[20px] bg-[#ffffff] flex justify-between items-center top-[0px] sticky z-[1]">
			<img src={logo} className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]" />
			<a href="tel:+91 9363057399" id="callUsNowButton">
				<div className="call-us-button bg-[#F83821] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
					<img src={phone} />
					<span className="text-[#ffffff] ml-[10px] max-sm:hidden">
						+91 93630 57399
					</span>
					<span className="text-[#ffffff] ml-[10px] sm:hidden">
						Call Us
					</span>
				</div>
			</a>
		</div>
	)
}