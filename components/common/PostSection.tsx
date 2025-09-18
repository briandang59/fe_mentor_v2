'use client';

import { Pagination, Spin, Tabs, TabsProps, Empty } from 'antd';
import PostItem from './PostItem';
import { usePosts } from '@/lib/swr/usePosts';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function BlogSection() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const defaultPage = Number(searchParams.get('page')) || 1;
    const defaultTab = searchParams.get('tab') || 'all';

    const [page, setPage] = useState<number>(defaultPage);
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    const { data: posts, isLoading } = usePosts({ page, 'populate[tags]': true });

    useEffect(() => {
        const params = new URLSearchParams();
        params.set('tab', activeTab);
        params.set('page', page.toString());
        router.push(`?${params.toString()}`);
    }, [page, activeTab, router]);

    const onChangeTab = (key: string) => {
        setActiveTab(key);
        setPage(1);
    };

    const items: TabsProps['items'] = [
        {
            key: 'all',
            label: 'Tất cả bài viết',
            children: (
                <div className="flex flex-col gap-[1rem]">
                    {isLoading ? (
                        <Spin size="large" className="mx-auto my-6" />
                    ) : posts?.data?.length ? (
                        <>
                            <div className="grid grid-cols-1 gap-[1rem]">
                                {posts.data.map((p) => (
                                    <PostItem key={p.id} record={p} />
                                ))}
                            </div>
                            <Pagination
                                current={page}
                                total={posts?.meta?.total ?? 0}
                                pageSize={posts?.meta?.limit ?? 10}
                                onChange={(p) => setPage(p)}
                                className="self-center mt-4"
                            />
                        </>
                    ) : (
                        <Empty description="Chưa có bài viết nào" className="my-6" />
                    )}
                </div>
            ),
        },
        {
            key: 'saved',
            label: 'Bài viết đã lưu',
            children: <div className="text-center py-4">Chưa có dữ liệu</div>,
        },
    ];

    return <Tabs activeKey={activeTab} items={items} onChange={onChangeTab} />;
}

export default BlogSection;
