import { useFrappeGetDocList } from 'frappe-react-sdk'
import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = () => {
    const { data } =
        useFrappeGetDocList("Blog Post", { fields: ["name", "title", "content_type", "published"] });
    return (
        <div>
            <h1>Blog List</h1>
            <Link to="/new">Add blog</Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {(data ?? []).map((blog) => (
                        <tr key={blog.name}>
                            <td><Link to={`/edit/${blog.name}`}>{blog.title}</Link> <Link to={`/${blog.name}`}>View</Link></td>
                            <td>{blog.content_type}</td>
                            <td>{blog.published ? "Published" : "Draft"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BlogList