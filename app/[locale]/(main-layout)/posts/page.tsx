import BaseWrapper from '@/components/common/BaseWrapper';
import { PostsClient } from '@/components/common/PostsClient';
import { Suspense } from 'react';

export default function PostsPage() {
    return (
        <BaseWrapper>
            <Suspense fallback={<p>Đang tải bộ lọc...</p>}>
                <PostsClient />
            </Suspense>
        </BaseWrapper>
    );
}
