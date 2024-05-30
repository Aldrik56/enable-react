import Navbar from "../components/Navbar";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Kesehatan = () => {
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();
    const params = {
        injectStyles: [`
        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: rgba(252, 104, 17, 1);
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
        }
  
        .swiper-pagination-bullet-active {
          color: #fff;
          background: rgba(252, 104, 17, 1);
          ;
        }
        `],
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + " "+ "</span>";
          },
        },
        navigation: {
          nextEl: '.swiper-custom-button-next',
          prevEl: '.swiper-custom-button-prev',
        }
        
      
      }
    return(
        <>
            <Navbar/>
        <div id="kesehatanPage">
            <section className="kesehatan-hero-section kesehatanPage" >
                <div className="halaman-kesehatan-judul">
                    <h1>Kapan-kapan <br/> Tentu Buta-Tuli <br/> Akan Diperhatikan </h1>
                    <p>Hidup dengan disabilitas berarti hidup mahal, tak terkecuali dalam mengejar hak untuk mendapat layanan kesehatan. Belum kunjung aksesibel, fasilitas dan layanan kesehatan yang ada justru menambah beban pada biaya yang harus ditanggung penyandang disabilitas sensorik. Di sisi lain, jaminan kesehatan yang disediakan pemerintah belum cukup untuk menutup ongkos tambahan tersebut.</p>
                </div>
                <img src="../assets/images/kesehatan/kesehatan-hero-image.png" className="kesehatan-hero-image" alt="fffffffffffff"/>
            </section>
            <section className="author-card ms-auto me-auto kesehatanPage">
                <div className="author-info">
                    <img src="../assets/images/pas-foto-dimitri.png"  className="author-photo" alt="aaaaa"/>
                    <div className="d-flex flex-column">
                        <p className="ditulis-oleh">
                            Ditulis oleh: <br/>
                            <b className="author-name">Dimitri Quiny Joanita </b>
                        </p>
                        <p className="tanggal">15/05/2024</p>
                    </div>
                </div>
            </section>
            <main id="main" className="kesehatanPage">
                <article className="article" id="main">
                    <div className="content-container" style={{marginTop:"calc(80/1080*100vh)"}}>
                        <h2 className="subjudul">Layanan Kesehatan Belum Spesifik Memerhatikan <br/> 
                            Penyandang Disabilitas Sensorik</h2>
                        <hr className="hr-kecil me-auto ms-auto mt-3"/>
                        <div className="container-paragraf">
                            <p className="paragraf">
                                “Suster menolak komunikasi dengan saya karena saya tuli,” ujar Icha menceritakan pengalamannya saat mengakses layanan kesehatan pada Minggu (10/03/2024).
                            </p>
                            <p className="paragraf">
                                Nur Aziza (37), atau akrab dipanggil Icha, merupakan seorang penyandang disabilitas rungu. Kala itu, dirinya mengunjungi salah satu rumah sakit ternama di Jakarta Selatan untuk mencari pengobatan segera untuk suaminya yang sedang sakit
                            </p>
                            <p className="paragraf">
                                Dilandasi panik dan gesa, Icha tak pikir panjang saat sendirian mendatangi resepsionis rumah sakit yang cukup besar itu. Icha berpikir semuanya akan baik-baik saja jika ia mengupayakan yang terbaik untuk berkomunikasi dengan petugas setempat. Lagipula, meskipun dirinya merupakan seorang tuli, masih ada jalur komunikasi lain yang bisa ditempuh, seperti melalui tulisan atau bahasa tubuh.
                            </p>
                            <p className="paragraf">
                                Namun, suster setempat saat itu menolak segala upaya komunikasi sama sekali dari Icha. Baru setelah keluarga Icha yang berbicara datang untuk menolong Icha, suster menanggapi permintaan Icha untuk mendapatkan pelayanan dari dokter
                            </p>
                            <p className="paragraf">
                                Permasalahan komunikasi rupanya tidak hanya dialami oleh Icha. Meskipun telah mengenakan alat bantu dengar, Grace (30), seorang penyandang disabilitas rungu, juga mengalami hal serupa.
                            </p>
                            <p className="paragraf">
                                Grace mengatakan dirinya belum bisa mandiri mengakses layanan kesehatan lantaran masih adanya kesulitan, salah satunya pemakaian masker oleh dokter. Padahal, pemakaian masker dapat menghalangi komunikasi alternatif yang diandalkan para teman tuli selain bahasa isyarat, yakni <i>lip reading</i>. Adapun, ketika diminta menurunkan masker, Grace menyatakan bahwa dokter menolak lantaran masker telah menjadi standar operasional prosedur (SOP) bagi tenaga kesehatan.
                            </p>
                            <p className="paragraf">
                                “SOP-nya ‘<i>kan</i> mengharuskan mereka untuk tidak buka masker. Aku sudah pernah tanya <i>‘kan</i>, mereka bilang, ‘<i>Ga</i> bisa, sudah SOP’” kata Grace saat ditemui pada Sabtu (02/03/2024).
                            </p>
                            <p className="paragraf">
                                Tanpa <i>lip reading</i>, opsi komunikasi secara langsung antara penyandang disabilitas tuli dengan tenaga kesehatan pun bergantung pada penggunaan bahasa isyarat dan tulisan, baik itu tulisan tangan maupun digital. Namun, nyatanya, hingga saat ini, belum banyak tenaga kesehatan yang telah berbekal pengetahuan bahasa isyarat dasar. Di sisi lain, tulisan dari tenaga kesehatan, khususnya dokter, juga umum diketahui sulit dibaca.
                            </p>
                            <p className="paragraf">
                                Menurut Rachmita Maun Harahap, seorang komisioner tuli dari Komisi Nasional Disabilitas, komunikasi dengan tenaga kesehatan memang merupakan tantangan terbesar bagi penyandang disabilitas rungu. Di samping dari sisi komunikasi, Rachmita juga mempersoalkan pelayanan kepada penyandang disabilitas rungu yang masih belum merangkul.
                            </p>
                            <p className="paragraf">
                                “Selama ini, pasien lansia dan pengguna kursi roda itu selalu menggunakan loket khusus, <i>tapi</i> untuk orang-orang dengan disabilitas yang tidak terlihat, seperti tuli, itu dianggap seperti orang nondisabilitas,” ujar Rachmita menerangkan kondisi yang dialami teman tuli saat ditemui di Gedung Cawang Kencana (07/03/2024).
                            </p>
                            <p className="paragraf">
                                Pasalnya, hingga saat ini belum banyak layanan kesehatan yang aksesibel bagi penyandang disabilitas sensorik, terutama teman tuli. Padahal, jumlah penyandang disabilitas sensorik di Indonesia sendiri tidaklah rendah, bahkan jumlahnya mendominasi seluruh penyandang disabilitas di Indonesia.
                            </p>

                            <div className="embed-dari-flourish" alt="Data dari Data Terpadu Kesejahteraan Sosial menyatakan bahwa per April 2024, jumlah penyandang disabilitas di Indonesia didominasi jumlahnya oleh penyandang disabilitas sensorik, yakni pada 347.348 jiwa. Tekan untuk mengunduh data mentah.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <button  id="button__pendidikan__penyandang__disabilitas"><img src="../assets/images/play-button.png"/></button>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17925499/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17925499/?utm_source=embed&utm_campaign=visualisation/17925499' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            <p className="paragraf">
                                Faktor utama yang menyebabkan layanan kesehatan belum aksesibel merupakan belum adanya akomodasi yang layak dari penyedia fasilitas kesehatan. Salah satu contoh yang paling jelas yakni ketiadaan juru bahasa isyarat di fasilitas kesehatan. 
                            </p>
                            <p className="paragraf">
                                Dengan berbagai masalah komunikasi yang dialami teman tuli saat berkomunikasi dengan tenaga kesehatan, juru bahasa isyarat seharusnya menjadi solusi tersederhana yang dapat menjembatani komunikasi penyandang disabilitas rungu dengan tenaga kesehatan. Namun, nyatanya, hingga saat ini, juru bahasa isyarat masih sangat jarang atau bahkan belum pernah ditemui dalam penyedia layanan kesehatan.
                            </p>
                            <p className="paragraf">
                                “Setahu saya, hingga saat ini, belum ada, ya, juru bahasa isyarat (di puskesmas dan rumah sakit),” urai Rofi, seorang personil P2P Dinas Kesehatan DKI Jakarta yang secara khusus memegang bagian disabilitas, saat ditemui di kantor Dinkes DKI Jakarta (28/03/2024).
                            </p>
                            <p className="paragraf">
                                Absensi dari pelayanan khusus yang dibutuhkan oleh penyandang disabilitas sensorik tidak hanya terjadi pada juru bahasa isyarat (JBI). Ketika ditelusuri lebih lanjut, pasalnya, fasilitas-fasilitas akomodasi khusus untuk penyandang disabilitas sensorik, seperti JBI, <i>guiding block</i>, dan petunjuk braille, sebelumnya belum pernah didata oleh pemerintah pusat. Padahal, penyediaan fasilitas, sarana, dan prasarana aksesibel dalam pelayanan publik telah diatur melalui PP No. 42 Tahun 2020.
                            </p>
                            <p className="paragraf">
                                "Saya baru pertama kali dengar JBI, kalau <i>guiding block</i> dan braille sudah tahu, tetapi terkait 3 hal ini, saya tidak tahu kalau harus ada di fasilitas pelayanan kesehatan. Terkait hal tersebut, kita belum pernah mendata karena sampai saat ini juga belum pernah ada informasi kebutuhan data tersebut dari program terkait,” ujar Panggih, seorang staf dari Direktorat Jenderal Pelayanan Kesehatan di Kementerian Kesehatan, ketika ditemui pada Senin (22/04/2024
                            </p>
                            <p className="paragraf">
                                Terlepas dari sisi SDM dan fasilitas, sistem prosedur pelayanan kesehatan yang diterapkan oleh penyedia layanan kesehatan rupanya juga masih bersifat eksklusif. Salah satu bukti nyatanya yakni ketiadaan sistem prioritas disabilitas dan loket serta bangku khusus disabilitas di beberapa penyedia layanan kesehatan. Buntut hal ini, penyandang disabilitas sensorik merasakan hambatan ekstra dalam mengakses layanan kesehatan.
                            </p>
                            <p className="paragraf">
                                “Di sana (RS), nomor antreannya menggunakan sistem panggilan pakai suara. Saya tidak bisa dengar. Sudah minta tolong suster untuk tepuk saya, <i>tapi</i> suster juga lupa bahwa saya tuli, sehingga tidak dipanggil, jadi selalu kelewatan,” kata Mahesa (32), seorang penyandang disabilitas rungu, saat diwawancarai mengenai pengalamannya mengakses layanan kesehatan pada Minggu (10/03/2024).
                            </p>
                        </div>
                    </div>
                </article>
                
                        <Swiper 
                        className="mySwiper" 
                        onSwiper={setSwiper}
                        modules={[Navigation]}
                    
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                          }}
                        
                        alt="Kumpulan foto sejumlah fasilitas yang perlu disediakan agar layanan kesehatan aksesibel bagi penyandang disabilitas sensorik.">
                            <div class="container-button-swiper">
                            <button  ref={prevRef} className="swiper-custom-button-prev">
                                <img src="../assets/images/swiper/navigation-button-prev.svg" alt=""/>
                            </button>
                            <button ref={nextRef} className="swiper-custom-button-next">
                                <img src="../assets/images/swiper/navigation-button-next.svg" alt=""/>
                            </button>
                        </div>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide1.png" alt="Bangku khusus prioritas disediakan di tiap area (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Bangku khusus prioritas disediakan di tiap area (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide2.png" alt="Denah disediakan untuk memudahkan proses navigasi pasien (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Denah disediakan untuk memudahkan proses navigasi pasien (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide3.png" alt="Fasilitas hand rail dan ramp disediakan untuk aksesibilitas penyandang disabilitas (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Fasilitas <i>hand rail</i> dan <i>ramp</i> disediakan untuk aksesibilitas penyandang disabilitas (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide4.png" alt="Monitor pemanggilan nomor antrean disediakan agar pasien dengan disabilitas rungu juga dapat memantau antrean (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Monitor pemanggilan nomor antrean disediakan agar pasien dengan disabilitas rungu juga dapat memantau antrean (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide5.png" alt="Penyandang disabilitas diberi loket prioritas khusus (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Penyandang disabilitas diberi loket prioritas khusus (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide6.png" alt="Petugas kesehatan bersiaga untuk melayani dan membantu pasien yang berkebutuhan (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Petugas kesehatan bersiaga untuk melayani dan membantu pasien yang berkebutuhan (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide7.png" alt="Petunjuk peminuman obat juga disediakan dalam versi braille agar penyandang disabilitas netra tidak kesulitan membedakan obat (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Petunjuk peminuman obat juga disediakan dalam versi braille agar penyandang disabilitas netra tidak kesulitan membedakan obat (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide8.png" alt="Terdapat petunjuk arah yang jelas untuk memudahkan navigasi pasien (FOTO_Dimitri Quiny)."/>
                                    <figcaption>Terdapat petunjuk arah yang jelas untuk memudahkan navigasi pasien (FOTO_Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide9.png" alt="Alat bantu dengar disediakan untuk memudahkan upaya komunikasi antara nakes dengan teman tuli (FOTO_Dimitri Quiny)."/>
                                    <figcaption>Alat bantu dengar disediakan untuk memudahkan upaya komunikasi antara nakes dengan teman tuli (FOTO_Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide10.png" alt="Dokumen layanan kesehatan, seperti formulir persetujuan dan surat rujukan, disediakan dalam versi braille agar dipahami oleh pasien dengan disabilitas netra (FOTO_Dimitri Quiny)."/>
                                    <figcaption>Dokumen layanan kesehatan, seperti formulir persetujuan dan surat rujukan, disediakan dalam versi braille agar dipahami oleh pasien dengan disabilitas netra (FOTO_Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide11.png" alt="Guiding block, ramp, dan hand rail disediakan untuk memandu jalan teman-teman disabilitas (FOTO/Dimitri Quiny)."/>
                                    <figcaption><i>Guiding block, ramp</i>, dan <i>hand rail</i> disediakan untuk memandu jalan teman-teman disabilitas (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide12.png" alt="Petugas yang sudah terlatih diutus secara khusus untuk menangani pasien dengan disabilitas (FOTO/Dimitri Quiny)."/>
                                    <figcaption>Petugas yang sudah terlatih diutus secara khusus untuk menangani pasien dengan disabilitas (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="../assets/images/kesehatan/slide13.png" alt="Penyandang disabilitas didahulukan dalam mengakses layanan kesehatan (FOTO_Dimitri Quiny)."/>
                                    <figcaption>Penyandang disabilitas didahulukan dalam mengakses layanan kesehatan (FOTO_Dimitri Quiny).</figcaption>
                                </figure>
                            </SwiperSlide>
                        </Swiper>
                <article className="article" id="main">
                    <div className="content-container">
                        <div className="container-paragraf">
                            <p className="paragraf">
                                Adapun, prosedur untuk mengakses pelayanan kesehatan pada umumnya masih menggeneralisasi, tanpa adanya upaya akomodasi terhadap minoritas. Menurut Grace, sistem-sistem yang diterapkan di pelayanan kesehatan cenderung masih “pukul rata” atau menganggap sama kebutuhan setiap orang. Padahal, kesehatan merupakan hak asasi manusia yang bersifat personal dan pribadi.
                            </p>
                            <p className="paragraf">    
                                “Kebutuhan itu berbeda per individu. Kalau kebutuhannya beda, yang harus disediakan itu sebenarnya bukan aksesibilitas <i>tapi</i> akomodasi yang layak. Karena kalau aksesibilitas itu <i>‘kan</i> pukul rata, semuanya sama. Sebenarnya <i>nggak</i>, jadi sebenarnya kebutuhan tiap orang itu beda-beda,” kata Grace.
                            </p>
                        </div>
                        <div className="new-subheader container-paragraf">
                            <h3 className="subtopik"><b style={{textDecoration:"underline"}}>
                                Servis dan Infrastruktur Layanan Kesehatan Masih Jadi PR</b>
                            </h3>
                            <p className="paragraf">
                                Dalam menentukan akomodasi yang layak, tentunya, tujuan utama yang harus tercapai dalam pelayanan kesehatan adalah penyediaan layanan kesehatan bagi seluruh pasien, termasuk pasien dengan disabilitas sensorik di tengah keterbatasannya. Keterbatasan tersebut dapat berupa masalah komunikasi yang sering dialami teman tuli maupun masalah navigasi, seperti bagaimana seorang teman netra dapat menavigasikan diri secara mandiri untuk mendaftarkan diri hingga mendapat layanan kesehatan yang diinginkan.
                            </p>
                            <p className="paragraf">
                                Terkait hal tersebut, Jonna Aman Damanik, seorang komisioner netra dari Komisi Nasional Disabilitas, mengategorisasikan upaya akomodasi yang dapat dilakukan penyedia layanan kesehatan ke dalam dua hal, yakni sisi pelayanan dan arsitektural. Dalam sisi servis, layanan kesehatan harusnya merujuk kepada peta jalan layanan kesehatan aksesibel.
                            </p>
                            <p className="paragraf">
                                Dari sisi arsitektural, sebagai bentuk layanan publik, fasilitas kesehatan harus mampu memenuhi kewajiban yang ditetapkan dalam PP No. 42 Tahun 2020 tentang Aksesibilitas terhadap Permukiman, Pelayanan Publik, dan Perlindungan dari Bencana bagi Penyandang Disabilitas, antara lain pendampingan, penerjemahan, asistensi, dan fasilitas yang mudah diakses tanpa biaya tambahan, penyediaan prasarana dan sarana yang mudah diakses, dan sistem informasi yang mudah diakses.
                            </p>
            
                            <blockquote className="special-quote negative-margin-left">
                                <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                                <p className="paragraf-khusus"><b> “Nah, tetapi faktanya, belum semua layanan kesehatan itu bisa aksesibel terhadap kami penyandang disabilitas sensorik netra. Misalnya, saya, ketika ke pelayanannya, ketika memulai pendaftaran dan seterusnya, di situ <i>‘kan</i> sumber daya manusianya mesti memiliki sensitivitas disabilitas: Bagaimana berkomunikasi; bagaimana menyapa; bagaimana, kalau saya tidak bisa melihat, menggambarkan, memvisualisasikan sesuatu; dan seterusnya,” </b> jelas Jonna, saat ditemui di kantor Komisi Nasional Disabilitas (07/03/2024).</p>
                            </blockquote>
                    
                            <p className="paragraf">
                                Sensitivitas disabilitas berarti adanya dorongan untuk memahami kebutuhan dan budaya yang dimiliki dari penyandang disabilitas yang dilayani. Dalam hal tersebut, ketika nakes memiliki sensitivitas disabilitas, nakes tersebut akan berupaya untuk memberikan pelayanan yang terbaik untuk memenuhi kebutuhan pasien disabilitas yang dilayani.
                            </p>
                            <p className="paragraf">
                                Adapun, pemerintah sendiri telah mengambil beberapa langkah untuk meningkatkan sensitivitas disabilitas para tenaga kesehatan, salah satunya dengan pelaksanaan orientasi bahasa isyarat.
                            </p>
                            <p className="paragraf">
                                “Jadi, sudah ada pelatihan, ya, dari Dinas Kesehatan, UPT Puslatkesda, dan BPSDM Provinsi DKI Jakarta, pelatihan untuk pelayanan disabilitas begitu, di situ salah satu hal yang disampaikan yaitu pengenalan bahasa isyarat dasar,” ujar Rofi menjelaskan upaya yang telah diambil pemerintah setempat untuk membenahi pelayanan nakes terhadap penyandang disabilitas
                            </p>
                            <div className="embed-dari-flourish">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17943214/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17943214/?utm_source=embed&utm_campaign=visualisation/17943214' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            <p className="paragraf">
                                Hal serupa juga disampaikan oleh Rachmita. Rachmita menyatakan bahwa Kementerian Kesehatan juga telah melakukan pelatihan-pelatihan untuk meningkatkan pelayanan terhadap penyandang disabilitas. Namun, Rachmita mempersoalkan bagaimana hal tersebut belum diimplementasikan di daerah-daerah.
                            </p>
                            <p className="paragraf">
                                “Kemarin di Kementerian Kesehatan itu sudah melakukan pelatihan-pelatihan bahasa isyarat untuk teman tuli dan pendampingan untuk tuna netra, dan mungkin pemerintah harus mensosialisasikan ke daerah-daerah. Sedangkan, di dinas itu belum diimplementasikan terkait hal-hal tersebut. Jadi, harus kembali dipantau lagi terkait aksesibilitas pelayanan kesehatan untuk teman-teman disabilitas,” kata Rachmita.
                            </p>
                            <p className="paragraf">
                                Selain dari upaya sosialisasi lebih dari pemerintah, Rachmita mendorong terjadinya kolaborasi antara layanan kesehatan dengan organisasi penyandang disabilitas. Pasalnya, selain dapat menjadi sumber pengetahuan nakes untuk sensitivitas pelayanan pasien disabilitas, organisasi disabilitas juga dapat berperan sebagai tenaga pembantu alternatif dalam melayani pasien disabilitas.
                            </p>
                            <p className="paragraf">
                                “Kalau misalnya, ada pasien disabilitas yang tidak mengerti dan petugasnya juga tidak bisa menangani, dipanggil organisasi penyandang disabilitas itu seperti relawan untuk membantu entah dari juru bahasa isyarat atau pendamping disabilitas lainnya,” saran Rachmita.
                            </p>
                            <h3 className="subtopik" style={{textDecoration:"underline"}}><b>
                                Upaya Puskesmas Duren Sawit dalam Memberikan Layanan Aksesibel</b>
                            </h3>
                            <p className="paragraf">
                                Kolaborasi antara penyedia layanan kesehatan dengan organisasi disabilitas sendiri telah dilakukan di beberapa puskesmas, salah satunya yakni Puskesmas Kecamatan Duren Sawit. Merry, asisten direktur dari Yayasan Elsafan yang berfokus sebagai lembaga pelayanan anak dengan disabilitas netra, mengaku bahwa dalam pengurusan kesehatan anak-anak asuh di yayasan, dirinya banyak terbantu atas kerja sama dengan Puskesmas Duren Sawit.
                            </p>
                            <p className="paragraf">
                                “Untuk saat ini untungnya belum ada kendala (dalam mengakses layanan kesehatan), malah biasanya kita diprioritaskan <i>sih</i>,” kata Merry menjelaskan bagaimana puskesmas setempat telah memberikan perlakuan spesial untuk mengakomodasi anak-anak asuhnya saat ditemui pada Selasa (19/03/2024).
                            </p>
                        </div>
                    </div>
                <div className="blue-bg-container">
                    <div className="article" style={{paddingBottom:"0px", paddingTop:"0px"}}>
                        <div className="content-container d-flex" style={{paddingBottom:"0px"}}>
                            <iframe width="100%" className="ms-auto me-auto" style={{aspectRatio:"16/9"}} src="https://www.youtube.com/embed/KIAULPcj1BI?si=3winOWGvsmNircHl" alt="Video penjelasan Devina Rivanti Nugita, seorang perawat penanggungjawab disabilitas di Puskesmas Duren Sawit,  mengenai skema pelayanan yang disediakan di Puskesmas Duren Sawit untuk penyandang disabilitas." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="article" style={{paddingTop:"0px"}}><div className="text-w content-container" style={{paddingTop:"0px",paddingBottom:"0px"}}><p style={{color:"#ffffff",textAlign:"center"}} className="paragraf"> Devina Rivanti, seorang perawat penanggung jawab disabilitas di Puskesmas Duren Sawit menjelaskan skema pelayanan disabilitas di Puskesmas Duren Sawit (VIDEO/Dimitri Quiny). </p></div></div>
                </div>
                    <div className="content-container">
                        <div className="container-paragraf">
                            <p className="paragraf">
                                Dalam kerja samanya dengan Yayasan Elfsafan, Devina Rivanti Nugita, seorang perawat di Puskesmas Duren Sawit, menyatakan bahwa pihak puskesmas sempat beberapa kali melakukan diskusi dan bertukar pendapat dengan Yayasan Elsafan untuk dapat meningkatkan layanan kesehatan yang dapat diberikan di puskesmas kepada para pasien dengan disabilitas.
                            </p>
                            <p className="paragraf">
                                “Waktu kami awal menggali tentang disabilitas, saya bersama rekan-rekan lain sempat mendatangi Yayasan Elsafan. Jadi, dari Yayasan Elsafan memberitahu bagaimana <i>nih</i> cara menggunakan braille. Kami juga <i>sharing-sharing</i> bagaimana dalam sudut pandang disabilitas dan sudut pandang kami agar bertemulah suatu hasil, contohnya itu penggunaan braille di farmasi,” kata Devina saat ditemui di Unit Gawat Darurat Puskesmas Duren Sawit pada Selasa (14/05/2024).
                            </p>
                            <p className="paragraf">
                                Puskesmas Duren Sawit sendiri tercatat sebagai salah satu puskesmas di DKI Jakarta yang telah menerapkan sistem prioritas disabilitas. Selain memiliki sistem prioritas, Puskesmas Duren Sawit juga terdata sebagai salah satu layanan kesehatan dengan petugas yang sudah menjalani pelatihan pelayanan penyandang disabilitas. 
                            </p>

                            <div className="embed-dari-flourish"  alt="Berdasarkan data, terdapat 44 puskesmas, 2 rumah sakit kelas A, 5 rumah sakit kelas B, 7 rumah sakit kelas C, dan 17 rumah sakit kelas D yang sudah menerapkan sistem prioritas disabilitas di Provinsi DKI Jakarta (2024). Tekan untuk mengunduh data selengkapnya.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17943526/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17943526/?utm_source=embed&utm_campaign=visualisation/17943526' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            
                            <p className="paragraf">
                                Saat ini sendiri, dari sisi infrastruktur, Puskesmas Duren Sawit telah menyediakan sarana dan prasarana seperti <i>guiding block, ramp, hand rail</i>, toilet disabilitas, bangku disabilitas, loket disabilitas, dan lift bersuara. Utamanya, fasilitas-fasilitas ini disediakan untuk mendukung kemudahan pasien dengan disabilitas dalam mengakses layanan kesehatan di puskesmas. 
                            </p>
                            <p className="paragraf">
                                “Semuanya diatur di Instruksi Gubernur Nomor 14 Tahun 2019. Di situ dijelaskan tentang kelengkapan prasarana dan sarana aksesibilitas bagi penyandang disabilitas. Jadi kami juga mengacu dari Ingub tersebut,” ujar Devina.
                            </p>
                            <p className="paragraf">
                                Pasalnya, perihal penyediaan aksesibilitas untuk penyandang disabilitas di DKI Jakarta sebenarnya telah diatur melalui Instruksi Gubernur Nomor 14 Tahun 2019. Hal ini kemudian menjadi rujukan wajib bagi setiap layanan pemerintah di DKI Jakarta.
                            </p>
                            <p className="paragraf">
                                Meskipun instruksi tersebut hanya berlaku pada fasilitas kesehatan di bawah instansi pemerintah, seperti RSUD dan puskesmas, fasilitas kesehatan swasta sebenarnya juga tidak luput dari kewajiban penyediaan aksesibilitas ini. Melalui penilaian akreditasi rumah sakit swasta, fasilitas kesehatan swasta rupanya juga diwajibkan untuk menyediakan aksesibilitas terhadap penyandang disabilitas.
                            </p>    
                            <p className="paragraf">
                                “Aksesibilitas untuk pasien disabilitas ini diatur di dalam poin akreditasi rumah sakit. Jadi, setiap rumah sakit saat ini harus terakreditasi. Nah salah satu penilaian dari poin akreditasi itu adalah aksesibilitas pasien-pasien disabilitas,” kata Lita, seorang staf Dinas Kesehatan DKI Jakarta di bidang Yankes Rujukan, saat diwawancara pada Rabu (15/5/2024).
                            </p>
                            <p className="paragraf">
                                Sampai saat ini, perihal penyediaan aksesibilitas dan penyediaan pelayanan kesehatan untuk penyandang disabilitas sensorik masih terus diusahakan oleh pemerintah setempat. Hal ini tercermin dalam salah satu sub-kegiatan Kinerja Sistem Daerah (KSD) di DKI Jakarta terkait Penghormatan, Perlindungan, dan Pemenuhan Hak Penyelenggaraan Disabilitas.
                            </p>    
                            <p className="paragraf">
                                Dalam sub-kegiatan tersebut, Dinas Kesehatan DKI Jakarta memiliki dua renaksi, yakni pendataan dan pencatatan inklusif bagi penyelenggaraan disabilitas, serta akses dan pemerataan layanan kesehatan bagi penyelenggaraan disabilitas. Dalam tahapan pencapaiannya, Dinas Kesehatan DKI Jakarta saat ini tengah mengesahkan standar operasional prosedur  baru terkait pelayanan kesehatan terhadap penyandang disabilitas sensorik dan terus mendorong adanya acara promosi kesehatan tahunan yang mengikutsertakan organisasi penyandang disabilitas.
                            </p>
                        </div>
                        
                    </div>
                    <div className="content-container"style={{ paddingTop:"0px"}}>
                        <div>
                            <h2 className="subjudul">Jaminan Kesehatan Tak Cukup, <br/> Pengeluaran Disabilitas Terus Menumpuk</h2>
                            <br />
                            <hr className="hr-kecil me-auto ms-auto mt-2 mb-2"/>
                            <br />
                            <br />
                        </div>
                        <div className="container-paragraf">
                            <p className="paragraf">
                                “Tempat ini bising,” pikir Grace (30) sembari mengeluarkan ponselnya untuk mengecilkan desibel suara yang ia terima di telinganya melalui alat bantu dengar (ABD).
                            </p>
                            <p className="paragraf">
                                Semenjak balita, Grace telah terbiasa dengan alat bantu dengar. Awalnya dengan bentuk <i> pocket </i>yang digantung ke leher, hingga bentuk lebih modern seperti alat bantu dengar saat ini yang digantungkan ke belakang telinga. Jika saat ini Grace harus melepaskan ABD yang ia kenakan, rasanya seakan-akan ada yang hilang dari hidupnya.
                            </p>
                            <p className="paragraf">
                                Grace merupakan salah satu penyandang disabilitas rungu yang beruntung. Sejak kecil, ibunda Grace telah berinisiatif secara pribadi untuk membiasakan dirinya dengan alat bantu dengar. Padahal, alat bantu dengar bukanlah hal yang dapat dijangkau oleh semua orang.
                            </p>
                            <p className="paragraf">
                                “Harga ABDku yang terakhir, kalau tidak salah ingat, sekitar 33 jutaan untuk sepasang, waktu itu lagi promo, ya. Kalau sebelumnya, 40 jutaan 1 alat, bukan sepasang,” kata Grace sambil berusaha mengingat harga dari alat bantu dengar ke-6 yang ia miliki, ketika diwawancarai pada Sabtu (04/05/2024).
                            </p>
                            <p className="paragraf">
                                Tak seberuntung Grace, Rachmita, yang juga seorang penyandang disabilitas rungu, tentunya juga berkeinginan untuk membeli alat bantu dengar, terlebih ketika mendengar bahwa BPJS Kesehatan memberikan bantuan <i>coverage</i> untuk pembelian alat bantu dengar. Namun, pada akhirnya, niat tersebut harus dia urungkan karena adanya batasan limitasi tanggungan dari BPJS.
                            </p>
                            <blockquote className="special-quote negative-margin-left">
                                <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                                <p className="paragraf-khusus"><b>“Dipotongnya hanya satu juta. Padahal, alat bantu dengar untuk teman tuli itu mahal, harganya 30 juta <i>tapi</i> potongannya cuma 1 juta,” </b> ujar Rachmita menceritakan pengalamannya sempat ingin membeli ABD pada Kamis (07/03/2024).</p>
                            </blockquote>
                            <p className="paragraf">
                                Diketahui, hingga saat ini, BPJS Kesehatan menawarkan <i>coverage</i> untuk 7 alat bantu adaptif, yakni kacamata, alat bantu dengar, protese gigi (gigi palsu), protese alat gerak (tangan dan kaki palsu), korset tulang belakang, collar neck, dan kruk. Namun, hal ini bukan berarti 7 alat bantu adaptif tersebut dapat didapatkan dengan serta merta tanpa biaya. 
                            </p>
                            <p className="paragraf">
                                Nyatanya, harga yang harus dibayar untuk mendapatkan beberapa alat ini justru tidak tergolong murah. Dalam penyelenggaraan <i>coverage</i>-nya, BPJS Kesehatan memiliki limitasi biaya. Sebagai contoh, untuk alat bantu dengar, BPJS hanya bisa memberikan potongan harga maksimal Rp1.000.000 dan untuk protese alat gerak, BPJS hanya memberikan potongan harga maksimal Rp2.500.000. Sementara itu, dibandingkan harga asli dari alat bantu tersebut, potongan yang diberikan tersebut cenderung bersifat terbatas.
                            </p>
                            <div className="embed-dari-flourish"  alt="Berdasarkan data, terdapat 44 puskesmas, 2 rumah sakit kelas A, 5 rumah sakit kelas B, 7 rumah sakit kelas C, dan 17 rumah sakit kelas D yang sudah menerapkan sistem prioritas disabilitas di Provinsi DKI Jakarta (2024). Tekan untuk mengunduh data selengkapnya.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17977112/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17977112/?utm_source=embed&utm_campaign=visualisation/17977112' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
            
                            <p className="paragraf">
                                “Nilai <i>coverage</i>-nya itu masih sangat terbatas. Contoh, kursi roda adaptif yang dibutuhkan teman-teman disabilitas terutamanya seperti <i>cerebral palsy</i> dan seterusnya, itu nilai uangnya itu paling murah mungkin 10 juta. <i>Tapi</i>, yang di-<i>cover</i> oleh BPJS, kalau ga salah, hanya sekitar 2 sampai 2,5 juta,” ujar Jonna saat ditemui di Gedung Cawang Kencana (07/03/2024).
                            </p>
                            <p className="paragraf">
                                Adapun, alat bantu adaptif yang tertera kebanyakan tidak bersifat “sekali seumur hidup”. Alat bantu dengar, misalnya, secara umum memiliki kurun waktu penggunaan yang berkisar dari 3 hingga 7 tahun. Setelahnya, jika seorang penyandang disabilitas rungu ingin tetap menggunakan ABD, dirinya harus kembali mengeluarkan sejumlah uang untuk membeli ABD.
                            </p>
                            <p className="paragraf">
                                “Saat aku SMP, <i>udah</i> mulai bisa merasakan ini ABDnya kurang apa <i>gitu</i> untuk <i>output</i> suaranya. Biasa untuk pergantian alat <i>sih</i> makan waktu 4–7 tahun, baru ganti. Biasanya ganti ABD <i>tuh</i> karena, <i>spare part</i> sudah tidak diproduksi lagi jadinya mau tidak mau kan beli alat yang baru lagi <i>‘kan</i>,” kata Grace menjelaskan alasan di balik pergantian konstan alat bantu dengarnya.
                            </p>    
                            <p className="paragraf">   
                                Di samping dari nilai <i>coverage</i> yang diberikan, tujuh alat bantu yang ditanggung BPJS sebenarnya belum bisa dibilang cukup untuk mewakilkan seluruh alat bantu kebutuhan penyandang disabilitas. Faktanya, berdasarkan daftar alat bantu prioritas yang dibuat oleh Organisasi Kesehatan Dunia, terdapat 50 produk asistif yang dibutuhkan penyandang disabilitas untuk meningkatkan kualitas hidupnya.
                            </p>
                            <div className="embed-dari-flourish"  alt="Berdasarkan data, terdapat 44 puskesmas, 2 rumah sakit kelas A, 5 rumah sakit kelas B, 7 rumah sakit kelas C, dan 17 rumah sakit kelas D yang sudah menerapkan sistem prioritas disabilitas di Provinsi DKI Jakarta (2024). Tekan untuk mengunduh data selengkapnya.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                    <iframe src='https://flo.uri.sh/visualisation/17977827/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17977827/?utm_source=embed&utm_campaign=visualisation/17977827' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            <p className="paragraf">
                                Terlepas dari alat bantu, limitasi <i>coverage</i> yang sama pun berlaku pada obat-obatan. Padahal, terdapat beberapa kondisi disabilitas yang bergantung pada obat-obatan dalam jangka waktu yang panjang. 
                            </p>
                            <p className="paragraf">
                                “Ya, jadi ada beberapa penyakit, bukan penyakit, ya, kondisi mata yang memang harus rutin. Misalnya, istri saya itu rutin pakai obat. Itu rutin dan itu harus pengeluaran ‘kan. Tergantung kondisi disabilitasnya yang mengharuskan dia mengonsumsi obat terus menerus seumur hidup,” kata Suryo, seorang penyandang disabilitas netra, saat ditemui di kantor Mitra Netra (14/03/2024).
                            </p>
                            <p className="paragraf">
                                Suryo mengatakan bahwa istrinya merupakan salah satu pengidap kondisi mata yang harus selalu bergantung pada obat, yakni glaukoma. Setiap bulannya, istri Suryo membutuhkan dua jenis obat. Salah satu di antaranya ditanggung oleh BPJS dan satunya tidak. 
                            </p>
                            <p className="paragraf">
                                Kejadian semacam ini umum ditemui untuk orang dengan kondisi glaukoma dan mata kering. Alhasil, bagi penyandang disabilitas dengan kondisi serupa, terdapat pengeluaran ekstra di bidang kesehatan, yang semata-mata terjadi hanya karena disabilitas yang dimiliki. Hal ini kemudian umum diketahui sebagai “<i>Disabled Tax</i>”.
                            </p>
                            <h3 className="subtopik" style={{textDecoration:"underline"}}><b>
                                Ada Pengeluaran Lebih Karena Disabilitas</b>
                            </h3>
                            <p className="paragraf">
                                <i>Disabled tax</i> atau pajak disabilitas merupakan pengeluaran ekstra yang terjadi semata-mata karena kondisi disabilitas. Tak melulu mengenai obat-obatan, tiadanya SDM dan servis yang memadai di fasilitas kesehatan juga berkontribusi terhadap pajak disabilitas. Dalam hal ini, ketika sebuah fasilitas kesehatan tidak memiliki layanan tertentu yang dibutuhkan oleh penyandang disabilitas, tentunya biaya untuk pemenuhan layanan tidak dapat ditanggung oleh BPJS. Contohnya yakni juru bahasa isyarat.
                            </p>
                            <p className="paragraf">
                                “Tidak ada JBI dari puskesmas/RS, dari pemerintah juga tidak disediakan. Jadi, kalau mau bawa JBI, harus panggil, sewa, dan bayar sendiri, kira-kira Rp 250.000 per jam,” jelas Sartika, seorang penyandang disabilitas rungu, saat diwawancarai pada Minggu (10/03/2024).
                            </p>
                            <p className="paragraf">
                                Adapun, dengan segala keterbatasan yang ada, Jonna menyatakan bahwa BPJS masih menjadi bantuan satu-satunya yang khusus di bidang kesehatan untuk penyandang disabilitas. Sebagai bantuan tunggal skala nasional, bantuan kesehatan ini disosialisasikan dengan begitu gencar agar semakin banyak penerima manfaat bantuan. Namun, sosialisasi pun belum mampu dipahami secara efektif oleh teman-teman disabilitas.
                            </p>
                            <blockquote className="special-quote negative-margin-left">
                                <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                                <p className="paragraf-khusus"><b>“<i>Gimana</i> cara mengurus BPJS itu jarang ada yang <i>tau</i>. Termasuk saya juga tidak tahu, karena saya sudah diuruskan oleh kantor <i>‘kan</i>,”</b> ujar Sugiyo, seorang penyandang disabilitas netra, saat diwawancarai di kantor Mitra Netra (14/03/2024).</p>
                            </blockquote>
            
                            <p className="paragraf">
                                Sugiyo mengaku hingga saat ini, dirinya belum mengerti cara untuk mendapatkan BPJS Kesehatan. Namun, beruntung, Sugiyo memiliki tempat kerja yang baik sehingga seluruh prosedur BPJS telah diuruskan.
                            </p>
                            <p className="paragraf">
                                Nyatanya, soal prosedur BPJS Kesehatan, baik itu pada pendaftaran maupun penggunaan, tidak hanya gagal dipahami oleh Sugiyo. Rachmita, sebagai seseorang yang menjabat sebagai komisioner di bawah lembaga pemerintahan pun, masih belum memiliki pemahaman total terkait cara penggunaan BPJS.
                            </p>
                            <p className="paragraf">
                                “Kalau untuk saya pribadi, kebetulan saya, sebelum masuk KND, saya sempat bekerja. Lalu oleh HRD saya, saya diwajibkan untuk punya BPJS. Saya baru tahu. Terus, kemarin saya dan anak sempat datang ke rumah sakit dan ingin menggunakan BPJS, lalu petugas bilang kalau saya harus datang ke Puskesmas dan meminta surat keterangan. Artinya, saya belum paham (prosedur penggunaan BPJS). Seharusnya, di awal, harus ada penjelasan,” kata Rachmita.
                            </p>
            
                        </div>
                    </div>
                <div className="blue-bg-container">
                    <div className="article">
                        <div className="content-container">
                            <iframe width="100%" style={{aspectRatio:"16/9"}}className="ms-auto me-auto"  src="https://www.youtube.com/embed/A2d0SNdwrFw?si=5t7rElrL4edOLFsl" alt="Video penjelasan Rachmita Maun Harahap, seorang komisioner tuli dari Komisi Nasional Disabilitas, mengenai upaya sosialisasi BPJS Kesehatan yang belum efektif" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <span style={{color:"#ffffff"}} className="text-w container-paragraf"><p style={{color:"#ffffff",textAlign:"center"}} className="paragraf"> Rachmita, seorang komisioner disabilitas rungu dari Komisi Nasional Disabilitas, menilai bahwa upaya sosialisasi BPJS Kesehatan belum efektif (VIDEO/Dimitri Quiny).</p></span>
                    </div>
                    </div>
                </div>
                    <div className="content-container">
                        <div className="container-paragraf">
                            <p className="paragraf">
                                Faktanya, hingga saat ini, memang belum ada upaya sosialisasi dari BPJS Kesehatan yang secara spesifik diarahkan kepada penyandang disabilitas sensorik. Pasalnya, BPJS Kesehatan ditargetkan kepada seluruh rakyat, tidak hanya penyandang disabilitas sensorik, sehingga upaya sosialisasi pun disesuaikan agar dapat menyasar sebanyak-banyaknya orang, di luar kondisi disabilitas seseorang.
                            </p>
                            <p className="paragraf">
                                “Terkait dengan sosialisasi, selama ini kami lakukan dengan berbagai pihak ya, seluruh <i>stakeholder</i>. Yang pertama adalah kalau ada perubahan regulasi, kami sampaikan utamanya kepada fasilitas kesehatan. Selain fasilitas kesehatan, kami juga melakukan sosialisasi melalui badan usaha dan perusahaan-perusahaan bagi para peserta penerima upah. Kemudian, kalau ke peserta, sosialisasinya melalui pendekatan elektronik dan sosial media,” kata Inka Chaditiany, seorang staf BPJS Kesehatan, ketika diwawancarai pada Selasa (14/4/2024).
                            </p>
                            <p className="paragraf">
                                Keterbatasan informasi mengenai prosedur BPJS Kesehatan yang dimiliki penyandang disabilitas bukan menjadi satu-satunya rintangan dalam pemanfaatan bantuan kesehatan oleh penyandang disabilitas. Faktanya, setelah informasi telah tersampaikan, beberapa penyandang disabilitas sensorik masih menghadapi stigmatisasi dari petugas BPJS.
                            </p>
                            <p className="paragraf">
                                “Ada banyak aduan (masuk ke KND) terkait BPJS. Contohnya seperti stigma. Misalnya petugas BPJS bilang ada teman tuli mau mendaftar. Teman tuli uangnya ada, <i>tapi</i> tetap ditolak begitu oleh BPJS-nya. Nah itu dari petugas BPJS melakukan stigma terhadap teman-teman disabilitas tuli, khususnya,” ujar Rachmita.
                            </p>
                            <p className="paragraf">
                                Menanggulangi hal ini, pemerintah sendiri telah melakukan beberapa upaya untuk meningkatkan kualitas kesehatan penyandang disabilitas sensorik tanpa memberikan beban tambahan pada penyandang disabilitas. Salah satu bantuan yang umum diketahui yakni program bansos Penerima Bantuan Iuran Jaminan Kesehatan (PBI-JK).
                            </p>
                            <p className="paragraf">
                                Sederhananya, PBI-JK merupakan bantuan yang diberikan pemerintah untuk menggratiskan iuran BPJS Kesehatan bagi penerima bantuan. Adapun, PBI-JK sebenarnya tidak diarahkan hanya kepada penyandang disabilitas saja, tetapi seluruh rakyat Indonesia, tentunya dengan catatan bahwa calon penerima bantuan memiliki tingkat ekonomi di bawah rata-rata dan telah terdaftar di Data Terpadu Kesejahteraan Sosial (DTKS).
                            </p>
                            <p className="paragraf">
                                “Sebenarnya kriteria kemiskinan saat ini ada diatur dalam Keputusan Menteri Sosial Nomor 262/HUK/2022, <i>tapi</i> kalau kita secara tegas untuk masuk dalam DTKS harus memenuhi kriteria ini, pasti akan banyak orang miskin yang tidak bisa masuk. Nah, jadi kita serahkan ke pemerintah daerah, kondisinya seperti apa begitu, Pemda nanti bisa menggunakan kriteria itu sebagai acuan dasar dan menyesuaikan sesuai dengan kondisi kemiskinan di daerahnya,” kata Meta, seorang Pranata Hubungan Masyarakat Ahli Muda di Pusat Data dan Informasi Kementerian Sosial, menjelaskan mengenai prosedur pemilihan penerima bantuan PBI-JK, saat ditemui di Gedung Cawang Kencana (22/04/2024).
                            </p>
                            <p className="paragraf">
                                Adapun, program PBI-JK diarahkan untuk 96,8 juta penduduk dan saat ini kuota tersebut memang sudah terpenuhi. Namun, Meta menegaskan bahwa pengusulan penerima bantuan masih dapat dilakukan karena setiap bulannya pemerintah daerah terus melakukan survei untuk mengidentifikasi kelayakan penerima PBI-JK.
                            </p>
                            <p className="paragraf">
                                “Misal setelah diverifikasi, dinyatakan 100 orang penerima bantuan sudah mampu, atau memang dia ASN <i>tapi</i> masih dapat PBI juga <i>‘kan</i> tidak boleh, karena ASN sudah dapat BPJS atau asuransi kesehatan. Nah itu bisa dihapus, ditidaklayakkan, lalu diganti dengan orang-orang baru yang miskin. Itu setiap bulan skemanya seperti itu,” ujar Meta.
                            </p>

                            <h3 className="subtopik" style={{textDecoration:"underline"}}><b>
                                Pemerintah Sediakan Alat Bantu bagi Penyandang Disabilitas </b>
                            </h3>
            
                            <p className="paragraf">
                                Selain dari PBI-JK yang mengadakan bantuan berupa BPJS Kesehatan gratis, sejak 2021, pemerintah pun memiliki program bantuan yang tersegmen untuk penyandang disabilitas, yakni  program Asistensi Rehabilitasi Sosial, atau disingkat ATENSI.
                            </p>
                            <p className="paragraf">
                                “Khusus untuk PD, kita bisa memberikan bantuan kebutuhan dasar, seperti sembako, tambahan nutrisi, bisa juga bantuan terkait alat bantu, seperti tongkat adaptif, kursi roda, baik yang biasa maupun elektrik, ataupun kursi roda multifungsi, kemudian tangan kaki palsu, dan alat bantu dengar. Itu juga bisa diberikan,” kata Risnandar, Kepala Sub-bagian Tata Usaha Direktorat Jenderal Rehabilitasi Sosial Penyandang Disabilitas Kementerian Sosial, saat ditemui di kantor Kementerian Sosial (06/05/2024).
                            </p>
                            <p className="paragraf">
                                Sebelumnya, program ATENSI telah diatur pelaksanaannya dalam Peraturan Menteri Sosial (Permensos) Nomor 7 Tahun 2021 yang kemudian diperbarui dalam Permensos Nomor 7 Tahun 2022. Program ATENSI ditujukan untuk diterima oleh beberapa kaum marginal seperti lansia, anak, korban bencana dan/atau kedaruratan, dan penyandang disabilitas.
                            </p>
                            <p className="paragraf">
                                Skema untuk mengajukan diri sebagai penerima program ATENSI tergolong mudah. Cukup dengan mengirimkan surat aduan atau menghubungi <i>call center</i> (021-171) Direktorat Jenderal (Ditjen) Rehabilitasi Sosial Penyandang Disabilitas, permintaan bantuan akan ditindaklanjuti segera oleh Ditjen terkait agar pemohon dapat melalui <i>assessment</i>. 
                            </p>
                            <p className="paragraf">
                                “Sesuai dengan Permensos Nomor 7 tadi, prosedurnya adalah bahwa calon penerima manfaat harus melalui proses <i>assessment</i> terlebih dahulu. Jadi kita cek dulu apa yang sebetulnya dibutuhkan yang bersangkutan. Kalau memang misalkan dia (disabilitas) netra, kira-kira perlu <i>ga</i> tongkat adaptif. Atau misalnya dia (disabilitas) rungu, kita bisa berikan alat bantu dengar, <i>tapi</i> kita perlu periksa berapa <i>sih</i> kekuatan dia dalam mendengar. Jadi harus ada pemeriksaan dulu,” kata Risnandar menjelaskan proses yang harus dilalui pemohon untuk menerima bantuan ATENSI.
                            </p>
                            <p className="paragraf">
                                Berdasarkan hasil tes, Kemensos bersedia memberikan bantuan yang sesuai dengan kebutuhan calon penerima bantuan. Contohnya, ketika seseorang meminta bantuan berupa alat bantu dengar dengan spesifikasi tertentu, pihak Kemensos akan menyanggupi apabila hasil tes menyatakan hal tersebut memang benar menjadi kebutuhan bagi pemohon. Sebaliknya, bila hasil tes menyatakan bahwa hal yang dibutuhkan sebenarnya bantuan yang lain, Kemensos akan memberikan bantuan sesuai hasil className=assessment pemohon.
                            </p>
                            <p className="paragraf">
                                Adapun, bantuan-bantuan dari Kementerian Sosial tersebut biasanya disalurkan melalui Unit-unit Pelaksana Teknis yang sudah tersebar di daerah-daerah. Meskipun belum tersebar secara merata, saat ini telah terdapat 31 Sentra Unit Pelaksana Teknis (UPT) di seluruh Indonesia.
                            </p>
                            <div className="embed-dari-flourish" alt="Peta menunjukkan 38 nama dan lokasi Unit Pelaksana Teknis Kementerian Sosial, di mana bantuan ATENSI disalurkan. Tekan untuk mengunduh data selengkapnya.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17919237/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17919237/?utm_source=embed&utm_campaign=visualisation/17919237' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            
                            <p className="paragraf">
                                Per 2022, program ATENSI telah dimanfaatkan oleh sebanyak 9.490 penyandang disabilitas. Program ATENSI, dari Ditjen Rehabilitasi Sosial Penyandang Disabilitas (RSPD) sendiri, memiliki sasaran penyandang disabilitas penerima bantuan sebanyak 5.000 jiwa pada 2024. Risnandar menyatakan, setiap UPT juga memiliki sasaran terpisah di luar angka sasaran penerima bantuan yang disalurkan oleh Ditjen RSPD.
                            </p>
                            <p className="paragraf">
                                “Targetnya dari kami, di Direktorat, itu ada 5.000 penerima manfaat khusus penyandang disabilitas. Kalau di sentra-sentra itu kalau tidak salah, dia di bawah kita targetnya. Jadi kalau misalkan sentra habis alokasi anggarannya, kalau di kita masih ada, kita bisa bantu salurkan,” kata Risnandar.
                            </p>
                            <p className="paragraf">
                                Risnandar menyatakan, untuk penerima bantuan ATENSI sendiri, pemerintah tidak bisa menentukan kuota. Hal ini sebab disabilitas, menurutnya, merupakan sebuah hal yang tak terduga.
                            </p>
                            <p className="paragraf">
                                “Jadi kalau aduan yang masuk lebih dari 5.000, kita akan selalu tindak lanjuti aduan dengan <i>assessment</i>. Kalau memang laporan itu memang layak diberikan bantuan ya kita berikan. Dan kalau misalkan dananya habis, ya mau tidak mau menunggu. Dialokasikan untuk tahun depan,” ujar Risnandar ketika ditanya mengenai kuota penerima bantuan.
                            </p>
                            <div className="embed-dari-flourish" alt="Pada 2022, Kementerian Sosial, melalui program ATENSI, telah menyalurkan total 8020 alat bantu kepada penyandang disabilitas. Tekan untuk mengunduh data selengkapnya.">
                                <audio id="pendidikan__penyandang__disabilitas">
                                    <source  src="../assets/audios/SONIFIKASI ANGKA PENDIDIKAN .MP3" type="audio/ogg"/>
                                </audio>
                                <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17925412/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17925412/?utm_source=embed&utm_campaign=visualisation/17925412' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                                </a>   
                            </div>
                            <p  className="paragraf">
                                Selain berupaya menutup biaya tambahan di bidang kesehatan melalui alat bantu, Ditjen RSPD pun memiliki program tematik tahunan yang saat ini berfokus pada penyandang disabilitas rungu/wicara. Alhasil, saat ini, Kemensos sendiri sedang merencanakan program terapi wicara bagi penyandang disabilitas rungu/wicara yang akan disalurkan melalui UPT regional.
                            </p>
                            <p className="paragraf">
                                “Ini kita juga sampaikan ke UPT-UPT kita di daerah untuk mereka menyiapkan satu SDM untuk terapi wicara. <i>'Kan</i> yang namanya (disabilitas) rungu wicara ngobrolnya susah, ya. Nanti dibantu oleh teman-teman Sentra untuk menyiapkan SDM, agar mereka yang sudah mendapatkan alat bantu dengar, itu mereka bisa diterapi, sehingga mereka bisa hidup normal dan kembali ke masyarakat dengan percaya diri,” kata Risnandar menjelaskan mengenai rencana penyediaan terapi wicara oleh Ditjen RSPD.
                            </p>
                        </div> 
                    </div>
                </article>
            </main>
            </div>
        </>
    )
}

export default Kesehatan;