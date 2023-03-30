interface IProps {
    headers: {
        label: string;
        value: string;
    }[];
    data: any[];
    actions?: {
        label: string;
        color: string;
        onClick: (id: string) => void;
    }[];
};

const Table = (props: IProps) => {

    return (
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    {props.headers.map((header) => (
                        <th
                            key={header.label}
                            scope='col'
                            className='px-6 py-3'
                        >
                            {header.label}
                        </th>
                    ))}
                    {props.actions && (
                        <th
                            scope='col'
                            className='px-6 py-3'
                        >
                            Actions
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {props.data.map((element) => (
                    <tr key={element.id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                        {props.headers.map((header) => (
                            <td
                                key={header.value}
                                className='px-6 py-4'
                            >
                                {element[header.value]}
                            </td>
                        ))}
                        {props.actions && (
                            <td className='py-4'>
                                <div className='flex items-center space-x-4 text-sm'>
                                    {props.actions.map((action) => (
                                        <button
                                            key={action.label}
                                            onClick={() => action.onClick(element.id)}
                                            className={`px-2 py-1 text-sm font-semibold text-white rounded-md ${action.color}`}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;