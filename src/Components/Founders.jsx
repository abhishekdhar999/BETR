import React from 'react';
import '../App.css';

export default function Founders() {
  return (
    <div id='founders' className=' bg-[#fcf5e8] '>
      <div className='all p-16 pt-36 px-4 lg:px-0 overflow-hidden'>
        <div className="sub-heading flex justify-center items-center md:mx-36 mx-auto  text-center text-[13px] my-12 ">
          <p className='font-futura text-2xl md:text-3xl lg:text-3xl xl:text-3xl my-6'>
            Betr India Foodworks is spearheaded by a dynamic trio of co-founders, whose blend of expertise & collective vision fuels the company's trajectory toward success. With a solid foundation laid by the leadership, the company boasts a robust team structure comprising 5 seasoned advisors and a dedicated core team of 15 individuals.
          </p>
        </div>

        <div className=' flex flex-col md:flex-row  justify-center md:justify-between mx-auto md:mx-24 mt-6 '>
          {/* Founder 1 */}
          <div className='founder ml-6 my-6 md:w-[32%] mx-4'>
            {/* Founder Image */}
            <div className='img mb-4'>
              {/* Placeholder for Image */}
            </div>
            {/* Founder Name */}
            <div className='name my-2'>
              <h1 className='font-futura text-lg font-normal text-center md:text-left'>MR CHETAN PRADHAN</h1>
            </div>
            {/* Underline */}
            <div className='underline bg-black h-[0.7px] w-full my-4'></div>
            {/* Founder Intro */}
            <div className='intro'>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                Introducing Chetan Pradhan, a 28-year-old innovator and entrepreneur, Founder of BETR India Foodworks. Chetan's journey is characterized by a diverse skill set and a forward-thinking approach.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                After completing his Master's in Business Commerce, Chetan delved into the intricacies of founding a real estate development firm, gaining valuable insights from 2015 to 2018. In 2018, he pivoted remarkably, opening a health food restaurant that reflected his commitment to wellness and culinary innovation. Chetan's expertise extends beyond the surface, encompassing the core operations of the F&B business. This hands-on experience distinguishes him as a leader with a deep understanding of the industry-from culinary intricacies to operational efficiency. His strategic vision, honed by both academic and practical knowledge, promises a unique blend of innovation and operational excellence.
              </p>
            </div>
          </div>
          
          {/* Founder 2 */}
          <div className='founder ml-6 my-6 md:w-[32%] mx-4 '>
            {/* Founder Image */}
            <div className='img mb-4'>
              {/* Placeholder for Image */}
            </div>
            {/* Founder Name */}
            <div className='name my-2'>
              <h1 className='font-futura text-lg font-normal text-center md:text-left'>DR REKHA</h1>
            </div>
            {/* Underline */}
            <div className='underline bg-black h-[0.7px] w-full my-4'></div>
            {/* Founder Intro */}
            <div className='intro'>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                Meet Dr. Rekha, a trailblazing founder of Betr India Foodworks and a distinguished healthcare professional. Currently serving as an Assistant Professor in one of Delhi's most prestigious hospitals, Dr. Rekha boasts over 15 years of invaluable experience as a seasoned doctor.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                Beyond her role in the startup, Dr. Rekha's influence in the healthcare sector is notable. She is a trusted advisor and mentor on the panels of various hospitals, contributing her insights to shape the industry's future.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                In addition to her medical expertise, Dr. Rekha is a powerhouse of knowledge in nutrition, people management, and training. This multifaceted skill set positions her as a key architect in the foundation of Betr India Foodworks. Her name stands synonymous with a commitment to excellence and well-being, making Betr India Foodworks a formidable player in the F&B industry under her visionary leadership.
              </p>
            </div>
          </div>

          {/* Founder 3 */}
          <div className='founder ml-6 my-6 md:w-[32%] mx-4'>
            {/* Founder Image */}
            <div className='img mb-4'>
              {/* Placeholder for Image */}
            </div>
            {/* Founder Name */}
            <div className='name my-2'>
              <h1 className='font-futura text-lg font-normal text-center md:text-left'>MR ARJUN</h1>
            </div>
            {/* Underline */}
            <div className='underline bg-black h-[0.7px] w-full my-4'></div>
            {/* Founder Intro */}
            <div className='intro'>
              <p className='text-[14px] text-justify font-futura font-normal'>
                Meet Mr. Arjun, an instrumental founder of Betr India Foodworks and a seasoned professional with over 15 years of expertise in the media industry.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                Arjun's most recent role as an executive associate producer in Asia's largest sports network underscores his significant contributions to the Media Sector.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal mt-4'>
                Arjun brings a wealth of knowledge encompassing media production, strategy, and execution. Leading a dynamic team of 35 executives, he has successfully executed media production for various Indian sports leagues. His adept strategic vision and hands-on leadership have made a lasting impact on the landscape of media production.
              </p>
              <p className='text-[14px] text-justify font-futura font-normal-4'>
                As a key figure in Betr India Foodworks, Arjun's multifaceted experience in the media industry uniquely positions the startup for success. His name is synonymous with effective team leadership and strategic execution, making BETR India Foodworks a dynamic and promising venture under his guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
