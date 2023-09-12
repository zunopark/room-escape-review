import React, { useState, useEffect } from 'react';
import { ThemeApi } from '../../Apis/ThemeApi';
import DetailPresenter from "./DetailPresenter";
import { useParams } from 'react-router-dom';

const DetailContainer = () => {
    const [data, setData] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        async function fetchTestData() {
          try {
            // 데이터 세팅
            const result = await ThemeApi.getOneDoc(params.id);
            setData(result);
          } catch (err) {
            console.log(err);
          }
        }
  
        fetchTestData();
      }, []);

    return <DetailPresenter data={data} />;
}

export default DetailContainer;