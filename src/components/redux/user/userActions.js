import { ONLINE_STATUS } from './userTypes'
import { CURRENT_NOTIFICATION } from './userTypes'
export function onlineStatus() {
    return {
        type: ONLINE_STATUS
    }
}

export function currentNotification(notification_id) {
    return {
        type: CURRENT_NOTIFICATION,
        payload: notification_id
    }
}