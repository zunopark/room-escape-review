import React, { useState } from 'react';

const SearchInput = ({ placeholder, onChange, onKeyDown }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`search-input-container ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
