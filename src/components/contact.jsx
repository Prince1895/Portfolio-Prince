import React, { useState } from 'react';
import { Link } from '@radix-ui/themes';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLivechat } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { AuroraText } from './magicui/aurora-text';


const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailSending, setIsEmailSending] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmailMessage = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsEmailSending(true);
        try {
           const response = await axios.post(process.env.VITE_API_BASE + '/contact', {
  email,
  message,
});
            if (response.data.success) {
                toast.success(response.data.message);
                setEmail('');
                setMessage('');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsEmailSending(false);
        }
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

                <div className="mt-6">
                    <h2 className="text-lg text-start max-sm:text-base">Reach Out via Email</h2>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-4 w-full">
                        <form className="flex flex-col gap-4" onSubmit={sendEmailMessage}>
                            <div className="grid w-full gap-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input
                                    id="email"
                                    type="text"
                                    className="w-full border"
                                    placeholder="johndoe69@xyz.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="grid w-full gap-2">
                                <Label htmlFor="message">Your Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Type your message here."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    minLength={5}
                                />
                            </div>

                            <Button className="mt-3 transition-all duration-300 hover:scale-105" disabled={isEmailSending}>
                                {isEmailSending ? 'Sending Message...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
