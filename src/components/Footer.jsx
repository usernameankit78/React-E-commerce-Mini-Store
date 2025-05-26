import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, reiciendis.consectetur adipisicing elit. Suscipit laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis? eum illum! Sequi, facere. Id.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About as</li>
                    <li>Delevery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 -123-456-789</li>
                    <li>Contact@foreveryou.com</li>
                </ul>
            </div>
        </div>

            <div>
                <hr className='border-gray-600' />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Forever.com - All Right Reserved.</p>
            </div>

    </div>
  )
}

export default Footer