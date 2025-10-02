import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const onKeywordChangeHandler = (event) => {
    const value = event.target.value;
    setSearchParams(value ? { keyword: value } : {});
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={onKeywordChangeHandler}
      />
    </div>
  );
};

export default SearchBar;