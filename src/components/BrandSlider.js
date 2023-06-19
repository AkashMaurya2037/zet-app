import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function BrandSlider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    const BrandUrls = [
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75", 
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75", 
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75", 
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75", 
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75",
        "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75"
    ]

    return (
        <>
            <div className="brand-Con">
                <div className="brand-Con__brand-Texts">
                    <p className="brand-Texts__1">Top Brands on ZET</p>
                    <p className="brand-Texts__2">We are trusted by best brand in the country</p>
                </div>
            </div>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={5}
                spaceBetween={30}
                pagination={{ clickable: true }}
                style={{ width: '64vw' }}
            >
                {BrandUrls.map((elem) => {
                    return <SwiperSlide style={{ width: '64vw' }}>
                        <img className="swiperImg" src={elem} alt="Slide 1" style={{ width: '100%' }} />
                    </SwiperSlide>
                })

                }
                {/* <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75" alt="Slide 1" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: '220px' }}>
                    <img className="swiperImg" src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75" alt="Slide 2" style={{ width: '100%' }} />
                </SwiperSlide> */}
                {/* Add more slides as needed */}
            </Swiper>
        </>
    )
}

export default BrandSlider
