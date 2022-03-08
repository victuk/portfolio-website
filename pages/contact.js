import React from 'react';
import Layout from '../components/layouts/IndexLayout';
import {
  InstagramFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  MailFilled
} from '@ant-design/icons';


export default function RecipeReviewCard() {

  return (
    <div>
      <div>

        <div className='all-header' style={{ textAlign: 'center', color: 'white' }}>Contact Me</div>
        <p style={{color: 'white'}}>
          You can contact me vis the following platforms:
        </p>

        <div className='default-container'>
          <div className='space'>
          <a href='https://www.instagram.com/victor_p3t3r/' target='_blank' rel='noreferrer'>
            <div><InstagramFilled className="icon-style" /> <span className='contact-font-size'>victor_p3t3r</span></div>
            
            </a>
          </div>
          <div className='space'>
          <a href='https://twitter.com/ukokjnr' target='_blank' rel='noreferrer'>
            <div><TwitterSquareFilled className="icon-style" /> <span className='contact-font-size'>@ukokjnr</span></div>
            
            </a>
          </div>
          <div className='space'>
          <a href='https://www.linkedin.com/in/victor-ukok/' target='_blank' rel='noreferrer'>
            <div>
            <LinkedinFilled className="icon-style" /> <span className='contact-font-size'>victor-ukok</span>
            </div>
            </a>
          </div>
          <div className='space'>
          <a href='https://mfreke.victor@gmail.com' target='_blank' rel='noreferrer'>
            <div>
            <MailFilled className="icon-style" /> <span className='contact-font-size'>mfreke.victor@gmail.com</span>
            </div>
            </a>
          </div>
        </div>

        

      </div>
      <style>
        {`
        .icon-style {
          font-size: 50px;
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

        .contact-font-size {
          font-size: 40px;
          color: white;
          margin-left: 10px;
        }

        .default-container {
          width: 60%;
          margin: 0 auto;
          color: white;
        }

        @media (max-width: 425px) {
          .default-container {
            width: 100%;
          }
          .icon-style {
            font-size: 20px;
            color: white;
          }
          .contact-font-size {
            font-size: 15px;
            color: white;
            margin-left: 10px;
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
