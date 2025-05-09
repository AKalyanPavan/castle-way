export default function Fold3and4Card({data}) {
	return(
		<div className={`border-[1px] border-solid border-[#FDD30F40] rounded-[10px] ${data.customStyle}`}>
			<img className="mx-auto w-full" src={data.imageUrl} />
			<div className="p-[20px] text-center">
				<div className="text-[20px] text-[#F83821] my-[20px] h-[60px]">{data.title}</div>
				<div className="leading-[30px] text-[#7B7B7B] text-[14px]">{data.description}</div>
			</div>
		</div>
	)
}