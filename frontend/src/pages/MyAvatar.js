import React, { useEffect } from "react";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/APIRoutes.js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const MyAvatar = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (pv) => {
    setPreview(pv);
  };
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  useEffect(() => {
    async function fetchData() {
      // console.log(localStorage.getItem("chat-app-user"));
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      }
    }
    fetchData();
  }, []);

  const setProfilePicture = async () => {
    const user = await JSON.parse(localStorage.getItem("chat-app-user"));
    //console.log(user);
    const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
      image: preview,
    });
    //console.log(data);

    if (data.isSet) {
      user.isAvatarImageSet = true;
      user.avatarImage = data.image;
      localStorage.setItem("chat-app-user", JSON.stringify(user));
      navigate("/");
    } else {
      toast.error("Error setting avatar. Please try again", toastOptions);
    }
  };

  return (
    <div>
      <Avatar
        width={300}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={null}
      />
      {preview && <img src={preview} alt="Preview" />}
      <button className="submit-btn" onClick={setProfilePicture}>
        Set as Profile Picture
      </button>
    </div>
  );
};

export default MyAvatar;
