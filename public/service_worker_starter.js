if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./sw.js")
			.then((reg) => {
				console.log("success", reg.scope)
			})
			.catch((err) => {
				console.log("failure", err)
			})
	})
}
