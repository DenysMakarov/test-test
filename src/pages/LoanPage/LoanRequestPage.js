import React from 'react'
import CardComp from '../../cmps/CardComp/CardComp'
import { BsChevronLeft } from 'react-icons/bs'

import './LoanRequestPage.css'
import RequestStats from "../../cmps/RequstStats/RequestStats";
import MapContainer from "../../cmps/GoogleMaps/MapContainer";

const headerMock1 = {
    headerTitle: '291 North 8 street, Brooklyn, NY',
    reqNo: 'Request no. 203-12209',
    owner: 'Owner: Amir Cohen',
    update: 'Last update: 22/09/22, 18:30'
}
const detailMock1 = [
    { entry: 'Amount', value: '$970,000' },
    { entry: 'Purpose', value: 'Purchase' },
    { entry: 'R.C Date', value: '05.09.22' },
    { entry: 'Duration', value: '12 months' },
    { entry: 'Repayment', value: 'Refinance' },
    { entry: 'Rate', value: '11%' },
    { entry: 'Purchase Price', value: '$630,000' }]

const detailMock2 = [
    { entry: 'Phone', value: '646-3055952' },
    { entry: 'Email', value: 'abraham@real.com' },
    { entry: 'Date Of Birth', value: '02/02/1981' },
    { entry: 'Credit Score', value: '690' }]

const borrowerMock = 'Abraham Gabrielovich'

const LoanPage = () => {
    return (
        <div className='mainContainer'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-9 lift-block-mainContainer">
                        <CardComp
                            headerDetails={headerMock1}
                            cardDetails={detailMock1}
                        />
                        <br/>
                        <CardComp
                            cardDetails={detailMock2}
                            borrower={borrowerMock}
                        />

                        <RequestStats/>
                    </div>
                    <div className="col-lg-3 right-block-mainContainer">
                        <MapContainer/>
                    </div>
                </div>
            </div>


            {/*<CardComp*/}
            {/*    headerDetails={headerMock1}*/}
            {/*    cardDetails={detailMock1}*/}
            {/*/>*/}
            {/*<br/>*/}
            {/*<CardComp*/}
            {/*    cardDetails={detailMock2}*/}
            {/*    borrower={borrowerMock}*/}
            {/*/>*/}

            {/*<RequestStats/>*/}
        </div>
    )
}

export default LoanPage