import React from 'react';

const SearchSuggestion = ({ description, className }) => (
    <div className={className}>
      <span>{description}</span>
    </div>
)

export default SearchSuggestion