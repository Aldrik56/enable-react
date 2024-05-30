import "../scss/beranda.scss";
import Navbar from "../components/Navbar";
const Beranda = () => {
    return (
        <div id="berandaPage">
            <Navbar/>
           <section className="hero-section">
                <div className="hero-text">
                    <h1>Enabled.</h1>
                    <div>
                        <p><b>Peringkat 108 dari 129.</b><br/></p>
                        <p>Itulah peringkat inklusivitas Indonesia dari seluruh negara di dunia pada 2023.</p>
                        <p>Sebagai salah satu negara yang menduduki posisi inklusivitas di bawah rata-rata, bagaimana realitas yang dirasakan minoritas, seperti penyandang disabilitas sensorik, di negeri ini? Simaklah perjuangan mereka dalam mengejar hak pendidikan dan kesehatan.</p>
                        <button className="beranda-button" href="beranda-pendidikan" alt="Tombol untuk scroll langsung ke bagian judul artikel">Cari tahu lebih lanjut</button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="./assets/images/hero-img.svg" alt=""/>
                </div>
            </section>
            <article className="beranda-pendidikan" id="beranda-pendidikan">
                <div className="beranda-article-img">
                        <img src="./assets/images/hero-pendidikan.png" alt=""/>
                </div>
                <div className="beranda-article-text">
                    <div>
                        <span>Pendidikan</span>
                        <h2>Merajut Asa: Akses Pendidikan Inklusif bagi Penyandang disabilitas Sensorik di Indonesia</h2>
                        <p>Pendidikan inklusif telah diperbincangkan sejak tahun 2005 di Indonesia. Namun nyatanya, hingga 2024, penyandang disabilitas sensorik masih kesulitan mengenyam pendidikan. </p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Kurikulum Terlambat, Tenaga Pendidik Tersendat</li>
                        <li>Informasi Tak Merata Penyandng Disabilitas Rentan Tak Sekolah</li>
                        <li>Tanpa Fasilitas Memadai, Pendidikan Inklusi Sulit Terjadi</li>
                        <li>Pendidikan Inklusi, Mungkinkah Terjadi?</li>
                    </ul>
                    <hr/>
                    <button className="beranda-button" onclick="window.location.href='./pendidikan'" alt="klik untuk pindah ke halaman pendidikan">Lihat Selengkapnya</button>
                </div>
            </article>

            <article className="beranda-kesehatan">
                <div className="beranda-article-text">
                    <div>
                        <span>Kesehatan</span>
                        <h2>Kapan-kapan Tentu Buta tuli Akan Diperhatikan</h2>
                        <p>Hidup dengan disabilitas berarti hidup mahal, tak terkecuali dalam mengejar hak untuk mendapat layanan kesehatan. Belum kunjung aksesibel, fasilitas dan layanan kesehatan yang ada justru menambah beban pada biaya yang harus ditanggung penyandang disabilitas sensorik. Di sisi lain, jaminan kesehatan yang disediakan pemerintah belum cukup untuk menutup ongkos tambahan tersebut.</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Layanan Kesehatan Belum Spesifik Memerhatikan Penyandang Disabilitas Sensorik</li>
                        <li>Jaminan Kesehatan Tak Cukup, Pengeluaran Disabilitas Terus Menumpuk</li>
                    </ul>
                    <hr/>
                    <button className="beranda-button" onclick="window.location.href='./kesehatan'" alt="klik untuk pindah ke halaman kesehatan">Lihat Selengkapnya</button>
                </div>
                <div className="beranda-article-img">
                    <img src="./assets/images/hero-kesehatan.png" alt=""/>
                </div>
            </article>

            <article className="box-biru">
                <div>
                    <div>
                        <h2>Tentang Kami</h2>
                        <p>Enabled merupakan sebuah situs ramah disabilitas yang dilengkapi dengan unsur multimedia. Berfokus terhadap jurnalisme data mengenai isu aksesibilitas pendidikan dan kesehatan bagi penyandang disabilitas, Enabled berharap dapat menjadi salah satu solusi dari permasalahan aksesibilitas bagi penyandang disabilitas sensorik.</p>
                    </div>
                </div>
            </article>

            {/* <section className="beranda-kirim-pesan">
                <div>
                    <h2>Kirim Pesan Ke Kami</h2>
                    <p>Sampaikan kritik dan masukan kalian untuk Enabled</p>
                    <div>
                        <form className="contact-form" id="contactForm">
                            <label>First Name</label>
                            <input type="text" name="first_name"/>
                            <label for="">Last Name</label>
                            <input type="text" name="last_name"/>
                            <label>Email</label>
                            <input type="email" name="email"/>
                            <label>Message</label>
                            <textarea name="message"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
        </section> */}
    </div>
    )
}

export default Beranda;