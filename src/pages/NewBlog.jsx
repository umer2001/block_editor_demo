import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { useFormik } from 'formik';
import { useFrappeCreateDoc } from 'frappe-react-sdk';
import React, { useState } from 'react'
import CategorySelect from '../components/CategorySelect';
import BloggerSelect from '../components/BloggerSelect';

const NewBlog = () => {
    const [blocks, setBlocks] = useState(null);
    const { createDoc } = useFrappeCreateDoc();
    const editor = useBlockNote({
        initialContent: [
            {
                "id": "45947528-bc73-432b-937e-5d6148f4d4c3",
                "type": "heading",
                "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left",
                    "level": "1"
                },
                "content": [
                    {
                        "type": "text",
                        "text": "Title",
                        "styles": {}
                    }
                ],
                "children": []
            },
            {
                "id": "0153698c-1c59-474f-a0ab-36303d2e2064",
                "type": "paragraph",
                "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                },
                "content": [],
                "children": []
            }
        ],
        onEditorContentChange: (editor) => setBlocks(editor.topLevelBlocks)
    });
    const formik = useFormik({
        initialValues: {
            blog_category: "",
            blogger: "",
            content_type: "JSON",
            content_json: {},
            content: ""
        },
        onSubmit: (values) => createDoc("Blog Post", {
            ...values,
            title: blocks[0].content[0].text,
            content_type: "JSON",
            content_json: { blocks },
            content: "",
        }),
    });

    return <form onSubmit={formik.handleSubmit}>
        <CategorySelect
            name="blog_category"
            onChange={e => formik.setFieldValue("blog_category", e.target.value)}
            value={formik.values.blog_category}
        />
        <BloggerSelect
            name="blogger"
            onChange={e => formik.setFieldValue("blogger", e.target.value)}
            value={formik.values.blogger}
        />
        <button type='submit'>publish</button>
        <BlockNoteView editor={editor} />
    </form>
}

export default NewBlog