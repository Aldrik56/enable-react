import Navbar from "../components/Navbar";

const Panduan = () => {
    return (
        <>
            <Navbar/>
            <section className="hero-section">
                <div>
                    <img src="../assets/images/panduan/ILLUST LANDING PAGE ENABLED.png" alt=""/>
                    <div className="container-judul">
                        <h1 className="judul-utama">Panduan Penggunaan</h1>
                        <p className="brief-judul">Situs ini dirancang agar dapat diakses oleh semua pengguna, dari pengguna nondisabilitas hingga pengguna dengan keterbatasan kemampuan. Adapun, terdapat beberapa cara untuk menikmati konten di situs ini.</p>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </section>
            <article className="article">
                <div className="content-container">
                    <h2 className="subjudul">Apa itu pembaca layar?</h2>
                    <hr className="hr-kecil me-auto ms-auto"/>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Tahukah kamu bahwa teman-teman dengan disabilitas netra dapat melakukan menggunakan gawai dan melakukan pencarian dan eksplorasi Internet secara mandiri? Bagaimana bisa? Jawabannya adalah pembaca layar.
                        </p>
                        <p className="paragraf">
                            Pembaca layar merupakan sebuah perangkat lunak yang menerjemahkan setiap elemen di layar gawai, seperti teks, tombol, dan gambar, ke dalam output suara atau braille. Perangkat ini umum digunakan oleh teman-teman netra untuk mengakses gawai mereka, baik ponsel maupun komputer.
                        </p>
                    </div>
                </div>
                <div className="content-container">
                    <div className="box-biru">
                        <div>
                            <div>
                                <h2 className="subjudul-gede">Tertarik Untuk Mengenal Cara <br/> Kerja Pembaca Layar?</h2>
                                <hr className="hr-sedang"/>
                                <em className="em">Cobalah di gawaimu sekarang!</em>
                            </div>
                            <div>
                                <ul>
                                    <li>Windows PC/Computer
                                        <ul>
                                            <li>NVDA</li>
                                            <li>JAWS</li>
                                        </ul>
                                    </li>
                                    <li>
                                        OS "Voice Over"
                                        <ul>
                                            <li>MacOS</li>
                                            <li>iPhone OS</li>
                                        </ul>
                                    </li>
                                    <li>Android "Talkback"</li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="content-container">
                    <h2 className="subjudul">Windows: NVDA</h2>
                    <hr className="hr-kecil me-auto ms-auto" />
                    <div className="container-paragraf">
                        <p className="paragraf">
                            NVDA merupakan pembaca layar yang bekerja di sistem operasi Windows. Pembaca layar ini bersifat open-source dan dapat diunduh oleh semua orang tanpa biaya apapun.  Perangkat lunak NVDA dapat diunduh melalui pranala <a href="https://www.nvaccess.org/download/">https://www.nvaccess.org/download/</a>. Adapun, berikut kami lampirkan pula perintah-perintah keyboard yang umum digunakan untuk menavigasi situs kami.
                        </p>
                    </div>  
                    <table className="table-windows"  onclick="window.location='https://docs.google.com/spreadsheets/d/1JaICA-eM_Fgcdvvd6jU6U_B1t_QUOCin4tmemz22-G0/edit?usp=sharing'" alt="Klik untuk mengakses tabel panduan navigasi NVDA pada ms excel">
                        <thead className="table-head th-dark">
                        <tr>
                            <th>No.</th>
                            <th>Fungsi</th>
                            <th>Perintah</th>
                            <th>Keterangan</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>On/Off</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Ctrl + Alt + N</td>
                                        <td>Insert + Q</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Menyalakan NVDA</td>
                                        <td>Mematikan NVDA</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Reading<br/>(membaca)</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Control</td>
                                        <td>Insert + ↓ (atau +)</td>
                                        <td>↓</td>
                                        <td>Tab</td>
                                    </tr>
                                </table>
                            </td>
                                
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Berhenti membaca</td>
                                        <td>Membaca baris</td>
                                        <td>Membaca kata</td>
                                        <td>Membaca karakter</td>
                                    </tr>
                                </table>
                                </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Aktivasi</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Enter</td>
                                        <td>Space bar</td>
                                    </tr>
                                </table>
                                </td>
                            <td>
                                <table style="width:100%"> 
                                    <tr className="tr">
                                        <td>Link</td>
                                        <td>Tombol</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Heading</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Enter atau space bar</td>
                                        <td>H</td>
                                        <td>1-6</td>
                                        <td>Insert + F7</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Link</td>
                                        <td>Heading selanjutnya</td>
                                        <td>Ke heading tingkatan 1-6</td>
                                        <td>List semua heading</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Landmark</td>
                            <td>D</td>
                            <td>Menuju landmark selanjutnya</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Daftar Elemen</td>
                            <td>Insert + F7</td>
                            <td>Menunjukkan semua elemen <br/> (headings, link, form, tombol, dsb)</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Tabel</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>T</td>
                                        <td>Ctrl + Alt + &#8593;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Ke tabel selanjutnya</td>
                                        <td>Ke tabel sebelumnya</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daftar</td>
                            <td>L</td>
                            <td>Ke daftar (list) selanjutnya</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Link</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Insert + F7</td>
                                        <td>K</td>
                                        <td>U</td>
                                        <td>V</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Ke daftar item selanjutnya</td>
                                        <td>Ke tautan selanjutnya</td>
                                        <td>Ke tautan selanjutnya (yang belum dibuka)</td>
                                        <td>Ke tautan selanjutnya (yang sudah dibuka)</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Navigasi</td>
                            <td>↑↓→←</td>
                            <td>Beralih pada elemen selanjutnya</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Kembali ke sebelumnya</td>
                            <td>Insert + F7</td>
                            <td>Kembali ke sebelumnya (heading, landmark, tabel, elemen)</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Berikut kami sertakan pula perintah-perintah yang dapat digunakan untuk pembacaan teks melalui perangkat JAWS:
                        </p>
                    </div>

                    <table className="table-windows" onclick="window.location='https://docs.google.com/spreadsheets/d/1zDlPuq-6ZsOZDJ1ka_8hQT08xssP_Kq2naDeU6_8-4o/edit?usp=sharing'" alt="Klik untuk mengakses tabel panduan reading NVDA pada ms excel" >
                        <thead className="table-head th-dark">
                            <tr>
                                <th>No.</th>
                                <th>Fungsi</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>On/Off</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ctrl + Alt + N</td>
                                            <td>Insert + Q</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Menyalakan NVDA</td>
                                            <td>Mematikan NVDA</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Reading<br/>(membaca)</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Control</td>
                                            <td>Insert + ↓ (atau +)</td>
                                            <td>↓</td>
                                            <td>Tab</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Berhenti membaca</td>
                                            <td>Membaca baris</td>
                                            <td>Membaca kata</td>
                                            <td>Membaca karakter</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Aktivasi</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Enter</td>
                                            <td>Space bar</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Link</td>
                                            <td>Tombol</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Heading</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Enter atau space bar</td>
                                            <td>H</td>
                                            <td>1-6</td>
                                            <td>Insert + F7</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Link</td>
                                            <td>Heading selanjutnya</td>
                                            <td>Ke heading tingkatan 1-6</td>
                                            <td>List semua heading</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Landmark</td>
                                <td>D</td>
                                <td>Menuju landmark selanjutnya</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Daftar Elemen</td>
                                <td>Insert + F7</td>
                                <td>Menunjukkan semua elemen <br/> (headings, link, form, tombol, dsb)</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tabel</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>T</td>
                                            <td>Ctrl + Alt + →</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ke tabel selanjutnya</td>
                                            <td>Ke tabel sebelumnya</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Daftar</td>
                                <td>L</td>
                                <td>Ke daftar (list) selanjutnya</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Link</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Insert + F7</td>
                                            <td>K</td>
                                            <td>U</td>
                                            <td>V</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ke daftar item selanjutnya</td>
                                            <td>Ke tautan selanjutnya</td>
                                            <td>Ke tautan selanjutnya (yang belum dibuka)</td>
                                            <td>Ke tautan selanjutnya (yang sudah dibuka)</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Navigasi</td>
                                <td>↑↓→←</td>
                                <td>Beralih pada elemen selanjutnya</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Kembali ke sebelumnya</td>
                                <td>Insert + F7</td>
                                <td>Kembali ke sebelumnya (heading, landmark, tabel, elemen)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content-container">
                    <h2 className="subjudul">Windows: JAWS</h2>
                    <hr className="hr-kecil me-auto ms-auto" />
                    <div className="container-paragraf">
                        <p className="paragraf">
                            JAWS, akronim dari Job Access With Speech, merupakan perangkat pembaca layar yang paling terkemuka di kalangan pengguna internasional. Perangkat ini merupakan perangkat pembaca layar berbayar yang diperuntukkan bagi komputer/PC dengan sistem operasi Windows. Harganya sendiri beragam mulai dari 90 USD lisensi per tahun hingga 1100 USD (home license) atau 1497 USD (professional license) untuk lisensi seumur hidup. Pembelian perangkat ini dapat dilakukan di <a href="https://www.freedomscientific.com/products/software/jaws/">https://www.freedomscientific.com/products/software/jaws/</a>. Bagi pengguna JAWS, kami kompilasikan pula beberapa komando-komando keyboard yang bisa digunakan untuk menavigasi konten di situs kami.
                        </p>
                    </div>  
                    <table className="table-windows"  onclick="window.location='https://docs.google.com/spreadsheets/d/15HssC40t829HKcOfP-MWrBgPJVJueM42BBMwjDa9fpY/edit?usp=sharing'" alt="Klik untuk mengakses tabel panduan navigasi JAWS pada ms excel">
                        <thead className="table-head th-dark">
                        <tr>
                            <th>No.</th>
                            <th>Fungsi</th>
                            <th>Perintah</th>
                            <th>Keterangan</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>On/Off</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>H</td>
                                        <td>Shift + H</td>
                                        <td>1 - 6</td>
                                        <td>Shift + 1 - 6</td>
                                        <td>Insert + F6</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Ke Heading Selanjutnya</td>
                                        <td>Kembali ke heading sebelumnya</td>
                                        <td>Ke heading selanjutnya tingkatan 1 - 6</td>
                                        <td>Kembali ke heading sebelumnya tingkatan 1 - 6</td>
                                        <td>List semua heading</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Daftar <br/>(Lists)</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>L</td>
                                        <td>Shift + L</td>
                                        <td>I</td>
                                        <td>Shift + I</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Ke daftar selanjutnya</td>
                                        <td>Kembali ke daftar sebelumnya</td>
                                        <td>Ke daftar item selanjutnya</td>
                                        <td>Kembali ke daftar item sebelumnya</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Elemen form</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>F</td>
                                        <td>Shift + F</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%"> 
                                    <tr className="tr">
                                        <td>Ke elemen form selenjutnya</td>
                                        <td>Kembali ke elemen sebelumnya</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Heading</td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Enter atau space bar</td>
                                        <td>H</td>
                                        <td>1-6</td>
                                        <td>Insert + F7</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Link</td>
                                        <td>Heading selanjutnya</td>
                                        <td>Ke heading tingkatan 1-6</td>
                                        <td>List semua heading</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Landmark</td>
                            <td>D</td>
                            <td>Menuju landmark selanjutnya</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Daftar Elemen</td>
                            <td>Insert + F7</td>
                            <td>Menunjukkan semua elemen <br/> (headings, link, form, tombol, dsb)</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Berikut kami sertakan pula perintah-perintah yang dapat digunakan untuk pembacaan teks melalui perangkat JAWS:
                        </p>
                    </div>
                    <table className="table-windows" onclick="window.location='https://docs.google.com/spreadsheets/d/1TJZhtx6AbSM3R836_b_-xWPYVZGmvB0G0j1tlF4qA2g/edit?usp=sharing'" alt="Klik untuk mengakses tabel panduan perintah reading JAWS pada ms excel">
                        <thead className="table-head th-dark">
                            <tr>
                                <th>No</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>↑</td>
                                <td>Bacakan baris sebelumnya</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>↓</td>
                                <td>Link selanjutnya</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>←</td>
                                <td>Bacakan karakter sebelumnya</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>→</td>
                                <td>Bacakan karakter selanjutnya</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Num Pad 5</td>
                                <td>Bacakan karakter</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Num Pad 5 (Dua kali dengan cepat)</td>
                                <td>Bacakan karakter secara fonetik</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Insert + ←</td>
                                <td>Bacakan kata sebelumnya</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Insert + →</td>
                                <td>Bacakan kata selanjutnya</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Insert + Num Pad 5</td>
                                <td>Bacakan kata</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Insert + Num Pad 5 (Dua kali dengan cepat)</td>
                                <td>Ejakan kata</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Insert + ↑</td>
                                <td>Bacakan baris ini</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Alt + Num Pad 5</td>
                                <td>Bacakan kalimat ini</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Insert + ↑ (Dua kali dengan cepat)</td>
                                <td>Ejakan baris ini</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Alt + ↓</td>
                                <td>Bacakan kalimat selanjutnya</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Alt + Num Pad 5</td>
                                <td>Ejakan baris ini</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Insert + Home</td>
                                <td>Bacakan teks dari awal atau dari posisi tertentu hingga posisi kursor saat ini</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Insert + Page Up</td>
                                <td>Bacakan teks dari posisi kursor saat ini</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Insert + Home (2 kali dengan cepat)</td>
                                <td>Ejakan teks dari awal atau dari posisi tertentu hingga posisi kursor saat ini.</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Insert + Page Up (2 kali dengan cepat)</td>
                                <td>Ejakan teks dari posisi kursor saat ini</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>→</td>
                                <td>Mempercepat pembacaan teks selama fungsi "Say All" sedang berjalan.</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>←</td>
                                <td>Mengulang pembacaan teks selama fungsi "Say All" sedang berjalan.</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                    
                <div className="content-container">
                    <h2 className="subjudul">MacOS: Voiceover</h2>
                    <hr className="hr-kecil ms-auto me-auto"/>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Voiceover merupakan perangkat lunak bawaan yang berada dalam menu aksesibilitas di perangkat Apple. Oleh karena itu, Voiceover tidak perlu diunduh secara terpisah untuk pengguna perangkat MacOS. Perangkat ini dapat dinyalakan dengan mengakses System Preferences {'>'} Accessibility {'>'} Voiceover. Adapun, berikut kami kompilasikan beberapa perintah keyboard yang dapat digunakan untuk menavigasi konten kami dengan perangkat Voiceover pada MacOS.
                        </p>  
                    </div>
                    <table className="table-MacOS" onclick="window.location='https://docs.google.com/spreadsheets/d/1a2s4fhaxq3uJhxhqzEgNBHb7Zuzq5a9ILJGEekU-5ZQ/edit?usp=sharing'" alt="Klik untuk mengakses tabel panduan navigasi MacOS pada ms excel">
                        <thead className="table-head th-orange">
                            <tr>
                                <th>No</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tab/Shift + Tab</td>
                                <td>Membaca selanjutnya (ke yang lebih terperinci seperti link atau tombol)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Option (VO) + Command + L</td>
                                <td>Link selanjutnya</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Option (VO) Command + V</td>
                                <td>Link selanjutnya yang sudah dikunjungi</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Option (VO) + Command + H</td>
                                <td>Heading selanjutnya</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Option (VO) + Command + J</td>
                                <td>Elemen form selanjutnya</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Option (VO) + Command + T</td>
                                <td>Tabel selanjutnya</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Option (VO) + Command + X</td>
                                <td>Daftar (list) selanjutnya</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Option (VO) + Command + G</td>
                                <td>Grafik selanjutnya</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Option (VO) + Spacebar</td>
                                <td>Mengaktifkan link atau mengontrol form (mengisi menggunakan suara)</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Option (VO) + Shift + Command + (H, T. etc.)</td>
                                <td>Menuju heading, tabel, dsb sebelumnya</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>(Option) VO + Shift +1</td>
                                <td>Berinteraksi dengan objek-objek, seperti iframes, menu, regional aplikasi, dsb</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Selain dapat digunakan untuk menavigasi, pembaca layar ini juga dapat digunakan untuk mengubah teks menjadi suara. Berikut merupakan perintah-perintah yang dapat digunakan untuk pembacaan teks.
                        </p>  
                    </div>
                    <table className="table-MacOS" onclick="window.location='https://docs.google.com/spreadsheets/d/1oNsNgGns8o5_83RdMhzeT6iT3jygxKlMJs3syvm-qJ4/edit?usp=sharing'" alt="Klik untuk mengakses panduan perintah reading MacOS pada ms excel">
                        <thead className="table-head th-orange">
                            <tr>
                                <th>No.</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Option (VO)A</td>
                                <td>Mulai membaca</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Control</td>
                                <td>Pause atau melanjutkan membaca</td>
                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Option (VO)+</td>
                                <td>Membaca item selanjutnya</td>
                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Option (VO)+</td>
                                <td>Membaca item sebelumnya</td>
                                
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Option (VO) + P</td>
                                <td>Membaca paragraf</td>
                                
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Option (VO) + 5</td>
                                <td>Membaca kalimat</td>
                                
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Option (VO) + W</td>
                                <td>Membaca kata (tekan W untuk mengeja huruf secara alfabetikal dan fonetik)</td>
                                
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Option (VO) + B</td>
                                <td>Membaca dari paling atas sampai lokasi saat ini</td>
                                
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Option (VO) Home</td>
                                <td>Pergi ke halaman paling atas (desktop)</td>
                                
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Option (VO) + Fn+&#8593;</td>
                                <td>Pergi ke halaman paling atas (laptop)</td>
                                
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Option (VO) + End</td>
                                <td>Pergi ke halaman paling bawah (desktop)</td>
                                
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Option (VO) + Fn+&#8595;</td>
                                <td>Pergi ke halaman paling bawah (laptop)</td>
                                
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Option (VO)+↑&#8593;</td>
                                <td>Navigasi tabel</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Option (VO) + Command+&#9873;</td>
                                <td>Memilih pengaturan suara</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Option (VO) + Command + 11</td>
                                <td>Modifikasi pengaturan suara yang dipilih</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content-container">
                    <h2 className="subjudul">iPhone OS: Voiceover</h2>
                    <hr className="hr-kecil ms-auto me-auto"/>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Sebagai salah satu perangkat produksi Apple, iPhone juga dilengkapi dengan fitur aksesibilitas Voiceover. Fitur pembaca layar ini dapat diakses melalui System Preferences {'>'} Accessibility {'>'} Voiceover. Adapun, berikut merupakan beberapa gestur perintah yang dapat digunakan untuk menikmati situs kami dengan menggunakan Voiceover dari iPhone. (Catatan: Rotor dapat digunakan dengan melakukan gestur memutar pada layar dengan 2 jari).
                        </p>  
                    </div>
                    <table className="table-iphone" onclick="window.location='https://docs.google.com/spreadsheets/d/1T1z7dNK1Rl1kX0QlDRA08XN06KsD_uJtU-nVY8nTl9o/edit?usp=sharing'" alt="Klik untuk mengakses panduan navigasi Voiceover untuk iPhone OS pada ms excel">
                        <thead className="table-head th-dark">
                            <tr>
                                <th>No.</th>
                                <th>Fungsi</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>On/Off</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ctrl + Alt + N</td>
                                            <td>Insert + Q</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Menyalakan NVDA</td>
                                            <td>Mematikan NVDA</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Reading<br/>(membaca)</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Control</td>
                                            <td>Insert + ↓ (atau +)</td>
                                            <td>↓</td>
                                            <td>Tab</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Berhenti membaca</td>
                                            <td>Membaca baris</td>
                                            <td>Membaca kata</td>
                                            <td>Membaca karakter</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Aktivasi</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Enter</td>
                                            <td>Space bar</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                <table style="width:100%">
                                    <tr className="tr">
                                        <td>Link</td>
                                        <td>Tombol</td>
                                    </tr>
                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Heading</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Enter atau space bar</td>
                                            <td>H</td>
                                            <td>1-6</td>
                                            <td>Insert + F7</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Link</td>
                                            <td>Heading selanjutnya</td>
                                            <td>Ke heading tingkatan 1-6</td>
                                            <td>List semua heading</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Landmark</td>
                                <td>D</td>
                                <td>Menuju landmark selanjutnya</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Daftar Elemen</td>
                                <td>Insert + F7</td>
                                <td>Menunjukkan semua elemen <br/> (headings, link, form, tombol, dsb)</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tabel</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>T</td>
                                            <td>Ctrl + Alt + →</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ke tabel selanjutnya</td>
                                            <td>Ke tabel sebelumnya</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Daftar</td>
                                <td>L</td>
                                <td>Ke daftar (list) selanjutnya</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Link</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Insert + F7</td>
                                            <td>K</td>
                                            <td>U</td>
                                            <td>V</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Ke daftar item selanjutnya</td>
                                            <td>Ke tautan selanjutnya</td>
                                            <td>Ke tautan selanjutnya (yang belum dibuka)</td>
                                            <td>Ke tautan selanjutnya (yang sudah dibuka)</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Navigasi</td>
                                <td>↑↓→←</td>
                                <td>Beralih pada elemen selanjutnya</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Kembali ke sebelumnya</td>
                                <td>Insert + F7</td>
                                <td>Kembali ke sebelumnya (heading, landmark, tabel, elemen)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Selain perintah navigasi, kami juga meringkaskan beberapa perintah terkait pembacaan teks oleh Voiceover, sebagai berikut.
                        </p>  
                    </div>
                    <table className="table-iphone" onclick="window.location='https://docs.google.com/spreadsheets/d/1hTpBuzD5IpRYjZPV0DEkagmtVJT37ZA1YeNBzoIGX7g/edit?usp=sharing'" alt="Klik untuk mengakses panduan perintah reading untuk Voiceover pada MacOS pada ms excel'">
                        <thead className="table-head th-dark">
                            <tr>
                                <th>No.</th>
                                <th>Item</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Baris</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Rotor, geser ke atas</td>
                                            <td>Rotor, geser ke bawah</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Baca baris sebelumnya</td>
                                            <td>Baca baris setelahnya</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Huruf</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Rotor, geser ke atas</td>
                                            <td>Rotor, geser ke bawah</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Baca huruf sebelumnya</td>
                                            <td>Baca huruf setelahnya</td>
                                        </tr>
                                    </table>
                                    
                                </td>        
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>kata</td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Rotor, geser ke atas</td>
                                            <td>Rotor, geser ke bawah</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table style="width:100%">
                                        <tr className="tr">
                                            <td>Baca kata sebelumnya</td>
                                            <td>Baca kata setelahnya</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Toggle Speech</td>
                                <td>Tap 2 kali dengan 3 jari</td>
                                <td>Ke tabel selanjutnya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content-container">
                    <h2 className="subjudul">Android: TalkBack</h2>
                    <hr className="hr-kecil ms-auto me-auto"/>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Selayaknya Voiceover pada sistem operasi milik Apple, perangkat Android dilengkapi dengan perangkat bawaan TalkBack. Pembaca layar TalkBack dapat diaktifkan melalui menu Settings {'>'} Accessibility {'>'} TalkBack. Berikut kami ringkaskan beberapa perintah yang dapat digunakan melalui perangkat TalkBack untuk menikmati konten pada situs Enabled.
                        </p>  
                    </div>
                    <table className="table-android" onclick="window.location='https://docs.google.com/spreadsheets/d/1AUFJ0BsySgW648yl8hQkGdE1pcTzfhCwk8Sgsnm9Fsk/edit?usp=sharing'" alt="Klik untuk mengakses panduan navigasi talkback pada Android di ms excel'">
                        <thead className="table-head th-orange">
                            <tr>
                                <th>No</th>
                                <th>Perintah</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Geser ke bawah lalu ke kanan, atau ke atas lalu ke kanan, atau tap dengan tiga jari</td>
                                <td>Buka TalkBack Menu (TBM)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>TBM: Read from top</td>
                                <td>Baca seterusnya dari atas</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>TBM: Read from next item atau tap 3 kali dengan 2 jari</td>
                                <td>Mulai baca dari satu titik</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Geser ke kanan</td>
                                <td>Baca item selanjutnya</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Geser ke kiri</td>
                                <td>Baca item sebelumnya</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>TBM: Repeat last spoken phrase</td>
                                <td>Ulangi frasa terakhir</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tap 2 kali</td>
                                <td>Aktivasi link dan button</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>(RC: Headings) Geser ke bawah</td>
                                <td>Ke heading selanjutnya</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>(RC: Landmarks) Geser ke bawah</td>
                                <td>Ke landmark selanjutnya</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>(RC: Links) Geser ke bawah</td>
                                <td>Ke link selanjutnya</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Geser ke kiri/kanan, atau eksplorasi dengan sentuhan</td>
                                <td>Aktivasi tombol</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Geser ke atas, kiri, kanan, dan bawah dengan 2 jari</td>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Geser ke bawah, lalu ke kiri</td>
                                <td>Kembali</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>TBM: Search Screen</td>
                                <td>Mencari konten</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>(RC: Pilih item yang diinginkan) Geser ke atas</td>
                                <td>Ke item sebelumnya</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Pergi ke item sebelumnya</td>
                                <td>Ke heading, landmark, tabel, elemen sebelumnya</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Memilih item</td>
                                <td>Memilih dari daftar seluruh item dalam halaman</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Berikut pula kami rangkumkan beberapa perintah terkait pembacaan teks melalui TalkBack. Pembacaan item di TalkBack kurang lebih meliputi opsi per huruf, per kata, per baris, dan per paragraf.
                        </p>  
                    </div>
                    <table className="table-android" onclick="window.location='https://docs.google.com/spreadsheets/d/1BpgycPrV5wEURjppJNlT6WuQk46EZRFHlJ70wiWUzbs/edit?usp=sharing'" alt="Klik untuk mengakses panduan perintah reading untuk Talkback pada Android di ms excel'">
                        <thead className="table-head th-orange">
                            <tr>
                                <th>No</th>
                                <th>Perintah</th>
                                <th>keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>(RC: Lines) Geser ke bawah</td>
                                <td>Baca baris setelahnya</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>(RC: Characters) Geser ke bawah</td>
                                <td>Baca huruf setelahnya</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>(RC: Words) Geser ke bawah</td>
                                <td>Baca kata sebelumnya</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>(RC: Paragraphs) Geser ke bawah</td>
                                <td>Baca paragraf setelahnya</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>(RC: Pilih item yang diinginkan) Geser ke atas</td>
                                <td>Baca item sebelumnya</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    );
}

export default Panduan;