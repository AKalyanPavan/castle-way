export default function HeadingMultiColour({textLeft, textRight}) {
	return(
		<div className="sm:text-[32px] text-[30px] text-[#F83821] font-light text-center">
			<span className="text-[#000000]">{`${textLeft} `}</span>
			<span className="text-[#F83821]">{textRight}</span>
		</div>
	)
}