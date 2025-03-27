
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  description: string;
  price: number;
  imageSrc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

const CourseCard = ({ id, title, instructor, description, price, imageSrc, level, duration }: CourseCardProps) => {
  const levelColor = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800',
  }[level];

  return (
    <div className="course-card rounded-lg bg-white shadow-md overflow-hidden">
      <div className="course-img-wrapper">
        <img src={imageSrc} alt={title} className="course-img" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColor}`}>{level}</span>
          <span className="text-lg font-semibold">${price}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-muted-foreground">By {instructor}</span>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
        <Link to={`/courses/${id}`} className="btn-primary w-full text-center">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
