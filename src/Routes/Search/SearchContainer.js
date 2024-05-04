import React, { useState, useEffect } from 'react';
import SearchPresenter from "./SearchPresenter";
import SearchInput from '../../Components/Search';
import { ThemeApi } from '../../Apis/ThemeApi';
import Theme from "../../Components/Theme"


// 검색 결과를 서치 프레젠터에 넘겨줘서, 메인과 같이 렌더링 하도록 동작해야함.
// 검색 결과가 있다면 인풋 태그를 사라지게 하는 방식으로 구현

const SearchContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedData, setSearchedData] = useState([]);

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            if (searchTerm?.length > 0) {
                // 검색
                const themeResult = await ThemeApi.getAllDocsByCategory(searchTerm);
                if (themeResult?.length > 0) {
                    setSearchedData(themeResult);
                }
            }
        }
    };

    return (
    <div>
        {searchedData?.length > 0 ? searchedData.map((item, id) => (
              <Theme key={id} item={item} />
            )) : <SearchInput placeholder="테마를 검색해보세요" onChange={handleInputChange} onKeyDown={handleKeyDown} />}
    </div>

    )
    // <SearchPresenter />;
}

export default SearchContainer;