import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Contact } from './pages/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
	return (
		<LocationProvider>
			<SpeedInsights />
			<Analytics />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path='/About' component={NotFound} />
					<Route path='/Contact' component={Contact} />

					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer />
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
