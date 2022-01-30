import React, { useMemo } from "react";
import { useNotificationUIContext } from "./notificationContext";

function Homepage() {

  // Remarks UI Context
  const notificationUIContext = useNotificationUIContext();
  const notificationUIProps = useMemo(() => {
    return {
      notify: notificationUIContext.notify,
      remove: notificationUIContext.remove,
      cutomNotify:notificationUIContext.customNotify,
      removeAllCustomNotification:notificationUIContext.removeAllCustomNotification

    };
  }, [notificationUIContext]);


  return (
    <>
      <div className="maintab">
        <div className="my">All notifications</div>
      <div className="buttons">
        <button
          onClick={() => {
            notificationUIProps.notify({ message: "SUCCESS", type: "success", duration: 5000, title: "test", container: "top-left" })
          }}
        >
          Success
        </button>
        <button
          onClick={() => {
            notificationUIProps.notify({ message: "DANGER", type: "danger", duration: 5000, title: "test", container: "top-left" })
          }}
        >
          danger
        </button>
        <button
          onClick={() => {
            notificationUIProps.notify({ message: "WARNING", type: "warning", duration: 5000, title: "test", container: "top-left" })
          }}
        >
          warning
        </button>
        <button
          onClick={() => {
            notificationUIProps.notify({ message: "INFO", type: "info", duration: 5000, title: "test", container: "top-left" })
          }}
        >
          info
        </button>
        <button
          onClick={() => {
            notificationUIProps.remove()
          }}
        >
          clear all notification
        </button>
      </div>
      </div>
      <br/>
      <div className="maintab">
        <div className="my">Custom NOtification</div>
      <div className="buttons">
        <button
          onClick={() => {
            notificationUIProps.cutomNotify({ message: "SUCCESS", type: "success", title: "test", container: "top-left" })
          }}
        >
          Success
        </button>
        <button
          onClick={() => {
            notificationUIProps.cutomNotify({ message: "DANGER", type: "danger", title: "test", container: "top-left" })
          }}
        >
          danger
        </button>
        <button
          onClick={() => {
            notificationUIProps.cutomNotify({ message: "WARNING", type: "warning", title: "test", container: "top-left" })
          }}
        >
          warning
        </button>
        <button
          onClick={() => {
            notificationUIProps.cutomNotify({ message: "INFO", type: "info",title: "test", container: "top-left" })
          }}
        >
          info
        </button>
        <button
          onClick={() => {
            notificationUIProps.removeAllCustomNotification()
          }}
        >
          clear all notification
        </button>
      </div>
      </div>
    </>
  )
}

export default Homepage;