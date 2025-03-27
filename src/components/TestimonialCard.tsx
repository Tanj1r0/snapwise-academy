
const TestimonialCard = ({ name, title, content, imageUrl }: { name: string; title: string; content: string; imageUrl: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-medium text-base">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
      <div className="relative">
        <svg className="absolute -top-4 -left-4 h-8 w-8 text-muted opacity-20" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-base italic text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
