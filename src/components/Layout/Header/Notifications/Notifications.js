import React, { useState } from 'react'

// IMPORTS...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Badge, Dropdown } from 'antd';
import Notification from './Notification/Notification'
import { useSelector } from 'react-redux'
// SCSS..
import classes from '../header.module.scss'

const Notifications = () => {
    const initailState = {
        isLoading: false,
        notification: false
    }

    const [state, setState] = useState(initailState)

    useSelector(stateful => {
        if (stateful && stateful.companyReducer && stateful.companyReducer.notifications && !state.isLoading) {
            setState({
                ...state,
                isLoading: true,
                notification: stateful.companyReducer.notifications
            });
        }
    });

    const notifi = state && state.notification ? state.notification : 'notification';

    const newNotifi = state && state.notification ? state.notification.filter(element => !element.data.visited) : '';

    return (
        <React.Fragment>
            <Dropdown overlay={() => <Notification notification={notifi} />} placement="bottomCenter">
                <Badge className={classes.bdge} dot={newNotifi ? false : true}>
                    <FontAwesomeIcon icon={faBell} />
                </Badge>
            </Dropdown>
        </React.Fragment >
    )
}

export default Notifications
