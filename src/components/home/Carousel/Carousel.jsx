import {Carousel, WingBlank} from 'antd-mobile';
import React, {useState} from 'react';
import './index.less';

const MyCarousel = () => {
    const [data, setData] = useState([
        'AiyWuByWklrrUDlFignR',
        'TekJlZRVCjLFexlOCuWn',
        'IJOtIlfsYdTyaDTRVrLI',
    ]);
    const imgHeight = 176;

    return (
        <>
            <WingBlank>

                <div className="container">
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) =>
                            console.log(`slide from ${from} to ${to}`)
                        }
                        afterChange={index => console.log('slide to', index)}
                    >
                        {data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: imgHeight,
                                }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>

            </WingBlank>
        </>
    );
};

export default MyCarousel;
