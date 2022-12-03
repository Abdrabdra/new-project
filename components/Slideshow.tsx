import { Box, Fade, FormControlLabel, Paper, Slide, Switch, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { $imageApi } from '../api';
import styles from '../styles/Slideshow.module.css';
import { IBanner } from '../types/IBanner';

interface Props {
    banners: IBanner[]
}

const Slideshow: React.FunctionComponent<Props> = ({ banners }) => {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<any>(null);
    const delay = 5000;
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === banners?.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={styles.slideshow}>
            <div
                className={styles.slideshowSlider}
                style={{
                    transform: `translate3d(${-index * 100}%, 0, 0)`,
                    width: '100%'
                }}
            >
                {banners?.map((banner, idx) => {
                    return <img key={idx} src={`${$imageApi}/${isMobile ? banner.mobile_image : banner.image}`} alt="ADU24 Promo Banner" className={styles.banner} />
                }
                )}
            </div>

            <div className={styles.slideshowDots}>
                {banners?.map((_, idx) => (
                    <div
                        key={idx}
                        className={index === idx ? styles.slideshowDotActive : styles.slideshowDot}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;