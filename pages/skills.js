import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layouts/IndexLayout';

export default function RecipeReviewCard() {
  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Skills</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
          <Col className='space' sm={24} md={12}>
            <h3 style={{color: 'white'}}>Frontend</h3>
            
            <ul>
              <li>HTML, CSS, Javascript</li>
              
              <li>CSS Preprocessors:
                <ul>
                  <li>SASS</li>
                  <li>LESS</li>
                </ul>
              </li>
              <li>Design Frameworks:
                <ul>
                  <li>Tailwind</li>
                  <li>Ant Design</li>
                </ul>
              </li>
              <li>Frontend Frameworks:
                <ul>
                  <li>VueJS</li>
                  <li>ReactJS</li>
                </ul>
              </li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{color: 'white'}}>Backend</h3>
            
            <ul>
              <li>NodeJS, Python</li>
              
              <li>Backend Frameworks:
                <ul>
                  <li>Express</li>
                  <li>Django</li>
                </ul>
              </li>
              <li>Templating Engine:
                <ul>
                  <li>EJS</li>
                  <li>Jinja Templating Engine</li>
                </ul>
              </li>
              <li>Database:
                <ul>
                  <li>MySQL</li>
                  <li>Mongo</li>
                </ul>
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
