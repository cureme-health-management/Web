import React from "react"

export default function PrescriptionTableHeading() {
    return (
        <thead>
            <tr>
                <th scope="col">Package</th>
                <th scope="col" style={{ width: "20%" }}>
                    Medicine
                </th>
                <th scope="col">Brand</th>
                <th scope="col">Strength</th>
                <th scope="col">Dosage</th>
                <th scope="col">Freq</th>
                <th scope="col">Time</th>
                <th scope="col">Days</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
    )
}
