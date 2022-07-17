import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const Social = () => {
    const socialLinks = [
        {
            "id": 1,
            "route": "https://www.linkedin.com/in/montasim",
            "icon": <AiFillLinkedin />
        },
        {
            "id": 2,
            "route": "https://github.com/montasim",
            "icon": <AiFillGithub />
        },
        {
            "id": 3,
            "route": "https://www.facebook.com/montasimmamun/",
            "icon": <AiFillFacebook />
        }
    ];

    return (
        <section className='fixed bottom-0 left-0 ml-10 mr-20 px-2 hidden lg:block md:block'>
            <div className='flex flex-col gap-y-6 justify-center'>
                {
                    socialLinks.map(socialLink =>
                        <a key={socialLink.id} className='text-2xl hover:text-primary' href={socialLink.route} target='_blank' rel="noreferrer">{socialLink.icon}</a>)
                }
                <div className='bg-white h-20 w-0.5 ml-[10px]'></div>
            </div>
        </section>
    );
};

export default Social;