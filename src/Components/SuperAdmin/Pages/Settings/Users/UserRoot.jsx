import React, {useState} from 'react'
import '../../All.css'
import UserSwitch from '../../../../img/UserSwitch.png'
import Key from '../../../../img/Key.png'
import BellSimple from '../../../../img/BellSimple.png'
import UsersList from "./UsersList";
import Permission from './Permission'
import Notifications from './Notifications'


const UserRoot = () => {

    // User Checks
  const [userListCheck, setUserListCheck] = React.useState(false);
  const [permissionCheck, setPermissionCheck] = React.useState(false);
  const [notificationCheck, setNotificationCheck] = React.useState(false);

  return (
    <div>
        { userListCheck ? <UsersList setCheckUser ={setUserListCheck} /> : null}
        { permissionCheck ? <Permission setCheckPermission ={setPermissionCheck}/> : null}
        { notificationCheck ? <Notifications setCheckNotification ={setNotificationCheck} /> : null}

        { !userListCheck && !permissionCheck && !notificationCheck &&
        <div className="row">
        <div className="col-lg-4 mt-3">
        <button className="SettingUserButtons" onClick={() => setUserListCheck(!userListCheck)}>
            <img src={UserSwitch} alt="User List" className="imgUsers" />
            User List
        </button>
        </div>

        <div className="col-lg-4 mt-3">
        <button className="SettingUserButtons" onClick={() => setPermissionCheck(!permissionCheck)}>
        <img src={Key} alt="User List" className="imgUsers" />
            Permissions
        </button>
        </div>

        <div className="col-lg-4 mt-3">
        <button className="SettingUserButtons" onClick={() => setNotificationCheck(!notificationCheck)}>
        <img src={BellSimple} alt="User List" className="imgUsers" />
            Notification
        </button>
        </div>
        </div>
        }
  </div>
  )
}

export default UserRoot
