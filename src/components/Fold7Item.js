export default function Fold7Item({data}) {
	return(
		<div className="flex gap-[20px] items-start max-w-[450px]">
			<div className="bg-[#FF9100] min-w-[50px] min-h-[50px] content-center rounded-[10px]">
				<img src={data.imageUrl} className="mx-auto" />
			</div>
			<div>
				<span className="text-[#F83821]">{data.item}</span>
				<span className="text-[#7B7B7B]">{data.description}</span>
			</div>
		</div>
	)
}