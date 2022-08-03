export const Button = ({
	className,
	children,
	px,
	py,
}: {
	className?: string
	children: any
	px?: number
	py?: number
}) => {
	return (
		<button
			className={` bg-button text-white ${
				className && className
			} rounded-md font-noto text-[12px] font-medium flex items-center gap-x-0.5`}
		>
			{children}
		</button>
	)
}
