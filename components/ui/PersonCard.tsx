interface PersonCardProps {
  name: string;
  bio: string;
  imageUrl: string;
}

export default function PersonCard({ name, bio, imageUrl }: PersonCardProps) {
  return (
    <div className="flex flex-col items-start w-80">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-48 h-48 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p  dangerouslySetInnerHTML={{ __html: bio }} />
    </div>
  );
}
