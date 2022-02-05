import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layouts/IndexLayout';



export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Projects</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
        <Col span={24}><h3 style={{ textAlign: 'center', color: 'white' }}>Contract Projects</h3></Col>
        
        <Col className='space' sm={24} md={12}>
        <a href="https://realitypacesettersfoundation.ng" target='_blank'><img src='/avatar.webp' className='picture-style' title='Click to view' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href="https://realitypacesettersfoundation.ng" target='_blank'>View Website</a>
        </Col>

          
        </Row>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
        <Col span={24}><h3 style={{ textAlign: 'center', color: 'white' }}>Personal Projects</h3></Col>
        
        <Col className='space' sm={24} md={12}>
        <a href="https://realitypacesettersfoundation.ng" target='_blank'><img src='/avatar.webp' className='picture-style' title='Click to view' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href="https://realitypacesettersfoundation.ng" target='_blank'>View Website</a>
        </Col>

        <Col className='space' sm={24} md={12}>
        <a href="https://realitypacesettersfoundation.ng" target='_blank'><img src='/avatar.webp' className='picture-style' title='Click to view' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href="https://realitypacesettersfoundation.ng" target='_blank'>View Website</a>
        </Col>

        <Col className='space' sm={24} md={12}>
        <a href="https://realitypacesettersfoundation.ng" target='_blank'><img src='/avatar.webp' className='picture-style' title='Click to view' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href="https://realitypacesettersfoundation.ng" target='_blank'>View Website</a>
        </Col>

        <Col className='space' sm={24} md={12}>
        <a href="https://realitypacesettersfoundation.ng" target='_blank'><img src='/avatar.webp' className='picture-style' title='Click to view' /></a>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO)</h3>
            <h4 style={{ color: 'white' }}>(Contract Job)</h4>
            <a href="https://realitypacesettersfoundation.ng" target='_blank'>View Website</a>
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
          width: 280px;
          height: 200px;
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
