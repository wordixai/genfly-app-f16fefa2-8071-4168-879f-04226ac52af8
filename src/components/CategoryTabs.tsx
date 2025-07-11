import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PhraseCategory } from '@/types/translator';
import PhraseCard from './PhraseCard';

interface CategoryTabsProps {
  categories: PhraseCategory[];
  languageCode: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, languageCode }) => {
  if (!categories.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          More phrases coming soon for this language!
        </p>
      </div>
    );
  }

  return (
    <Tabs defaultValue={categories[0]?.id} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 h-auto p-1">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="flex items-center gap-2 px-3 py-2 text-sm"
          >
            <span>{category.icon}</span>
            <span className="hidden sm:inline">{category.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.phrases.map((phrase) => (
              <PhraseCard
                key={phrase.id}
                phrase={phrase}
                languageCode={languageCode}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryTabs;