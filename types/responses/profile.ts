export interface User {
    id: number;
    username: string;
    email: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}

export interface AvailableTime {
    id: number;
    profile_id: number;
    day: string;
    from: string;
    to: string;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: number;
    tag_name: string;
    created_at: string;
    updated_at: string;
}

export interface Experience {
    id: number;
    profile_id: number;
    title: string;
    company: string;
    location: string;
    from: string;
    to: string;
    description: string;
    is_current: boolean;
    created_at: string;
    updated_at: string;
}

export interface Portfolio {
    id: number;
    profile_id: number;
    title: string;
    description: string;
    url: string;
    job_title: string;
    time_period: string;
    is_draft: boolean;
    thumbnail_id: number | null;
    thumbnail: null; // Assuming it's null or object, but in sample it's null
    created_at: string;
    updated_at: string;
}

export interface Language {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface ContactInformation {
    id: number;
    phone: string;
    linkedin: string;
    facebook: string;
    zalo: string;
    telegram: string;
    x: string;
    github: string;
    twitter: string;
    website: string;
    location: string;
    created_at: string;
    updated_at: string;
}

export interface ProfileImage {
    id: number;
    file_name: string;
    url: string;
    mime_type: string;
    size: number;
    public_id: string;
    resource_type: string;
    folder: string;
    created_at: string;
    updated_at: string;
}

export interface Education {
    id: number;
    profile_id: number;
    name: string;
    object: string;
    from: string;
    to: string;
    created_at: string;
    updated_at: string;
}

export interface Profile {
    id: number;
    user_id: number;
    fullname: string;
    title: string;
    profile_overview: string;
    hourly_rate: number;
    q_coin: number;
    max_hours_per_week: number;
    location: string;
    profile_image_id: number | null;
    contact_information_id: number | null;
    available_times: AvailableTime[];
    skills: Skill[];
    experiences: Experience[];
    portfolios: Portfolio[];
    languages: Language[];
    contact_information: ContactInformation;
    profile_image: ProfileImage;
    educations: Education[];
    user: User;
    created_at: string;
    updated_at: string;
}
