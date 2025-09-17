import { Tabs, TabsProps } from 'antd';
import PostItem from './PostItem';

function BlogSection() {
    const posts = [
        {
            id: 1,
            title: 'Giới thiệu về React',
            slug: 'gioi-thieu-ve-react',
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
      <p>Khi kết hợp với Redux hoặc Zustand, React có thể quản lý state ứng dụng phức tạp một cách dễ dàng.</p>
    `,
            tags: [
                {
                    id: 1,
                    tag_name: 'React',
                    created_at: '2025-09-15T04:14:31.785239Z',
                    updated_at: '2025-09-15T04:14:31.785239Z',
                },
                {
                    id: 3,
                    tag_name: 'Javascript',
                    created_at: '2025-09-15T04:32:07.948186Z',
                    updated_at: '2025-09-15T04:32:07.948186Z',
                },
            ],
            created_at: '2025-09-15T04:20:00.714253Z',
            updated_at: '2025-09-15T04:20:00.714253Z',
        },
        {
            id: 2,
            title: 'Lập trình với Gin Framework',
            slug: 'lap-trinh-voi-gin-framework',
            content: `
      <h1>Giới thiệu Gin</h1>
      <p><strong>Gin</strong> là một web framework viết bằng <em>Golang</em>. Nó nổi bật với hiệu năng cao, API gọn nhẹ và dễ mở rộng.</p>
      <h2>Đặc điểm chính</h2>
      <ul>
        <li>Hiệu năng cao nhờ sử dụng httprouter</li>
        <li>Middleware linh hoạt</li>
        <li>Validation dữ liệu dễ dàng</li>
      </ul>
      <p>Gin phù hợp cho cả dự án nhỏ và lớn, từ microservice đến monolith. Bạn có thể tích hợp JWT, Swagger và kết nối database một cách nhanh chóng.</p>
      <p>Bài viết này hướng dẫn bạn cách bắt đầu với Gin, từ cài đặt đến viết API đầu tiên.</p>
    `,
            tags: [
                {
                    id: 1,
                    tag_name: 'HTML',
                    created_at: '2025-09-15T04:14:31.785239Z',
                    updated_at: '2025-09-15T04:14:31.785239Z',
                },
                {
                    id: 2,
                    tag_name: 'CSS',
                    created_at: '2025-09-15T04:32:00.651493Z',
                    updated_at: '2025-09-15T04:32:00.651493Z',
                },
                {
                    id: 3,
                    tag_name: 'Javascript',
                    created_at: '2025-09-15T04:32:07.948186Z',
                    updated_at: '2025-09-15T04:32:07.948186Z',
                },
            ],
            created_at: '2025-09-15T04:29:24.714253Z',
            updated_at: '2025-09-15T04:32:27.666432Z',
        },
        {
            id: 3,
            title: 'Xây dựng REST API với FastAPI',
            slug: 'xay-dung-rest-api-voi-fastapi',
            content: `
      <h1>FastAPI là gì?</h1>
      <p><strong>FastAPI</strong> là một framework hiện đại dùng để xây dựng API với Python. Nó nhanh (high-performance), dễ dùng và hỗ trợ async/await.</p>
      <h2>Tính năng</h2>
      <ul>
        <li>Hỗ trợ OpenAPI & Swagger UI tự động</li>
        <li>Validation bằng Pydantic</li>
        <li>Hiệu năng gần ngang Node.js và Go</li>
      </ul>
      <p>Nếu bạn muốn xây dựng một backend nhanh chóng và vẫn dễ bảo trì, FastAPI là lựa chọn tuyệt vời.</p>
      <p>Bài viết sẽ hướng dẫn cài đặt, tạo endpoint đầu tiên, kết nối database, và viết test.</p>
    `,
            tags: [
                {
                    id: 4,
                    tag_name: 'Python',
                    created_at: '2025-09-15T05:00:00.651493Z',
                    updated_at: '2025-09-15T05:00:00.651493Z',
                },
                {
                    id: 5,
                    tag_name: 'API',
                    created_at: '2025-09-15T05:02:07.948186Z',
                    updated_at: '2025-09-15T05:02:07.948186Z',
                },
            ],
            created_at: '2025-09-15T05:10:00.714253Z',
            updated_at: '2025-09-15T05:10:00.714253Z',
        },
    ];
    const onChangeTab = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tất cả bài viết',
            children: (
                <div className="grid grid-cols-1 gap-[1rem]">
                    {posts.map((p) => (
                        <PostItem key={p.id} record={p} />
                    ))}
                </div>
            ),
        },
        {
            key: '2',
            label: 'Bài viết đã lưu',
            children: 'Content of Tab Pane 2',
        },
    ];
    return <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />;
}

export default BlogSection;
