export default function EmojiPicker({ emojis }) {
  return (
    <div className="text">
      {emojis.map((item) => (
        <span className="m-2" key={item.emoji}>
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
