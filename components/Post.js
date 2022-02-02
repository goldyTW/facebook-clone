import { BookmarkIcon, ChatIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, ShareIcon } from '@heroicons/react/solid'
import React, {useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import { async } from '@firebase/util';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';
import Image from 'next/image';

const Post = ({id, name, image, postImage, message, timestamp}) => {
    const {data: session} = useSession();
    // const [comments, setComments] = useState([]);
    // const [comment, setComment] = useState("");
    // const [likes, setLikes] = useState([]);
    // const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow sm'>
                <div className='flex items-center space-x-2'>
                    <img className='rounded-full' src={image}
                    width={40} height={40} alt=''></img>
                </div>
                <div>
                    <p className='font-medium'>{name}</p>
                     <Moment fromNow className='text-xs text-gray-500'>{timestamp?.toDate()}</Moment>
                    {/* <p className='text-xs text-gray-500'>{</p> */}
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            
             {postImage && (
                <div className='relative h-96 md:h-96 bg-white'>
                    <Image src={postImage} objectFit="cover" layout="fill"></Image>
                </div>
            )}

            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md
            text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <ThumbUpIcon className='h-4'></ThumbUpIcon>
                    <p className='text-xs sm-text-base'>Like</p>
                </div>
                  <div className='inputIcon'>
                    <ChatIcon className='h-4'></ChatIcon>
                    <p className='text-xs sm-text-base'>Comment</p>
                </div>
                  <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4'></ShareIcon>
                    <p className='text-xs sm-text-base'>Share</p>
                </div>
            </div>
            

        </div>
    )
}

export default Post
