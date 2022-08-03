import { SearchOutlined } from "@mui/icons-material"
import { Button } from "./Button"

export const SearchBar = ({ className }: { className?: string }) => {
	return (
		<form autoComplete="off" className={`flex relative items-center ${className && className}`}>
			<SearchOutlined className="w-6 text-text_2 absolute h-full z-[11]" />
			<input
				className="peer pl-7 bg-transparent md:pl-9 w-full rounded-full outline-none font-noto text-sm md:text-[16px] placeholder:font-medium placeholder:text-text_2 z-10"
				placeholder="Search"
				type="search"
				name="search"
				id="search"
			/>
			<span className="peer-focus:border-[1px]  md:peer-focus:border-2  absolute top-0  rounded-full md:rounded-lg left-0 w-full h-full border-button border-solid "></span>
			<input
				autoComplete="off"
				className=" bg-button cursor-pointer  hidden md:block text-white px-7 py-2 rounded-md font-noto text-[12px] font-medium  z-10"
				type="submit"
				value="Search"
			/>
		</form>
	)
}
