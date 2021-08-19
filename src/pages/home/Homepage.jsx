import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Sodebar from '../../components/sidebar/Sodebar.jsx'
import Topbar from '../../components/topbar/Topbar.jsx'
import Feed from '../../components/feed/Feed.jsx'
function Homepage() {
    return (
<>
    <Topbar/>
    <div className="homeContainer">
          <Sodebar/>
          <Feed/>
          <Rightbar/>
    </div>
</>
    );
}

export default Homepage
