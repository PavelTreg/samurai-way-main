import React from 'react';
import s from "./Post.module.css";
type MessageType = {
    message: string
    like: number
}

const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://cmates.blob.core.windows.net/cmmaterial/material_19_5_24_jpzut.jpeg'/>
            {props.message}
            <div>
                <span>like  {props.like}</span>
            </div>
        </div>
    );
};

export default Post;
