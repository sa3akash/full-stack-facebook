import Header from "../components/header/Header";
import LeftSide from "../components/home/left";
import "./style/Home.css";
import {useDispatch, useSelector} from 'react-redux';
import RightSide from "../components/home/right";
import Stories from "../components/home/stories";
import CreatePost from "../components/createPost";
import SendVerification from "../components/home/sendVerification";
import CreatePostPopup from "../components/createPostPopup";
import { useState } from "react";
import Post from "../components/post";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [openPost, setOpenPost] = useState(false)
  const [showPrev,setShowPrev] = useState(false)
  const {user,darkTheme} = useSelector((state) => state.Auth);

  const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.Posts)


  return (
    <div className={darkTheme ? "home_page dark" : "home_page"}>
      <Header page="home" />
      <LeftSide user={user}/>

      <div className="home_middle">
        <Stories />
        {!user.verified && <SendVerification user={user}/>}
        <CreatePost user={user} setOpenPost={setOpenPost} setShowPrev={setShowPrev}/>
        {openPost && <CreatePostPopup user={user} setOpenPost={setOpenPost} showPrev={showPrev} setShowPrev={setShowPrev}/>}
        {loading ? 
          <div className="spiner_loader">
              <HashLoader color="#1876f2" />
          </div>
            :
          <Post user={user} />}
      </div>

      <RightSide user={user}/>
    </div>
  )
}

export default Home