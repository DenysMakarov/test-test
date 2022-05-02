import React, {useEffect} from 'react';
import './RequestPage.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllRequests} from "../../redux/actions/requstsActions";

const RequestPage = () => {
    const {requests} = useSelector(state => state.requestsReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllRequests())
    }, [])

    return (
        <div className='wrapper-request-page'>
            { requests &&
                requests.map((el, idx) => (
                    <div
                        key={el.id + idx} className='request-block'
                        data-id={el.id}
                    >
                        <Link to={`/request/loanpage/${el.id}`} className='link-loan_page'>Go to Loan Page {el.id}</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default RequestPage;