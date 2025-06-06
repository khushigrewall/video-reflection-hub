
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Heart, Save, Lightbulb, Calendar, Clock, BookOpen, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JournalingSection = () => {
  const [journalText, setJournalText] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const dailyPrompts = [
    "What moment today made you feel most alive?",
    "What challenge helped you discover something new about yourself?", 
    "What small detail from today do you want to remember forever?",
    "What are you grateful for in this exact moment?",
    "What made your heart feel lighter today?",
    "What did you learn about yourself through today's experiences?",
    "What unexpected joy appeared in your day?",
    "What story from today would you want to tell again?"
  ];

  const todaysPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];

  const handleSaveEntry = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Write something meaningful ✨",
        description: "Share your authentic thoughts before saving your journal entry.",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);
    
    // Simulate saving to database
    setTimeout(() => {
      setIsSaving(false);
      setJournalText('');
      toast({
        title: "Entry saved! 📝",
        description: "Your authentic experiences are now part of your journey story.",
      });
    }, 1500);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
          <BookOpen className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-inter text-sm font-medium">Today's Journal Entry</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-white mb-6">
          Capture Your
          <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Daily Story
          </span>
        </h2>
        <p className="text-xl text-white/90 font-inter max-w-4xl mx-auto font-light">
          Write your authentic thoughts and experiences. After 7 consecutive days of journaling, 
          our AI will analyze your entries and create your first personalized video memory.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Writing Stats & Tips */}
        <div className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-3xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
              <h3 className="text-white font-inter font-semibold text-lg">Your Progress</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80 font-inter">Current Streak</span>
                <span className="text-white font-semibold text-xl">6 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 font-inter">Next Video</span>
                <span className="text-white font-semibold">1 day left</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 font-inter">Total Words</span>
                <span className="text-white font-semibold">3,247</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-white/70 text-sm font-inter">85% to your first video!</p>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-3xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-white" />
              <h3 className="text-white font-inter font-semibold text-lg">Writing Tips</h3>
            </div>
            <ul className="space-y-3 text-white/80 font-inter text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-white">•</span>
                <span>Write for at least 100 words</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white">•</span>
                <span>Be honest about your emotions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white">•</span>
                <span>Include specific details and moments</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-white">•</span>
                <span>Don't worry about perfect grammar</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Main Journal Editor */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl shadow-xl">
            {/* Daily Prompt */}
            <div className="mb-8 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
                <span className="text-white font-inter font-medium">Today's inspiration</span>
              </div>
              <p className="text-white text-lg italic font-light leading-relaxed">
                "{todaysPrompt}"
              </p>
            </div>

            {/* Journal Text Area */}
            <div className="mb-8">
              <Textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Start writing your story here... What happened today that you want to remember?"
                className="min-h-[400px] bg-white/20 backdrop-blur-md border-white/30 text-white placeholder:text-white/60 font-inter text-lg leading-relaxed resize-none focus:bg-white/30 transition-all duration-300 rounded-2xl p-6"
              />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-white/70 text-sm font-inter">
                  {journalText.length} characters • {Math.round(journalText.split(' ').filter(word => word.length > 0).length)} words
                </span>
                <span className="text-white/70 text-sm font-inter">
                  Reading time: {Math.ceil(journalText.split(' ').filter(word => word.length > 0).length / 200)} min
                </span>
              </div>
            </div>

            {/* Save Entry Button */}
            <div className="text-center">
              <Button
                onClick={handleSaveEntry}
                disabled={isSaving}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-10 py-4 text-lg font-inter font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 hover:scale-105"
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Saving your story...
                  </>
                ) : (
                  <>
                    <Save className="w-6 h-6 mr-3" />
                    Save Today's Entry
                  </>
                )}
              </Button>
              
              {isSaving && (
                <p className="text-white/80 text-sm font-inter mt-4 font-light">
                  Recording your authentic experiences for video generation ✨
                </p>
              )}
            </div>

            {/* Info about video generation */}
            <div className="mt-8 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
              <div className="flex items-start space-x-4">
                <div className="bg-white/30 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-inter font-semibold text-lg mb-3">How Your Video Memory is Created</h4>
                  <p className="text-white/90 font-inter leading-relaxed">
                    Complete 7 days of authentic journaling and our AI analyzes your entries for emotional patterns, 
                    growth moments, and key insights. Your video is crafted from YOUR actual words and experiences - 
                    not AI-generated content. Each video captures your unique journey and personal story.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JournalingSection;
