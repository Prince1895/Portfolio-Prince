import React, { useState } from 'react';
import { Link } from '@radix-ui/themes';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLivechat } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { toast } from 'react-hot-toast';

import { AuroraText } from './magicui/aurora-text';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // This function will now handle opening the email client
    const handleEmailClick = () => {
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        // Create the mailto link with encoded subject and body
        const subject = encodeURIComponent(`New Portfolio Message from ${email}`);
        const body = encodeURIComponent(`Message from: ${email}\n\nMessage:\n${message}`);
        
        const mailtoUrl = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
        
        // Open the user's default email client
        window.location.href = mailtoUrl;

        // Optionally, clear the form after the action
        // setEmail('');
        // setMessage('');
    };

    return (
        <div
            className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-24 pb-8 "
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            id='contact-section' >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                <AuroraText> Get in touch </AuroraText>
            </h2>

            <div className={`w-full flex flex-col gap-3 px-36 max-sm:px-4 mt-10`}>
                <div>
                    <h2 className="text-lg max-sm:text-base">Have a Question? Let&apos;s Chat!</h2>
                </div>

                <div className="flex gap-3 mt-2">
                    <Link href="https://www.linkedin.com/in/prince1184/" target="_blank">
                        <button className="transition-all duration-300 hover:scale-[1.03] bg-[#4ADE80] text-black py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#42bc6f]">
                            <SiLivechat className="h-[18px] w-[18px]" /> Connect on LinkedIn
                        </button>
                    </Link>

                    <Link href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince" target="_blank">
                        <button className="transition-all duration-300 hover:scale-[1.03] bg-[#1D9BF0] text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]">
                            <FaXTwitter className="h-[18px] w-[18px]" /> Chat on X
                        </button>
                    </Link>
                </div>

                
            </div>
        </div>
    );
};

export default Contact;