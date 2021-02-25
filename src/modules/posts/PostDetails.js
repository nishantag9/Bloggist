import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import PostsDetails from "./components/PostDetails"
import {getPostDetails} from "./redux/actions"
import Loader from "../../components/loader";

export default function Posts() {

    const {postId} = useParams()
    const dispatch =  useDispatch()
    const {detailsLoading} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostDetails(postId))
    }, [dispatch, postId])

    if(detailsLoading) return <Loader />;

    return <PostsDetails/>
}
