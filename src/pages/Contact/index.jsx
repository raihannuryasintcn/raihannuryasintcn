import raihannuryasintcnLogo from '../../assets/raihannuryasintcn.svg';
import './style.css';

export function Contact() {
	return (
		<div class="contact">
			<a href="https://preactjs.com" target="_blank">
				<img src={raihannuryasintcnLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Chat Me on WhatsApp or Gmail</h1>
			<section>
				<ContactWhatsApp
					title="WhatsApp"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<ContactGmail
					title="Gmail"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
			</section>
		</div>
	);
}

function ContactWhatsApp(props) {
	return (
		<a href={props.href} target="_blank" class="contact-whatsapp">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

function ContactGmail(props) {
	return (
		<a href={props.href} target="_blank" class="contact-gmail">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
