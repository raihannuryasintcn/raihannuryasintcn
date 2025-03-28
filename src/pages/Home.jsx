import { h } from 'preact';
import raihannuryasintcnLogo from '../assets/raihannuryasintcn.svg';

export function Home() {
	return (
		<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
			<div className="max-w-4xl w-full">
				{/* Header Section */}
				<div className="flex items-center space-x-6 mb-12">
					<img 
						src={raihannuryasintcnLogo} 
						alt="Raihan Nur Yasin" 
						className="w-32 h-32 rounded-full border-4 border-purple-600 shadow-lg"
					/>
					<div>
						<h1 className="text-4xl font-bold text-purple-400">Raihan Nur Yasin</h1>
						<p className="text-xl text-gray-300">Informatics Student | Web Developer</p>
					</div>
				</div>

				{/* Education Section */}
				<section className="mb-12">
					<h2 className="text-3xl font-semibold border-b-2 border-purple-600 pb-2 mb-6">Education</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<EducationCard 
							title="Universitas Mercu Buana"
							description="Pursuing Informatics Engineering, developing technical skills and innovative solutions"
							period="2021 - Present"
						/>
						<EducationCard 
							title="SMAN 15 Kota Tangerang"
							description="High School with focus on Science and Technology, strong academic foundation"
							period="2018 - 2021"
						/>
					</div>
				</section>

				{/* Experience Section */}
				<section className="mb-12">
					<h2 className="text-3xl font-semibold border-b-2 border-purple-600 pb-2 mb-6">Experience</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<ExperienceCard 
							title="Kepala Biro Internal BEM FASILKOM"
							description="Led internal operations, managed team communication, and coordinated organizational initiatives"
							period="2022 - 2023"
						/>
						<ExperienceCard 
							title="Kepala Divisi PDD Kajian Remaja MJ"
							description="Managed research and development division, focused on youth empowerment and community engagement"
							period="2021 - 2022"
						/>
					</div>
				</section>

				{/* Skills Section */}
				<section>
					<h2 className="text-3xl font-semibold border-b-2 border-purple-600 pb-2 mb-6">Skills</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<SkillCard 
							title="Web Development"
							description="Proficient in modern web technologies and frameworks"
						/>
						<SkillCard 
							title="Data & AI"
							description="Experience in data processing and machine learning models"
						/>
						<SkillCard 
							title="No-Code Platforms"
							description="Skilled in rapid prototyping and solution development"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

function EducationCard({ title, description, period }) {
	return (
		<div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-600 transition-all">
			<h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
			<p className="text-gray-300 mb-2">{description}</p>
			<p className="text-sm text-gray-500">{period}</p>
		</div>
	);
}

function ExperienceCard({ title, description, period }) {
	return (
		<div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-600 transition-all">
			<h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
			<p className="text-gray-300 mb-2">{description}</p>
			<p className="text-sm text-gray-500">{period}</p>
		</div>
	);
}

function SkillCard({ title, description }) {
	return (
		<div className="bg-gray-900 p-6 rounded-lg border border-purple-800 hover:border-purple-600 transition-all">
			<h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
			<p className="text-gray-300">{description}</p>
		</div>
	);
}