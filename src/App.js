import { useState } from "react";
import "./App.css";
import { emojiList } from "./emojiList";
import EmojiPicker from "./EmojiPicker";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterredEmoji, setFilterredEmoji] = useState(emojiList);

  const handleSearch = (e) => {
    e.preventDefault();
    const filterredEmoji = emojiList.filter((item) =>
      item.description.includes(searchQuery.toLowerCase())
    );
    setFilterredEmoji(filterredEmoji);
  };

  return (
    <div className="main p-5 container">
      <h3 className="text-center mb-4 ">🤩Emoji Search😍</h3>
      <div className="form-control searchbar mb-3">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Emoji"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="card p-2 emojibox">
        <EmojiPicker emojis={filterredEmoji} />
      </div>
    </div>
  );
}

export default App;
