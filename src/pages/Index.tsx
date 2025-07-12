import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LanguageSelector from '@/components/LanguageSelector';
import CategoryTabs from '@/components/CategoryTabs';
import { languages } from '@/data/languages';
import { phraseCategories } from '@/data/phrases';
import { Globe, Headphones, BookOpen } from 'lucide-react';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage);
  const currentCategories = phraseCategories[selectedLanguage] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className='text-gray-900 text-4xl font-bold mb-4 flex items-center justify-center gap-3'>TravelTranslator
            <Globe className="h-10 w-10 text-blue-600" />
            Travel Phrase Translator
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Learn essential travel phrases with audio pronunciation guides
          </p>
          
          <div className="flex justify-center mb-8">
            <LanguageSelector
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage} />

          </div>
        </div>

        {currentLanguage &&
        <div className="mb-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">{currentLanguage.flag}</span>
                  <span>Learning {currentLanguage.name}</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {currentCategories.reduce((total, cat) => total + cat.phrases.length, 0)} phrases
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Headphones className="h-3 w-3" />
                    Audio pronunciation
                  </Badge>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        }

        <CategoryTabs categories={currentCategories} languageCode={selectedLanguage} />
      </div>
    </div>);

};

export default Index;