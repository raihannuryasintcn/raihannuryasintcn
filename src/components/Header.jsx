import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<h2>raihannuryasintcn</h2>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/About" class={url == '/About' && 'active'}>
					About
				</a>
				<a href="/Contact" class={url == '/Contact' && 'active'}>
					Contact
				</a>
			</nav>
		</header>
	);
}
