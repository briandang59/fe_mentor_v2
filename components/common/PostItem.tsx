import { PostResponseType } from '@/types/responses/post';
import { paths } from '@/utils/constants/paths';
import Link from 'next/link';
import Tag from './Tag';

interface PostItemProps {
    record: PostResponseType;
}
function PostItem({ record }: PostItemProps) {
    return (
        <Link
            href={`/${paths.posts}/${record.slug}`}
            className="p-[2rem] rounded-[1rem] shadow-md min-h-[200px] flex flex-col gap-4 cursor-pointer bg-background border border-border"
        >
            <h3 className="text-[1.8rem] font-semibold text-primary">{record?.title}</h3>
            <p
                className="text-[1.4rem] font-normal leading-relaxed flex-1 line-clamp-6"
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
