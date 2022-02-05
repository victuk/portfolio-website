import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import Layout from '../components/layouts/IndexLayout';

export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Experiences</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>AfricInnovate Hub, Eket</h3>
            <h4 style={{ color: 'white' }}>Full stack web developer (Intern)</h4>
            <div>Oct 2021 - Present</div>
            <ul>
              <li>Write laravel, Vue, use MySQL for database thereby speeding project development by 50% its former
                speed.</li>
              <li>Teach new students HTML5, CSS3, Javascript basics and make sure they are able to build responsive
                landing pages within 2 weeks.</li>
              <li>Cut down the workload of other interns by 70% by helping them refactor their code.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>KodeHauz Hub, Eket</h3>
            <h4 style={{ color: 'white' }}>Frontend Web Developer (Intern)</h4>
            <div>Mar 2019 - Feb 2020 (1 year)</div>
            <ul>
              <li>Learnt how to use contribute to open source software using git and github.</li>
              <li>Designed 10+ landing pages, 5+ websites for my personal project.</li>
              <li>Got to learn the basics of ReactJS, Node (express), Python(Django), MongoDB and MySQL.</li>
              <li>Learnt how to use Figma for user interface designs and canva for simple designs and banners for
                websites, flyers, logos, etc. Designed professional flyers and logos which has been used by individuals and companies.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>HNG Internship (Remote Internship)</h3>
            <h4 style={{ color: 'white' }}>Frontend Web Developer</h4>
            <div>Aug 2020 - Oct 2020 (3 months)</div>
            <ul>
              <li>Learnt HTML5, CSS3, Javascript and frameworkd like bootstrap, taiwindcss.</li>
              <li>Learnt how to collaborate with other people on 4+ projects at the internship.
                Networked with 10+ interns to accomplish tasks given during the internship.</li>
              <li>Learnt how to work remotely with little or no physical access to other interns/mentors/internship
                organiser.</li>
              <li>Learnt how to work independently and find solutions to problems with little or no clue.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>HacktoberFest 2021</h3>
            <h4 style={{ color: 'white' }}>Open Source Hackathon</h4>
            <div>October 2021 (1 month)</div>
            <ul>
              <li>Contributed to open source by writing and submitting three projects which were approved by the admin of the repo I contributed to</li>
              <li>Got to be part of their discord channel where I've seen and learnt a lot.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>Reality Pace Setters Foundation (NGO) <Link href="https://realitypacesettersfoundation.ng">Website</Link></h3>
            <h4 style={{ color: 'white' }}>Full Stack Web Developer (Contract Job)</h4>
            <div>December 2021 (1 month)</div>
            <ul>
              <li>Designed their website using HTML5, CSS3, Javascript.</li>
              <li>Designed the frontend and backend of the website in less than 3 weeks</li>
              <li>Used the rest of the month to write the documentation for the website using SWAGGER documentation tool.</li>
            </ul>
          </Col>

          <Col className='space' sm={24} md={12}>
            <h3 style={{ color: 'white' }}>DEV.to Community</h3>
            <h4 style={{ color: 'white' }}>Technical Writer</h4>
            <div>October 2021 - Present</div>
            <ul>
              <li>Wrote quality content on dev.to</li>
              <li>Helped +20 developers around the world.</li>
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
