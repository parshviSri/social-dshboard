import React,{useState} from 'react';
import NotificationCard from './notification-card';
import { useSelector } from 'react-redux';
import RecentPublications from './publications/recent-publications';
const tabs =['Notifications','Publications','Feed']
const Notifications = () => {
  const [currentTab, setcurrentTab] = useState("Notifications");
  const notifications = useSelector(st => st.reducer?.notificationsSlice?.result);

  const  items  = notifications?.items;
  const handleChangeTab =(tab)=>{
    setcurrentTab(tab);
  }
    return (
      <>
        <div className="flex">
          <div>
            <button
              className="text-4xl p-2 "
              onClick={() => handleChangeTab("Notifications")}
            >
              Notifications
            </button>
            {currentTab === "Notifications" && (
              <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]"></p>
            )}
          </div>
          <div>
            <button
              className="text-4xl p-2"
              onClick={() => handleChangeTab("Publications")}
            >
              Publications
            </button>
            {currentTab === "Publications" && (
              <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]"></p>
            )}
          </div>
          <div>
            <button
              className="text-4xl p-2"
              onClick={() => handleChangeTab("Feed")}
            >
              Feed
            </button>
            {currentTab === "Feed" && (
              <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]"></p>
            )}
          </div>
        </div>

        {currentTab === "Notifications" && (
          <div>
            <div>
              {items &&
                items.map((notify) => (
                  <NotificationCard
                    key={notify.notificationId}
                    notifications={notify}
                  />
                ))}
            </div>
          </div>
        )}
        {currentTab === "Publications" && <RecentPublications />}
      </>
    );
}

export default Notifications;
