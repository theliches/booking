import LoginForm from "../components/loginform/LoginForm";



const LoginPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			<main className='max-w-7xl mx-auto lg:px-8'
			>
			<LoginForm />
			</main>
		</div>
	);
};
export default LoginPage;
