import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HistoryListItem from "./HistoryListItem"
import { fetchHistory } from "./historySlice"

function HistoryView() {
    const { history } = useSelector(({ history }) => history)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHistory())
    }, [dispatch])

    return (
        <div className="container pt-2">
            <h5 className="text">History</h5>
            {history.map(({ id, medicines }) => (
                <HistoryListItem key={id} id={id} medicines={medicines} />
            ))}
        </div>
    )
}

export default HistoryView
