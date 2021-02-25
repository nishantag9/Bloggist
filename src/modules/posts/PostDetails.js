import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import PostsDetails from "./components/PostDetails"
import {getPostDetails, getPosts} from "./redux/actions"
import Loader from "../../components/loader";

export default function Posts() {

    const {postId, userId} = useParams()
    const dispatch =  useDispatch()
    const {detailsLoading} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostDetails(postId))
        dispatch(getPosts(userId))
    }, [dispatch, postId, userId])

    if(detailsLoading) return <Loader />;

    return <PostsDetails/>
}
