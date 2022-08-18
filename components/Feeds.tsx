import { Aside } from "./Aside"
import { Posts } from "./Posts"
import { ProfileCard } from "./ProfileCard"
import { SearchBar } from "./SearchBar"
import { Tags } from "./Tag"
import { TweetSomething } from "./TweetSomething"

export const Feeds = ({ user, explore, home }: { user?: string[]; explore?: boolean; home?: boolean }) => {
	return (
		<div className="px-4 py-5">
			<div className="container max-w-6xl mx-auto gap-4 flex flex-col md:flex-row md:items-start ">
				{/* Stats */}

				{user ? (
					<div
						className={`${
							explore && "hidden md:block"
						}  md:max-w-[18rem] md:min-w-[14rem] lg:min-w-[16rem]  md:sticky md:top-[5.2rem] bg-white rounded-lg shadow-sm`}
					>
						<ul className="flex flex-col gap-y-3  py-4">
							{user.map((value, index) => {
								return (
									<li key={index} className={`tweets_nav ${index == 0 && "active_tweets_nav"}`}>
										{value}
									</li>
								)
							})}
						</ul>
					</div>
				) : (
					<div className="w-full space-y-5">
						<TweetSomething />
						<Posts />
					</div>
				)}

				{user && explore ? (
					<div className="flex flex-col w-full gap-y-5">
						<SearchBar className="hidden md:flex rounded-lg p-3 bg-white" />
						<Aside className="md:hidden" md={true} title={"Trends for you"}>
							<Tags title="japa" />
							<Tags />
							<Tags />
							<Tags title="the goat" />
							<Tags />
							<Tags title="messi" />
							<Tags />
							<Tags />
						</Aside>
						<Posts />
					</div>
				) : user ? (
					<Posts />
				) : (
					/* right bar for the home page */
					<div className="hidden md:block space-y-4 max-w-[18rem] md:min-w-[14rem] lg:min-w-[16rem]">
						<Aside title={"Trends for you"}>
							<Tags />
							<Tags />
							<Tags />
						</Aside>
						<Aside className="divide-y-2" title={"Who to follow"} pb={1}>
							<ProfileCard />
							<ProfileCard />
						</Aside>
					</div>
				)}
			</div>
		</div>
	)
}
