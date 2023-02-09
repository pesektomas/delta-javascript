import { EmojiType } from "./EmojiType";

import "./EmojiResultRow.css";

interface EmojiResultRowProps {
  emoji: EmojiType;
}

const getImage = (emoji: EmojiType): string => {
  const codePointHex = emoji.symbol.codePointAt(0)?.toString(16);

  return `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
};

export default function EmojiResultRow({ emoji }: EmojiResultRowProps) {
  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={emoji.symbol}
    >
      <img alt={emoji.title} src={getImage(emoji)} />
      <span className="title">{emoji.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
}
