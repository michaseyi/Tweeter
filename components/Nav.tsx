import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import ChatRoundedIcon from "@mui/icons-material/ChatRounded"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
	const path = useRouter().pathname
	return (
		<nav className="nav_container bg-white md:bg-transparent">
			<ul className="flex md:items-center gap-x-2 md:gap-x-8 lg:gap-x-14">
				<li className="flex-1">
					<Link href="/home">
						<a>
							<div className={`nav_link ${path == "/home" ? "active_nav" : ""}`}>
								<span className="shade"></span>
								<span className="md:block hidden ">Home</span>
								<HomeIcon className=" md:hidden" />
							</div>
						</a>
					</Link>
				</li>
				<li className="flex-1">
					<Link href="/explore">
						<a>
							<div className={`nav_link ${path == "/explore" ? "active_nav" : ""}`}>
								<span className="shade"></span>
								<span className="md:block hidden">Explore</span>
								<ExploreIcon className=" md:hidden" />
							</div>
						</a>
					</Link>
				</li>

				<li className="flex-1">
					<Link href="/bookmark">
						<a>
							<div className={`nav_link ${path == "/bookmark" ? "active_nav" : ""}`}>
								<span className="shade"></span>
								<span className="md:block hidden">Bookmark</span>
								<BookmarkIcon className="md:hidden" />
							</div>
						</a>
					</Link>
				</li>
				<li className="flex-1 md:hidden">
					<Link href="/messages">
						<a>
							<div className={`nav_link ${path == "/messages" ? "active_nav" : ""}`}>
								<span className="shade"></span>
								<span className="md:block hidden">Chats</span>
								<ChatRoundedIcon className="md:hidden" />
							</div>
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
