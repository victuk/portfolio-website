import React from 'react';
import { Col, Row } from 'antd';
import Layout from '../components/layouts/IndexLayout';


export default function RecipeReviewCard() {

  return (
    <div>
      <div>

      <h1 style={{ textAlign: 'center', color: 'white' }}>Certificates/Awards</h1>

<Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>

<Col className='space' sm={24} md={12}>
    <h3 style={{ color: 'white' }}>Free Code Camp</h3>
    <h4 style={{ color: 'white' }}>freecodecamp.com</h4>
    <ul>
    <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
    </ul>
  </Col>

  <Col className='space' sm={24} md={12}>
    <h3 style={{ color: 'white' }}>Jobberman</h3>
    <h4 style={{ color: 'white' }}>jobberman.com</h4>
    <ul>
    <li>
        <h2 style={{ color: 'white' }}>Soft Skills</h2>
        Certificate link
      </li>
    </ul>
  </Col>

  <Col className='space' sm={24} md={12}>
    <h3 style={{ color: 'white' }}>Sololearn</h3>
    <h4 style={{ color: 'white' }}>sololearn.com</h4>
    <ul>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
      <li>
        <h2 style={{ color: 'white' }}>HTML</h2>
        Certificate link
      </li>
    </ul>
  </Col>

  
</Row>
      </div>
      <style>
        {`
        .icon-style {
          font-size: 40px;
          color: white;
        }
        
        .icon-style-two {
          font-size: 50px;
          color: white;
          background-color: blue;
          padding: 20px;
          margin: 20px;
          border-radius: 50%;
        }

        .text-white {
          color: white;
        }
        
        .space {
          margin: 20px 0;
        }

        `}
      </style>

    </div>
  );
}



RecipeReviewCard.getLayout = function getLayout(page) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

// export async function getServerSideProps(context) {
//   {store.dispatch({type: 'UPDATE_NOTE', payload: []})}
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
