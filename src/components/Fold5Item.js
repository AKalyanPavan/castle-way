export default function Fold5Item({data}) {
	return(
		<div className="flex gap-[20px] items-center">
			<div className="bg-[#FF9100] min-w-[50px] min-h-[50px] content-center rounded-[50px]">
				<img src={data.imageUrl} className="mx-auto" />
			</div>
			<div>
				<span className="text-[#F83821]">{data.item}</span>
				<span> - </span>
				<span className="text-[#7B7B7B]">{data.description}</span>
			</div>
		</div>
	)
}