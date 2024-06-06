import React, { useState, useEffect } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

function TagInput() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ['học đường', 'chiến tranh', 'hài hước'];//Danh sach cac tag
  
  useEffect(() => {
    const filteredSuggestions = tagSuggestions.filter(tag =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()) && !addedTags.includes(tag)
    );
    setFilteredSuggestions(filteredSuggestions);
  }, [searchTerm, addedTags, tags]);

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setAddedTags([...addedTags, tag]);
      setNewTag('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
    setAddedTags(addedTags.filter(tag => tag !== tagToRemove));
  };

  const handleInputClick = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="tags" className="block font-bold mb-2">
          Tags
        </label>
        <div className="relative">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tìm kiếm tag..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            onClick={handleInputClick}
          />
          {showSuggestions && (
            <div className="absolute bg-white shadow-lg rounded-b-md mt-1 w-full z-10">
              {filteredSuggestions.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddTag(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <div
            key={index}
            className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full cursor-pointer flex items-center"
            onClick={() => handleRemoveTag(tag)}
          >
            {tag}
            <IoCloseCircleSharp
              className="text-white ml-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTag(tag);
              }}
            />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagInput;