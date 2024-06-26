import React from 'react';
import { Typography, Row, Col } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/IndexLayout';
import {
  InstagramFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  CodeOutlined,
  FileDoneOutlined,
  FolderOutlined,
  UserOutlined,
  SolutionOutlined,
  HistoryOutlined,
  YoutubeOutlined,
  FileOutlined
} from '@ant-design/icons';

const { Title } = Typography;



export default function RecipeReviewCard() {

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Image src='/profile-picture.jpg' height='200px' width='200px' className='image-style' alt='Picture of Victor' />
        
        <Title style={{ zIndex: 'inherit', color: 'white', textAlign: 'center' }}>I am Victor Ukok</Title>
        <h3 style={{ zIndex: 'inherit', color: 'white' }}>mfreke.victor@gmail.com</h3>
        <div style={{ zIndex: 'inherit', color: 'white', textAlign: 'center' }}>I&apos;m a web developer. I use MERN and MEVN stacks.</div>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <Link passHref href='https://www.instagram.com/victor_p3t3r/'><InstagramFilled className='icon-style' /></Link>
          <Link passHref href='https://twitter.com/veektor_v'><TwitterSquareFilled className='icon-style' /></Link>
          <Link passHref href='https://www.linkedin.com/in/victor-ukok/'><LinkedinFilled className='icon-style' /></Link>
        </div>
        <Row className='bottom-margin-mobile' style={{ textAlign: 'center' }}>
        <Col xs={12} sm={6} md={3}>
            <Link passHref href='/personal-life'>
              <div>
                <UserOutlined className='icon-style-two' />
                <h3 className='text-white'>Personal Life</h3>
              </div>
            </Link>
          </Col>
          
          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/education'>
              <div>
                <SolutionOutlined className='icon-style-two' />
                <h3 className='text-white'>Education</h3>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/experiences'>
              <div>
                <HistoryOutlined className='icon-style-two' />
                <h3 className='text-white'>Experiences</h3>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/skills'>
              <div>
                <CodeOutlined className='icon-style-two' />
                <h3 className='text-white'>Skills</h3>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/projects'>
              <div>
                <FolderOutlined className="icon-style-two" />
                <h3 className='text-white'>Projects</h3>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/certificates-awards'>
              <div>
                <FileDoneOutlined className="icon-style-two" />
                <h3 className='text-white'>Certificates/Awards</h3>
              </div>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <a href='https://dev.to/victuk' target='_blank' rel="noreferrer">
              <div>
                <FileOutlined className="icon-style-two" />
                <h3 className='text-white'>Dev.to Posts</h3>
              </div>
            </a>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Link passHref href='/lessonvideos'>
              <div>
                <YoutubeOutlined className="icon-style-two" />
                <h3 className='text-white'>JavaScript/NodeJS Videos</h3>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
      <style>
        {`
        .icon-style {
          font-size: 40px;
          color: white;
          transition: transform;
          transition-duration: 1s;
          margin: 0 10px;
        }

        .icon-style:hover {
          transform: scale3d(1.5, 1.5, 1.5);
          transition: transform;
    transition-duration: 1s;
        }
        
        .icon-style-two {
          font-size: 50px;
          color: white;
          background-color: blue;
          padding: 20px;
          margin: 10px;
          cursor: pointer;
          border-radius: 50%;
          transition: transform;
          transition-duration: 1s;
        }

        .icon-style-two:hover {
          
          transform: rotate(
            360deg);
    transition: transform;
    transition-duration: 1s;
        }

        .text-white {
          color: white;
          cursor: pointer;
        }

        .image-style {
          z-index: 2;
          border-radius: 50%;
          text-align: center;
        }

        @media (max-width: 425px) {
          .bottom-margin-mobile {
            margin-bottom: 20px;
          }
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
