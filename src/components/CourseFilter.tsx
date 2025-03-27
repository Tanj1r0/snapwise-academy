
import { useState } from 'react';

interface Props {
  onFilterChange: (filters: Filters) => void;
}

export interface Filters {
  levels: string[];
  priceRange: [number, number];
  duration: string[];
}

const CourseFilter = ({ onFilterChange }: Props) => {
  const [filters, setFilters] = useState<Filters>({
    levels: [],
    priceRange: [0, 500],
    duration: [],
  });

  const handleLevelChange = (level: string) => {
    const newLevels = filters.levels.includes(level)
      ? filters.levels.filter(l => l !== level)
      : [...filters.levels, level];
    
    const newFilters = { ...filters, levels: newLevels };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDurationChange = (duration: string) => {
    const newDuration = filters.duration.includes(duration)
      ? filters.duration.filter(d => d !== duration)
      : [...filters.duration, duration];
    
    const newFilters = { ...filters, duration: newDuration };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const newPriceRange: [number, number] = [0, value];
    
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 sticky top-20">
      <h3 className="font-serif text-lg font-medium mb-4">Filter Courses</h3>
      
      <div className="space-y-6">
        {/* Level Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Level</h4>
          <div className="space-y-2">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <div key={level} className="flex items-center">
                <input
                  type="checkbox"
                  id={`level-${level}`}
                  checked={filters.levels.includes(level)}
                  onChange={() => handleLevelChange(level)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <label htmlFor={`level-${level}`} className="ml-2 text-sm text-gray-600">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Price Range</h4>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">$0</span>
              <span className="text-xs text-gray-500">Max: ${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
        
        {/* Duration Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Duration</h4>
          <div className="space-y-2">
            {['0-5 hours', '5-10 hours', '10+ hours'].map((duration) => (
              <div key={duration} className="flex items-center">
                <input
                  type="checkbox"
                  id={`duration-${duration}`}
                  checked={filters.duration.includes(duration)}
                  onChange={() => handleDurationChange(duration)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <label htmlFor={`duration-${duration}`} className="ml-2 text-sm text-gray-600">
                  {duration}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reset Filters */}
        <button
          className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          onClick={() => {
            const resetFilters = {
              levels: [],
              priceRange: [0, 500],
              duration: [],
            };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;
