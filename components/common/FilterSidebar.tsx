'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';
import { useTags } from '@/lib/swr/useTags';
import { Search } from 'lucide-react';
import { TagResponseType } from '@/types/responses/tag';

export function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const LIMIT = 30;

    const urlSearch = searchParams.get('search') ?? '';
    const urlTagSearch = searchParams.get('tag_search') ?? '';
    const urlTags = searchParams.get('tags');

    const [page, setPage] = useState(1);
    const { data, isLoading } = useTags({ search: urlTagSearch, page, limit: LIMIT });

    const [allTags, setAllTags] = useState<TagResponseType[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>(urlTags ? urlTags.split(',') : []);
    const [postSearch, setPostSearch] = useState(urlSearch);
    const [tagSearch, setTagSearch] = useState(urlTagSearch);

    useEffect(() => {
        if (data?.data) {
            setAllTags((prev) => (page === 1 ? data.data : [...prev, ...data.data]));
        }
    }, [data, page]);

    const updateURL = useCallback(
        (params: URLSearchParams) => {
            router.replace(`?${params.toString()}`, { scroll: false });
        },
        [router],
    );

    function toggleTag(tagId: string) {
        const isSelected = selectedTags.includes(tagId);
        const newTags = isSelected
            ? selectedTags.filter((id) => id !== tagId)
            : [...selectedTags, tagId];

        setSelectedTags(newTags);

        const params = new URLSearchParams(searchParams);
        if (newTags.length > 0) params.set('tags', newTags.join(','));
        else params.delete('tags');

        if (postSearch) params.set('search', postSearch);
        if (tagSearch) params.set('tag_search', tagSearch);

        updateURL(params);
    }

    const debouncedSearchPost = useMemo(
        () =>
            debounce((value: string) => {
                const params = new URLSearchParams(searchParams);
                if (value) params.set('search', value);
                else params.delete('search');

                if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
                if (tagSearch) params.set('tag_search', tagSearch);

                updateURL(params);
            }, 300),
        [searchParams, selectedTags, tagSearch, updateURL],
    );

    function handleSearchPost(value: string) {
        setPostSearch(value);
        debouncedSearchPost(value);
    }

    const debouncedTagSearch = useMemo(
        () =>
            debounce((value: string) => {
                setPage(1);
                const params = new URLSearchParams(searchParams);
                if (value) params.set('tag_search', value);
                else params.delete('tag_search');

                if (postSearch) params.set('search', postSearch);
                if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));

                updateURL(params);
            }, 300),
        [searchParams, postSearch, selectedTags, updateURL],
    );

    function handleTagSearch(value: string) {
        setTagSearch(value);
        debouncedTagSearch(value);
    }

    function clearTags() {
        setSelectedTags([]);
        const params = new URLSearchParams(searchParams);
        params.delete('tags');
        if (postSearch) params.set('search', postSearch);
        if (tagSearch) params.set('tag_search', tagSearch);
        updateURL(params);
    }

    const canLoadMore = data?.data?.length === LIMIT;

    return (
        <div className="p-4 h-fit rounded-[10px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-[1rem]">
                <p className="text-[2rem] font-bold">Bộ lọc</p>
                <button className="cursor-pointer text-[1.2rem] text-primary" onClick={clearTags}>
                    Xóa lọc
                </button>
            </div>

            <div className="flex items-center gap-2 px-[1.6rem] py-[1rem] rounded-[1rem] bg-background">
                <Search className="w-6 h-6" />
                <input
                    type="text"
                    value={postSearch}
                    onChange={(e) => handleSearchPost(e.target.value)}
                    placeholder="Tìm kiếm bài viết..."
                    className="flex-1 bg-transparent outline-none text-[1.2rem]"
                />
            </div>

            <p className="text-[2rem] font-bold mt-[2rem]">Danh mục</p>

            <div className="flex items-center gap-2 px-[1.6rem] py-[1rem] rounded-[1rem] bg-background mb-[1rem]">
                <Search className="w-6 h-6" />
                <input
                    type="text"
                    value={tagSearch}
                    onChange={(e) => handleTagSearch(e.target.value)}
                    placeholder="Tìm kiếm danh mục..."
                    className="text-[1.2rem] outline-none flex-1"
                />
            </div>

            <div className="flex flex-wrap gap-[0.6rem]">
                {allTags.length > 0 ? (
                    allTags.map((tag) => {
                        const isActive = selectedTags.includes(tag.id.toString());
                        return (
                            <button
                                key={tag.id}
                                onClick={() => toggleTag(tag.id.toString())}
                                className={`p-[0.5rem_1rem] rounded-full transition-all font-medium text-[1.2rem] cursor-pointer
                                    ${
                                        isActive
                                            ? 'bg-primary text-background'
                                            : 'bg-tag text-foreground'
                                    }
                                    hover:text-primary active:scale-95`}
                            >
                                {tag.tag_name}
                            </button>
                        );
                    })
                ) : (
                    <p className="text-gray-500 text-sm italic">Không tìm thấy kết quả</p>
                )}
            </div>

            {canLoadMore && (
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={isLoading}
                    className="text-primary text-[1.2rem] font-medium mt-2 disabled:opacity-50"
                >
                    {isLoading ? 'Đang tải...' : 'Xem thêm'}
                </button>
            )}
        </div>
    );
}
