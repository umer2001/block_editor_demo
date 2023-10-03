import { useFrappeGetDoc, useFrappeUpdateDoc } from 'frappe-react-sdk'
import React from 'react'
import { useParams } from 'react-router-dom'
import Composer from '../components/Composer';
import { useFormik } from 'formik';

const EditBlog = () => {
    const { name } = useParams();
    const { data, isLoading } = useFrappeGetDoc("Blog Post", name);
    const { updateDoc } = useFrappeUpdateDoc("Blog Post", name)
    const formik = useFormik({
        initialValues: {
            title: data?.title ?? "",
            content_type: data?.content_type ?? "",
            content_json: data?.content_json ?? {},
            published: data?.published ?? 0,
            blogger: data?.blogger ?? "",
            blog_category: data?.blog_category,
        },
        onSubmit: (values) => updateDoc("Blog Post", name, {
            ...values,
            title: values.content_json.blocks[0].content[0].text,
            content_type: "JSON",
            content: "",
            published: 1,
            blogger: data?.blogger,
            blog_category: data?.blog_category,
        }),
    })

    if (isLoading) return <div>Loading...</div>

    return (
        <form onSubmit={formik.handleSubmit}>
            <button type="submit">Update</button>
            <Composer value={JSON.parse(data.content_json).blocks} onChange={(value) => formik.setFieldValue("content_json", { blocks: value })} />
        </form>
    )
}

export default EditBlog