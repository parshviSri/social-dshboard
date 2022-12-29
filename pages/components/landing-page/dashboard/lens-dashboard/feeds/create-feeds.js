import React from 'react';
import Feeds from './feeds';
import { connect } from "react-redux";
import { useSelector } from "react-redux";

 const CreateFeeds = () => {
      const  feeds  = useSelector((st) => st.reducer.feedsSlice?.feed);
    return (
      <div>
       
          {feeds &&
            feeds.items.map((feed) => 
              <Feeds key={feed.id} post={feed?.root} />
              
            )}
        
      </div>
    );
}
export default CreateFeeds


