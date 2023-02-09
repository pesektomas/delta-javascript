import { EmojiType } from "./EmojiType";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { filterEmoji } from "./model/filterEmoji";

import "./SearchInput.css";

interface SearchInputProps {
  setFilteredEmoji: Dispatch<SetStateAction<EmojiType[]>>;
}

export default function SearchInput({ setFilteredEmoji }: SearchInputProps) {
  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    setFilteredEmoji(filterEmoji(event.currentTarget.value));
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleOnChange} />
      </div>
    </div>
  );
}
