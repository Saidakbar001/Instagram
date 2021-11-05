import React, { useState } from 'react'
import './StoryPreview.css'
import { FiX } from 'react-icons/fi';
import { useStateValue } from '../../context/stateprovider/StateProvider';


function StoryPreview({StoryPreviewImage}) {
    const [{activeStory}, dispatch] = useStateValue();
    const  closePreview = () => {
        dispatch({
            type: "CLOSE_ACTIVE_STORY",
            activeStory: null


        })
        clearTimeout(activeStory.timeout)
    }
    return (
        <div className="story_preview">
            <FiX className="preview_close" onClick={closePreview}/>
            <div className="story_previewloading">
                <div className="innerloading"></div>
            </div>
            <img src={StoryPreviewImage} alt="" />
        </div>
    )
}

export default StoryPreview
