import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined"
import LoopIcon from "@mui/icons-material/Loop"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { useRouter } from "next/router"
export const Post = ({ image }: { image?: boolean }) => {

	const router = useRouter()

	return (
		<div className="bg-white shadow-sm rounded-lg p-4">
			{/* first */}
			<div className="flex w-max items-center gap-x-4 select-none" onClick={() => router.push("/some_person")}>
				<img className="w-11 h-11 object-cover rounded-full" src="images/profile.jpeg" alt="profile pic" />
				<div className="flex flex-col gap-y-0.5">
					<h3 className="font-poppins font-medium text-[16px] leading-5">Some Person</h3>
					<span className="font-noto font-medium text-[12px] text-text_2">24 August at 20:43</span>
				</div>
			</div>
			{/* second */}
			<p className="pt-4 pb-4 font-noto font-normal text-[16px]  text-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed.
			</p>
			{/* third */}
			{image && (
				<img
					className="w-full rounded-lg min-h-[200px] object-cover max-h-[350px] mb-3"
					src="images/back.jpeg"
					alt=""
				/>
			)}
			{/* tweet stat */}
			<div className="text-right  text-text_2 space-x-4  pb-1 font-noto text-[12px] font-medium leading-4">
				<span>449 Comments</span>
				<span>59k Retweets</span>
				<span>234 Saved</span>
			</div>
			{/* actions */}
			<hr className="h-[1px] w-full  bg-background" />
			<div className=" md:py-2 py-1 flex justify-center relative">
				<div className="post_action_button">
					<ChatBubbleOutlineIcon className="!w-5 !h-5" />
					<span>Comments</span>
				</div>
				<div className="post_action_button">
					<LoopIcon className="!w-5 !h-5" />
					<span>Retweets</span>
				</div>
				<div className="post_action_button">
					<FavoriteBorderIcon className="!w-5 !h-5" />
					<span>Like</span>
				</div>
				<div className="post_action_button">
					<BookmarkBorderIcon className="!w-5 !h-5" />
					<span>Saved</span>
				</div>
			</div>
			<hr className="h-[1px] w-full  bg-background" />
			{/* Tweet your reply */}
			<div className="flex items-center pt-3 gap-x-3">
				<img className="w-10 h-10 object-cover rounded-full" src="images/profile.jpeg" alt="profile picture" />
				<form className="flex-1 relative">
					<input
						placeholder="Tweet your reply"
						className="font-noto  text-sm text-black/80  text-placeholder:font-noto placeholder:font-medium placeholder:text-sm  w-full py-2 pl-3 pr-8 outline-none border-2 border-background bg-[#fafafa] rounded-lg"
						type="text"
					/>
					<ImageOutlinedIcon className="!absolute !right-3 !top-0 !h-full !w-5 text-[#bdbdbd]" />
				</form>
			</div>
			{/* comments */}
		</div>
	)
}
