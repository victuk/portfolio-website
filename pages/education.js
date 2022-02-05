import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layouts/IndexLayout';




export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Education</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
          <Col className='space' sm={24} md={12}>
            <h3 style={{color: 'white'}}>Heritage Polytechnic</h3>
            <h4 style={{color: 'white'}}>Higher National Diploma, Computer Science</h4>
            <div>Feb 2020 - Aug 2021</div>
            <ul>
              <li>Switched to Computer Science during HND because I had passion for software more, I got to learn
                more about it during my 1 year internship at Kodehauz.</li>
              <li>Thought few interested course mates about basics C++, Pascal and SQL.</li>
              <li>Got to learn a few things involving tech from school like the laws that regulate tech in my country, basics
                of business in tech, how programming has evolved and its impact to th society, basics of artificial neural
                networks, etc.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{color: 'white'}}>Heritage Polytechnic</h3>
            <h4 style={{color: 'white'}}>National Diploma, Computer Engineering</h4>
            <div>Feb 2017 - Aug 2018</div>
            <ul>
              <li>Learnt about electricity, electronics parts and how their use.</li>
              <li>Got to know about report writing and how to write a good report.</li>
              <li>Learnt other things in regard to hardware and software, new hardwares and how they can be used to
                enhance productivity, new softwares and their application, how to upgrade an OS without formatting its
                hard disk, how to update system drivers via disk and the internet.</li>
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
