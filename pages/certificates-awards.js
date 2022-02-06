import React from 'react';
import Link from 'next/link';
import { Col, Row, Button } from 'antd';
import Layout from '../components/layouts/IndexLayout';


export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <h1 style={{ textAlign: 'center', color: 'white' }}>Certificates/Awards</h1>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>

          <Col className='space' sm={24} md={24}>
            <p>
              <h3 style={{ color: 'white' }}>Free Code Camp</h3>
              <h4 style={{ color: 'white' }}>freecodecamp.com</h4>
              <Row xs={24} sm={12} md={6}>
                <Col>
                  <h2 style={{ color: 'white' }}>Responsive Web Design Certificate</h2>
                  <a href='https://www.freecodecamp.org/certification/fccd61cc81d-900b-4798-a715-26029c889927/responsive-web-design' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
              </Row>
            </p>

            <p>
              <h3 style={{ color: 'white' }}>Jobberman</h3>
              <h4 style={{ color: 'white' }}>jobberman.com</h4>
              <Row>
                <Col xs={24} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>Soft Skills</h2>
                  <a href='https://drive.google.com/file/d/1t5sSL7PsFrQeOIbXPfmPgfkkH2Z-h_zZ/view?usp=sharing' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
              </Row>
            </p>

            <p>
              <h3 style={{ color: 'white' }}>Sololearn</h3>
              <h4 style={{ color: 'white' }}>sololearn.com</h4>
              <Row>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>HTML</h2>
                  <a href='https://www.sololearn.com/Certificate/1014-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>CSS Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1023-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>JavaScript Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1024-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>jQuery Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1082-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>React + Redux Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1097-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>Python 3 Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1073-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>PHP Certificate</h2>
                  <a href='https://www.sololearn.com/Certificate/1059-9750235/jpg/' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>Kotlin Certificate</h2>
                  <a href='https://www.sololearn.com/certificates/course/en/9750235/1160/landscape/png' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
                <Col xs={12} sm={12} md={6} className='cert-space'>
                  <h2 style={{ color: 'white' }}>SQL Certificate</h2>
                  <a href='https://www.sololearn.com/certificates/course/en/9750235/1060/landscape/png' target='_blank' rel='noreferrer'><Button type='primary' ghost>View Certificate</Button></a>
                </Col>
              </Row>
            </p>
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

        .cert-space {
          padding: 10px 0;
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
