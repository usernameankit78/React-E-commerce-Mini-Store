import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div className="pt-8 border-t">
      {/* ABOUT US Section */}
      <div className="text-2xl text-start">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img
          className="w-full md:max-w-[450px] object-cover"
          src={assets.about_img}
          alt="About"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio optio minus,
            voluptates aspernatur ducimus incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate est cum eum veritatis autem porro et non voluptas voluptates! sint reiciendis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus mollitia sunt praesentium id dolore accusantium fugiat nemo tempore sit officiis.id quos doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, aut.consectetur adipisicing elit. Vitae ex tenetur
            dolorum omnis in eos deserunt velit aspernatur vel illo iste ab! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nesciunt porro, veritatis aperiam vitae non reprehenderit, quia dignissimos dolores quo aliquid. Blanditiis voluptate quasi amet unde asperiores? Odio, vero cumque!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ea! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam. consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet eaque deleniti soluta maxime obcaecati aperiam voluptates quaerat amet cum. adipisicing elit. Eum exercitationem,
            cupiditate harum non ullam nesciunt omnis nam odio incidunt deleniti.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="text-2xl text-start py-10">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      {/* Feature Boxes */}
      <div className="flex flex-col md:flex-row gap-6 text-sm mb-20 px-4">
        <div className="border border-gray-400 px-15 py-15 flex flex-col gap-5 text-start md:w-1/3">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum est eligendi porro eius dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti.
          </p>
        </div>
        <div className="border border-gray-400 px-15 py-15 flex flex-col gap-5 text-start md:w-1/3">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, vero?sit amet consectetur adipisicing elit. Odio eum est eligendi porro eius dolore.
          </p>
        </div>
        <div className="border border-gray-400 px-15 py-15 flex flex-col gap-5 text-start md:w-1/3">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nemo! sit amet consectetur adipisicing elit. Odio eum est eligendi porro eius dolore.
          </p>
        </div>
        
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
