import { Line } from "."

export const Aside = ({
	className,
	title,
	children,
	pb,
	md,
}: {
	md?: boolean
	title: string
	children: any
	pb?: number
	className?: string
}) => {
	return (
		<div className={`${md && "md:hidden"} bg-white rounded-lg shadow-sm px-4 pt-3 ${pb ? "pb-" + pb : "pb-5"} `}>
			<h3 className="font-poppins text-sm md:text-[12px] font-semibold text-text">{title}</h3>
			<Line />
			<div className={`${className ? className : ""}`}>{children}</div>
		</div>
	)
}
