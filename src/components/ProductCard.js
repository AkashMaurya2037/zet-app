import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductCard() {

    const cardDatas = [{
        title: "CREDIT CARDS",
        line: "100% Contactless Application Process with Instant Approval From Top Banks.",
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
    },{
        title: "CREDIT CARDS",
        line: "100% Contactless Application Process with Instant Approval From Top Banks.",
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
    },{
        title: "CREDIT CARDS",
        line: "100% Contactless Application Process with Instant Approval From Top Banks.",
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
    },{
        title: "CREDIT CARDS",
        line: "100% Contactless Application Process with Instant Approval From Top Banks.",
        img: "https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
    }]

    return (
        <>
            <div className="product-Con">
                <div className="product-Con__text-Con">
                    <p className="product-Texts__1">
                        Products on ZET
                    </p>
                    <p className='product-Texts__2'>We are trusted by best brand in the country</p>
                </div>
                <div className="product-Con__allProduct-Cards " >
                    {/* <div className="allProduct-Cards__card-Ani"> */}
                        {cardDatas.map((elem,ind) => {
                            return(<>
                            {/* <div className="cardHoverEff" > */}
                                <div className="card-Con" style={{ backgroundColor: "#002bff69" }} >
                                    <div style={{ display: 'contents' }} className="card-img">
                                        <img src={elem.img} alt={elem.title} />
                                    </div>
                                    <div className="card-Con-Text">
                                        <div className="card-Text-Head">
                                            {elem.title}
                                        </div>
                                        <div className="card-Text-Line">
                                            {elem.line}
                                        </div>
                                    </div>

                                </div>
                            {/* </div> */}
                            </>)
                        })}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default ProductCard
