import React, { useState, useEffect } from 'react';
import { ThemeApi } from '../../Apis/ThemeApi';
import DetailPresenter from "./DetailPresenter";
import { useParams } from 'react-router-dom';
import { CommentApi } from "../../Apis/CommentApi";

const DetailContainer = () => {
    const [theme, setTheme] = useState(null);
    const [comment, setComment] = useState(null);
    const params = useParams();

    useEffect(() => {
        async function fetchTestData() {
          try {
            // 데이터 세팅
            const themeResult = await ThemeApi.getOneDoc(params.id);
            const commentResult = await CommentApi.getAllCommentsByTheme(params.id);
            setTheme(themeResult);
            setComment(commentResult);
          } catch (err) {
            console.log(err);
          }
        }
  
        fetchTestData();
      }, []);

    return <DetailPresenter theme={theme} comment={comment} />;
}

export default DetailContainer;