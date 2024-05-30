const Footer = () => {
    return (
        <footer className="footer">
            <div alt="klik untuk kembali ke halaman beranda" onClick={()=>window.location.href="./"}>
                <p>Enabled</p>
                <p className="">© 2021</p>
            </div>
        </footer>
    );
}

export default Footer;