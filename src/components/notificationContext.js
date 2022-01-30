import React, { createContext, useContext, useState, useCallback,useEffect } from "react";
import { Store } from 'react-notifications-component';

const NotificationUIContext = createContext();

export function useNotificationUIContext() {
    return useContext(NotificationUIContext);
}

export const NotificationUIConsumer = NotificationUIContext.Consumer;

export function NotificationUIContextUIProvider({ children }) {
    const NotificationTime = 10000
    const [list, setList] = useState([]);
    useEffect(() => {
        if (list.length > 0) {
          const timer = setTimeout(
            () => setList((toasts) => toasts.slice(1)),
            NotificationTime
          );
          return () => clearTimeout(timer);
        }
      }, [list]);

    //set danger
    const setNotification = async (data) => {
        Store.addNotification({
            title: data.title,
            insert: "top",
            message: data.message,
            type: data.type,
            container: data.container,
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: data.duration,
                onScreen: true,
                showIcon: true
            },
            onRemoval: (id) => {
                // reomveById(id)
            }
        });
    }

    const setCustomNotification = (data) => {
        let toastProperties = {
            id: Math.floor((Math.random() * 101) + 1),
            title: data.title,
            message: data.message,
            type: data.type,
            position: data.container
        }
        setList([...list, toastProperties]);
    }
    const removeNotification = () => {
        Store.removeAllNotifications()
    }

    const removeAllCustomNotification = ()=>{
        setList([])
    }

    const removeCustomById = (id)=>{
        const listItemIndex = list.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        setList([...list])
    }
    const value = {
        notify: setNotification,
        remove: removeNotification,
        list: list,
        customNotify: setCustomNotification,
        removeAllCustomNotification:removeAllCustomNotification,
        removeCustomById:removeCustomById
        
    };
    return (
        <NotificationUIContext.Provider value={value}>
            {children}
        </NotificationUIContext.Provider>
    );
}
