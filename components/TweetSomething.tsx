import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import { useState } from "react"
import { Line } from "./Line"

export const TweetSomething = () => {
	return (
		<div className="bg-white rounded-lg shadow-sm p-3">
			<h4 className="font-poppins text-[12px] font-semibold text-text">Tweet something</h4>
			<Line />
			<form className="space-y-2">
				<div className="flex">
					<img className="w-10 h-10 object-cover rounded-full" src="images/profile.jpeg" alt="profile-picture" />
					<textarea
						className="flex-1 py-2 px-3 outline-none font-noto  text-sm text-black/80  text-placeholder:font-noto placeholder:font-medium placeholder:text-[16px]"
						placeholder="What's happening?"
						name="tweet"
						rows={2}
					></textarea>
				</div>
				<div className="xl:pl-12 flex gap-x-2 items-center text-button font-noto text-[12px]">
					<div className="w-5 h-5 relative">
						<InsertPhotoOutlinedIcon className="w-5 h-5" />
						<input className="left-0 w-full opacity-0 absolute" type="file" name="pictures" multiple />
					</div>
					<div tabIndex={0} className="group h-5 flex relative items-center gap-x-2">
						<PublicOutlinedIcon className="w-5 h-5" />
						<span className="flex-1 font-medium">Everyone can reply</span>
						{/** Tweet visibility option */}
						<span className="absolute left-0 top-[calc(100%+30px)] hidden group-focus:block w-max min-w-[240px] md:min-w-[240px] bg-white rounded-lg shadow-sm p-3 z-10 border-[1px]">
							<h4 className="font-poppins font-semibold text-[12px] text-text">Who can reply?</h4>
							<p className="font-noto font-normal text-[12px] text-primary pb-2">Choose who can reply to this Tweet.</p>
							<ul className="font-noto text-[12px] font-medium text-text space-y-2">
								<li className="setting_dropdown_item setting_dropdown_active">
									<PublicOutlinedIcon className="w-5" />
									Everyone
								</li>
								<li className="setting_dropdown_item">
									<PeopleRoundedIcon className="w-5" />
									People you follow
								</li>
							</ul>
						</span>
					</div>
					<span className="flex-1"></span>
					<input
						className=" bg-button text-white px-7 py-2 rounded-md font-noto text-[12px] font-medium flex items-center gap-x-1"
						type="submit"
						value="Tweet"
					/>
				</div>
			</form>
		</div>
	)
}
