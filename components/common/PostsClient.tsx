'use client';

import { useState } from 'react';
import { Drawer } from 'antd';
import { Filter } from 'lucide-react';
import { FilterSidebar } from '@/components/common/FilterSidebar';
import BlogSection from '@/components/common/PostSection';

export function PostsClient() {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-[30%_70%] gap-4 items-start">
                <div className="hidden md:block sticky top-[2rem]">
                    <FilterSidebar />
                </div>

                <div className="flex md:hidden justify-end mb-4">
                    <button
                        className="flex items-center gap-2 text-primary text-[1.4rem]"
                        onClick={() => setOpenFilter(true)}
                    >
                        <Filter className="w-6 h-6" /> Bộ lọc
                    </button>
                </div>

                <BlogSection />

                <Drawer
                    title="Bộ lọc"
                    placement="left"
                    onClose={() => setOpenFilter(false)}
                    open={openFilter}
                >
                    <FilterSidebar />
                </Drawer>
            </div>
        </div>
    );
}
