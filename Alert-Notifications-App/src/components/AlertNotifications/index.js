import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Alert Notifications</h1>
      <div className="notifications-container">
        <Notification>
          <AiFillCheckCircle className="alert-icon success" />
          <div>
            <h1 className="alert-heading success">Success</h1>
            <p className="alert-description">
              You can access all the files in the folder
            </p>
          </div>
        </Notification>
        <Notification>
          <RiErrorWarningFill className="alert-icon error" />
          <div>
            <h1 className="alert-heading error">Error</h1>
            <p className="alert-description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <MdWarning className="alert-icon warning" />
          <div>
            <h1 className="alert-heading warning">Warning</h1>
            <p className="alert-description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <MdInfo className="alert-icon info" />
          <div>
            <h1 className="alert-heading info">Info</h1>
            <p className="alert-description">
              Anyone on the Internet can view these files
            </p>
          </div>
        </Notification>
      </div>
    </div>
  </div>
)

export default AlertNotifications
