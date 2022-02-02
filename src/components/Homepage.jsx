import React from 'react';
import millify from 'millify';
import {Avatar, Typography, Row, Col, Statistic ,Card} from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies} from './index.js'
import {News} from './index.js'
import {Nft} from './index.js'
import Loader from './Loader';
import icon from '../images/sts.png';

const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery(10);
    // console.log(data);

    const globalStats = data?.data?.stats;

    



    if(isFetching) return <Loader />;
    return (
        <>
        <br />
            <Typography.Title level={2} className='heading'><Avatar shape='square' size={64} src={icon} />    Global Crypto Stats</Typography.Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Card>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.total}
            precision={2}
            valueStyle={{ color: '#00adb5' }}
            
          />
        </Card></Col>
                
        <Col span={12}> <Card>
          <Statistic
            title="Total Market Cap:"
            value={millify(globalStats.totalMarketCap)}
            precision={2}
            valueStyle={{ color: '#00adb5' }}
            
          />
        </Card>
        </Col>
        <Col span={12}><Card>
          <Statistic
           title="Total 24h Volume"
           value={millify(globalStats.total24hVolume)}
            precision={2}
            valueStyle={{ color: '#00adb5' }}
            
          />
        </Card>
        </Col>
        <Col span={12}><Card>
          <Statistic
           title="Total Markets"
           value={millify(globalStats.totalMarkets)}
            precision={2}
            valueStyle={{ color:'#00adb5' }}
            
          />
        </Card>
        </Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>  Best Cryptocurrencies</Typography.Title>
                <Typography.Title level={4} className='show-more'><Link to="/Cryptocurrencies">Show More...</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>  Articles related to crypto</Typography.Title>
                <Typography.Title level={4} className='show-more'><Link to="/News">Show More...</Link></Typography.Title>
            </div>
            <News simplified />
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>  Some Nfts</Typography.Title>
                <Typography.Title level={4} className='show-more'><Link to="/Nft">Show More...</Link></Typography.Title>
            </div>
            <Nft simplified />
            
        </>
    )
}

export default Homepage
