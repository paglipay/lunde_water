import React from 'react';
import './HeroSection.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function HeroSection({
    questionsPost,
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    onClick,
    onClickBack,
    questionIndex
}) {
    return (
        <>
            <div
                style={lightBg ? { backgroundSize: 'cover', backgroundImage: "url('images/wave (bg).svg')" } : { backgroundSize: 'cover', backgroundImage: "url('images/wave.svg')" }}
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <div
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </div>
                                <Link to='/homepagelayout'>
                                {/* {questionIndex !== 0 ?
                                    <Button buttonSize='btn--wide' buttonColor='green' onClick={onClickBack}>
                                        Back
                                    </Button> : null}
                                    {'   '} */}
                                <Button buttonSize='btn--wide' buttonColor='green' onClick={onClick}>
                                    {buttonLabel}
                                </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
