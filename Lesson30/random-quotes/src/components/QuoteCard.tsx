type Quote = {
  quote: string;
  author: string;
  likeCount: number;
};

type Props = {
  quoteData: Quote;
  onLike: () => void;
};


export default function QuoteCard({ quoteData, onLike }: Props) {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", margin: "16px" }}>
      <p>"{quoteData.quote}"</p>
      <h4>- {quoteData.author}</h4>
      <p>Likes: {quoteData.likeCount}</p>
      <button onClick={onLike}>Like ❤️</button>
    </div>
  );
}

