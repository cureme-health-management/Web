import React from "react"

export default function HistoryListItem({ id, medicines }) {
    return (
        <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">
                {id}
                <span className="float-right badge badge-pill badge-light">
                    complete
                </span>
            </div>
            <div class="card-body">
                <strong>{medicines.join(", ")}</strong>
            </div>
        </div>
    )
}
