export default function Fold6Item({data}) {
	return(
		<div className="flex gap-[20px] items-center">
			<div className="bg-[#F83821] min-w-[50px] min-h-[50px] content-center rounded-[50px]">
				<img src={data.imageUrl} className="mx-auto" />
			</div>
			<a href={data.hrefLink} target="_blank">
				<span className="text-[#7B7B7B]">{data.description}</span>
			</a>
		</div>
	)
}