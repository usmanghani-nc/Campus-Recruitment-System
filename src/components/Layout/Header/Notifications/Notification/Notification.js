import React from 'react'

// IMPORTS ...
import { Menu } from 'antd';
import { useDispatch } from 'react-redux'
import { updateVisited } from '../../../../../store/action/index'

// SCSS ...
import '../Notification.scss'

const Notification = (props) => {
    const dispatch = useDispatch();

    const visitedLink = (visitedId) => dispatch(updateVisited(visitedId))

    return (
        <Menu>
            {props && props.notification ? props.notification.map(item => {
                return (
                    <Menu.Item key={item.notId} className={item.data.visited ? 'visited' : ''}>
                        <div>
                            <h3>{item.data.firstName} {item.data.lastName}</h3>
                            <p>Send you request to apply in your company</p>
                        </div>
                        <a href={item.data.url} target="_blank" onClick={() => visitedLink(item.notId)}>DownLoad Rasume</a>
                    </Menu.Item>
                )
            })
                :
                <div></div>
            }
        </Menu>
    )
}

export default Notification
