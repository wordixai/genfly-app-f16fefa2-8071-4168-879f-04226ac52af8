import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AudioPlayer from './AudioPlayer';
import { TravelPhrase } from '@/types/translator';

interface PhraseCardProps {
  phrase: TravelPhrase;
  languageCode: string;
  onPlay?: () => void;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, languageCode, onPlay }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{phrase.english}</span>
          <AudioPlayer 
            text={phrase.translation}
            language={languageCode}
            className="ml-2"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-2xl font-semibold text-blue-600 mb-1">
            {phrase.translation}
          </p>
          {phrase.pronunciation && (
            <Badge variant="outline" className="text-sm">
              {phrase.pronunciation}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhraseCard;