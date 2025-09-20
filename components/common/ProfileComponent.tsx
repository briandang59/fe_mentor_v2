import BaseWrapper from '@/components/common/BaseWrapper';
import Tag from '@/components/common/Tag';
import { Profile } from '@/types/responses/profile';
import { Button, Divider } from 'antd';
import dayjs from 'dayjs';
import { Verified, Clock, Briefcase, Globe, Mail, GraduationCap, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileComponentProps {
    profile: Profile;
    type?: 'public' | 'private';
}

async function ProfileComponent({ profile, type = 'private' }: ProfileComponentProps) {
    const availabilityStrings = (profile.available_times ?? []).map(
        (time) => `${time.day}: ${time.from} - ${time.to}`,
    );

    const contactItems = [
        { label: 'Phone', value: profile.contact_information?.phone, isLink: false },
        { label: 'LinkedIn', value: profile.contact_information?.linkedin, isLink: true },
        { label: 'Facebook', value: profile.contact_information?.facebook, isLink: true },
        { label: 'Zalo', value: profile.contact_information?.zalo, isLink: false },
        { label: 'Telegram', value: profile.contact_information?.telegram, isLink: false },
        { label: 'X', value: profile.contact_information?.x, isLink: true },
        { label: 'GitHub', value: profile.contact_information?.github, isLink: true },
        { label: 'Twitter', value: profile.contact_information?.twitter, isLink: true },
        { label: 'Website', value: profile.contact_information?.website, isLink: true },
    ].filter((item) => item.value);

    return (
        <BaseWrapper className="mt-[2rem] max-w-7xl mx-auto">
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-[1.5rem] mb-[2rem]">
                <div className="flex items-center gap-[2rem]">
                    <div className="size-[7rem] lg:size-[10rem] rounded-full bg-background flex items-center justify-center shadow-md ring-2 ring-border overflow-hidden">
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
                            )}
                        </div>
                        <h3 className="text-[1.6rem] font-medium text-muted-foreground">
                            {profile.title}
                        </h3>
                    </div>
                </div>
                {type === 'private' && (
                    <Button type="primary" size="large" className="w-fit">
                        Edit profile
                    </Button>
                )}
            </div>

            <Divider className="my-[2rem]" />

            <div className="grid grid-cols-1 lg:grid-cols-[70%_28.5%] gap-[2rem]">
                {/* LEFT */}
                <div className="flex flex-col gap-[2rem]">
                    {/* About Me */}
                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        <div className="flex items-center justify-between mb-[1rem]">
                            <h3 className="text-[1.8rem] font-semibold">Hourly Rate</h3>
                            <p className="text-[1.6rem] font-bold text-primary">
                                ${profile.hourly_rate}/hr
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-[1rem]">
                            <h3 className="text-[1.8rem] font-semibold">Location</h3>
                            <p className="text-[1.6rem] flex items-center gap-1">
                                <Globe size={16} /> {profile.location}
                            </p>
                        </div>
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem]">About Me</h3>
                        <div
                            className="text-[1.4rem] prose prose-invert prose-headings:text-foreground prose-a:text-blue-500 max-w-none leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: profile.profile_overview }}
                        />
                    </div>

                    {/* Experience */}
                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem] flex items-center gap-2">
                            <Briefcase size={20} /> Experience
                        </h3>
                        <div className="flex flex-col gap-[2.5rem]">
                            {(profile.experiences ?? []).map((exp) => (
                                <div
                                    key={exp.id}
                                    className="border-l-[0.3rem] border-l-primary pl-[1.5rem] hover:bg-muted/50 transition p-[1rem] rounded-md"
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

                    {/* Featured Projects */}
                    <div className="p-[2.5rem] rounded-[1.5rem] bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-[1.5rem] flex items-center gap-2">
                            <Code size={20} /> Featured Projects
                        </h3>
                        <div className="flex flex-col gap-[2.5rem]">
                            {(profile.portfolios ?? []).map((proj) => (
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

                {/* RIGHT */}
                <div className="flex flex-col gap-[2rem] lg:sticky lg:top-[8rem] self-start">
                    {/* Skills */}
                    <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-3 flex items-center gap-2 ">
                            <Code size={18} /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {(profile.skills ?? []).map((s) => (
                                <Tag key={s.id} name={s.tag_name} />
                            ))}
                        </div>
                    </div>

                    {/* Contacts */}
                    <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-3 flex items-center gap-2 ">
                            <Mail size={18} /> Contacts
                        </h3>
                        <div className="flex flex-col gap-2">
                            {contactItems.map((c, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-1 md:grid-cols-3 md:gap-[2rem] pb-1 text-[1.4rem]"
                                >
                                    <span className="font-medium text-foreground">{c.label}</span>
                                    {c.isLink ? (
                                        <Link href={c.value} target="_blank">
                                            {c.value}
                                        </Link>
                                    ) : (
                                        <span className="text-muted-foreground">{c.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-3 flex items-center gap-2 ">
                            <Globe size={18} /> Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {(profile.languages ?? []).map((l) => (
                                <span
                                    key={l.id}
                                    className="px-3 py-1 rounded-full bg-primary/10  text-[1.4rem]"
                                >
                                    {l.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-3 flex items-center gap-2 ">
                            <GraduationCap size={18} /> Education
                        </h3>
                        <ul className="space-y-2">
                            {profile.educations.map((edu, i) => (
                                <li key={i} className="list-none ml-5 text-muted-foreground">
                                    <div className="flex flex-col gap-[0.4rem]">
                                        <p className="text-[1.6rem]"> {edu.name}</p>
                                        <p className="text-[1.4rem]">{edu.object}</p>
                                        <p className="text-[1.2rem]">
                                            {dayjs(edu.from).format('YYYY')} -{' '}
                                            {dayjs(edu.to).format('YYYY')}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Availability */}
                    <div className="p-6 rounded-2xl bg-background shadow-sm">
                        <h3 className="text-[1.8rem] font-semibold mb-3 flex items-center gap-2 ">
                            <Clock size={18} /> Availability
                        </h3>
                        {availabilityStrings.length > 0 ? (
                            <ul className="space-y-1 text-[1.4rem] text-foreground flex flex-col gap-[1rem]">
                                {availabilityStrings.map((a, i) => (
                                    <li key={i}>
                                        <Tag name={a} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground italic">
                                No availability set
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </BaseWrapper>
    );
}

export default ProfileComponent;
