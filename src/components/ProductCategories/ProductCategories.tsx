import React, { useState } from 'react';
import CategoryList from '@/components/ProductCategories/CategoryList';

const CategorySelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Men');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); 
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-[200px] p-4 md:p-6 lg:p-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-4xl">
          <div
            className={`border p-4 sm:p-6 text-center ${selectedCategory === 'Men' ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => handleCategoryClick('Men')}
          >
            Men
          </div>
          <div
            className={`border p-4 sm:p-6 text-center ${selectedCategory === 'Women' ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => handleCategoryClick('Women')}
          >
            Women
          </div>
          <div
            className={`border p-4 sm:p-6 text-center ${selectedCategory === 'Underwear' ? 'bg-black text-white' : 'bg-white'}`}
            onClick={() => handleCategoryClick('Underwear')}
          >
            Underwear
          </div>
        </div>
      </div>

      {selectedCategory && <CategoryList category={selectedCategory} />}
    </div>
  );
};

export default CategorySelector;
