import { Box } from '@mui/material';
import React, { useState } from 'react';
import LoadingImg from '../../assets/svg/image-loading.svg';
import DefaultImg from '../../assets/svg/image-default.svg';
import { ImageProps } from 'types/image.interface';

const ImageCustom = ({ src, alt }: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);

    function handleImageLoaded() {
        setIsLoading(false);
    }
    const imgUrl = src ?? DefaultImg;
    return (
        <>
            {isLoading && (
                <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                    <Box component="img" className='img-loading' alt={alt} width="50px !important" src={LoadingImg} loading="lazy" />
                </Box>
            )}
            <Box
                component="img"
                className="custom-img app-img"
                alt={alt}
                src={imgUrl}
                loading="lazy"
                onLoad={handleImageLoaded}
                // onError={event => {
                //     if (event.currentTarget.src.includes('http://localhost:3000/#'))
                //         return;
                //     event.currentTarget.src = DefaultImg;
                // }}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        </>
    );
};

export default React.memo(ImageCustom);
