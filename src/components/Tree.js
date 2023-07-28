import React, { useState } from 'react'
import TreeNode from './TreeNode'


const Tree = ({ orders }) => {

    const [remainder, setRemainder] = useState(false);
    const traceIds = orders.filter(
        (thing, index, self) =>
            index ===
            self.findIndex((t) => t.trace_id === thing.trace_id)
    );


    const count = (traceid) => {
        let count = 0;
        orders.map((order) => {
            if (order.trace_id === traceIds[traceid].trace_id) {
                count++
            }
        })

        return count
    }

    const traceidStyle = {
        color: "white",
        backgroundColor: "black",

    }

    const smallestNumber = (traceid) => {
        let smallNum = Number.POSITIVE_INFINITY
        orders.map((order, index) => {
            const { latency } = order.req_info

            if (order.trace_id === traceIds[traceid].trace_id) {
                if (latency < smallNum) {
                    smallNum = latency

                }
            }
        })

        return smallNum
    }


    return (
        <>
            {
                traceIds.map((eachTraceId, index) => {
                    const type = eachTraceId.trace_id
                    return (
                        <div key={index} style={traceidStyle}>
                            <h1>{type}</h1>
                            <button className='spanbutton'>span{count(index)}</button>
                            {/* <h1>{smallestNumber(index)}</h1> */}
                            {
                                orders.map((order, i) => {
                                    if (type === order.trace_id) {
                                        return (
                                            <>
                                                <TreeNode order={order} key={i} number={smallestNumber(index)} />
                                            </>
                                        )
                                    }

                                })
                            }
                        </div>)
                })
            }
        </>

    )
}

export default Tree
