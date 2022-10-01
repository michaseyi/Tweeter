import { Post } from "."
import { useEffect, useState } from "react"

export const Posts = () => {
	const [posts, setPosts] = useState<number[]>([])

	useEffect(() => {
		let timeout = setTimeout(() => {
			setPosts(
				Array.from({ length: 15 }, (_, idx) => {
					return 1
				})
			)
		}, 0)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div className="w-full space-y-5">
			{posts.map((_, id) => {
				return <Post key={id} />
			})}
			{/* <Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post image />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post image />
			<Post />
			<Post />
			<Post image />
			<Post />
			<Post image />
			<Post />
			<Post image /> */}
		</div>
	)
}
