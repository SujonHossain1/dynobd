import React from 'react';

const Specification = ({ product }) => {
    return (
        <div className="description">
            {product?.specification?.map(table => (
                <table className="data-table" key={table?.index}>
                    <thead>
                        <tr>
                            <td className="heading-row" colspan="3"> {table?.heading} </td>
                        </tr>
                    </thead>
                    <tbody >
                        {table.tableData.map(tableData => (
                            <tr key={tableData.index}>
                                <td className="name"> {tableData.name} </td>
                                <td className="value"> {tableData.value} </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            ))}
        </div>
    );
};

export default Specification;