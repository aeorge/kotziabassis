/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import splitbee from '@splitbee/web'

import avatar from '../public/george.png'
import pwg from '../public/projects/pwg.png'

import { Toggle } from '@/components/toggle'
import { Tag } from '@/components/tag'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  XingIcon
} from '../components/icons'

const Home = () => {
  useEffect(() => {
    splitbee.init()
  }, [])

  return (
    <div>
      <Head>
        <title>Georgios Kotziabassis</title>
        <meta
          name='description'
          content='Portfolio website of Georgios Kotziabassis, a Junior Software Developer from Backnang, Germany.'
        />
      </Head>

      <main className='container max-w-2xl px-4 mx-auto touch-action-manipulation sm:px-6'>
        {/* Dark Mode Toggle */}
        <Toggle />

        <div className='h-12' />

        {/* Name and title */}
        <div className='text-2xl leading-9 text-center sm:text-3xl sm:leading-10'>
          <h1 className='font-bold text-transparent transition-colors bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-pink-600 dark:to-indigo-600'>
            Georgios Kotziabassis
          </h1>
          <h2>Software Engineer</h2>
        </div>

        <div className='h-12' />

        {/* Avatar */}
        <div className='flex w-full mx-auto border-4 rounded-full border-dark-gray dark:border-white sm:w-2/3'>
          <Image
            className='rounded-full'
            src={avatar}
            alt='Georgios Kotziabassis'
            width='600'
            height='600'
            priority
          />
        </div>

        <div className='h-12' />

        {/* Social Media Links */}
        <div className='flex max-w-xs mx-auto justify-evenly'>
          <a
            className='focus:text-pink-600 focus:outline-none hover:text-pink-600 dark:focus:text-indigo-600 dark:hover:text-indigo-600'
            href='https://github.com/aeorge'
            aria-label='GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon className='w-8 h-8 fill-current' />
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none hover:text-pink-600 dark:focus:text-indigo-600 dark:hover:text-indigo-600'
            href='https://twitter.com/kotziabassis'
            aria-label='Twitter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon className='w-8 h-8 fill-current' />
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none hover:text-pink-600 dark:focus:text-indigo-600 dark:hover:text-indigo-600'
            href='https://linkedin.com/in/kotziabassis'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon className='w-8 h-8 fill-current' />
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none hover:text-pink-600 dark:focus:text-indigo-600 dark:hover:text-indigo-600'
            href='https://xing.com/profile/Georgios_Kotziabassis/cv'
            aria-label='Xing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <XingIcon className='w-8 h-8 fill-current' />
          </a>
        </div>

        <div className='h-6' />

        {/* Separator */}
        <hr className='border-2 rounded-full border-dark-gray dark:border-white' />

        <div className='h-12' />

        {/* About me */}
        <div>
          <h3 className='text-2xl font-bold text-pink-600 dark:text-indigo-600'>
            // About me
          </h3>
          <div className='h-4' />
          <p className='text-xl leading-8'>
            Hello friends! 👋
            <br />
            My name is Georgios Kotziabassis and I am a Junior Software
            Developer from{' '}
            <a
              className='text-pink-700 hover:underline focus:underline focus:outline-none dark:text-indigo-500'
              href='https://goo.gl/maps/NB7WMUHMgNmRc1TU6'
              target='_blank'
              rel='noopener noreferrer'
            >
              Backnang, Germany
            </a>
            . I graduated from{' '}
            <a
              className='text-pink-700 hover:underline focus:underline focus:outline-none dark:text-indigo-500'
              href='https://www.hft-stuttgart.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              HFT Stuttgart
            </a>{' '}
            with a bachelor&apos;s degree in computer science in the summer of
            2019. I like to work with JavaScript, mainly in the front end,
            although I have experience with back-end development, too.
            <br />
            <br />
            You can check out my{' '}
            <a
              className='text-pink-700 hover:underline focus:underline focus:outline-none dark:text-indigo-500'
              href='https://drive.google.com/file/d/19K22fFrHuAYBryunWEkP4bB1CcFSdKS_/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              resume
            </a>
            .
          </p>
        </div>

        <div className='h-12' />

        {/* Tech Stack */}
        <div>
          <h3 className='text-2xl font-bold text-pink-600 dark:text-indigo-600'>
            // Tech Stack
          </h3>
          <div className='h-4' />
          <p className='text-xl leading-8'>
            I have experience and have worked on projects with the following
            technologies.
          </p>
          <div className='h-4' />
          <div className='flex flex-wrap -mb-4'>
            <Tag label='HTML5' />
            <Tag label='CSS3' />
            <Tag label='JavaScript' />
            <Tag label='TypeScript' />
            <Tag label='React' />
            <Tag label='React Native' />
            <Tag label='Next.js' />
            <Tag label='Node.js' />
            <Tag label='GraphQL' />
            <Tag label='Tailwind CSS' />
            <Tag label='PostgreSQL' />
            <Tag label='MongoDB' />
            <Tag label='Jest' />
            <Tag label='Git' />
            <Tag label='Figma' />
          </div>
        </div>

        <div className='h-12' />

        {/* Projects */}
        <div>
          <h3 className='text-2xl font-bold text-pink-600 dark:text-indigo-600'>
            // Projects
          </h3>
          <div className='h-4' />
          <div className='flex flex-col space-y-2'>
            <div>
              <h4 className='text-xl font-bold leading-8'>PWG</h4>
              <p className='text-xl leading-8'>
                A simple website for generating secure, random passwords.
              </p>
            </div>
            <div className='flex w-full border-2 rounded border-dark-gray dark:border-white'>
              <Image
                className='rounded-sm'
                src={pwg}
                alt='PWG'
                placeholder='blur'
              />
            </div>
            <div className='flex space-x-2'>
              <a
                className='w-full px-4 py-2 font-bold leading-6 text-center text-white transition-colors border-2 border-transparent rounded bg-dark-gray hover:bg-pink-600 focus:bg-pink-600 focus:outline-none dark:text-dark-gray dark:bg-white dark:hover:text-white dark:hover:bg-indigo-600 dark:focus:text-white dark:focus:bg-indigo-600'
                href='https://pwg-blue.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Site
              </a>
              <a
                className='w-full px-4 py-2 font-bold leading-6 text-center text-white transition-colors border-2 border-transparent rounded bg-dark-gray hover:bg-pink-600 focus:bg-pink-600 focus:outline-none dark:text-dark-gray dark:bg-white dark:hover:text-white dark:hover:bg-indigo-600 dark:focus:text-white dark:focus:bg-indigo-600'
                href='https://github.com/aeorge/pwg'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Code
              </a>
            </div>
          </div>
          <div className='h-8' />
          <p className='text-xl text-center'>More coming soon. 🔨</p>
        </div>

        <div className='h-12' />

        {/* Contact me */}
        <div>
          <p className='text-xl leading-8 text-center'>
            Do you have any questions?
          </p>
          <div className='h-4' />
          <a
            className='block w-full px-4 py-2 mx-auto font-bold leading-6 text-center text-white transition-colors border-2 border-transparent rounded bg-dark-gray hover:bg-pink-600 focus:bg-pink-600 focus:outline-none dark:text-dark-gray dark:bg-white dark:hover:text-white dark:hover:bg-indigo-600 dark:focus:text-white dark:focus:bg-indigo-600 sm:w-64'
            href='mailto:kotziabassis@gmail.com'
          >
            Contact Me
          </a>
        </div>

        <div className='h-8' />
      </main>
    </div>
  )
}

export default Home
