import React from 'react'

function UserList() {
    const TABLE_HEAD = ["No", "Email", "Created", "Signed In", "User UID", ""];
    const TABLE_ROWS = [
        {
            name: "John Michael",
            job: "Manager",
            date: "23/04/18",
        },
        {
            name: "Alexa Liras",
            job: "Developer",
            date: "23/04/18",
        },
    ];

    return (
        <>
            <div className="h-full w-full overflow-scroll bg-white">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-gray-100 px-2 py-2 text-sm"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => (
                            <tr key={index} className="even:bg-blue-gray-50/50 hover:bg-slate-100 hover:cursor-pointer">
                                <td className="font-normal text-sm px-2 py-2 w-3.5">
                                    {index + 1}
                                </td>
                                <td className="font-normal text-sm px-2 py-2 w-40">
                                    {name}
                                </td>
                                <td className="font-normal text-sm px-2 py-2 w-24">
                                    {job}
                                </td>
                                <td className="font-normal text-sm px-2 py-2 w-24">
                                    {date}
                                </td>
                                <td className="font-normal text-sm px-2 py-2 w-40">
                                </td>
                                <td className="font-normal text-sm px-2 py-2 w-14">
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList