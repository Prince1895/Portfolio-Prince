import React, { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLivechat } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'react-hot-toast';
import { AuroraText } from './magicui/aurora-text';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address.');
            return;
        }
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        if (!message) {
            toast.error('Please enter a message.');
            return;
        }

        const subject = encodeURIComponent(`New Portfolio Message from ${email}`);
        const body = encodeURIComponent(`Message from: ${email}\n\nMessage:\n${message}`);
        
        const mailtoUrl = `mailto:chauhanprince21153366@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoUrl;
        toast.success('Opening your mail client...');
    };

    return (
        <div
            className="w-full px-4 sm:px-8 max-w-4xl mx-auto mt-24 pb-8 flex flex-col items-center"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            id='contact-section'
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
                <AuroraText>Get in touch</AuroraText>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base text-center max-w-lg mb-12">
                Have a question or want to work together? Let's connect or drop me a message.
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                
                {/* Left side: Social Links Card */}
                <div className="md:col-span-2 bg-zinc-950/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100">Let's Chat!</h3>
                        <p className="text-xs text-zinc-400 mt-1">Connect with me on social platforms for a faster response.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a 
                            href="https://www.linkedin.com/in/prince1184/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-4 bg-[#0077B5] hover:bg-[#006297] text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <SiLivechat className="h-4 w-4" /> Connect on LinkedIn
                        </a>

                        <a 
                            href="https://twitter.com/intent/follow?screen_name=Chauhan18Prince" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm rounded-xl border border-white/5 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <FaXTwitter className="h-4 w-4" /> Follow on X
                        </a>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                            <IoMailOutline className="text-base text-zinc-300" />
                            <span>chauhanprince21153366@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Right side: Email Form */}
                <form 
                    onSubmit={handleEmailClick}
                    className="md:col-span-3 bg-zinc-950/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 space-y-4 w-full"
                >
                    <div className="space-y-1.5 text-left">
                        <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-zinc-300">Your Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-white/5 bg-zinc-900/50 text-white focus-visible:ring-blue-500/50 rounded-xl"
                        />
                    </div>

                    <div className="space-y-1.5 text-left">
                        <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-zinc-300">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="How can I help you?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border-white/5 bg-zinc-900/50 text-white min-h-[120px] focus-visible:ring-blue-500/50 rounded-xl"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.01]"
                    >
                        Send Mail Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;