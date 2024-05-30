import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StandarPenyusunan = () => {
    return (
        <div id="standarPenyusunanPage">
            <Navbar/>
            <article id='main'>
      <div className="std-header">
        <div className="std-hero">
          <div className="std-hero-text">
            <h1 className="std-hero-title judul"><b>Standar Penyusunan</b></h1>
            <p className="std-hero-subtitle paragraf">Untuk memastikan situs dapat diakses oleh semua kalangan, termasuk penyandang
              disabilitas, kami menerapkan
              standar aksesibilitas internasional, yakni Web Content Accessibility Guidelines (WCAG) 2.2 yang
              dipublikasi
              oleh W3C (World Wide Web Consortium).
            </p>
          </div>
        </div>
        <image src="../assets/images/standar_penyusunan/hero.png" className="std-hero-image" />
        <div className="std-gradient-bg"></div>
        <div className="std-wcag">
          <h2 className="std-wcag-title subjudul"><b>WCAG 2.2</b></h2>
          <hr className="hr-kecil" />
          <p className="std-wcag-subtitle paragraf">Web Content Accessibility Guidelines merupakan sebuah panduan yang dijadikan
            standar global untuk penyusunan
            konten aksesibel. Panduan ini pertama kali diterbitkan pada 1999 dan terus diperbarui sesuai dengan kemajuan
            teknologi hingga saat ini. Adapun, WCAG 2.2 merupakan versi terbaru dari panduan ini sejak pembaharuan
            terakhir pada 5 Oktober 2023. Dalam WCAG 2.2, terdapat 4 indikator penting agar konten dapat diakses semua
            orang: Perceivable, Operable, Understandable, dan Robust.</p>
        </div>
      </div>
      <div className="std-perceive">
        <h2 className="std-perceive-title subjudul">Perceivable</h2>
        <p className="std-perceive-subtitle paragraf">
          Indikator “Perceivable” mengatur mengenai bagaimana konten dapat “diindra” dengan jelas oleh audiens dari
          segala kalangan, termasuk mereka yang memiliki keterbatasan melihat dan mendengar.
        </p>
        <hr className="hr-sedang hr-center" />
        <div className="std-list">
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Penyediaan alt text untuk setiap konten visual (video, data, tabel,
                foto, dan sebagainya)
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Menyediakan konten dalam bentuk vertikal dan horizontal
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Penyediaan <i>caption</i> untuk konten dengan suara (video)
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Mengatur kontras warna dan ukuran teks sesuai dengan panduan
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Deskripsi video diberikan dalam bentuk audio saat video dimulai
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Menyediakan <i>widget</i> yang dapat memperbesar teks dan mengatur kontras warna
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Setiap elemen multimedia tidak lebih besar daripada 1 halaman
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Menyediakan informasi yang dapat diakses secara alternatif saat menggunakan warna dalam penceritaan
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item-singles">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-singles-text paragraf">Menerapkan <i>line spacing, letter spacing,</i> dan <i>word spacing</i> sesuai standar ketentuan minimal WCAG</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="std-operable">
        <h2 className="std-operable-title subjudul">Operable</h2>
        <p className="std-operable-subtitle paragraf">
          Indikator “Operable” berarti semua komponen dan konten dapat dioperasikan oleh seluruh audiens.
        </p>
        <hr className="hr-sedang hr-center" />
        <div className="std-list">
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Konten situs dapat diakses dengan menggunakan hanya <i>keyboard</i>
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Tidak menggunakan <i>flash</i> dan warna-warna yang menyilaukan mata
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Judul dan subjudul konten situs menjelaskan isi konten dan dapat diakses melalui <i>headings</i>
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Artikel ditulis memanjang dan memiliki urutan yang jelas
              </p>
            </li>
          </ul>
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Setiap tautan diberi penjelasan akan diarahkan ke mana dan mengenai apa
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Setiap unsur multimedia diberikan label penjelasan berupa teks
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="std-understand">
        <h2 className="std-understand-title subjudul">Understandable</h2>
        <p className="std-understand-subtitle paragraf">
          Indikator “Understandable” berarti semua komponen dalam situs mampu dimengerti.
        </p>
        <hr className="hr-sedang hr-center" />
        <div className="std-list">
          <ul className="std-list-row">
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-text paragraf">Artikel diproduksi menggunakan bahasa Indonesia yang sesuai  KBBI dan PUEBI
              </p>
            </li>
            <li className="std-list-item">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-black"></div>
              </div>
              <p className="std-list-item-text paragraf">Situs dan konten dapat dinavigasikan dengan mudah dan konsisten, tidak berpindah-pindah halaman.  
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="std-robust">
        <h2 className="std-robust-title subjudul">Robust</h2>
        <p className="std-robust-subtitle paragraf">
          Indikator “Robust” mengukur bahwa konten haruslah cukup kuat agar mampu diinterpretasikan oleh seluruh
          kalangan, termasuk yang menggunakan fitur pembantu.
        </p>
        <hr className="hr-sedang hr-center" />
        <div className="std-robust-list">
          <ul className="std-list-left">
            <li className="std-list-item-single">
              <div aria-hidden className="std-list-item-circle">
                <div className="std-list-item-orange"></div>
              </div>
              <p className="std-list-item-single-text paragraf">Keseluruhan situs dapat dioperasikan menggunakan pembaca layar
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="std-bottom">
        <hr className="hr-sedang hr-center" />
        <p className="std-bottom-text paragraf"><b>*Tingkat aksesibilitas yang dianut Enabled ialah level <span className="std-span-orange">AA (cukup aksesibel)</span> pada WCAG 2.2. Poin-poin yang
          dirangkum di atas merupakan poin <span className="std-span-orange">WCAG 2.2</span> yang dianut dalam situs Enabled.</b></p>
      </div>
    </article>
    <Footer/>
    </div>
    );
}

export default StandarPenyusunan;