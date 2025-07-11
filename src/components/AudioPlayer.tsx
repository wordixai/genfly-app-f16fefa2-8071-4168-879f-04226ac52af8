import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  text: string;
  language: string;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ text, language, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const playAudio = () => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    setIsPlaying(true);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.8;
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
    };

    speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!isSupported) {
    return (
      <Button variant="ghost" size="icon" disabled className={className}>
        <VolumeX className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={isPlaying ? stopAudio : playAudio}
      className={className}
    >
      <Volume2 className={`h-4 w-4 ${isPlaying ? 'text-blue-500' : ''}`} />
    </Button>
  );
};

export default AudioPlayer;