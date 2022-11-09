import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cmates.blob.core.windows.net/cmmaterial/material_19_5_24_jpzut.jpeg'/>
            post 1
        </div>
    );
};

export default Post;