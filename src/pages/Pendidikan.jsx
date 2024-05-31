import React, { useRef, useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '../components/Footer';
const Pendidikan = () => {
    const swiperEl = document.querySelector('mySwiper');
    const [swiper, setSwiper] = useState();
    const swiperRef = useRef();
    const prevRef = useRef();
  const nextRef = useRef();
    // const swiper = new Swiper('.myswiper', {
    //     // Install modules
    //     // modules: [Navigation, Pagination, Scrollbar],
    //     speed: 500,
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     // ...
    //   });

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
    useEffect(() => {

        const button = document.querySelector('#button__tenaga__pendidik');
        const audioElement = document.querySelector('#tenaga__pendidik');

        button.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            console.log('play')
        } else {
            audioElement.pause();
        }
        });

        const button2 = document.querySelector('#button__sekolah__inklusi');
        const audioElement2 = document.querySelector('#sekolah__inklusi');

        button2.addEventListener('click', function() {
            if (audioElement2.paused) {
                audioElement2.play();
                console.log('play')
            } else {
                audioElement2.pause();
            }
        });

        const button3 = document.querySelector('#button__jumlah__aduan');
        const audioElement3 = document.querySelector('#jumlah__aduan');

        button3.addEventListener('click', function() {
            if (audioElement3.paused) {
                audioElement3.play();
                console.log('play')
            } else {
                audioElement3.pause();
            }
        });

        const button4 = document.querySelector('#button__persearan__SLB');
        const audioElement4 = document.querySelector('#persebaran__SLB');

        button4.addEventListener('click', function() {
            if (audioElement4.paused) {
                audioElement4.play();
                console.log('play')
            } else {
                audioElement4.pause();
            }
        });
        const button5 = document.querySelector('#button__pendidikan__penyandang__disabilitas');
        const audioElement5 = document.querySelector('#pendidikan__penyandang__disabilitas');

        button5.addEventListener('click', function() {
            if (audioElement5.paused) {
                audioElement5.play();
                console.log('play')
            } else {
                audioElement5.pause();
            }
        });

    }, [])

    return (
        <div id="pagePendidikan">
            <Navbar/>
            <section className="pendidikan-hero-section">
                <div className="halaman-pendidikan-judul">
                    <h1 className="judul-utama">Merajut Asa: </h1>
                    <p>Akses Pendidikan Inklusif bagi <br/> Penyandang Disabilitas Sensorik <br/> di Indonesia</p>
                </div>
                <img src="../assets/images/hero-secction-pendidikan.png" className="pendidikan-hero-image" alt="Robert Hutabarat (51) sedang mengajar murid-muridnya pada Sekolah Luar Biasa Elsafan pada Selasa, 19 Maret 2024"/>
            </section>
            <section className="author-section">
                <div className="container">
                    <div className="author-info">
                        <div>
                            <img src="../assets/images/pas-foto-keisya.png"  className="author-photo" alt="aaaaa"/>
                            <p className="ditulis-oleh">
                                Ditulis oleh: <br/>
                                <b className="author-name">Keisya Librani Chandra</b>
                            </p>
                        </div>
                        <p className="tanggal">15/05/2024</p>
                    </div>
                    <div className="author-case-study">
                        <h2 className="subjudul" style={{textAlign:'left'}}>Pendidikan Inklusif, Apakah Benar-Benar Ada?</h2>
                        <hr className="hr-kecil" aria-hidden="true"/>
                        <p className="paragraf">Isu pendidikan inklusif telah diperbincangkan sejak tahun 2005 di Indonesia. Namun nyatanya, hingga 2024, penyandang disabilitas sensorik masih kesulitan dalam mengakses pendidikan formal.</p>
                    </div>
                </div>
            </section>
            <article className="article" id="main">
                <div className="container-article-pendidikan">
                    <h2 className="subjudul">Kurikulum Terlambat, Tenaga Pendidikan Tersendat</h2>
                    <hr aria-hidden="true" className="hr-kecil"/>
                    <div className="container-paragraf">
                        <blockquote className="emphasis">Anak-anak sedang mempersiapkan diri untuk ujian sekolah kelulusan kelas 9,” kata Robert Hutabarat (51), teman netra, sekaligus guru dan pendiri Sekolah Luar Biasa Elsafan pada Selasa, (19/03/2024).</blockquote> 
                        <p className="paragraf">                
                            Robert kemudian menunjukkan beberapa soal latihan persiapan ujian sekolah milik peserta didik yang diajarnya.  
                        </p>
                        <p className="paragraf">Soal-soal tersebut terdiri dari sekumpulan perkalian dan pembagian dasar. </p>
                    </div>
                    {window.outerWidthWidth >= 1640 ?
                        <div className="container-paragraf-with-inline-image">
                            <figure>
                                <img src="../assets/images/soal latihan.png" alt="Ini Adalah Gambar Soal Latihan Ujian di Sekolah Luar Biasa foto ditangkap oleh Dimitri Quiny" aria-describedby="description-soal-ujian"/>
                                <figcaption className="figcaption-pendidikan" aria-hidden="true">Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan (FOTO/Dimitri Quiny).</figcaption>
                            </figure>
                            <div>
                                <p className="description-soal-ujian" id="description-soal-ujian">
                                    Jika membandingkan soal-soal tersebut dengan peserta didik kelas 9 SMP di sekolah umum, siswa pada sekolah luar biasa jelas tertinggal. <br/> <br/>
                                    Pengalaman serupa juga dirasakan oleh Nur Aziza, sering dipanggil Icha (37). Ketika dirinya duduk di kelas 1 SMP, ia menerima sebuah buku yang keterangan kelasnya ditutupi dengan label kertas. <br/><br/>
                                    Icha yang merasa penasaran kemudian membuka label kertas tersebut. Ketika dibuka, ia melihat bahwa buku tersebut seharusnya ditujukan bagi siswa kelas 5 sekolah dasar
                                </p>
                            </div>
                        </div> 
                    
                         : 
                        <div>
                            <div className="container-paragraf-with-inline-image">
                                <figure>
                                    <img src="../assets/images/soal latihan.png" alt="Ini Adalah Gambar Soal Latihan Ujian di Sekolah Luar Biasa foto ditangkap oleh Dimitri Quiny" aria-describedby="description-soal-ujian"/>
                                    <figcaption className="figcaption-pendidikan" aria-hidden="true">Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan (FOTO/Dimitri Quiny).</figcaption>
                                </figure>
                                <div>
                                    <p className="description-soal-ujian" id="description-soal-ujian">
                                        Jika membandingkan soal-soal tersebut dengan peserta didik kelas 9 SMP di sekolah umum, siswa pada sekolah luar biasa jelas tertinggal. <br/> <br/>
                                        Pengalaman serupa juga dirasakan oleh Nur Aziza, sering dipanggil Icha (37). Ketika dirinya duduk di kelas 1 SMP, ia menerima sebuah buku yang keterangan kelasnya ditutupi dengan label kertas. <br/><br/>
                                    </p>
                                </div>
                            </div> 
                            <div className="container-paragraf">
                                <p className="description-soal-ujian" id="description-soal-ujian">
                                    Icha yang merasa penasaran kemudian membuka label kertas tersebut. Ketika dibuka, ia melihat bahwa buku tersebut seharusnya ditujukan bagi siswa kelas 5 sekolah dasar
                                </p>
                            </div>
                            
                        </div>
                    }
                    <div>
                        <div className="container-paragraf">
                            <p className="paragraf">
                                Faktanya, kurikulum sekolah luar biasa memang dirancang jauh lebih mudah karena disesuaikan bagi murid dengan hambatan intelektual.     
                            </p>
                            <p className="paragraf">
                                “Memang jika sekolah luar biasa itu kurikulumnya dibentuk lebih mudah untuk yang memiliki hambatan intelektual. Nah, yang jadi masalah itu jika tuna netra tanpa hambatan intelektual diberi kurikulum di bawah rata-rata,” ungkap Sugiyo, teman netra sekaligus anggota dari Mitra Netra.
                            </p>
                            <p className="paragraf">
                                Selain sekolah luar biasa, pemerintah juga menyediakan sekolah inklusi sebagai opsi bagi penyandang disabilitas mendapatkan pendidikan. 
                            </p>
                            <p className="paragraf">
                                Grace Kurniadi (30), teman tuli menceritakan pengalamannya ketika menghadapi Ujian Nasional (UN) saat dirinya masih duduk di bangku sekolah. Ketika soal sampai ke mejanya, ia segera membolak-balikkan soal untuk mengecek hal-hal yang harus dikerjakannya.
                            </p>
                            <p className="paragraf">
                                Dahinya menyerngit lantaran kebingungan, terdapat satu bagian yang bertuliskan <i>listening</i> (mendengarkan). Petunjuk menginstruksikan bahwa akan terdapat audio yang diputar agar murid dapat mengerjakan soal-soal yang diberikan. 
                            </p>
                            <p className="paragraf">
                                Setelah memberi tahu pengawas ujian, Grace pun diberikan soal lain yang tidak mengharuskannya untuk mendengar. Soal tersebut membuat Grace harus membaca bacaan <i>listening</i> dan menjawab pertanyaan yang diberikan.
                            </p>
                            <p className="paragraf">
                                Ujian Nasional memiliki waktu 90 menit untuk mengerjakan semua soal. Namun, soal tersebut sebetulnya membuat Grace memerlukan waktu tambahan karena bacaan yang diberikan menjadi lebih banyak.
                            </p>
                            <p className="paragraf">
                                Akan tetapi, waktu tambahan bagi Grace tidak pernah disediakan. Lantaran demikian, dirinya harus terburu-buru dalam mengerjakan soal-soal yang ada. 
                            </p>
                            <p className="paragraf">
                                Ketika berhadapan dengan keseragaman, tentu diperlukan beberapa penyesuaian bagi penyandang disabilitas saat berada di kelas yang tergabung dengan non-disabilitas.
                            </p>
                            <p className="paragraf">
                                “Kalau di sekolah inklusi itu kadang-kadang perhatiannya kurang karena <i>‘kan</i> kelasnya banyak, pada satu kelas itu muridnya banyak,” ungkap Dianovita Sembiring, kepala sekolah Sekolah Khusus Menara Kasih.
                            </p>
                            <p className="paragraf">
                                Dengan adanya hambatan kurikulum ini, penilaian personal <i>(assessment)</i> menjadi penting bagi tiap-tiap peserta didik agar potensi kemampuan dapat dimaksimalkan. 
                            </p>
                            <blockquote className="special-quote">
                                <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                                <p className="paragraf-khusus">Kurikulum itu, semestinya bisa dirancang berdasarkan potensi, jangan hanya terbelenggu hambatannya. Ketika penyelenggara pendidikan, tahu potensinya dengan <i>personal assessment</i> yang sangat individualistik, dia akan tahu <i>engage</i>-nya apa, termasuk menyusun kurikulum yang tepat,  ungkap Jonna Aman Damanik, teman netra yang juga merupakan Komisioner Komisi Nasional Disabilitas. </p>
                            </blockquote>
                            <p className="paragraf">Deteksi potensi ini kemudian harus diimplementasikan kepada masing-masing murid di dalam kelas.  </p>
                            <p className="paragraf">Adelia Sagita merupakan guru sekolah dasar di Sekolah Khusus YKDW 03, sehari-hari ia bertugas untuk mengajar siswa yang duduk di bangku sekolah dasar kelas 4. </p>
                            <p className="paragraf">Terdapat 4 anak dengan disabilitas netra yang perlu Adelia ajarkan matematika. Meski duduk di kelas yang sama, masing-masingnya memiliki kemampuan yang berbeda. </p>
                            <p className="paragraf">Dua anak sibuk menghitung balok-balok yang diserahkan oleh Adelia kepadanya sembari berkenalan dengan angka. Satu anak mencoba mengerjakan soal pertambahan pengurangan menggunakan balok-balok. Sementara satu anak lain mengerjakan soal pecahan menggunakan abacus (alat hitung braille).</p>
                        </div>
                    </div>
                </div>
                <div className="blue-bg-container">
                    <div className="container-article-pendidikan container-paragraf">
                        <iframe width="100%" style={{aspectRatio:"16/9"}} src="https://www.youtube.com/embed/0uHZgmc4cBU?si=8wttHe43Iux2-Y0S" title="Video pengajaran matematika di Sekolah Khusus YKDW 03." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <span style={{color:"#ffffff"}} className="text-w container-paragraf"><p style={{color:"#ffffff",textAlign:"center"}} className="paragraf">Video Pengajaran oleh Adelia Sagita di SKH YKDW 03 pada Rabu, 20 Maret 2024 (VIDEO/Keisya Librani).</p>  </span>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Berusaha menyediakan solusi, pemerintah kemudian membentuk Kurikulum Merdeka bagi setiap satuan pendidikan. Peraturan ini dimuat dalam Peraturan Pemerintah tentang Sistem Pendidikan Nasional tahun 2022. 
                        </p>
                        <p className="paragraf">
                            Kurikulum Merdeka merupakan kurikulum yang dibentuk untuk berfokus terhadap kemampuan masing-masing anak.
                        </p>
                        <p className="paragraf">
                            “Kurikulum Merdeka itu berarti setiap guru merancang pembelajaran dengan melihat kepada kebutuhan belajar peserta didik,” ungkap Tita Srihayati, Staff Tim Kerja Inovasi dan Transformasi Direktorat PMPK Kemendikbudristek.
                        </p>
                        <p className="paragraf">
                            Kehadiran Kurikulum Merdeka seharusnya mampu menyediakan solusi terkait sulitnya penyesuaian kurikulum bagi peserta didik penyandang disabilitas di kedua sekolah. 
                        </p>
                        <p className="paragraf">
                            Namun, keberadaan Kurikulum Merdeka yang tergolong baru, menjadikannya belum dapat terjalankan dengan maksimal. 
                        </p>
                        <p className="paragraf">
                            “Kurikulum Merdeka dirancang oleh menteri yang sekarang, menteri pendidikan sekarang, diluncurkan juga belum lama <i>gitu</i>. Itu butuh waktu untuk dapat dijalankan maksimal. Gurunya <i>‘kan</i> harus belajar dulu, kalau <i>gak</i> salah diberi waktu 1 atau 2 tahun itu untuk bisa menyesuaikan itu,” ungkap Sugiyo. 
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <h3 className="subtopik">
                            Ketimpangan Tenaga Pendidik bagi Peserta Didik Penyandang Disabilitas
                        </h3>
                        <p className="paragraf">
                            Tita menegaskan, tenaga pendidik akan menjadi juru kunci dalam pelaksanaan Kurikulum Merdeka. <i style={{color:"transparent"}} aria-hidden="true">iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</i>
                        </p>
                        <p style={{textAlign:"left !important;"}} className="paragraf">
                            Mirisnya, produksi guru bagi penyandang disabilitas masih jauh dari kata tercukupi.
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="tenaga__pendidik">
                                <source  src="./assets/audios/SONIFIKASI PERBANDINGAN TENAGA PENDIDIK1.mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__tenaga__pendidik" alt="klik untuk memutar sonifikasi perbandingan tenaga pendidik"><img src="../assets/images/play-button.png" alt=""/></button>
                            <a href="https://drive.google.com/file/d/1TOToT0iC3XqpUL9Ly0iLKkM9tZMamqVX/view?usp=drive_link" >
                                <iframe src='https://flo.uri.sh/visualisation/17867966/embed' title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17867966/?utm_source=embed&utm_campaign=visualisation/17867966' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Data dari Kemendikbudristek tahun 2023/2024 menunjukkan bahwa hanya ada sekitar 29,158 tenaga pendidik yang mengajar di sekolah luar biasa dan 587 guru pendidikan khusus di sekolah reguler.
                        </p>
                        <p className="paragraf">
                            Jika dibandingkan dengan jumlah tenaga pengajar reguler yang sebesar 368,361 seperti tercatat di Statistik Indonesia oleh BPS pada tahun yang sama, tentu pengajar bagi penyandang disabilitas mengalami ketertinggalan. 
                        </p>
                        <p className="paragraf">
                            Saat ini, pemerintah telah membina kampus-kampus untuk membuka jurusan pendidikan khusus. Selain itu, pemerintah juga mewajibkan mata kuliah pendidikan inklusif bagi seluruh mahasiswa jurusan pendidikan keguruan di Indonesia.
                        </p>
                        <p className="paragraf">
                            “Jadi 23 perguruan tinggi dari 3000 universitas di seluruh Indonesia kami arahkan untuk membuka program studi untuk pendidikan khusus. <i>Nah</i>, selain itu, sekarang sudah ada kebijakan baru yaitu semua program studi di bidang Pendidikan dan Keguruan itu diwajibkan untuk mengikuti mata kuliah tentang Pendidikan Khusus. Jadi ke depan, semua guru tidak ada alasan tidak mengenal anak-anak disabilitas atau berkebutuhan khusus,” jelas Tita Srihayati. 
                        </p>
                        <p className="paragraf">
                            Namun nyatanya, tanpa adanya hati dan panggilan, permasalahan mengenai tenaga pendidik 
                            akan sulit untuk dapat terselesaikan. 
                        </p>
                        <p className="paragraf">
                            “Kalau di kampus ada pendidikan luar biasa (PLB). <i>Tapi</i> seberapa besar produksinya? <i>Kebanyakan</i> begitu lulus di S1, jadi <i>teller</i> di bank. Saya <i>gak</i> menyalahkan itu, tetapi produksi gurunya masih kurang. Itu satu,” ujar Jonna.
                        </p>
                        <p className="paragraf">
                            Selain permasalahan produksi, tenaga pengajar juga perlu untuk senantiasa meningkatkan kualitasnya.
                        </p>
                        <p className="paragraf">
                            “Kedua, ketika berbicara kesiapan, gak mungkin dia setelah <i>fresh graduate</i>, langsung terjun, butuh <i>capacity building</i>. Butuh pelatihan dan seterusnya, itu yang kemudian menjadi tantangan juga. Ketika berbicara kesiapan <i>human resourcement</i>,” lanjutnya. 
                        </p>
                        <p className="paragraf">
                            Kesamarataan dalam pendidikan bagi guru juga krusial. Hal yang terjadi sekarang adalah terdapat perbedaan kualitas guru di sekolah luar biasa dan sekolah inklusi. 
                        </p>
                        <p className="paragraf">
                            Ketika berbicara mengenai guru pada sekolah inklusi, rata-rata tidak memiliki kemampuan untuk menyampaikan pembelajaran kepada peserta didik disabilitas, tetapi dapat menguasai sebuah materi pelajaran dengan baik. 
                        </p>
                        <blockquote className="special-quote">
                            <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                            <p className="paragraf-khusus">Di inklusi itu, guru-guru kebanyakan tidak tahu bagaimana cara mengajarkan sebuah materi kepada tuna netra. Itu yang jadi masalah,” kata Sugiyo.</p>
                        </blockquote>
                        <p className="paragraf">
                            Alhasil, guru sekolah inklusi seringkali memberikan pelajaran-pelajaran yang tidak sesuai dengan yang seharusnya diajarkan. Memang akan lebih memudahkan bagi peserta didik disabilitas, tetapi sekaligus membuatnya menjadi tidak berkembang.
                        </p>
                    </div>
                </div>
                <div className="container-ilustrasi-pembelajaran">
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_PELAJARAN_1.png" aria-describedby="guru-menjelaskan" alt="Guru Matematika"/>
                        <p id="guru-menjelaskan" className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" >
                            Guru menjelaskan pembelajaran matematika, tetapi terkadang sulit menyampaikan kepada peserta didik dengan disabilitas netra.
                        </p>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <p id="peserta-didik-sering-bingung" className="ilustrasi-kiri ilustrasi-text ms-5 mt-auto mb-custom" >
                            Peserta didik netra seringkali kebingungan dan kesulitan menangkap pembelajaran matematika tanpa adanya alat bantu.
                        </p>
                        <img className="ilustrasi-kanan" src="../assets/images/ILUSTRASI_PELAJARAN_2.png" aria-describedby="peserta-didik-sering-bingung" alt="bingung saat belajar"/>   
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_PELAJARAN_3.png" aria-describedby="materi" alt="guru-tidak-menyampaikan-materi"/>
                        <p className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" id="materi" >
                            Akhirnya, guru seringkali memberikan peserta didik netra pelajaran yang tidak berhubungan karena tidak dapat menyampaikan materi.
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Sebaliknya pada sekolah luar biasa, guru memiliki kemampuan untuk menyampaikan pembelajaran dengan baik, tetapi tidak menguasai materi pelajaran yang akan diajarkan. 

                        </p>
                        <p className="paragraf">
                            “Guru SLB itu tahu cara metode pengajarannya, <i>tapi</i> tidak tahu ilmunya yang disampaikan itu,” jelas Sugiyo. 
                        </p>
                        <p className="paragraf">           
                            Dengan begitu, pemerintah kemudian menyediakan beragam pelatihan dan pembimbingan bagi tenaga pendidik untuk secara aktif meningkatkan kualitasnya dalam melakukan pengajaran bagi penyandang disabilitas.  
                        </p>
                        <p className="paragraf">
                            Pada tahun 2023 silam, pemerintah baru saja mengeluarkan sebuah aplikasi bertajuk Platform Merdeka Mengajar (PMM). Di dalam aplikasi tersebut, disediakan modul-modul yang dapat diakses oleh seluruh guru di Indonesia secara daring. 
                        </p>
                        <p className="paragraf">
                            Aplikasi tersebut juga telah meluncurkan modul Pendidikan Berjenjang, Pendidikan Inklusif yang kemudian terdapat tiga tingkat tahapan materi, yakni tingkat dasar, tingkat lanjut, dan tingkat mahir. 
                        </p>
                        <p className="paragraf">
                            Selain disediakannya aplikasi peningkatan kompetensi secara daring, terdapat juga pelatihan dan bimbingan teknis yang sering dilaksanakan oleh Direktorat Jenderal Guru dan Tenaga Kependidikan Kemendibudristek, baik secara luring maupun daring. 
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan" style={{backgroundColor:"#d9d9d9"}}>
                    <div className="container-paragraf" style={{backgroundColor:"#d9d9d9"}}>
                        <h2 className="subjudul">Informasi Tak Merata, Penyandang Disabilitas Rentan Tak Sekolah</h2>
                        <hr class="hr-kecil me-auto ms-auto"/>
                        <p className="paragraf">
                            Syifa duduk di salah satu kursi, menjadi pengunjung sebuah webinar peluncuran program khusus disabilitas yang diadakan oleh sebuah lembaga organisasi disabilitas. 
                        </p>
                        <p className="paragraf">
                            Setelah mendengarkan kata pembuka dari penyelenggara acara, pembicara pun memberikan materi terkait dunia disabilitas. 
                        </p>
                        <p className="paragraf">
                            Pembicara pun mulai membahas mengenai keberadaan sekolah luar biasa di Indonesia, juga penyelenggaraan sekolah tersebut belum maksimal. 
                        </p>
                        <p className="paragraf">
                            Alhasil, ketidaktahuannya terhadap informasi mengenai ketersediaan sekolah membuatnya terlambat masuk sekolah dasar.
                        </p>
                        <p className="paragraf">
                            Dianovita, selaku pengajar di sekolah khusus mengaku kebingungan dalam mengidentifikasi sekolah inklusi di sekitar wilayah Gading Serpong, Tangerang. 
                        </p>
                        <p className="paragraf">
                            Dirinya menyadari bahwa jarang terdapat sekolah yang memiliki papan nama bertuliskan sekolah inklusi di depan sekolah.
                        </p>
                        <p className="paragraf">
                            Pemerintah menyatakan bahwa seharusnya, semua sekolah umum wajib untuk menerima keberagaman peserta didik, termasuk penyandang disabilitas. 
                        </p>
                        <p className="paragraf">
                            “Saat ini semua sekolah wajib untuk menerima semua keberagaman peserta didik. Karena apa? Karena mereka punya hak yang sama untuk bersekolah, di sekolah mereka punya hak yang sama untuk belajar bersama teman-temannya di sekolah yang sama, di kelas yang sama, dan dekat dengan tempat tinggal (zonasi),” jelas Tita Srihayati, selaku Staff Tim Kerja Inovasi dan Transformasi Direktorat PMPK Kemendikbudristek.
                        </p>
                        <p className="paragraf">
                            Akan tetapi, pada pelaksanaannya, tidak semua sekolah dapat dikatakan sebagai sekolah inklusi.
                        </p>
                        <p className="paragraf">
                            Data DAPODIK Kemendikbudristek tahun 2023/2024 mencatat bahwa tidak semua sekolah umum menerima peserta didik disabilitas. Dari sekitar 436,707 satuan pendidikan di Indonesia, hanya 39,053 yang terdaftar menerima peserta didik penyandang disabilitas. 
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="sekolah__inklusi">
                                <source  src="./assets/audios/SONIFIKASI SEKOLAH INKLUSI DAN REGULER 1(2).mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__sekolah__inklusi" alt="klik untuk memutar sonifikasi perbandingan sekolah inklusi dan regular"><img src="../assets/images/play-button.png"/></button>
                            <a href="https://drive.google.com/file/d/16FV16UCbJD8_6vAlbBFR-wRYgi1HM3Mb/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17995888/embed' title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17995888/?utm_source=embed&utm_campaign=visualisation/17995888' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>
                            
                        </div>       
                        <p className="paragraf">
                            Sartika Purnamasari (33), teman tuli, pernah ditolak oleh salah satu sekolah umum di daerah Jakarta. Ketika ditanyakan alasannya, sekolah mengungkap bahwa terdapat ketakutan bahwa sekolah tidak mampu mengajar teman tuli. 
                        </p>
                        <p className="paragraf">
                            Berdasarkan data aduan yang diterima oleh Komisi Nasional Disabilitas (KND), membuktikan bahwa Sartika tidak sendirian.
                        </p>
                        <p className="paragraf">
                            Aduan terkait pendidikan mendapat peringkat ke-4 berdasarkan data dari Komisi Nasional Disabilitas. Terdapat 13 aduan persoalan pendidikan yang masuk ke KND pada tahun 2022, jumlah tersebut naik pada tahun 2023 hingga 48 aduan. Sampai tahun 2024 bulan Maret, aduan mengenai pendidikan masih masuk yakni 8 aduan. 
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="jumlah__aduan">
                                <source  src="./assets/audios/SONIFIKASI JUMLAH ADUAN PENDIDIKAN KND 1.mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__jumlah__aduan" alt="klik untuk memutar sonifikasi jumlah aduan"><img src="../assets/images/play-button.png"/></button>
                            <a href="https://drive.google.com/file/d/1qvI3h4xpXSLfRKuGdbZWdyRJ5UVd0ls-/view?usp=drive_link" >
                                <iframe src='https://flo.uri.sh/visualisation/17977830/embed' title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href="https://public.flourish.studio/visualisation/17977830/?utm_source=embed&utm_campaign=visualisation/17977830" target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>
                        </div>
                        
                        <p className="paragraf">
                            Jonna, selaku komisioner KND mengungkap bahwa dari tahun ke tahun, aduan terkait penolakan sekolah selalu ramai masuk. Tidak hanya oleh sekolah umum, penolakan oleh sekolah luar biasa juga beberapa kali terjadi.
                        </p>
                        <p className="paragraf">
                            Pemerintah kemudian menyediakan sistem zonasi yang diatur dalam Peraturan Menteridikbudristek No. 1 tahun 2021 untuk menjadi salah satu solusi agar memudahkan penyandang disabilitas bersekolah.
                        </p>
                        <p className="paragraf">
                            “Pemerintah membuat kebijakan sistem zonasi PPDB, itu karena tadi, dekat dengan tempat tinggal, itu menjadi kunci agar anak bisa sekolah dengan mudah. Karena apa? Karena itu <i>'kan</i> akan membantu orang tua, paling tidak berkurang bebannya dari sisi transportasi atau waktu. Maka zonasi digulirkan supaya memudahkan anak bisa bersekolah, termasuk disabilitas,” ucap Tita Srihayati.
                        </p>
                        <p className="paragraf">
                            Namun faktanya, masih terdapat kesenjangan dalam penyediaan sekolah luar biasa pada tiap provinsi di Indonesia. Tidak semua daerah di Indonesia, apalagi di daerah yang terpencil memiliki setidaknya satu sekolah luar biasa bagi peserta didik disabilitas.
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="persebaran__SLB">
                                <source  src="./assets/audios/SONIFIKASI PERSEBARAN SEKOLAH LUAR BIASA 1.mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__persearan__SLB"><img src="../assets/images/play-button.png"/></button>
                            <a href="https://drive.google.com/file/d/1uSb8Pgo2NRZLvwojUKaJBOZVDa0BicVG/view?usp=drive_link">
                                <iframe src='https://flo.uri.sh/visualisation/17869189/embed' title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17869189/?utm_source=embed&utm_campaign=visualisation/17869189' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>    
                        </div>
                        <p className="paragraf">
                            Jika melihat berdasarkan data, terdapat perbedaan yang signifikan terhadap jumlah sekolah luar biasa pada daerah Jawa dan Papua.
                        </p>
                        <p className="paragraf">
                            Ketidaktersediaan sekolah, minimnya akses informasi, ditambah dengan banyaknya penolakan dari sekolah, membuat penyandang disabilitas jauh tertinggal dalam mendapatkan pendidikan formal.
                        </p>
                        <p className="paragraf">
                            Analisis tematik kependudukan Indonesia yang diluncurkan oleh BPS pada tahun 2022 melaporkan bahwa angka pendidikan bagi penyandang disabilitas tergolong rendah. 
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="pendidikan__penyandang__disabilitas">
                                <source  src="./assets/audios/SONIFIKASI ANGKA PENDIDIKAN1.mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__pendidikan__penyandang__disabilitas"><img src="../assets/images/play-button.png"/></button>
                            <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                            <   iframe src='https://flo.uri.sh/visualisation/17867966/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17867966/?utm_source=embed&utm_campaign=visualisation/17867966' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>   
                        </div>
                        <p className="paragraf">
                            Pasalnya, dari 22,97 juta jiwa penyandang disabilitas, sebesar 12,9% belum atau tidak pernah bersekolah, 27,5% belum/tidak tamat SD, 29,5% lulus SD sederajat, 10,9% lulus SMP sederajat, 14,2% lulus SMA sederajat, dan hanya 5,0% yang lulus perguruan tinggi.
                        </p>
                        <blockquote className="special-quote">
                            <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                            <p className="paragraf-khusus">Artinya apa? Dari 100 tadi, yang jadi sarjana hanya 5 orang. Ketika bicara tentang pendidikan formal ini, berarti masih PR besar,” ujar Jonna Aman Damanik, komisioner Komisi Nasional Disabilitas.</p>
                        </blockquote>
                        <h3 className="subtopik">Sistem Desentralisasi, Advokasi Jadi Kunci</h3>
                        <p className="paragraf">
                            Sebagai negara yang besar, Indonesia menganut sistem desentralisasi agar sebuah kebijakan mampu berjalan secara efektif. Desentralisasi adalah suatu bentuk pemberian kewenangan kepada unit-unit dengan tingkat kewenangan yang lebih rendah di dalam struktur organisasi. 
                        </p>
                        <p className="paragraf">
                            “Pemerintah pusat seringkali disalahkan, padahal sistem pendidikan kita desentralisasi  yang mana pemerintah daerah juga berperan,” ungkap Galih Sulistyaningrat, guru sekolah dasar. 
                        </p>
                        <p className="paragraf">
                            Artinya, dalam mengatasi permasalahan ini, selain membuat kebijakan, pemerintah pusat perlu secara aktif melaksanakan sosialisasi dan advokasi hingga ke birokrasi terkecil mengenai pendidikan inklusif.
                        </p>
                        <p className="paragraf">
                            “Kami sebagai pemerintah pusat terus menerus menguatkan fungsi koordinasi dan kolaborasi dengan pemerintah daerah, sesuai dengan kewenangannya. Hal ini perlu dilakukan secara terus menerus, karena memang pimpinan daerah itu selalu berubah ya, berganti. Sehingga untuk menjaga keajegan regulasi kita, memang harus menguatkan fungsi-fungsi tadi, koordinasi dan sebagainya,” jelas Tita Srihayati. 
                        </p>
                        <p className="paragraf">
                            Sebaliknya, diperlukan juga inisiatif dari pemerintah daerah untuk mau terlibat dalam memajukan pendidikan inklusif.
                        </p>
                        <p className="paragraf">
                            Beberapa yang dapat dilaksanakan oleh pemerintah daerah yakni, membuat divisi penyandang disabilitas sampai ke tingkat-tingkat kelurahan. 
                        </p>
                        <p className="paragraf">
                            “Di sini pentingnya ini sebetulnya ada seksi disabilitas sampai di tingkat kelurahan. Sebetulnya mereka itu perlu untuk mencari disabilitas. Ada <i>'gak</i> tuna netra yang belum bisa mengakses pendidikan? Nanti diarahkan ke mana,” tutur Sugiyo.
                        </p>
                        <p className="paragraf">
                            Selain itu, dengan dana yang perlu disokong oleh pemerintah pusat, pemerintah daerah dapat menggencarkan pembangunan sekolah bagi penyandang disabilitas, memberi beasiswa, merekrut tenaga-tenaga pendidik, dan memberikan kesejahteraan yang layak bagi tenaga pendidik. 
                        </p>
                        <p className="paragraf">
                            “Sebetulnya pemerintah daerah boleh menganggarkan keuangannya sebagai upaya pendidikan inklusif, misalnya memberikan beasiswa kepada disabilitas, tanpa harus kita mengarahkan. <i>Tapi</i> ketika mereka punya APBD, mereka menganggarkan itu sangat dibolehkan,” ungkap Tita.
                        </p>
                    </div>  
                </div>
                <div className="container-article-pendidikan">
                    <h2 className="subjudul">Tanpa Fasilitas Memadai, Pendidikan Inklusi Sulit Terjadi</h2>
                    <hr className="hr-kecil"/>
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Semasa bersekolah di sekolah umum, Andra Mahesa (32) selalu duduk pada barisan depan di dalam kelas. Tanpa kehadiran juru bahasa isyarat, pandangan matanya fokus membaca gerak bibir gurunya yang sedang menyampaikan materi. 
                        </p>
                        <p className="paragraf">
                            Sesekali, arah pandangnya melihat materi presentasi yang ditampilkan di depan kelas. Dahinya menyerngit lantaran presentasi hanya berupa poin-poin, membuatnya kesulitan mengerti materi yang diajarkan.
                        </p>
                        <p className="paragraf">
                            Matanya terus mengikuti gerak-gerik gurunya yang menjelaskan materi sambil memutari kelas. Semakin jauh gurunya, semakin kesulitan ia mengerti materi ajar hari itu.
                        </p>
                        <p className="paragraf">
                            Tidak lama, bel berbunyi, menandakan jam istirahat tiba, Mahesa segera berdiri menghampiri gurunya. Sambil menulis di kertas, Mahesa meminta materi teks lengkap kepada gurunya agar dirinya mampu mengejar ketertinggalannya. 
                        </p>
                        <p className="paragraf">
                            Ketika hadir di sekolah-sekolah inklusi, teman tuli memerlukan beberapa alat penunjang agar kegiatan pembelajaran dapat berlangsung maksimal. 
                        </p>
                        <p className="paragraf">
                            Rachmita Maun Harahap, teman tuli, sekaligus Komisioner Komisi Nasional Disabilitas menuturkan, idealnya, diperlukan pendampingan dari juru bahasa isyarat bagi teman tuli agar dapat mendapatkan informasi yang sama dengan non-disabilitas ketika berada di kelas. 
                        </p>
                        <p className="paragraf">
                            Jika juru bahasa isyarat tidak dapat disediakan, teman tuli memerlukan presentasi yang sesuai dengan materi yang diajarkan, atau setidaknya guru dapat berbicara dengan tempo yang lebih pelan sehingga teman tuli dapat membaca gerak bibir dengan lebih mudah.
                        </p>
                        <p className="paragraf">
                            “Kalau untuk teman-teman tuli, diperlukan materi yang sesuai dengan apa yang sedang dipresentasikan. Atau boleh juga diberi pendampingan dengan ada juru bahasa isyarat supaya teman-teman tuli mendapatkan informasi yang setara dengan teman-teman yang non-disabilitas,” ujar Rachmita ketika dijumpai di Gedung Komisi Nasional Disabilitas pada Kamis (07/03/2024).
                        </p>
                        <p className="paragraf">
                            Tidak jauh berbeda, Robert Hutabarat (51), seorang teman netra mengingat masa-masanya berkuliah. Tanpa teknologi secanggih sekarang, tas kuliahnya selalu terisi dengan kaset-kaset.
                        </p>
                        <p className="paragraf">
                            Ketika kelas berlangsung, Robert merekam pembelajaran yang diajarkan dosen di kelas menggunakan <i>tape recorder</i>nya agar mampu belajar di rumah.
                        </p>
                        <p className="paragraf">
                            Jika dosen hanya menunjukkan materi tanpa suara, Robert harus menyewa temannya untuk membacakan materi kepadanya untuk kemudian ia rekam. 
                        </p>
                        <p className="paragraf">
                            Selayaknya teman tuli, penyandang netra juga membutuhkan alat-alat pendukung pembelajaran, seperti bangun ruang, riglet dan stilus (alat pembantu penulisan braille), abacus (kotak berhitung braille), teks braille, sempoa, dan lainnya. 
                        </p>
                    </div>
                </div>
                {/* <div className="swiper-container-div" 
                    alt="Berikut merupakan beberapa alat bantu penunjang pembelajaran bagi peserta didik netra
                        Abacus yaitu alat berhitung braille, kedua
                        Bangun ruang,
                        Huruf braille,
                        Brailetek, kalkulator bicara, sempoa
                        Suling, penggaris, speaker, handphone
                        Komputer bicara
                        Riglet dan stilus klik panah kanan untuk penjelasan alat bantu penunjang pembelajaran lainnya */}
                {/* "> */}
                    <Swiper 
                        className="mySwiper" 
                        // onSwiper={setSwiper}
                        modules={[Navigation]}
                    
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                          }}
                        >
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
                                <img src="./assets/images/slide1.png" alt="Abacus (alat berhitung braille)"/>
                                <figcaption>Alat berhitung braille atau sering disebut abacus di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani).</figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/slide2.png" alt="Bangun ruang"/>
                                <figcaption>Alat bantu pembelajaran matematika yakni bangun ruang di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani). </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/slide3.png" alt="Huruf braille"/>
                                <figcaption>Huruf braille pada depan pintu kelas di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani). </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/slide4.png" alt="Brailetek, kalkulator berbicara, sempoa"/>
                                <figcaption>Alat penunjang pembelajaran bagi peserta didik netra di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani). </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/Rectangle 62.png" alt="Suling, penggaris, speaker, handphone"/>
                                <figcaption>Alat penunjang pembelajaran bagi peserta didik netra di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani).  </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/slide6.png" alt="Komputer bicara."/>
                                <figcaption>Komputer dengan perangkat lunak pembaca layar di Sekolah Luar Biasa Elsafan (FOTO/Keisya Librani). </figcaption>
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure>
                                <img src="../assets/images/slide7.png" alt="Riglet dan stilus."/>
                                <figcaption>Alat bantu penulisan huruf braille sedang dipakai oleh salah satu murid di SKH YKDW 03 (FOTO/Keisya Librani).  </figcaption>
                            </figure>
                        </SwiperSlide>
                    </Swiper>
                {/* </div> */}
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">  
                        <p className="paragraf">Robert yang kini menjadi pendiri sekaligus guru di SLB Elsafan, menekankan bahwa pada praktek pengajaran teman-teman netra, diperlukan hal-hal konkrit agar peserta didik mampu membayangkan hal yang diajarkan.</p>
                    </div>
                </div>
                <div className="container-ilustrasi-pembelajaran">
                    <div className="ilustrasi-pembelajaran d-flex">
                        <p className="ilustrasi-kiri ilustrasi-text ms-5 mt-auto mb-custom" id="pembelajaran-secara-praktik">
                            Jika ingin mengajarkan teman netra perihal sungai, guru perlu membawa peserta didik ke sungai.
                        </p>
                        <img className="ilustrasi-kanan" src="../assets/images/ILUSTRASI_PEMBELAJARANKONKRIT_1.png" aria-describedby="pembelajaran-secara-praktik" alt="pembelajaran secara praktik"/>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <p className="ilustrasi-kiri ilustrasi-text ms-5 mt-auto mb-custom" id="guru-perlu-mengajak" >
                            Jika berbicara perihal gunung, guru perlu mengajak peserta didik ke gunung. 
                        </p>
                        <img className="ilustrasi-kanan" src="../assets/images/ILUSTRASI_PEMBELAJARANKONKRIT_2.png" aria-describedby="guru-perlu-mengajak" alt="guru perlu untuk mengajak dan mendorong"/>   
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_PEMBELAJARANKONKRIT_3.png" alt="guru perlu mengenalkan" aria-describedby="guru-perlu-mengenalkan"/>
                        <p className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" id="guru-perlu-mengenalkan">
                            Jika ingin memperkenalkan kerbau, guru perlu membawa peserta didik ke peternakan.
                        </p>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_PEMBELAJARANKONKRIT_4.png" aria-describedby="opsi-lain" alt="opsi lain yang bisa dilakukan guru"/>
                        <p className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" id="opsi-lain" >
                            Opsi lain guru dapat membawa boneka kerbau ke dalam kelas. Namun, guru perlu menjelaskan ukuran kerbau yang sesungguhnya.
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Ketersediaan gawai berupa laptop dan telepon genggam juga menjadi hal yang krusial dalam  pembelajaran peserta didik penyandang disabilitas. Terdapat fitur aksesibilitas berupa pembaca layar, yang memungkinkan penggunanya untuk mengubah teks menjadi suara.
                        </p>
                        <p className="paragraf">
                            “Sebetulnya netra itu harus difasilitasi laptop sama HP dan bisa mengoperasikannya. Kalau laptop itu untuk mengerjakan tugas <i>‘kan</i> harus pakai laptop. Kalau HP ya untuk komunikasi untuk kirim tugasnya, pakai <i>WA</i>, <i>email</i>, dan seterusnya,” tutur Sugiyo, teman netra sekaligus anggota Mitra Netra. 
                        </p>
                        <p className="paragraf">
                            Permasalahan muncul karena tidak semua sekolah menyediakan alat-alat penunjang yang memadai bagi peserta didik penyandang disabilitas. 
                        </p>
                        <p className="paragraf">
                            “Ketika berbicara sekolah reguler inklusif, itu <i>‘pun</i> masih PR besar, kesiapannya seperti apa,” ungkap Jonna.
                        </p>
                        <p className="paragraf">
                            Imbas dari ketiadaan fasilitas ini, peserta didik kemudian harus menyediakannya secara mandiri.
                        </p>
                        <p className="paragraf">
                            Lanjutan dari permasalahan ini adalah, tidak semua penyandang disabilitas berasal dari kelas ekonomi yang sama. 
                        </p>
                        <p className="paragraf">
                            “Kalau keluarganya mampu bisa beli laptop, kalau kebetulan tuna netra yang kurang mampu. <i>‘Kan</i> maksudnya di Indonesia itu umumnya tuna netra lahir di keluarga yang kurang mampu. <i>Nah</i> itu <i>'kan</i> harusnya difasilitasi oleh pemerintah <i>‘kan</i>, dipinjamkan. Kalau <i>gak</i> bisa beli ya harus difasilitasi,” kata Sugiyo.
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <h3 className="subtopik">Unit Layanan Disabilitas Diwajibkan, Apakah Dilaksanakan?</h3>
                        <p className="paragraf">
                            Pemerintah kemudian mengambil peran dalam mengatasi permasalahan ini dengan mewajibkan penyediaan Unit Layanan Disabilitas (ULD) di setiap satuan pendidikan yang diatur dalam Peraturan Pemerintah No. 13 tahun 2020.
                        </p>
                        <p className="paragraf">
                            “Pemerintah daerah diwajibkan untuk membentuk Unit Layanan Disabilitas. <i>‘Nah</i> di mana, ULD memiliki fungsi dan tugas untuk memfasilitasi satuan pendidikan,” jelas Tita. 
                        </p>
                        <p className="paragraf">
                            Sebagaimana diatur dalam PP No. 13 tahun 2020 pasal 22, ketersediaan ULD di setiap satuan pendidikan harus diselenggarakan secara mandiri dengan bantuan dan pengawasan oleh pemerintah daerah.
                        </p>
                        <p className="paragraf">
                            Unit Layanan Disabilitas memiliki tugas meningkatkan kompetensi pendidik dalam menangani peserta didik disabilitas, menyediakan media pembelajaran dan alat bantu, menyediakan layanan konseling, sosialisasi terkait pendidikan inklusif,  dan mengawasi pelaksanaan akomodasi yang layak bagi peserta didik penyandang disabilitas.
                        </p>
                        <p className="paragraf">
                            Ketersediaan ULD di setiap satuan pendidikan akan sangat membantu bagi peserta didik penyandang disabilitas. 
                        </p>
                        <p className="paragraf">
                            Rachmita menceritakan mengenai pengalaman salah satu mahasiswa di Padang yang sangat terbantu akan kehadiran ULD di kampusnya.
                        </p>
                    </div>
                </div>
                <div className="container-ilustrasi-pembelajaran">
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_ALATBANTUDENGAR_1.png" aria-describedby="ilustrasi35" alt="Mahasiswa netra membutuhkan fitur pembaca layar pada gawai untuk mengakses materi pembelajaran"/>
                        <p className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" aria-describedby="ilustrasi35">
                            Mahasiswa netra membutuhkan fitur pembaca layar pada gawai untuk mengakses materi pembelajaran. 
                        </p>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <p className="ilustrasi-kiri ilustrasi-text ms-5 mt-auto mb-custom" >
                            Meski demikian, dosen yang tidak mengerti akan hal itu, memarahi dan mengancam tidak meluluskan karena dianggap tidak memperhatikan pembelajaran.
                        </p>
                        <img className="ilustrasi-kanan" src="../assets/images/ILUSTRASI_ALATBANTUDENGAR_2.png" aria-describedby="ilustrasi36" alt="Meski demikian, dosen yang tidak mengerti akan hal itu, memarahi dan mengancam tidak meluluskan karena dianggap tidak memperhatikan pembelajaran"/>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_ALATBANTUDENGAR_3.png" aria-describedby="ilustrasi37" alt="Dirinya mencoba menjelaskan kepada dosen melalui pesan pribadi, tetapi pesannya tidak dibalas"/>   
                        <p className="ilustrasi-kanan ilustrasi-text ms-5 mt-auto mb-custom" id="ilustrasi37">
                            Dirinya mencoba menjelaskan kepada dosen melalui pesan pribadi, tetapi pesannya tidak dibalas. 
                        </p>
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <p className="ilustrasi-kiri ilustrasi-text me-5 mt-auto mb-custom" id="ilustrasi38">
                            Dilanda kebingungan, mahasiswa ini akhirnya melaporkan permasalahan ini kepada Komisi Nasional Disabilitas (KND). 
                        </p>
                        <img className="ilustrasi-kanan" src="../assets/images/ILUSTRASI_ALATBANTUDENGAR_4.png" aria-describedby="ilustrasi38" alt="Dilanda kebingungan, mahasiswa ini akhirnya melaporkan permasalahan ini kepada Komisi Nasional Disabilitas (KND)"/>
                        
                    </div>
                    <div className="ilustrasi-pembelajaran d-flex">
                        <img className="ilustrasi-kiri" src="../assets/images/ILUSTRASI_ALATBANTUDENGAR_5.png" alt="KND kemudian berkoordinasi dengan pihak universitas. Akhirnya, terbangunlah Unit Layanan Disabilitas pada universitas tersebut yang berguna melaksanakan fungsi pengaduan dan pengawasan" aria-describedby="ilustrasi-39"/>
                        <p className="ilustrasi-kanan ilustrasi-text me-5 mt-auto mb-custom" >
                            KND kemudian berkoordinasi dengan pihak universitas. Akhirnya, terbangunlah Unit Layanan Disabilitas pada universitas tersebut yang berguna melaksanakan fungsi pengaduan dan pengawasan. 
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        <p className="paragraf">
                            Namun, meski ketersediannya diwajibkan, hanya ada 73 perguruan tinggi yang menyediakan Unit Layanan Disabilitas dari keseluruhan 3000 perguruan tinggi yang ada di Indonesia. 
                        </p>
                        <div className="embed-dari-flourish">
                            <audio id="pendidikan__penyandang__disabilitas">
                                <source  src="./assets/audios/SONIFIKASI ANGKA PENDIDIKAN1.mp3" type="audio/ogg"/>
                            </audio>
                            <button  id="button__pendidikan__penyandang__disabilitas"><img src="../assets/images/play-button.png"/></button>
                            <a href="https://drive.google.com/file/d/1gFEZkHxofUnHAtWpXCgtigJryOZtFHFo/view?usp=drive_link">
                            <iframe src='https://flo.uri.sh/visualisation/17979163/embed'  title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href='https://public.flourish.studio/visualisation/17979163/?utm_source=embed&utm_campaign=visualisation/17979163' target='_top' style={{textDecoration:"none!important"}}> </a></div>
                            </a>   
                        </div>
                        <a alt="Klik Untuk melihat daftar universitas yang memiliki Unit Layanan Disabilitas," href=" https://ptinklusif.kemdikbud.go.id/s/3/pt-mempunyai-uld ">
                            <div className="flourish-embed flourish-cards" data-src="visualisation/17979163">
                                <script src="https://public.flourish.studio/resources/embed.js"></script>
                            </div>
                        </a>
                        <p className="paragraf">
                            “Sebenarnya sejak pemerintah mengesahkan PP itu, kalau mereka [satuan pendidikan] tidak mendirikan, tidak melakukan, kami [KND] berhak membuat rekomendasi tiap instansi sampai melakukan penutupan. <i>Tapi ‘kan</i> faktanya tidak sesederhana itu, bagaimana anggarannya? Karena <i>'kan</i> semua butuh anggaran,” ujar Jonna. 
                        </p>
                        <p className="paragraf">
                            Menjawab hal ini, pemerintah pusat menegaskan bahwa sudah terdapat skema peningkatan anggaran untuk penyelenggaraan pendidikan inklusif. 
                        </p>
                        <p className="paragraf">
                            “Termasuk ini, [ada wacana] untuk ke depan akan ada program penambahan BOS, dana bos. Kemudian kita juga dalam BAK sudah menitipkan untuk bantuan kepada satuan pendidikan untuk pembuatan ruang sumber misalnya. Jadi, dari berbagai ada anggaran, kas, itu berupa kebijakan-kebijakan supaya dilakukan pemenuhan-pemenuhan tadi, kekurangan guru, kekurangan aksesibilitas, dan lain sebagainya. Itu skema kita ke depan,” jelas Tita. 
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan" style={{backgroundColor:"#d9d9d9"}}>
                    <div className="container-paragraf">
                        <h2 className="subjudul">Pendidikan Inklusi, Mungkinkah Terjadi?</h2>
                        <hr className="hr-kecil me-auto ms-auto"/>
                        <p className="paragraf">
                            Kompleksitas permasalahan terkait penyelenggaraan pendidikan inklusif bagi penyandang disabilitas memang tidak akan mudah untuk dihadapi dan diselesaikan. 
                        </p>
                        <p className="paragraf">
                            Meski demikian, Indonesia sudah berada pada arah yang tepat. Walaupun, perjalanan tidak akan sebentar.
                        </p>
                        <p className="paragraf">
                            “Kita sudah <i>right on track</i> dalam mewujudkan pendidikan inklusif. Kalau dulu, mungkin satu sekolah tidak akan ada murid disabilitas, sekarang ada. <i>Tapi</i> sekarang harus tetap naik kelas dong, dari yang hanya menerima, sekarang harus bisa melayani dengan baik. Jadi bertahap, tetapi berproses,” ungkap Tolhas Damanik, teman netra dari Wahana Inklusi Indonesia di Pesta Inklusif pada Sabtu, (16/12/2023). 
                        </p>
                        <p className="paragraf">
                            Keterlibatan penyandang disabilitas dalam pembentukan kebijakan juga perlu senantiasa dilaksanakan agar seluruh peraturan mampu tepat sasaran.
                        </p>
                        <blockquote className="special-quote">
                            <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                            <p className="paragraf-khusus">Yang sering dilupakan itu adalah partisipasi bermakna. Maksudnya, semua penyelenggara layanan itu seharusnya, mulai dari perencanaan, bahkan mulai dari saat studi itu, bisa melibatkan penyandang disabilitas. Mereka yang tahu needs-nya, bukan ahli. They are the best consultant. Itu yang saya maksud fully participatory. Partisipasi yang bermakna. Jadi ketika satu sekolah, dia mau inklusif, ajaklah komunitas, orang tua. Bertanya, harus bagaimana,” harap Jonna. </p>
                        </blockquote>
                        <p className="paragraf">
                            Merangkum keseluruhan permasalahan yang ada, diperlukan juga kolaborasi menyeluruh. Terdapat lima aktor penting yang perlu berperan, yakni pemerintah, masyarakat sipil, pendidikan tinggi, media, dan private sector. Kolaborasi ini disebut sebagai kolaborasi pentahelix.
                        </p>
                        <figure>
                            <img src="../assets/images/INFOGRAFIK PENTAHELIX 1.png" style={{width:"100%",heght:"auto"}} alt="Terdapat kolaborasi dari lima pihak penting disebut juga sebagai kolaborasi pentahelix, yakni pemerintah, masyarakat sipil dan komunitas, perguruan tinggi, media, dan private sector"/>
                            <figcaption className="figcaption" style={{fontWeight:"700"}}>Infografik Kolaborasi Pentahelix (INFOGRAFIK/Keisya Librani).</figcaption>
                        </figure>
                        <p className="paragraf">
                            “Kolaborasi pentahelix ini yang harus didorong, supaya sama-sama mengimplementasikan kebijakan-kebijakan tadi. Kalau tidak akan sulit,” tutup Jonna. 
                        </p>
                        <p className="paragraf">
                            Perjalanan masih panjang, tetapi dengan partisipasi penuh tiap-tiap pihak, pendidikan yang benar-benar inklusif bukanlah tidak mungkin untuk dicapai. 
                        </p>
                    </div>
                </div>
            </article>
            <Footer/>
        </div>
    );
}
export default Pendidikan;