<div >
    <div >

        <div >
            <table className="table table-bordred">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.salary}</td>
                            <td>
                                <a onClick={() => { onDelete(item.id) }} className="btn btn-danger">Delete</a>
                                <a onClick={() => { onEdit(item.id) }} className="btn btn-success">Edit</a>
                                <a onClick={() => { onDetails(item.id) }} className="btn btn-primary">Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    </div >

</div >
    )
}

export default EmpTable;