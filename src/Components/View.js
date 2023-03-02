import '../css/View.css'

const View = ( props ) => {

    console.log(props.patient);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>D.O.B</th>
                    <th>Address </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.patient.id}</td>
                    <td>{props.patient.name && props.patient.name}</td>
                    <td>{props.patient.gender && props.patient.gender}</td>
                    <td>{props.patient.dayOfBirth} / {props.patient.monthOfBirth} / {props.patient.yearOfBirth}</td>
                    <td>{props.patient.address.line == null ? '' : props.patient.address.line}, {props.patient.address.district == null ? '' : props.patient.address.district}, {props.patient.address.state == null ? '' : props.patient.address.state} {props.patient.address.pincode == null ? '' : props.patient.address.pincode}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default View;