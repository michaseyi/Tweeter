import Head from "next/head"
import { useState, useEffect, useRef } from "react"
import { Feeds, Header, PageContainer } from "../components"
import { useWindowSize } from "../hooks"

const Explore = () => {
	const [stickyTopValue, setStickyTopValue] = useState(62)
	const prevTopValue = useRef(0)
	const { width: windowWidth } = useWindowSize()

	function onScrollHandler(this: Window, ev: Event) {
		if (windowWidth < 768) {
			if (Math.abs(this.scrollY - prevTopValue.current) > 5) {
				if (this.scrollY > prevTopValue.current) setStickyTopValue(62)
				else setStickyTopValue(0)
			}
			prevTopValue.current = this.scrollY
		}
	}

	useEffect(() => {
		if (windowWidth < 768) {
			window.addEventListener("scroll", onScrollHandler)
		}
		return () => window.removeEventListener("scroll", onScrollHandler)
	}, [windowWidth, onScrollHandler])

	return (
		<PageContainer>
			<Head>
				<title>Explore / Tweeter</title>
			</Head>
			<Header name="michaseyi-k" topValue={stickyTopValue} />
			<Feeds user={["Top", "Latest", "People", "Media"]} explore />
		</PageContainer>
	)
}

export default Explore
