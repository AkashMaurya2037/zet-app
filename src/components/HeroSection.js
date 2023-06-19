import React from 'react'

function HeroSection() {
    return (
        <>
            <div className="fadeInUp-hero animatedFadeInUp-hero animated-hero hero-Ani-Con">
                <div className="fadeInUp-hero__Main-Con">
                    <div className="FirstCon">
                        <h1>
                            Become a Financial Advisor and
                            <span> Earn Rs.1 Lakh/Month</span>
                        </h1>
                        <p>No investment required</p>
                        <div>
                            <img className="FirstCon__img" src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" alt="google-play-logo" width="162" height="48" />
                        </div>
                    </div>
                    <div className="SecondCon">
                        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75" alt="Making Smart Money" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
