import { Button } from "./Button"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
export const ProfileCard = () => {
	return (
		<div className="pt-5 pb-7">
			<div className="flex  items-center gap-x-3">
				<img className="w-10 h-10 object-cover rounded-full" src="images/profile.jpeg" alt="" />
				<div className="flex-1 flex min-w-0 flex-col gap-y-1">
					<span className="font-poppins font-medium text-sm lg:text-[16px]  w-full truncate">Mike Stanley</span>
					<span className="font-noto font-medium text-[12px] text-primary">230k followers</span>
				</div>
				<Button  className="px-2 py-1">
					<PersonAddIcon className="!h-4" />
					<span className=" hidden lg:block">Follow</span>
				</Button>
			</div>
			<p className="font-medium font-noto text-sm text-primary py-5 ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<img className="h-20 rounded-lg object-cover w-full" src="images/back.jpeg" alt="" />
		</div>
	)
}
