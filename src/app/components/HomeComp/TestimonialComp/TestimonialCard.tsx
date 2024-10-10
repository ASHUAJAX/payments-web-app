
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TestimonialCardProps {
    msg: string, imgSrc: string, name: string,
    navigateFunc: (direction: 'prev' | 'next') => void;
}

function TestimonialCard({ msg, imgSrc, name, navigateFunc }: TestimonialCardProps) {



    return (
        <div className='TestimonialCard'>
            <h1 className='TestimonialCard_msg'>{msg}</h1>
            <div className='hr'></div>
            <div className='TestimonialCard_bottomWrapper'>
                <div className='TestimonialCard_bottomWrapper_contentWrapper'>
                    <img src={imgSrc} />
                    <p>{name}</p>
                </div>

                <div className='TestimonialCard_bottomWrapper_navigationWrapper'>
                    <div onClick={() => navigateFunc("prev")}>
                        <ArrowBackIosNewIcon  />
                    </div>
                    <div onClick={() => navigateFunc("next")}>
                        <ArrowForwardIosIcon  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard