import Head from "next/head"
import { Feeds, Header, PageContainer } from "../components"

const Bookmark = () => {
	return (
		<PageContainer>
			<Head>
				<title>Bookmark / Tweeter</title>
				
			</Head>
			<Header name={"michaseyi-k"} />
			<Feeds user={["Tweets", "Tweets & replies", "Media", "Likes"]} />
		</PageContainer>
	)
}

export default Bookmark
