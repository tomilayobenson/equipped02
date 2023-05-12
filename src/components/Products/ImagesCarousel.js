import { useState} from 'react';
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';
import ImagesRow from './ImagesRow';

const ImagesCarousel = ({ productImages, setActiveImage }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === productImages.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? productImages.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <Container className='py-2'>

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >

                {
                    productImages.map((rowSet, idx) => {
                        return (
                            <CarouselItem
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}
                                key={idx}
                            >
                                <ImagesRow rowSet={rowSet} setActiveImage={setActiveImage} />
                            </CarouselItem>
                        )
                    })
                }


                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                    className='blackColor'
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                    className='blackColor'
                />
            </Carousel>
        </Container>
    )
}

export default ImagesCarousel