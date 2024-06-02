import React, { useRef, useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '../components/Footer';
import {paragrafPendidikan, blockquotePendidikan, dataPendidikan} from '../js/pendidikan';
const Pendidikan = () => {
    const swiperEl = document.querySelector('mySwiper');
    const [swiper, setSwiper] = useState();
    const swiperRef = useRef();
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

    function subJudul(subJudul){
        return(
            <div className="subjudulContainer">
                <h2 className="subjudul" dangerouslySetInnerHTML={{__html:paragrafPendidikan[subJudul].subJudul}}></h2>
                <hr aria-hidden="true" className="hr-kecil me-auto ms-auto"/>
            </div>
        )
    }

    function paragraf(subJudul, subJudulContent, subTopikContentStart, subTopikContentStop) {
        const paragrafElements = paragrafPendidikan[subJudul].subJudulContent[subJudulContent].subTopikContent.slice(subTopikContentStart, subTopikContentStop).map((paragraf, index) => (
          <p className="paragraf" key={index} dangerouslySetInnerHTML={{ __html: paragraf.paragraf }}></p>
        ));
      
        return paragrafElements;
    }

    function subTopik(subJudul, subJudulContent){
        return(
            <h3 className="subtopik">
                {paragrafPendidikan[subJudul].subJudulContent[subJudulContent].subTopik}
            </h3>
        )
    }

    function blockquote(blockquote){
        return(
            <blockquote className="special-quote">
                <img src="../assets/images/quote.svg" aria-hidden="true" alt=""/>
                <p className="paragraf-khusus" dangerouslySetInnerHTML={{__html:blockquotePendidikan[blockquote].blockquote}}></p>
            </blockquote>
        )
    }

    function dataPendidikanEmbed(data){
        return(
            <div className="embed-dari-flourish">
                <audio id={dataPendidikan[data].id}>
                    <source  src={dataPendidikan[data].audioSrc} type="audio/ogg"/>
                </audio>
                <button  id={dataPendidikan[data].button} onClick={playButton} alt={dataPendidikan[data].altTextButton}><img src="../assets/images/play-button.png" alt=""/></button>
                <a href={dataPendidikan[data].hrefGDrive} >
                    <iframe src={dataPendidikan[data].iframeSrc} title='Interactive or visual content' className='flourish-embed-iframe' frameborder='0' scrolling='no'  sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation' style={{width:"100%",height:"600px"}}></iframe><div ><a className='flourish-credit' href={dataPendidikan[data].aHref} target='_top' style={{textDecoration:"none!important"}}> </a></div>
                </a>
            </div>
        )
    }
    function playButton(e){
        const audioElement = e.currentTarget.parentElement.querySelector('audio');
        console.log(audioElement)
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
      

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
                <div className="container-article-pendidikan author-card">
                    {window.innerWidth >= 1040 ?

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
                    
                    :
                    <div className="author-info">
                    <div>
                        <img src="../assets/images/pas-foto-keisya.png"  className="author-photo" alt="aaaaa"/>
                        <p className="ditulis-oleh">
                            
                            Ditulis oleh: <br/>
                            <b className="author-name">Keisya Librani Chandra</b>
                            <p className="tanggal">15/05/2024</p>
                        </p>
                    </div>
                    </div>
                    
                    }
                    <div className="author-case-study">
                        <h2 className="subjudul" style={{textAlign:'left'}}>Pendidikan Inklusif, Apakah Benar-Benar Ada?</h2>
                        <hr className="hr-kecil" aria-hidden="true"/>
                        <p className="paragraf">Isu pendidikan inklusif telah diperbincangkan sejak tahun 2005 di Indonesia. Namun nyatanya, hingga 2024, penyandang disabilitas sensorik masih kesulitan dalam mengakses pendidikan formal.</p>
                    </div>
                </div>
            </section>
            <article className="article" id="main">
                <div className="container-article-pendidikan" >
                    {subJudul(0)}
                    <div className="container-paragraf">
                        <blockquote className="emphasis" dangerouslySetInnerHTML={{__html:paragrafPendidikan[0].subJudulContent[0].subTopikContent[0].paragraf}}></blockquote>
                        {/* subjudul 0, subtopik 0 paragraf mulai dari  1 berenti di 3*/}
                        {paragraf(0,0,1,3)}
                    </div>
                    {window.innerWidth >= 1640 ?
                        <div className="container-paragraf-with-inline-image">
                            <figure>
                            <img src="../assets/images/soal latihan.png" alt="Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan " aria-describedby="description-soal-ujian"/>
                            <figcaption className="figcaption-pendidikan" aria-hidden="true">Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan </figcaption>
                            </figure>
                            <div>{paragraf(0, 0, 3, 6)}</div>
                        </div>
                        : window.innerWidth >= 450 ?
                        <div>
                            <div className="container-paragraf-with-inline-image">
                            <figure>
                                <img src="../assets/images/soal latihan.png" alt="Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan " aria-describedby="description-soal-ujian"/>
                                <figcaption className="figcaption-pendidikan" aria-hidden="true">Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan </figcaption>
                            </figure>
                            <div>{paragraf(0, 0, 3, 5)}</div>
                            </div>
                            <div className="container-paragraf">{paragraf(0, 0, 5, 6)}</div>
                        </div>
                        :
                        <div>
                            <div className="container-paragraf-with-inline-image">
                            <figure>
                                <img src="../assets/images/soal latihan.png" alt="Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan " aria-describedby="description-soal-ujian"/>
                                <figcaption className="figcaption-pendidikan" aria-hidden="true">Soal Latihan Ujian Sekolah di Sekolah Luar Biasa Elsafan </figcaption>
                            </figure>
                            <div>
                                {paragraf(0, 0, 3, 4)}</div>
                            </div>
                            <div className="container-paragraf">{paragraf(0, 0, 4, 6)}</div>
                        </div>
                    }


                    <div>
                        <div className="container-paragraf">
                            {paragraf(0,0,6,17)}
                            {blockquote(0)}
                            {paragraf(0,0,17,22)}
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
                        {paragraf(0,0,22,28)}
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
    
                        {subTopik(0,1)}
                        {paragraf(0,1,0,2)}
                        {dataPendidikanEmbed(0)}
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        {paragraf(0,1,2,12)}
                        {blockquote(1)}
                        {paragraf(0,1,12,13)}
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
                        {paragraf(0,1,13,20)}
                    </div>
                </div>
                <div className="container-article-pendidikan" style={{backgroundColor:"#d9d9d9"}}>
                    <div className="container-paragraf" style={{backgroundColor:"#d9d9d9"}}>
                        {subJudul(1)}
                        {paragraf(1,0,0,12)}

                        {dataPendidikanEmbed(1)}

                        {paragraf(1,0,12,15)}

                        {dataPendidikanEmbed(2)}

                        {paragraf(1,0,15,19)}

                        {dataPendidikanEmbed(3)}

                        {paragraf(1,0,19,22)}

                        {dataPendidikanEmbed(4)}

                        {paragraf(1,0,22,23)}
                        {blockquote(2)}
                        {subTopik(1,1)}
                        {paragraf(1,1,0,9)}
                    </div>  
                </div>
                <div className="container-article-pendidikan">
                    {subJudul(2)}
                    <div className="container-paragraf">
                        {paragraf(2,0,0,12)}
                    </div>
                </div>
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
                        <div className="container-button-swiper">
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
                        {paragraf(2,0,12,13)}
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
                        {paragraf(2,0,13,20)}
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        {subTopik(2,1)}
                        {paragraf(2,1,0,6)}
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
                        <p className="ilustrasi-kanan ilustrasi-text mt-auto mb-custom" id="ilustrasi37">
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
                        <p className="ilustrasi-kanan ilustrasi-text mt-auto mb-custom" >
                            KND kemudian berkoordinasi dengan pihak universitas. Akhirnya, terbangunlah Unit Layanan Disabilitas pada universitas tersebut yang berguna melaksanakan fungsi pengaduan dan pengawasan. 
                        </p>
                    </div>
                </div>
                <div className="container-article-pendidikan">
                    <div className="container-paragraf">
                        {paragraf(2,1,6,7)}
                        {dataPendidikanEmbed(5)}
                        {paragraf(2,1,7,11)}
                    </div>
                </div>
                <div className="container-article-pendidikan" style={{backgroundColor:"#d9d9d9"}}>
                    <div className="container-paragraf">
                        {subJudul(3)}
                        {paragraf(3,0,0,4)}
                        {blockquote(3)}
                        {paragraf(3,0,4,5)}
                        <figure>
                            <img src="../assets/images/INFOGRAFIK PENTAHELIX 1.png" style={{width:"100%",heght:"auto"}} alt="Terdapat kolaborasi dari lima pihak penting disebut juga sebagai kolaborasi pentahelix, yakni pemerintah, masyarakat sipil dan komunitas, perguruan tinggi, media, dan private sector"/>
                            <figcaption className="figcaption" style={{fontWeight:"700"}}>Infografik Kolaborasi Pentahelix (INFOGRAFIK/Keisya Librani).</figcaption>
                        </figure>
                        {paragraf(3,0,5,7)}
                    </div>
                </div>
            </article>
            <Footer/>
        </div>
    );
}
export default Pendidikan;