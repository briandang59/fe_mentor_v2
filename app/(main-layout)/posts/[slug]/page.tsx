import BaseWrapper from '@/components/common/BaseWrapper';
import Tag from '@/components/common/Tag';
import { Button, Divider, Rate } from 'antd';
import { BadgeCheck } from 'lucide-react';
import Link from 'next/link';

function PostDetail() {
    const post = {
        id: 1,
        title: 'Giới thiệu về React',
        content: `
        <h1>React là gì?</h1>
        <p><strong>React</strong> là một thư viện JavaScript để xây dựng giao diện người dùng.</p>
        <p>React được phát triển bởi Facebook và ra mắt lần đầu vào năm 2013. Nó giúp lập trình viên xây dựng các ứng dụng SPA (Single Page Application) nhanh chóng và dễ bảo trì.</p>
        <h2>Ưu điểm</h2>
        <ul>
          <li>Component-based → Dễ tái sử dụng và quản lý code</li>
          <li>Virtual DOM → Cải thiện hiệu năng</li>
          <li>Cộng đồng lớn, nhiều thư viện hỗ trợ</li>
        </ul>
        `,
        tags: [
            { id: 1, tag_name: 'React' },
            { id: 3, tag_name: 'Javascript' },
        ],
    };

    return (
        <BaseWrapper className="flex flex-col gap-[2rem]">
            <div className="grid grid-cols-1 lg:grid-cols-[75%_24%] gap-6">
                <div className="bg-background rounded-xl shadow-[1.4rem] p-6 h-fit md:h-full">
                    <h1 className="text-primary text-[2rem] lg:text-[2.8rem] font-bold mb-6">
                        {post.title}
                    </h1>
                    <p
                        className="text-[1.4rem] font-normal leading-relaxed flex-1 line-clamp-6 text-foreground"
                        dangerouslySetInnerHTML={{ __html: post?.content || '' }}
                    ></p>
                </div>

                <div className="bg-background rounded-xl shadow-[1.4rem] h-fit flex flex-col gap-4 p-6">
                    <h3 className="text-[1.6rem] font-semibold text-primary">
                        Thông tin công việc
                    </h3>
                    <p className="text-[1.4rem]">
                        Số lượng ứng viên: <span className="font-medium text-foreground">2</span>
                    </p>
                    <p className="text-[1.4rem]">
                        Số dư khả dụng: <span className="font-medium text-foreground">9,900</span>
                    </p>

                    <h3 className="text-[1.6rem] font-semibold mt-4 text-primary">Tags</h3>
                    <ul className="flex flex-wrap items-center gap-2">
                        {post.tags.map((tag) => (
                            <li key={tag.id}>
                                <Tag name={tag.tag_name} />
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-[1.6rem] font-semibold mt-4 text-primary">
                        Thông tin khách hàng
                    </h3>
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-green-600" />
                        <p className="text-[1.4rem]">Email đã được xác nhận</p>
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                        <Rate allowHalf defaultValue={2.5} />
                        <p className="text-[1.4rem] text-gray-500">2.5 trên 3 đánh giá</p>
                    </div>
                    <p className="text-[1.4rem]">24 công việc đã đăng</p>
                    <p className="text-[1.4rem]">17% thuê, 16 công việc đang mở</p>

                    <Divider />

                    <div className="flex flex-col gap-[1rem]">
                        <Button type="primary" className="w-full">
                            Nộp hồ sơ
                        </Button>
                        <Button className="w-full">Lưu công việc</Button>
                    </div>
                </div>
            </div>
            <div className="bg-background rounded-xl shadow-sm p-6 w-full">
                <h2 className="text-[1.6rem] font-bold text-primary mb-4">Đánh giá</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
                        <Link
                            href="/"
                            className="text-[1.6rem] font-medium underline hover:text-primary transition-colors"
                        >
                            Công việc hiện tại
                        </Link>
                        <span className="text-[1.2rem] text-gray-400">2025/09/16</span>
                    </div>

                    <div className="rounded-lg bg-muted p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                            <Rate allowHalf defaultValue={2.5} />
                            <Tag name="Mentor" />
                        </div>
                        <p className="text-[1.2rem] leading-relaxed text-foreground">
                            <span className="font-semibold">Rating: 5.0/5</span> – Go to person for
                            React.js and Next.js related projects. Quick turnaround time and clear
                            communication made the process smooth and efficient. I appreciate your
                            attention to detail and proactive problem-solving. Looking forward to
                            collaborating with you again!
                        </p>
                    </div>

                    <div className="rounded-lg bg-muted p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                            <Rate allowHalf defaultValue={2.5} />
                            <Tag name="Mentee" />
                        </div>
                        <p className="text-[1.2rem] leading-relaxed text-foreground">
                            <span className="font-semibold">Rating: 5.0/5</span> – Go to person for
                            React.js and Next.js related projects. Quick turnaround time and clear
                            communication made the process smooth and efficient. I appreciate your
                            attention to detail and proactive problem-solving. Looking forward to
                            collaborating with you again!
                        </p>
                    </div>
                </div>
            </div>
        </BaseWrapper>
    );
}

export default PostDetail;
