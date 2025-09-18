import BaseWrapper from '@/components/common/BaseWrapper';
import Tag from '@/components/common/Tag';
import { Button, Divider } from 'antd';
import { Verified } from 'lucide-react';

function Profile() {
    const profile = {
        username: 'briandang',
        fullname: 'Dang Viet Quang',
        title: 'Front-end Developer',
        hourlyRate: 10,
        location: 'Ho Chi Minh City',
        information: `I’m a Front-End Developer with 2 years of hands-on experience building
interactive, mobile-responsive, and real-time web apps using React, Vue,
Next.js, Nuxt.js, and Node.js. I enjoy solving front-end performance
challenges, building clean REST APIs, and integrating real-time
communication features via WebSocket and WebRTC. ...`,

        experience: [
            {
                company: 'TechCorp',
                title: 'Front-end Developer',
                from: 'Jan 2023',
                to: 'Present',
                description: 'Developed internal dashboards and improved Lighthouse scores by 30%.',
            },
            {
                company: 'StartUpX',
                title: 'Junior Front-end Dev',
                from: '2021',
                to: '2022',
                description: 'Built landing pages and integrated REST API with React.',
            },
        ],

        featuredProjects: [
            {
                name: 'Chat & Notification System',
                stack: 'React + WebSocket + Node.js',
                description:
                    'Custom chat module with online presence, typing indicator, realtime message delivery.',
            },
            {
                name: 'E-commerce UI Clone',
                stack: 'Next.js + TailwindCSS',
                description:
                    'Responsive storefront with reusable components and optimized page speed.',
            },
        ],

        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Vue',
            'TailwindCSS',
        ],
        contacts: ['LinkedIn', 'GitHub', 'Email'],
        languages: ['English (B2)', 'Vietnamese (Native)'],
        education: ['Bachelor of Computer Science – HCMUS'],
        availability: ['Weekdays 9am-5pm', 'Available for part-time projects'],
    };

    return (
        <BaseWrapper className="mt-[2rem]">
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-[1rem]">
                <div className="flex items-center gap-[2rem]">
                    <div className="size-[6rem] rounded-full bg-background flex items-center justify-center">
                        <p className="text-[2.4rem] font-bold uppercase">
                            {profile.username.charAt(0)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.2rem]">
                        <div className="flex items-center gap-[1rem]">
                            <h2 className="text-[2.4rem] font-semibold text-foreground text-nowrap">
                                {profile.fullname}
                            </h2>
                            <Verified />
                        </div>
                        <h3 className="text-[1.4rem] font-normal">{profile.title}</h3>
                    </div>
                </div>
                <Button type="primary">Edit profile</Button>
            </div>

            <Divider />

            <div className="mt-[2rem] grid grid-cols-1 lg:grid-cols-[70%_28.5%] gap-[1rem] md:gap-[2rem]">
                <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
                    <div className="p-[2rem] rounded-[1rem] bg-background">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[1.8rem] font-semibold mb-[2rem]">Hourly</h3>
                            <p className="text-[1.6rem]">${profile.hourlyRate}/hr</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-[1.8rem] font-semibold mb-[2rem]">Location</h3>
                            <p className="text-[1.6rem]">{profile.location}</p>
                        </div>
                        <h3 className="text-[1.8rem] font-semibold mb-[2rem]">Information</h3>
                        <p className="text-[1.4rem] whitespace-pre-line">{profile.information}</p>
                    </div>

                    <div className="p-[2rem] rounded-[1rem] bg-background">
                        <h3 className="text-[1.8rem] font-semibold mb-[2rem]">Experience</h3>
                        <div className="flex flex-col gap-[2rem]">
                            {profile.experience.map((exp, i) => (
                                <div
                                    key={i}
                                    className="border-l-[0.2rem] border-l-border pl-[1rem]"
                                >
                                    <p className="text-[1.4rem] font-semibold">
                                        {exp.title} – {exp.company}
                                    </p>
                                    <p className="text-[1.2rem] text-gray-500">
                                        {exp.from} → {exp.to}
                                    </p>
                                    <p className="text-[1.4rem]">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-[2rem] rounded-[1rem] bg-background">
                        <h3 className="text-[1.8rem] font-semibold mb-[2rem]">Featured Projects</h3>
                        <div className="flex flex-col gap-[2rem]">
                            {profile.featuredProjects.map((proj, i) => (
                                <div
                                    key={i}
                                    className="border-l-[0.2rem] border-l-border pl-[1rem]"
                                >
                                    <p className="text-[1.4rem] font-semibold">{proj.name}</p>
                                    <p className="text-[1.2rem] text-gray-500">{proj.stack}</p>
                                    <p className="text-[1.4rem]">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
                    {[
                        { title: 'Skills', items: profile.skills },
                        { title: 'Contacts', items: profile.contacts },
                        { title: 'Languages', items: profile.languages },
                        { title: 'Education', items: profile.education },
                        { title: 'Availability', items: profile.availability },
                    ].map((section, i) => (
                        <div key={i} className="p-[2rem] rounded-[1rem] bg-background">
                            <h3 className="text-[1.8rem] font-semibold mb-[2rem]">
                                {section.title}
                            </h3>
                            <div className="flex flex-wrap gap-[0.4rem]">
                                {section.items.map((item, j) => (
                                    <Tag key={j} name={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BaseWrapper>
    );
}

export default Profile;
