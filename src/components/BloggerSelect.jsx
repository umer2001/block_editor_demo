import { useFrappeGetDocList } from 'frappe-react-sdk'
import React from 'react'

const BloggerSelect = ({
    name,
    value,
    onChange,
}) => {
    const { data, isLoading } = useFrappeGetDocList("Blogger", { fields: ["name", "full_name"] })
    return !isLoading && (
        <select name={name} onChange={onChange} value={value}>
            <option value="">Select Blogger</option>
            {(data ?? []).map((blogger) => (
                <option key={blogger.name} value={blogger.name}>{blogger.full_name}</option>
            ))}
        </select>
    )
}

export default BloggerSelect