import raihannuryasintcnLogo from '../../assets/raihannuryasintcn.svg';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={raihannuryasintcnLogo} alt="Preact logo" height="160" width="160" />
			</a>

			<div className="container">
				<h1>Hola,</h1>
				<h2>Raihan Nur Yasin</h2>
				<h4>5th Semester Informatics Student </h4>
			</div>

	
			<h1>Education</h1>
			<section>
				<Resource
					title="Universitas Mercu Buana"
					description="Sunt ex laboris ad laboris ipsum exercitation fugiat amet elit voluptate dolor.."
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="SMAN 15 Kota Tangerang"
					description="Lorem enim ullamco minim dolor eu enim sit non deserunt anim."
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
			</section>

			<h1>Experience</h1>
			<section>
				<Resource
					title="Kepala Biro Internal BEM FASILKOM"
					description="Ut veniam et in quis mollit voluptate laborum occaecat mollit elit."
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Kepala Divisi PDD Kajian Remaja MJ"
					description="Duis deserunt cillum minim aliquip pariatur culpa in elit."
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
			</section>

			<h1>Skills</h1>
			<section>
				<Resource
					title="Basic Web Development"
					description="Ut veniam et in quis mollit voluptate laborum occaecat mollit elit."
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Data Processing and AI Models"
					description="Duis deserunt cillum minim aliquip pariatur culpa in elit."
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="No-code and Low-code Platforms"
					description="Duis deserunt cillum minim aliquip pariatur culpa in elit."
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
			</section>

		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<h5>{props.sub}</h5>
			<p>{props.description}</p>
		</a>
	);
}
