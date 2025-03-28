import { h } from 'preact';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Home, ArrowLeft } from 'lucide-preact';

export function NotFound() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
			<div className="max-w-md w-full text-center">
				<div className="mb-8">
					<DotLottieReact
						src="https://lottie.host/1783740f-9bc6-4c6f-b175-79961758cb13/Om0gxrXJRO.lottie"
						loop
						autoplay
						className="mx-auto max-w-full h-64"
					/>
				</div>
				
				<h1 className="text-5xl font-bold text-purple-400 mb-4">404</h1>
				<p className="text-xl text-gray-300 mb-6">Oops! Page Not Found</p>
				<p className="text-gray-400 mb-8">
					The page you're looking for seems to have wandered off into the digital wilderness.
				</p>
				
				<div className="flex justify-center space-x-4">
					<a 
						href="/" 
						className="
							inline-flex items-center 
							bg-purple-600 hover:bg-purple-700 
							text-white 
							font-bold 
							py-3 px-6 
							rounded-full 
							transition-all 
							duration-300
						"
					>
						<Home className="mr-2" size={24} />
						Go Home
					</a>
					<a 
						href="#" 
						onClick={(e) => {
							e.preventDefault();
							window.history.back();
						}}
						className="
							inline-flex items-center 
							border border-purple-600 
							text-purple-400 
							hover:bg-purple-600 hover:text-white
							font-bold 
							py-3 px-6 
							rounded-full 
							transition-all 
							duration-300
						"
					>
						<ArrowLeft className="mr-2" size={24} />
						Go Back
					</a>
				</div>
			</div>
		</div>
	);
}