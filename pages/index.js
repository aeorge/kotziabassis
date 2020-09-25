import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Georgios Kotziabassis</title>
        <meta
          name='description'
          content='Portfolio website of Georgios Kotziabassis, a Junior Software Developer from Backnang, Germany.'
        />
      </Head>

      <main className='container max-w-2xl mx-auto px-4 font-nunito text-gray-900 sm:px-6'>
        <div className='h-12' />

        {/* Name and title */}
        <div className='text-2xl text-center sm:text-3xl'>
          <h1 className='font-bold'>Georgios Kotziabassis</h1>
          <h2 className='font-normal'>Junior Software Developer</h2>
        </div>

        <div className='h-12' />

        {/* Avatar */}
        <picture>
          <source srcSet='/george.webp' type='image/webp' />
          <source srcSet='/george.png' type='image/png' />
          <img
            className='w-full mx-auto border-4 rounded-lg border-gray-900 sm:w-2/3'
            src='/george.png'
            alt='Georgios Kotziabassis'
            width='416'
            height='416'
          />
        </picture>

        <div className='h-12' />

        {/* Social Media Links */}
        <div className='flex justify-evenly max-w-xs mx-auto'>
          <a
            className='focus:text-pink-600 focus:outline-none'
            href='https://github.com/aeorge'
            aria-label='GitHub'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='w-8 h-8 fill-current transition duration-200 ease-in-out hover:text-pink-600'
              viewBox='0 0 512 512'
            >
              <path
                d='M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
                c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
                c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
                c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
                c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
                c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
                c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
                c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
                c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z'
              />
            </svg>
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none'
            href='https://twitter.com/kotziabassis'
            aria-label='Twitter'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='w-8 h-8 fill-current transition duration-200 ease-in-out hover:text-pink-600'
              viewBox='0 0 512 512'
            >
              <path
                d='M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                C480.224,136.96,497.728,118.496,512,97.248z'
              />
            </svg>
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none'
            href='https://linkedin.com/in/kotziabassis'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='w-8 h-8 fill-current transition duration-200 ease-in-out hover:text-pink-600'
              viewBox='0 0 512 512'
            >
              <circle cx='56' cy='56' r='56' />
              <rect y='160' width='114.496' height='352' />
              <path
                d='M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896
                c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320
                c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z'
              />
            </svg>
          </a>
          <a
            className='focus:text-pink-600 focus:outline-none'
            href='https://xing.com/profile/Georgios_Kotziabassis/cv'
            aria-label='Xing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='w-8 h-8 fill-current transition duration-200 ease-in-out hover:text-pink-600'
              viewBox='0 0 512 512'
            >
              <polygon points='149.216,96 36.448,96 101.696,210.912 16,352 128.768,352 214.464,210.912' />
              <polygon points='496,0 376.384,0 198.688,311.264 313.184,512 432.8,512 318.304,311.264' />
            </svg>
          </a>
        </div>

        <div className='h-6' />

        {/* Separator */}
        <hr className='border-2 rounded-full border-gray-900' />

        <div className='h-12' />

        {/* About me */}
        <div className='leading-8'>
          <h3 className='text-2xl font-bold text-pink-600'>// About me</h3>
          <div className='h-4' />
          <p className='text-xl'>
            Hello friends! 👋
            <br />
            My name is Georgios Kotziabassis and I am a Junior Software
            Developer from{' '}
            <a
              className='text-pink-700 focus:outline-none'
              href='https://goo.gl/maps/NB7WMUHMgNmRc1TU6'
              target='_blank'
              rel='noopener noreferrer'
            >
              Backnang, Germany
            </a>
            . I graduated from{' '}
            <a
              className='text-pink-700 focus:outline-none'
              href='https://www.hft-stuttgart.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              HFT Stuttgart
            </a>{' '}
            with a bachelor's degree in computer science in the summer of 2019.
            I like to work with JavaScript, mainly in the front end, although I
            have experience with back-end development, too.
            <br />
            <br />
            You can check out my{' '}
            <a
              className='text-pink-700 focus:outline-none'
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
        <div className='leading-8'>
          <h3 className='text-2xl font-bold text-pink-600'>// Tech Stack</h3>
          <div className='h-4' />
          <p className='text-xl'>
            I have experience and have worked on projects with the following
            technologies.
          </p>
          <div className='h-4' />
          <div className='flex flex-wrap -mb-4'>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              HTML5
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              CSS3
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              JavaScript
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              React
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              React Native
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Next.js
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Gatsby
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Tailwind CSS
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Node.js
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              MongoDB
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Jest
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Git
            </div>
            <div className='mb-4 mr-4 py-2 px-4 border-2 rounded-lg border-gray-900 leading-6 text-center select-none hover:border-pink-600 hover:text-pink-600'>
              Figma
            </div>
          </div>
        </div>

        <div className='h-12' />

        {/* Projects */}
        <div className='leading-8'>
          <h3 className='text-2xl font-bold text-pink-600'>// Projects</h3>
          <div className='h-4' />
          <div className='flex flex-col space-y-2'>
            <div>
              <h4 className='text-xl font-bold'>PWG</h4>
              <p className='text-xl'>
                A simple website for generating secure, random passwords.
              </p>
            </div>
            <picture>
              <source srcSet='/projects/pwg-snapshot.webp' type='image/webp' />
              <source srcSet='/projects/pwg-snapshot.png' type='image/png' />
              <img
                className='w-full rounded-lg'
                src='/projects/pwg-snapshot.png'
                alt='PWG'
                width='624'
                height='351'
              />
            </picture>
            <div className='flex space-x-2'>
              <a
                className='w-full py-2 px-4 rounded-lg leading-6 text-center text-white bg-gray-900 transition duration-200 ease-in-out hover:bg-pink-600 focus:bg-pink-600 focus:outline-none'
                href='https://pwg-blue.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Site
              </a>
              <a
                className='w-full py-2 px-4 rounded-lg leading-6 text-center text-white bg-gray-900 transition duration-200 ease-in-out hover:bg-pink-600 focus:bg-pink-600 focus:outline-none'
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
        <div className='leading-8'>
          <p className='text-xl text-center'>Do you have any questions?</p>
          <div className='h-4' />
          <a
            className='block w-full mx-auto p-4 rounded-lg leading-6 text-center text-white bg-gray-900 transition duration-200 ease-in-out hover:bg-pink-600 focus:bg-pink-600 focus:outline-none sm:w-64'
            href='mailto:kotziabassis@gmail.com'
          >
            Contact Me
          </a>
        </div>

        <div className='h-12' />
      </main>
    </div>
  )
}

export default Home
