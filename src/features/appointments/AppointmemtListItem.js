import React from "react"

export const ListItem = ({ item, data, select }) => {
    const isSelected = data.currentAppointment.id === item.id ? true : false
    console.log(item)
    return (
        <li
            className={
                isSelected
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
            }
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
