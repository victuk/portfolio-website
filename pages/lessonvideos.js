import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/layouts/IndexLayout';
import Image from 'next/image';


export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Lesson Videos</div>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white', marginTop: "80px" }}>
          <Col span={24}><h2 style={{ textAlign: 'center', color: 'white' }}>JavaScript/NodeJS Lesson Videos</h2></Col>


          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/XNqjoBaYFHQ?si=r9vOBnBSNisuxBTa" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Intorduction to JavaScript/NodeJS</h3>
          </Col>


          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/TkBeMyqm7zw?si=3f-rgKejGwYqGUcw" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Enviroment Setup</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/x-4zMtZv4Hk?si=ThTYD7-dv-Y_DDd8" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Data types in JavaScript</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/fXWUGGfbuuo?si=j7dsGzBeLuiO1R0A" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Conditional statements, array and loop introduction</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/H_y1ILDgTSw?si=pypsvc9-qcv5XUV_" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Loops, map, filter, null and undefined.</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/5FpU3qExPec?si=Es1uxT6in5CXYcPT" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Continue and break statements and how they are used in a loop</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/ELJZwX7BXiA?si=P7X-8p487k9R-gXa" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Classes And objects in JavaScript</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/24SkjnsVvgw?si=b9xLUG2nC5IJixZn" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>NPM basics, Git and Github</h3>
          </Col>


        </Row>

        <Row gutter={16} style={{ textAlign: 'left', color: 'white', marginTop: "80px" }}>
          <Col span={24}><h2 style={{ textAlign: 'center', color: 'white' }}>Express JS Lesson Videos</h2></Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/RhQtfOXLFAw?si=shWsWsElLJhoA2Gr" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Promises, basics of RESTful apis and Express JS</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/gKqGqCYwcec?si=247z9DyF8YWgwXpw" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>NodeJS fs (file system) module, routing with Express JS</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/H2E0mo_lhB8?si=YQdfiVJ6O50tVUwI" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Create, Read, Update and Delete (C.R.U.D) operations with Express JS and MongoDB</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/qP-ovx__dAI?si=95FizzHycRnhAtrU" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Bearer token authentication using Json Web Token (J.W.T)</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/ErBL0ViQ5Mk?si=NU6RMuchYoWxGJFT" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Role-based authorization using Express JS middlewares</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/zW76lOcfM8M?si=4hBoo47mvdtez5Dc" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Deploying on render.com, documenting with postman, working with files using multer</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/hMnbgawW_VU?si=a_RUX1dTGMN0s-PL" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Sending emails using Gmail app password and nodemailer, how to implement password reset feature</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/QZB6YgvQkUw?si=0KyFFZt90jHkmhHP" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Working with files using nodemailer and cloudinary</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/JsFuzUoPqCI?si=1AsHGC26tMU6zbpv" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Pagination using mongoose-paginate-v2 package</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
            <iframe className='youtube-video' src="https://www.youtube.com/embed/ELnZDHBqEnA?si=Nb3SJ4zYc7yHAU6v" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Data/form validation using Joi package</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
          <iframe className='youtube-video' src="https://www.youtube.com/embed/hl2NiNJ8hT8?si=4gmwOZ39FPOJg68P" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Data/form validation using Joi package</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
          <iframe className='youtube-video' src="https://www.youtube.com/embed/5TkPezNj6N0?si=hPAY-zrGkftpYvL6" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Cors and morgan and how hey are used</h3>
          </Col>

          <Col className='space' sm={24} md={6}>
          <iframe className='youtube-video' src="https://www.youtube.com/embed/jZY_es9ZrXE?si=foO6iK5JqILHV-qF" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>Realtime communication using socket.io</h3>
          </Col>

        </Row>


        <Row gutter={16} style={{ textAlign: 'left', color: 'white' }}>
          <Col span={24}><h3 style={{ textAlign: 'center', color: 'white' }}>API Testing Lesson Videos</h3></Col>

          <Col className='space' sm={24} md={6}>
          <iframe className='youtube-video' src="https://www.youtube.com/embed/LvNV29PNqBw?si=wAEabZQzSrpekceG" title="YouTube video player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <h3 style={{ color: 'white' }}>API testing using Jest.io and Supertest packages</h3>
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
          transition: transform .5s;
          margin-bottom: 20px;
        }

        .picture-style:hover {
          transform: scale(1.5);
          border-radius: 10px;
        }

        .youtube-video {
          width: 100%;
          height: 250px;
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
