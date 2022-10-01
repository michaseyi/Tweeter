import Router, { useRouter } from "next/router"
import { Nav } from "./Nav"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import { SearchBar } from "./SearchBar"
import { Line } from "./Line"
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded"

export const Header = ({ name, topValue }: { name: string; topValue?: number }) => {
	const router = useRouter()
	const path = router.route

	return (
		<header
			className={`test font-poppins px-6  sticky md:top-0  ${
				topValue ? (topValue > 0 ? "-top-[62px]" : "top-0") : "top-0"
			} z-30 shadow-md after:w-full after:h-full after:absolute after:top-0 after:left-0  after:-z-10 after:backdrop-blur-lg after:bg-white/60 transition-all`}
		>
			<div className="container mx-auto flex  justify-between items-center">
				<div className="flex items-center gap-x-2 py-3">
					<img className="w-10 text-lg md:hidden" src="images/tweeter-small.svg" alt="profile pic" />
					<img className="h-7 text-lg hidden  md:block " src="images/tweeter.svg" alt="profile pic" />
					{/* <span className="md:block hidden text-tertiary  text-[18px] font-semibold">Tweeter</span> */}
				</div>
				{path === "/explore" && <SearchBar className="bg-background flex-1 p-1 text-sm rounded-full mx-3 md:hidden" />}
				<Nav />
				<div tabIndex={0} className="group relative font-noto flex items-center gap-x-3 py-3 md:cursor-pointer">
					<img className="w-9 h-9 rounded-full" src="images/profile.jpeg" alt="profile pic" />
					<span className="md:block hidden text-tertiary font-bold text-[12px]">{name}</span>
					<ArrowDropDownRoundedIcon className="!-m-1 hidden md:block" />

					{/* Settings dropdown */}
					<span className="select-none group-focus:block hidden absolute w-max min-w-[160px] md:min-w-[190px] right-0 top-[calc(100%+10px)] bg-white rounded-lg shadow-sm border-[1px] p-3 z-10">
						<ul className="font-noto text-[12px] font-medium text-text space-y-2">
							<li className="setting_dropdown_item setting_dropdown_active">
								<AccountCircleRoundedIcon className="w-5" />
								My Profile
							</li>
							<li className="setting_dropdown_item">
								<PeopleRoundedIcon className="w-5" />
								Group Chat
							</li>
							<li className="setting_dropdown_item">
								<SettingsRoundedIcon className="w-5" />
								Settings
							</li>
							<Line />
							<li onClick={() => router.push("/login")} className="setting_dropdown_item text-[#eb5757]">
								<ExitToAppRoundedIcon className="w-5" />
								Logout
							</li>
						</ul>
					</span>
				</div>
			</div>
			{path === "/explore" && (
				<div className=" md:hidden container mx-auto">
					<ul className="flex items-center text-center">
						<li className="explore_nav active_explore_nav">Top</li>
						<li className="explore_nav">Latest</li>
						<li className="explore_nav">People</li>
						<li className="explore_nav">Media</li>
					</ul>
				</div>
			)}
		</header>
	)
}
