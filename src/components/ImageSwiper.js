import { Route, Switch } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '../images';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Zoom, Parallax } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import { Typography } from '@material-ui/core';
import './ImageSwiper.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Zoom, Parallax]);

export function ImageSwiper(props) {
    return (
        <Switch>
            <Route path="/swiper">
                <div>
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        style={{ textAlign: "center" }}
                        zoom={{ toggle: true, maxRatio: 2 }}
                        parallax
                    >
                        {images.map((_, idx) => 
                            <SwiperSlide key={idx}>
                                <img src={_.original} alt="" />
                                <div className="title" data-swiper-parallax="-300">Slide 1</div>
                                <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                            </SwiperSlide>)}
                        <span slot="container-start"><Typography variant="h3" align="center" color="textPrimary">Saját Galéria:</Typography></span>
                    </Swiper>
                </div>
            </Route>
        </Switch >
    )
}