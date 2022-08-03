export const Tags = ({ title }: { title?: string }) => {
	const tag = title || "#programming"
	const stats = "213k Tweets"
	return (
		<div className="py-1">
			<h3 className="font-noto text-[15px] font-semibold text-[#333]">{tag}</h3>
			<span className="font-noto text-[12px] font-medium text-primary">{stats}</span>
		</div>
	)
}
