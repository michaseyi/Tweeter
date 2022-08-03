import Link from "next/link"
import GoogleIcon from "@mui/icons-material/Google"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import EmailIcon from "@mui/icons-material/Email"
import LockIcon from "@mui/icons-material/Lock"
import Head from "next/head"

const Login = () => {
	return (
		<main className="flex md:items-center justify-center min-h-screen font-noto">
			<Head>
				<title>Login / Tweeter</title>
			</Head>
			<div className="max-w-sm w-full mt-20 md:mt-0  p-6 md:p-12 space-y-4 md:border-2 rounded-3xl">
				<img src="images/tweeter-small.svg" className="w-12 mx-auto " alt="" />
				<p className="font-poppins font-medium text-text text-lg text-center py-3">Welcome back</p>

				<form className="flex flex-col gap-y-4">
					<div className="auth_input_container">
						<input className="auth_input" placeholder="Email" type="email" name="email" id="" />
						<EmailIcon className="auth_input_icon" />
					</div>
					<div className="auth_input_container">
						<input  className="auth_input" placeholder="Password" type="password" name="password" id="" />
						<LockIcon className="auth_input_icon" />
					</div>
					<input
						className="font-noto font-medium text-white bg-secondary  active:bg-blue-600 rounded-md py-2 mt-4"
						type="submit"
						value="Login"
					/>
				</form>
				<p className="text-center text-sm text-primary">
					<Link href={"/"}>
						<a className="text-secondary font-medium">Forgot password?</a>
					</Link>
				</p>
				<p className="text-center text-sm text-primary">or continue with these social profile</p>
				<div className="text-center space-x-4 py-2 text-primary">
					<span className="social_login">
						<GoogleIcon />
					</span>
					<span className="social_login">
						<FacebookIcon />
					</span>
					<span className="social_login">
						<TwitterIcon />
					</span>
					<span className="social_login">
						<GitHubIcon />
					</span>
				</div>
				<p className="text-center text-sm text-primary">
					Don't have an account yet?
					<Link href={"/register"}>
						<a className="text-secondary font-medium"> Register</a>
					</Link>
				</p>
			</div>
		</main>
	)
}
export default Login
