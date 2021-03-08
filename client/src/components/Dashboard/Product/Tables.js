import React from 'react';

const Tables = ({ inputFields, setInputsFields }) => {


    const handleInputField = (tIndex, iInput, event) => {
        const { name, value } = event.target;
        const values = [...inputFields];
        values[tIndex].tableData[iInput][name] = value;

        setInputsFields(values);
    };


    const handleTableHeaderField = (tIndex, event) => {
        const { name, value } = event.target;
        const values = [...inputFields];
        values[tIndex][name] = value;

        setInputsFields(values);
    }



    /*** Handle Tables Add & Update */
    const handleAddTable = (event) => {
        event.preventDefault();

        setInputsFields([
            ...inputFields,
            {
                index: Math.random(),
                heading: '',
                tableData: [
                    { index: Math.random(), name: '', value: '' },
                    { index: Math.random(), name: '', value: '' },
                ]
            },
        ]);
    }

    const handleRemoveTable = (tIndex) => {
        const tables = inputFields.filter(item => item.index !== tIndex);
        setInputsFields(tables);
    }

    /*** Handle Input Fields Add & Update */
    const handleAddField = (tIndex, event) => {
        event.preventDefault();

        let values = [...inputFields];

        values[tIndex].tableData = [
            ...values[tIndex].tableData,
            { index: Math.random(), name: '', value: '' }
        ]
        setInputsFields(values);
    };

    const handleRemoveField = (tIndex, iIndex) => {
        const values = [...inputFields];
        values[tIndex].tableData.splice(iIndex, 1);

        setInputsFields(values);
    }

    return (
        <div className="container">
            <div>
                <h5 className="my-4">Specification </h5>
                {
                    inputFields.map((table, tIndex) => (
                        <table class="table table-light" key={table.index}>
                            {tIndex === 0 ? '' : <button className="btn btn-danger mb-2" onClick={() => handleRemoveTable(table.index)}>Remove  Table</button>}
                            <div className="col-12">
                                <input className="form-control w-100 mb-2" type="text" onChange={event => handleTableHeaderField(tIndex, event)} defaultValue={table.heading} name="heading" placeholder="Heading here" />
                            </div>
                            <tbody>
                                {table?.tableData?.map((inputField, iIndex) => (
                                    <tr key={inputField.index}>
                                        <td>
                                            <input className="form-control" type="text" onChange={event => handleInputField(tIndex, iIndex, event)} name="name" defaultValue={inputField.name} placeholder="Name" />
                                        </td>
                                        <td>
                                            <input className="form-control" type="text" onChange={event => handleInputField(tIndex, iIndex, event)} name="value" defaultValue={inputField.value} placeholder="Value" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleRemoveField(tIndex, iIndex)} >remove</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={(event) => handleAddField(tIndex, event)}>add field</button>
                                        </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    ))
                }
                <button className="btn btn-primary mb-4" onClick={handleAddTable}>Add Table</button>
            </div>
        </div>
    );
};

export default Tables;



