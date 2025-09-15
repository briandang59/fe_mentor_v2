import { TagResponseType } from './tag';

export type PostResponseType = {
    id: number;
    title: string;
    slug: string;
    content: string;
    tags: TagResponseType[];
    created_at: string;
    updated_at: string;
};
