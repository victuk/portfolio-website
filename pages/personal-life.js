import React from 'react';
import Link from 'next/link';
import Layout from '../components/layouts/IndexLayout';




export default function RecipeReviewCard() {

  return (
    <div>
      <div className='default-container'>

        <div className='all-header' style={{textAlign: 'center', color: 'white'}}>Personal Life</div>

        <div style={{textAlign: 'justify'}}>
        <div>
        <h3 style={{color: 'white'}}>Little History</h3>
          <p>
          Owkay, listen up 😁. My name is Victor Peter Ukok, I'm a web developer, drummer, optimist and a non-commercial commedian 😌. 
          At the age of 12 my I started using a Computer, I started with a desktop Computer (Windows XP 😁), by then I was taught my by father about 
          how to use Microsoft Word to type some documents, make letter heads, save documents and some other basic things (i felt like Bill Gate back then sha 😂), 
          then, I pretty much figured out other things (how to create folder, create files, play music, etc) on my own.
          </p>
          <p>
            One of my cousin named Solomon came to stay with me when I was 13 years old, after some few weeks he was enrolled in a computer school 
            and then he was given a laptop. So, I also learnt from him during his training at the computer school he attended. 
            During his training my I got a laptop from my dad (spec was 2GB RAM, around 60GB hard disk 😂😂😂😂 if youre not laughing you're a cultist 😂). After some few months the laptop crashed due 
            to overloading it with unnecessary software. I learnt how to install softwares without assistance and I also understood the effect of loading up your laptop with unnecessary software.
            During the 6th month of his training, my cousin started learning about the basics of Web development (HTML and CSS). Well, I'll stop here for now... 
            If you want to know more, <Link href='/personal-life#how-i-started-programming-web-dev'>click here</Link> 😌.
          </p>
          <p>
            Let me talk about how I started music, shall we? 😎 
            Ok, I was taught the rudiments of music from my family church (The Salvation Army, Calabar ⛪) by Mr. Benson. I started out playing the keyboard, then, I enrolled in 
            Resue School Of Music, Calabar where I choose to learn play drums (I choose drums cus I was inspired by someone I watched playing drums, Tega Omene). That's 
            how the journey began 😌.
          </p>
          <p>
            I've also learnt other things like sign-writing, installing satellite dishes, etc.
          </p>
        </div>

        <div>
        <h3 style={{color: 'white'}} id='how-i-started-programming-web-dev'>How I Started Programming and Web Development</h3>
          <p>
          You remember I talked about my cousin learning about HTML and CSS in a computer school? I used to read his manual, then 
          I downloaded books, I also pid someone to learn about Android. At my SS2 I made a simple Android app that had some few Physics laws, their fomular 
          and a simple picture to illustrate the law (I did this with a 4GB RAM intel Pentium laptop, running emulator and bundling the app wasn't easy at all tho). I shared it with 
          some of my classmates back then and they were impressed.
          </p>
          <p>
            Then after secondary school I had to choose between web and Android. Seeing that my laptop specs wont help me 
            as an Android developer, so, I choose web. During my Nationa Diploma at Heritage, I found it difficult to understand how JavaScript could be used on a website. I wanted 
            to know how to use it so after my National Diploma I choose to take a one year industral training program at Kodehauz Hub. At Kodehauz Hub I learnt about 
            how the web works, how to use Javascript, Document Object Model (DOM), Browser Object Module (BOM) and how to use NodeJS.
          </p>
          <p>
            After the industral attachment at KodeHauz Hub, I finished up my Higher National Diploma program and went ahead to work at AfricInnovate Hub where I train other students 
            on website development, participate/volunteer in various community events (e.g devfest2021 Eket) and meetups.
          </p>
          <p>
          I am an active member of some cummunities like Google Developer Group Eket (GDG Eket), Python Akwa Ibom, Figma Uyo and many other communities.
          </p>
        </div>


        </div>

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

        .default-container {
          width: 60%;
          margin: 0 auto;
          color: white;
        }

        @media (max-width: 425px) {
          .default-container {
            width: 100%;
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
