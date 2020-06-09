import React from 'react'

export default function HistoryListItem({id, medicines}) {
    return (
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                {id}
            </div>
            <div class="card-body">
                <strong>{medicines.join(', ')}</strong>
            </div>
        </div>
    )
}
