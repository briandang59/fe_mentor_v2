import BaseWrapper from '@/components/common/BaseWrapper';
import Tag from '@/components/common/Tag';
import { APIS } from '@/lib/apis';
import { Profile as ProfileUser } from '@/types/responses/profile';
import { Button, Divider } from 'antd';
import { Verified, Clock, Briefcase, Globe, Mail, GraduationCap, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

async function Profile() {
    const res = await APIS.profile.server.getMe();
    const profile: ProfileUser | undefined = res?.data;

    if (!profile) {
        return (
            <div className="text-center text-red-500">Error loading profile. Please try again.</div>
        );
    }

    const availabilityStrings = profile.available_times.map(
        (time) => `${time.day}: ${time.from} - ${time.to}`,
    );

    const contactItems = [
        { label: 'Phone', value: profile.contact_information.phone, isLink: false },
        { label: 'LinkedIn', value: profile.contact_information.linkedin, isLink: true },
        { label: 'Facebook', value: profile.contact_information.facebook, isLink: true },
        { label: 'Zalo', value: profile.contact_information.zalo, isLink: false },
        { label: 'Telegram', value: profile.contact_information.telegram, isLink: false },
        { label: 'X', value: profile.contact_information.x, isLink: true },
        { label: 'GitHub', value: profile.contact_information.github, isLink: true },
        { label: 'Twitter', value: profile.contact_information.twitter, isLink: true },
        { label: 'Website', value: profile.contact_information.website, isLink: true },
    ].filter((item) => item.value);

    const educationStrings = profile.educations.map(
        (edu) =>
            `${edu.name} - ${edu.object} (${new Date(edu.from).toLocaleDateString()} to ${
                edu.to ? new Date(edu.to).toLocaleDateString() : 'Present'
            })`,
    );

    return (
        <BaseWrapper className="mt-[2rem] max-w-7xl mx-auto">
            {' '}
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-[1.5rem] mb-[2rem]">
                <div className="flex items-center gap-[2rem]">
                    <div className="size-[7rem] rounded-full bg-background flex items-center justify-center shadow-md ring-2 ring-border overflow-hidden">
                        {' '}
                        {profile.profile_image?.url ? (
                            <Image
                                src={profile.profile_image.url}
                                width={1000}
                                height={1000}
                                alt="Profile Image"
                                className="size-full object-cover"
                                priority
                            />
                        ) : (
                            <p className="text-[3rem] font-bold uppercase text-primary">
                                {profile.user.username.charAt(0)}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-[0.4rem]">
                        <div className="flex items-center gap-[1rem]">
                            <h2 className="text-[2.4rem] font-semibold text-foreground text-nowrap">
                                {profile.fullname}
                            </h2>
                            {profile.user.is_verified && (
                                <Verified className="text-blue-500" size={24} />
                            )}{' '}
                        </div>
                        <h3 className="text-[1.6rem] font-medium text-muted-foreground">
                            {profile.title}
                        </h3>{' '}
                    </div>
                </div>
                <Button type="primary" size="large" className="w-fit">
                    Edit profile
                </Button>{' '}
                {/* Lớn hơn */}
            </div>
            <Divider className="my-[2rem]" />
            <div className="grid grid-cols-1 lg:grid-cols-[70%_28.5%] gap-[2rem]">
                <div className="flex flex-col gap-[2rem]">
                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        {' '}
                        <div className="flex items-center justify-between mb-[1rem]">
                            <h3 className="text-[1.8rem] font-semibold">Hourly Rate</h3>{' '}
                            <p className="text-[1.6rem] font-bold text-primary">
                                ${profile.hourly_rate}/hr
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-[1rem]">
                            <h3 className="text-[1.8rem] font-semibold">Location</h3>
                            <p className="text-[1.6rem] flex items-center gap-1">
                                <Globe size={16} /> {profile.location}
                            </p>{' '}
                        </div>
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem]">About Me</h3>{' '}
                        <div
                            className="text-[1.4rem] prose prose-invert prose-headings:text-foreground prose-a:text-blue-500 max-w-none leading-relaxed" // Cải thiện prose
                            dangerouslySetInnerHTML={{ __html: profile.profile_overview }}
                        />
                    </div>

                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem] flex items-center gap-2">
                            <Briefcase size={20} /> Experience
                        </h3>
                        <div className="flex flex-col gap-[2.5rem]">
                            {profile.experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    className="border-l-[0.3rem] border-l-primary pl-[1.5rem] hover:bg-muted/50 transition p-[1rem] rounded-md" // Hover effect
                                >
                                    <p className="text-[1.5rem] font-semibold">
                                        {exp.title} – {exp.company}
                                    </p>
                                    <p className="text-[1.2rem] text-muted-foreground italic">
                                        {new Date(exp.from).toLocaleDateString()} →{' '}
                                        {exp.to ? new Date(exp.to).toLocaleDateString() : 'Present'}
                                    </p>
                                    <p className="text-[1.4rem] mt-[0.5rem]">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem] flex items-center gap-2">
                            <Code size={20} /> Featured Projects
                        </h3>
                        <div className="flex flex-col gap-[2.5rem]">
                            {profile.portfolios.map((proj) => (
                                <div
                                    key={proj.id}
                                    className="border-l-[0.3rem] border-l-primary pl-[1.5rem] hover:bg-muted/50 transition p-[1rem] rounded-md"
                                >
                                    <p className="text-[1.5rem] font-semibold">{proj.title}</p>
                                    <p className="text-[1.2rem] text-muted-foreground italic">
                                        {proj.job_title} ({proj.time_period})
                                    </p>
                                    <p className="text-[1.4rem] mt-[0.5rem]">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[2rem] lg:sticky lg:top-[8rem] self-start">
                    {' '}
                    {[
                        {
                            title: 'Skills',
                            items: profile.skills.map((s) => s.tag_name),
                            icon: <Code size={20} />,
                        },
                        { title: 'Contacts', items: contactItems, icon: <Mail size={20} /> },
                        {
                            title: 'Languages',
                            items: profile.languages.map((l) => l.name),
                            icon: <Globe size={20} />,
                        },
                        {
                            title: 'Education',
                            items: educationStrings,
                            icon: <GraduationCap size={20} />,
                        },
                        {
                            title: 'Availability',
                            items: availabilityStrings,
                            icon: <Clock size={20} />,
                        },
                    ].map((section, i) => (
                        <div
                            key={i}
                            className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm"
                        >
                            <h3 className="text-[1.8rem] font-semibold mb-[1.5rem] flex items-center gap-2">
                                {section.icon} {section.title}
                            </h3>
                            <div className="flex flex-wrap gap-[0.6rem]">
                                {section.items.map(
                                    (
                                        item:
                                            | string
                                            | { label: string; value: string; isLink: boolean },
                                        j,
                                    ) => {
                                        if (typeof item === 'string') {
                                            return <Tag key={j} name={item} />;
                                        } else {
                                            return item.isLink ? (
                                                <Link
                                                    key={j}
                                                    href={item.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Tag
                                                        name={`${item.label}: ${item.value}`}
                                                        className="hover:bg-primary/80"
                                                    />{' '}
                                                </Link>
                                            ) : (
                                                <Tag
                                                    key={j}
                                                    name={`${item.label}: ${item.value}`}
                                                />
                                            );
                                        }
                                    },
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BaseWrapper>
    );
}

export default Profile;
