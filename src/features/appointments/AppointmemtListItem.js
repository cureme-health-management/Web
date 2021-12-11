import React from "react"

export const ListItem = ({ item, data, select }) => {
    const isSelected = data.currentAppointment.id === item.id ? true : false
    return (
        <li
            className={`list-group-item list-group-item-action ${
                isSelected && `active`
            }`}
            onClick={() => select(item)}
        >
            <div className="">
                <span className="font-weight-bold">
                    {item.firstName} {item.lastName}
                </span>
                <br />
                {item.problem}
                <span
                    className="float-right font-weight-normal"
                    style={{ marginTop: "-23px" }}
                >
                    {item.gender}
                    <br />
                    <strong>{item.age}</strong>
                </span>
            </div>
        </li>
    )
}
