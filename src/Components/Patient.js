import React from "react";

const Patient = ( patient ) => {

    return (
        <tr>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.gender}</td>
            <td>{patient.dateOfBirth} / {patient.monthOfBirth} / {patient.YearOfBirth}</td>
            <td>{patient.address.line}, {patient.address.district} / {patient.address.pincode}</td>
            <td>
                <tr>
                    {patient.identifiers.map(i => {
                        return <td>{i.value}</td>
                    })}
                </tr>
            </td>
        </tr>
    )
}

export default Patient;