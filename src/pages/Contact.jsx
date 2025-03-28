import { h } from 'preact';
import raihannuryasintcnLogo from '../assets/raihannuryasintcn.svg';
import { PhoneCall, Mail, Send } from 'lucide-preact';

export function Contact() {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
			<div className="max-w-2xl w-full text-center">
				<img 
					src={raihannuryasintcnLogo} 
					alt="Raihan Nur Yasin" 
					className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-600 shadow-lg"
				/>
				
				<h1 className="text-4xl font-bold text-purple-400 mb-4">Get In Touch</h1>
				<p className="text-gray-300 mb-12">Want to collaborate or just say hello? Feel free to reach out!</p>

				<div className="grid md:grid-cols-2 gap-6">
					<ContactCard 
						icon={<PhoneCall className="text-purple-400" size={48} />}
						title="WhatsApp"
						description="+62 813-1181-4077"
						href="https://wa.me/6281311814077"
					/>
					<ContactCard 
						icon={<Mail className="text-purple-400" size={48} />}
						title="Gmail"
						description="raihannuryasintcn@gmail.com"
						href="mailto:raihannuryasintcn@gmail.com"
					/>
				</div>

				<div className="mt-12">
					<a 
						href="https://t.me/raihannuryasin" 
						target="_blank" 
						rel="noopener noreferrer"
						className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all"
					>
						<Send className="mr-2" size={24} />
						Message Me on Telegram
					</a>
				</div>
			</div>
		</div>
	);
}

function ContactCard({ icon, title, description, href }) {
	return (
		<a 
			href={href} 
			target="_blank" 
			rel="noopener noreferrer"
			className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-600 transition-all flex flex-col items-center text-center"
		>
			<div className="mb-4">{icon}</div>
			<h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
			<p className="text-gray-300">{description}</p>
		</a>
	);
}