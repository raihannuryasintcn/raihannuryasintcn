import { useLocation } from 'preact-iso';

export function Footer() {
    const { url } = useLocation();

    return (
        <footer>
            <p>&copy; 2025 raihannuryasintcn</p>
        </footer>
    );
}
