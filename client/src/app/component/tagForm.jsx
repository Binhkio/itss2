import React, { useState } from 'react';

function TagInput() {
  const [tags, setTags] = useState(['học đường', 'chiến tranh', 'hài hước']);
  const [newTag, setNewTag] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewTag(inputValue);

    const filteredSuggestions = tags.filter((tag) =>
      tag.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="tags" className="block font-bold mb-2">
          Tags
        </label>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full mr-2 mb-2 cursor-pointer"
              onClick={() => handleRemoveTag(index)}
            >
              {tag}
            </div>
          ))}
          <div className="relative w-full">
            <input
              type="text"
              id="tags"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Thêm tag"
              value={newTag}
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
              <div className="absolute bg-white shadow-lg rounded-b-md mt-1 w-full z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAddTag(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagInput;