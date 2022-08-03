import type { GetServerSidePropsContext, NextPage } from "next"
import Head from "next/head"
import { Header, Profile, Feeds, PageContainer } from "../components"

const User: NextPage<{ name: string }> = ({ name }: { name: string }) => {
	return (
		<PageContainer>
			<Head>
				<title>Tweeter</title>
			</Head>
			<Header name={name} />
			<div className="min-h-[150px]  h-[20vh] md:h-[40vh] max-h-[350px]">
				<img className="w-full h-full object-cover" src="images/back.jpeg" alt="cover photo" />
			</div>
			<Profile />
			<Feeds user={["Tweets", "Tweets & replies", "Media", "Likes"]} />
		</PageContainer>
	)
}

export default User

export function getServerSideProps(contex: GetServerSidePropsContext) {
	return {
		props: {
			name: contex?.params?.user,
		},
	}
}
