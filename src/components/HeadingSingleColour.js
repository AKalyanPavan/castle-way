export default function HeadingSingleColour({text, customStyle}) {
	return(
		<div className={`sm:text-[32px] text-[30px] text-[#F83821] font-light ${customStyle}`}>
			{text}
		</div>
	)
}