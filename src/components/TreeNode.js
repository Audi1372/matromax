import React, { useState } from 'react'
// import Tree from './Tree';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcExpand } from "react-icons/fc";




const TreeNode = ({ order, number }) => {

    const [show, setShow] = useState(true);

    const { req_path, latency, req_method } = order.req_info
    const { source, destination } = order
    const handleClick = () => {
        setShow(!show)
    }
    const orderstyle = {
        color: "white",
        backgroundColor: "black",
        border: "2px solid gray",
        display: "flex",
        flexDirection: "flex-end",
        height: "100px",
        justifyContent: "space-between",
        padding: "20px"


    }
    return (
        <>
            {
                show ?
                    <div style={orderstyle}>
                        <div>
                            <p>{req_method}{req_path}</p>
                            <p>{source}  <AiOutlineArrowRight />  {destination}</p>
                        </div>
                        <div className="block">
                            <div className="badge-block">
                                <div className="firefox svg_icons"></div>
                                {/* Warning Colored Notification Badge*/}
                                <span className="e-badge e-badge-warning e-badge-notification e-badge-overlap leftTop">99+</span>
                            </div>
                        </div>

                        <div >
                            {
                                latency === number ?
                                    <div className='notification'>
                                        <span>
                                            <button className='notification' current-content='' >{latency}</button>

                                        </span>
                                        <button className='remainder'></button>

                                    </div> :
                                    <button className='latencybutton'>{latency}</button>

                            }
                        </div>
                        <div>
                            <FcExpand onClick={() => handleClick()} />

                        </div>
                    </div> : ""
            }
        </>


    );
}

export default TreeNode
