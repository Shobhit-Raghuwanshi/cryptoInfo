import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Typography, Row, Col, Card } from 'antd';
import { useGetNftsQuery } from '../services/nftApi'
import Loader from './Loader';
const { Meta } = Card;
const { Text, Title } = Typography;
const Nft = ({simplified}) => {


    const{data,isFetching} = useGetNftsQuery(); 
    

    if(isFetching) return <Loader />
    let count = 8;
    
    {!simplified && (
        count = 11
    )}
    
    const arr = data?.result.slice(0, count);

    return (
        <div>
            
           <Row gutter={[32, 32]} className="crypto-card-container">
           {arr.map((nft,index)=>{
                let obj = JSON.parse(nft?.metadata);
                console.log(obj);
                 return <Col xs={24}
            sm={12}
            lg={6}
                    className="crypto-card"
                    key={index}> 
                        <a href={`${obj.image_url}`}>
                         <Card
                                hoverable
                                style={{ width: 250 }}
                                cover={<img alt="nft" src={obj.image_url ? `${obj.image_url}` : `${obj.image}` } />}
                        >
                        <Meta title={`${obj.name}`} description={`${obj.description}`} />
                         </Card> 
                         </a>
               </Col> ;
            })}
           </Row>
        </div>
    )
}

export default Nft
