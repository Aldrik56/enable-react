import Navbar from '../components/Navbar';

const TentangKami= ()=> {
    return(
        <div className="tentangKamiPage">
        <Navbar/>

        <article className="article">
        <div className="content-container background">
            <div>
                <h1 className="logo_h1">Enabled</h1>
                <span className="trademark" aria-hidden="true">©2024</span>
            </div>
            <div>
                <p className="paragraf">
                    Enabled merupakan proyek karya kelulusan penulis sebagai mahasiswa jurusan Jurnalistik di Universitas Multimedia Nusantara. Proyek ini diproduksi dan ditulis oleh Keisya Librani Chandra dan Dimitri Quiny Joanita.
                </p>
                <p className="paragraf">
                    Enabled sendiri merupakan akronim dari Enabling Disabled, yang berarti memberdayakan penyandang disabilitas. Sesuai dengan namanya, Enabled bertujuan untuk memberikan informasi dan edukasi aksesibel untuk membantu penyandang disabilitas dalam pemenuhan dua hak dasar mereka yang sering terabaikan, yakni pendidikan dan kesehatan. Dengan mewawancarai berbagai narasumber, dari sisi pembuat kebijakan, pelaku kebijakan, dan penerima kebijakan, Enabled berharap untuk menjadi jembatan informasi dari sisi penyandang disabilitas sensorik ke pemerintah, dan sebaliknya.
                </p>
            </div>
        </div>
        <div className="container-card-ucapan">
            <div className="card-ucapan-terimakasih">
                <h2 className="h2-custom">Terima kasih <br/> kami sampaikan kepada</h2>
                <ul className="ul-custom">
                    <li>
                        Supervisor proyek, <b>Ibu Utami Diah Kusumawati </b>
                    </li>
                    <li>
                        Ilustrator, <b>Natasha Indrawinata </b>
                    </li>
                    <li>
                        Desainer grafis, <b>William Wei</b>
                    </li>
                    <li>
                        Desainer grafis sementara,<b>Maria Sesilia</b>
                    </li>
                    <li>
                        Penyusun situs,<b>Aldrik Ciaputra</b> 
                    </li>   
                    <li>
                        Ketua Program Studi Jurnalistik <br/> Universitas Multimedia Nusantara, <b>Bapak Samiaji Bintang Nusantara</b>
                    </li>
                </ul>
                </div>
            </div>
        </article>
        </div>
    )
}

export default TentangKami;