import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { HomeFilled } from '@ant-design/icons';

export default function ResponsiveAppBar () {


  return (
    <div style={{height: '8vh',
    display: 'flex',
    width: '100%',
    padding: '10px 20px',
    flexDirection: 'row',
    zIndex: '100',
    minHeight: '50px',
    justifyContent: 'space-between'
  }}>
      <Link href="/" passHref><h2 style={{color: 'white', zIndex: '100', cursor: 'pointer'}}>V{'{ict}'}or</h2></Link>
      <div style={{color: 'white', zIndex: '100'}}> 
      <Link href='/' passHref><Button type="link"><HomeFilled /></Button></Link>
       <Link href='/contact' passHref><Button type="link" style={{border: '1px solid blue'}}>Contact Me</Button></Link></div>
      <style jsx>
        {`

          .space-align-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.space-align-block {
  flex: none;
  margin: 8px 4px;
  padding: 4px;
  border: 1px solid #40a9ff;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}

          `}
      </style>

    </div>
  );
};
