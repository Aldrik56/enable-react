const Navbar = () => {
    return (
        <header class="header">
            <nav class="nav">
                <div class="logo">Enabled.</div>
                <ul class="nav-list">
                    <li>
                        <a href="./" alt="hyperlink untuk kembali ke halaman beranda">Beranda</a>
                        <a href="./pendidikan" alt="hyperlink untuk pindah ke halaman pendidikan">Pendidikan</a>
                        <a href="./kesehatan" alt="hyperlink untuk pindah ke halaman Kesehatan">Kesehatan</a>
                        <a href="./standar_penyusunan" alt="hyperlink untuk pindah ke halaman standar penyusunan">Standar Penyusunan</a>
                        <a href="./panduan" alt="hyperlink untuk pindah ke halaman panduan">Panduan</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;