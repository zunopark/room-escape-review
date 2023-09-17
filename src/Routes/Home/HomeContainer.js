import React, { useState, useEffect } from 'react';
import HomePresenter from "./HomePresenter";
import { testAPI } from "../../Apis/testApi";
import { ThemeApi } from '../../Apis/ThemeApi';

const HomeContainer = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      async function fetchTestData() {
        try {
          // UI 잡기 위해서 임시로 사용할 API
          // const {
          //   data: { results: nowPlaying },
          // } = await testAPI.nowPlaying();
          // const {
          //   data: { results: upcoming },
          // } = await testAPI.upcoming();
          // const {
          //   data: { results: popular },
          // } = await testAPI.popular();
          // setData(nowPlaying)
          // setData(upcoming)
          // setData(popular)

          // 데이터 세팅
          const result = await ThemeApi.getAllDocsByCategory("공포");
          if (result) setData(result);
        } catch {
          setIsError({ error: "Can't find data" });
        } finally {
          setIsLoading({ loading: false });
        }
      }

      fetchTestData();
    }, []);
  
    return <HomePresenter data={data} />;
}

export default HomeContainer;