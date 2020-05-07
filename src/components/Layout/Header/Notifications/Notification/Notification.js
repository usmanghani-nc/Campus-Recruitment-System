import React from 'react'

// IMPORTS ...
import { Menu } from 'antd';


const Notification = (props) => {
    return (
        <Menu>
            {props && props.notification ? props.notification.map(item => {
                return (
                    <Menu.Item key={item.userId}>
                        {item.url}
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
