import React, { useState } from 'react'
import CardDetail from '../CardDetail/CardDetail'
import CardHeader from '../CardHeaderComp/CardHeader'
import { FaRegCheckCircle } from "react-icons/fa"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"


import './CardComp.css'

const CardComp = ({ headerDetails, cardDetails, borrower }) => {
    const [isExpandClicked, setIsExpandClicked] = useState(false)
    // if () {

    // }
    const renderDetails = cardDetails && (
        cardDetails.map((detail, i) => <CardDetail key={i} entry={detail.entry} value={detail.value} />)
    )
    return (
        <>
            {headerDetails && (<CardHeader headerDetails={headerDetails} />)}

            {borrower && (
                <div className='borrowerLine' onClick={() => setIsExpandClicked(prev => !prev)}>
                    <div>
                        <span className='borrowerText'><b>Borrower</b></span>
                        <span className=''>{borrower}</span>
                    </div>
                    {!isExpandClicked ?
                        <div className='borrowerLineRight' >
                            <span>Personal Details</span>
                            <BsChevronDown size='2em' />
                        </div> :
                        <BsChevronUp size='2em' />}
                </div>)}

            <div className='cardBody'>
                {borrower ?
                    isExpandClicked &&
                    <> <div className='cardBodyLeft'>{renderDetails}</div>
                        <div className='cardBodyRight' style={{ background: 'white' }}></div> </>
                    :
                    <div className='cardBodyLeft'>{renderDetails}</div>}


                {headerDetails && (
                    <div className='cardBodyRight'>
                        <FaRegCheckCircle size='4em' color='green' className='checkIcon' />
                        <span className='dataMsg'><b>Application data corresponds to the requirements</b></span>
                        <span className='showDetailsText'>Show Details</span>
                    </div>)}

            </div>
        </>
    )
}

export default CardComp