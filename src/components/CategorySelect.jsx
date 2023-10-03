import { useFrappeGetDocList } from 'frappe-react-sdk'
import React from 'react'

const CategorySelect = ({
    name,
    value,
    onChange,
}) => {
    const { data, isLoading } = useFrappeGetDocList("Blog Category")
    return !isLoading && (
        <select name={name} onChange={onChange} value={value}>
            <option value="">Select Category</option>
            {(data ?? []).map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
            ))}
        </select>
    )
}

export default CategorySelect