export default function Fold2Card({data}) {
	return(
		<div className="border-[1px] border-solid border-[#FDD30F40] p-[20px] rounded-[10px] sm:w-[400px] text-center">
			<img className="mx-auto" src={data.imageUrl} />
			<div className="text-[32px] text-[#F83821] my-[20px]">{data.title}</div>
			<div className="leading-[30px] text-[#7B7B7B] text-[14px]">{data.description}</div>
		</div>
	)
}