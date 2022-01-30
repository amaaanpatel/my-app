
import React, { useState, useEffect,useMemo } from 'react';
import './custom.css'
import { useNotificationUIContext } from "./notificationContext";
const Custom = (props) => {
    
  const notificationUIContext = useNotificationUIContext();
  const notificationUIProps = useMemo(() => {
    return {
      list: notificationUIContext.list,
      remove: notificationUIContext.remove,
      removeCustomById:notificationUIContext.removeCustomById
    };
  }, [notificationUIContext]);

    return (
        <>
            <div className={`notification-container `}>
                {
                    notificationUIProps.list.map((toast, i) =>
                        <div
                            key={i}
                            className={`notification toast ${toast.position} ${toast.type}`}                        >
                            <button onClick={()=>{notificationUIProps.removeCustomById(toast.id)}}>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
export default Custom;