import "./App.css";
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import { useState } from "react";
import { EmojiType } from "./EmojiType";
import SearchInput from "./SearchInput";
import { filterEmoji } from "./model/filterEmoji";

export const AppCost = () => {
  return <div></div>;
};

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState<EmojiType[]>(
    filterEmoji("")
  );

  return (
    <div className="App">
      <Header />
      <SearchInput setFilteredEmoji={setFilteredEmoji} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
}

export default App;
