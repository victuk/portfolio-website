import Image from 'next/image';
import { Row, Col } from 'antd';
import React from 'react';
import Head from 'next/head';
import Nav from '../navs/IndexNav';

export default function DefaultLayout({children}) {
  return (
    <div style={{height: '100vh'}}>
    <Nav />

    <Head>
        <title>Victor Peter Ukok</title>
        <link rel='icon' href='/profile-picture.jpg' />
      </Head>
   
    <Image src='/beautiful-wallpaper.jpg' layout='fill' className='bg' alt='Background Picture' />

<main>

<Row>
  <Col xs={24} md={24} style={{height: '90vh', overflowY: 'auto', padding: '20px'}}>{children}</Col>
</Row>

</main>
<style>
        {`
        .bg {
          filter: brightness(0.2);
          height: 100vh;
        }
        `}
      </style>
    </div>
  );
}
