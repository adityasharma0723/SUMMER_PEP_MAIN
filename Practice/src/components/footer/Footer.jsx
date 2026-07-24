import './Navbar.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ textAlign: 'center', padding: '1.5rem', marginTop: '2rem', borderTop: '1px solid var(--border-color, #e2e8f0)' }}>
            <p>&copy; {new Date().getFullYear()} Practice Web Application. All rights reserved.</p>
        </footer>
    );
};

export default Footer;