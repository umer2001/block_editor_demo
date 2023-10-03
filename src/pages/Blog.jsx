import { useFrappeGetDoc } from 'frappe-react-sdk';
import React from 'react'
import { useParams } from 'react-router-dom';
import Composer from '../components/Composer';

const Blog = () => {
    const { name } = useParams();
    const { data, isLoading } = useFrappeGetDoc("Blog Post", name);

    if (isLoading) return <div>Loading...</div>

    return (
        <Composer value={JSON.parse(data.content_json).blocks} viewOnly={true} />
    )
}

export default Blog