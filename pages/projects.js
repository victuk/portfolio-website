import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layouts/IndexLayout';
import Image from 'next/image';


export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Projects</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
        <Col span={24}><h3 style={{ textAlign: 'center', color: 'white' }}>Contract Projects</h3></Col>
        
        <Col className='space' sm={24} md={12}>
        <a href='https://realitypacesettersfoundation.ng' target='_blank' rel="noreferrer"><Image src='/project-pictures/reality-pacesetters.png' width='280' height='150' className='picture-style' title='Click to view' alt='Reality Pacesetters Foundation' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href='https://realitypacesettersfoundation.ng' target='_blank' rel="noreferrer">View Website</a>
        </Col>

          
        </Row>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
        <Col span={24}><h3 style={{ textAlign: 'center', color: 'white' }}>Personal Projects</h3></Col>
        
        <Col className='space' sm={24} md={12}>
        <a href='https://realitypacesettersfoundation.ng' target='_blank' rel="noreferrer"><Image src='/project-pictures/VNote.png' width='280' height='150' className='picture-style' title='Click to view' alt='realty pace foundation website' /></a>
            <h3 style={{ color: 'white' }}>VNote</h3>
            <h4 style={{ color: 'white' }}>Short note taking website.</h4>
            <a href='https://vnoteapp.netlify.app/' target='_blank' rel="noreferrer">View Website</a><br />
            <a href='https://www.postman.com/Victor-peter/workspace/vpublic-documentation/collection/9557443-92ebd656-f2d3-4d43-a195-d02c62c283d1?ctx=documentation' target='_blank' rel="noreferrer">View API Documentation</a><br />
            <a href='https://github.com/victuk/note-taking-project' target='_blank' rel="noreferrer">View Frontend on GitHub</a><br />
            <a href='https://github.com/victuk/Note-taking-api' target='_blank' rel="noreferrer">View Backend on GitHub</a>
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
          text-align: center;
        }

        .picture-style {
          border-radius: 10px;
          border: 5px solid white;
          margin-bottom: 20px;
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
