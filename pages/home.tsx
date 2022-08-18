import Head from "next/head"
import { Feeds, Header, PageContainer } from "../components"

const Home = () => {

	return (
		<PageContainer>
			<Head>
				<title>Home / Tweeter</title>
			</Head>
			<Header name={"michaseyi-k"} />
			<Feeds home />
		</PageContainer>
	)
}

export default Home
