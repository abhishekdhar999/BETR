import React from 'react';
import '../App.css';

export default function Founders() {
  return (
    <div className='all my-24 bg-[#fcfef6]'>
      <div className='heading flex justify-center text-3xl'>
        <h1 className='tag mt-12 font-futura'>MEET THE FOUNDERS</h1>
      </div>

      <div className="sub-heading flex justify-center items-center mx-auto text-center text-[13px] my-6 max-w-[1000px]">
        <p className='font-futura text-lg md:text-xl lg:text-xl xl:text-xl'>
          Betr India Foodworks is spearheaded by a dynamic trio of co-founders, whose blend of expertise & collective vision fuels the company's trajectory toward success. With a solid foundation laid by the leadership, the company boasts a robust team structure comprising 5 seasoned advisors and a dedicated core team of 15 individuals.
        </p>
      </div>

      <div className='founders flex flex-col md:flex-row mx-12 mt-20'>
        {/* Founder 1 */}
        <div className='founder mx-4 my-4 md:w-1/3'>
          {/* Founder Image */}
          <div className='img mb-4'>
            <div className='bg-[#d2e5b6] h-16 w-16 rounded-full'></div>
          </div>
          {/* Founder Name */}
          <div className='name my-2'>
            <h1 className='font-futura text-lg font-bold'>MR CHETAN PRADHAN</h1>
          </div>
          {/* Underline */}
          <div className='underline bg-black h-[0.7px] w-auto my-4'></div>
          {/* Founder Intro */}
          <div className='intro'>
            <p className='text-[16px] text-justify font-futura'>
              Introducing Chetan Pradhan, a 28-year-old innovator and entrepreneur, Founder of BETR India Foodworks. Chetan's journey is characterized by a diverse skill set and a forward-thinking approach.
            </p>
            <p className='text-[16px] text-justify font-futura'>
              <br />After completing his Master's in Business Commerce, Chetan delved into the intricacies of founding a real estate development firm, gaining valuable insights from 2015 to 2018. In 2018, he pivoted remarkably, opening a health food restaurant that reflected his commitment to wellness and culinary innovation. Chetan's expertise extends beyond the surface, encompassing the core operations of the F&B business. This hands-on experience distinguishes him as a leader with a deep understanding of the industry-from culinary intricacies to operational efficiency. His strategic vision, honed by both academic and practical knowledge, promises a unique blend of innovation and operational excellence.
            </p>
          </div>
        </div>
        
        {/* Founder 2 */}
        <div className='founder mx-4 my-4 md:w-1/3'>
          {/* Founder Image */}
          <div className='img mb-4'>
            <div className='bg-[#d2e5b6] h-16 w-16 rounded-full'></div>
          </div>
          {/* Founder Name */}
          <div className='name my-2'>
            <h1 className='font-futura text-lg font-bold'>DR REKHA</h1>
          </div>
          {/* Underline */}
          <div className='underline bg-black h-[0.7px] w-auto my-4'></div>
          {/* Founder Intro */}
          <div className='intro'>
            <p className='text-[16px] text-justify font-futura'>
              Meet Dr. Rekha, a trailblazing founder of Betr India Foodworks and a distinguished healthcare professional. Currently serving as an Assistant Professor in one of Delhi's most prestigious hospitals, Dr. Rekha boasts over 15 years of invaluable experience as a seasoned doctor.
            </p>
            <br />
            <p className='text-[16px] text-justify font-futura'>
              Beyond her role in the startup, Dr. Rekha's influence in the healthcare sector is notable. She is a trusted advisor and mentor on the panels of various hospitals, contributing her insights to shape the industry's future.
            </p>
            <br />
            <p className='text-[16px] text-justify font-futura'>
              In addition to her medical expertise, Dr. Rekha is a powerhouse of knowledge in nutrition, people management, and training. This multifaceted skill set positions her as a key architect in the foundation of Betr India Foodworks. Her name stands synonymous with a commitment to excellence and well-being, making Betr India Foodworks a formidable player in the F&B industry under her visionary leadership.
            </p>
          </div>
        </div>

        {/* Founder 3 */}
        <div className='founder mx-4 my-4 md:w-1/3'>
          {/* Founder Image */}
          <div className='img mb-4'>
            <div className='bg-[#d2e5b6] h-16 w-16 rounded-full'></div>
          </div>
          {/* Founder Name */}
          <div className='name my-2'>
            <h1 className='font-futura text-lg font-bold'>MR ARJUN</h1>
          </div>
          {/* Underline */}
          <div className='underline bg-black h-[0.7px] w-auto my-4'></div>
          {/* Founder Intro */}
          <div className='intro'>
            <p className='text-[16px] text-justify font-futura'>
              Meet Mr. Arjun, an instrumental founder of Betr India Foodworks and a seasoned professional with over 15 years of expertise in the media industry.
            </p>
            <br />
            <p className='text-[16px] text-justify font-futura'>
              Arjun's most recent role as an executive associate producer in Asia's largest sports network underscores his significant contributions to the Media Sector.
            </p>
            <br />
            <p className='text-[16px] text-justify font-futura'>
              Arjun brings a wealth of knowledge encompassing media production, strategy, and execution. Leading a dynamic team of 35 executives, he has successfully executed media production for various Indian sports leagues. His adept strategic vision and hands-on leadership have made a lasting impact on the landscape of media production.
            </p>
            <br />
            <p className='text-[16px] text-justify font-futura'>
              As a key figure in Betr India Foodworks, Arjun's multifaceted experience in the media industry uniquely positions the startup for success. His name is synonymous with effective team leadership and strategic execution, making BETR India Foodworks a dynamic and promising venture under his guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
