import { EmojiType } from "./EmojiType";
import EmojiResultRow from "./EmojiResultRow";
import { useEffect } from "react";
import Clipboard from "clipboard";

interface EmojiResultsProps {
  emojiData: EmojiType[];
}

export default function EmojiResults({ emojiData }: EmojiResultsProps) {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-to-clipboard");

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData) => (
        <EmojiResultRow key={emojiData.title} emoji={emojiData} />
      ))}
    </div>
  );
}
