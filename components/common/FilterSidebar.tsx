import { Checkbox, CheckboxProps } from 'antd';
import { Search } from 'lucide-react';

export function FilterSidebar({
    tags,
    onChangeTag,
    onClear,
}: {
    tags: { id: number; tag_name: string }[];
    onChangeTag: CheckboxProps['onChange'];
    onClear: () => void;
}) {
    return (
        <div className="p-4 h-fit rounded-[10px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-[1rem]">
                <p className="text-[2rem] font-bold">Bộ lọc</p>
                <button className="cursor-pointer text-[1.2rem] text-primary" onClick={onClear}>
                    Xóa lọc
                </button>
            </div>
            <div className="p-[1.2rem] rounded-[1rem] bg-background flex items-center gap-[1rem]">
                <Search className="w-8 h-8" />
                <input
                    className="flex-1 text-[1.4rem] focus-within:outline-none"
                    placeholder="Tìm kiếm bài viết..."
                />
            </div>
            <div className="flex flex-col gap-[1rem]">
                <p className="text-[1.6rem] font-bold">Danh mục</p>
                <div className="grid grid-cols-3 gap-[1rem]">
                    {tags.map((tag) => (
                        <Checkbox onChange={onChangeTag} key={tag.id}>
                            {tag.tag_name}
                        </Checkbox>
                    ))}
                </div>
            </div>
        </div>
    );
}
