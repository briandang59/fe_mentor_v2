'use client';

import * as React from 'react';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';

export default function Rooms() {
    const [content, setContent] = React.useState('');

    const handleChange = (html: string) => {
        setContent(html);
    };

    const handleSave = () => {
        console.log('Nội dung đang soạn:', content);
    };

    return (
        <div className="p-4 space-y-4">
            <SimpleEditor value={content} onChange={handleChange} />
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
                💾 Lưu nội dung
            </button>
        </div>
    );
}
