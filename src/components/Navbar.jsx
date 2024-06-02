const Navbar = () => {
    var headerScrolled=false;
    function navbarToggler(e){
        var header = e.currentTarget.parentElement.parentElement.parentElement;
        if(!headerScrolled){
            headerScrolled=true;
            header.style.backgroundColor = "#001935";
        }else {
            headerScrolled=false;
            setTimeout(()=>header.style.backgroundColor="transparent", 
                
            300);
        }


    }
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" onClick={navbarToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand logo" href="#">Enabled</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-list">
                        <li className="nav-item">
                            <a className="nav-link" href="./" alt="hyperlink untuk kembali ke halaman beranda">Beranda</a>
                            <a  className="nav-link"href="./pendidikan" alt="hyperlink untuk pindah ke halaman pendidikan">Pendidikan</a>
                            <a className="nav-link" href="./kesehatan" alt="hyperlink untuk pindah ke halaman Kesehatan">Kesehatan</a>
                            <a className="nav-link" href="./standar-penyusunan" alt="hyperlink untuk pindah ke halaman standar penyusunan">Standar Penyusunan</a>
                            <a className="nav-link" href="./panduan" alt="hyperlink untuk pindah ke halaman panduan">Panduan</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
}

export default Navbar;