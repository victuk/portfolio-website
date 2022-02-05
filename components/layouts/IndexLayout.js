import Image from 'next/image'
import { Row, Col } from 'antd';
import React from 'react'
import Nav from '../navs/IndexNav'

export default function DefaultLayout({children}) {
  return (
    <div style={{height: '100vh'}}>
    <Nav />
   
    <Image src="/beautiful-wallpaper.jpg" layout="fill" className="bg" />

<main>

<Row>
  <Col xs={24} md={24} style={{height: '90vh', overflowY: 'auto', padding: '20px'}}>{children}</Col>
</Row>

</main>
<style>
        {`
        .bg {
          filter: brightness(0.2);
        }
        `}
      </style>
    </div>
  );
}
