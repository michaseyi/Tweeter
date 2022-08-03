import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { Button } from "./Button"

export const Profile = () => {
	return (
		<div className="px-4 z-10 relative">
			<div className="md:-mt-12 -mt-6 container max-w-5xl mx-auto px-5  py-4 md:pb-9 md:pt-5 shadow-sm rounded-lg flex flex-col items-center md:items-start md:flex-row gap-x-8 gap-y-4 bg-white">
				<div className="md:-mt-20  -mt-20 w-36 h-36 md:w-40 md:h-40 p-1 bg-white rounded-full">
					<img className="w-full h-full object-cover rounded-full" src="images/profile.jpeg" alt="profile photo" />
				</div>
				<div className="flex-1">
					<div className="flex lg:flex-row flex-col  md:pb-5 items-center md:gap-x-3 lg:gap-x-6">
						<h1 className="font-poppins   text-2xl font-semibold">Michael Adewole</h1>
						<div className="py-3 md:py-0 space-x-6 font-poppins text-[12px] font-medium text-tertiary">
							<span>
								<span className="text-black font-semibold">2,569 </span>Following
							</span>
							<span>
								<span className="text-black font-semibold">10.8k </span>Followers
							</span>
						</div>
					</div>
					<p className="xl:w-[70%] text-center lg:text-left font-noto text-tertiary font-medium text-lg leading-6">
						Lorem ipsum dolor sit amet consectetur adipisicing doloremque?
					</p>
				</div>
				<Button  className="px-5 py-2">
					<>
						<PersonAddIcon className="!h-4" />
						Follow
					</>
				</Button>
			</div>
		</div>
	)
}
