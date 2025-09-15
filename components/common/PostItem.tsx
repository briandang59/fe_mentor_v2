import { PostResponseType } from '@/types/responses/post';
import { paths } from '@/utils/constants/paths';
import Link from 'next/link';
import Tag from './Tag';
import { calculateTimeAgo } from '@/utils/functions/calculateTimeAgo';
import { Bookmark } from 'lucide-react';

interface PostItemProps {
    record: PostResponseType;
}
function PostItem({ record }: PostItemProps) {
    return (
        <Link
            href={`/${paths.posts}/${record.slug}`}
            className="p-[2rem] rounded-[1rem] shadow-md min-h-[200px] flex flex-col gap-4 cursor-pointer bg-background border border-border"
        >
            <div className="flex items-center justify-between gap-[1rem]">
                <span className="text-foreground text-[1.2rem]">
                    {calculateTimeAgo(record?.created_at)}
                </span>
                <button className="text-primary cursor-pointer">
                    <Bookmark />
                </button>
            </div>
            <h3 className="text-[1.8rem] font-semibold text-primary">{record?.title}</h3>
            <p
                className="text-[1.4rem] font-normal leading-relaxed flex-1 line-clamp-6 text-foreground"
                dangerouslySetInnerHTML={{ __html: record?.content || '' }}
            ></p>

            <div className="flex flex-wrap items-center gap-[1rem]">
                {record?.tags?.map((tag) => (
                    <Tag key={tag.id} name={tag.tag_name} />
                ))}
            </div>
        </Link>
    );
}

export default PostItem;
