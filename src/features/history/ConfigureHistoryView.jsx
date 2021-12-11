import React from "react"
import { fetchHistory } from "features/history/historySlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HistoryView from "features/history/HistoryView"

export default function ConfigureHistoryView(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHistory())
    }, [dispatch])

    return <HistoryView {...props} />
}
