import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Phone, MessageCircle, Download, Filter, Search, User, Globe, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface DailyEntry {
  id: string;
  date: string;
  customerName: string;
  summary: string;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  originalLanguage: string;
  translatedLanguage?: string;
  callDuration: string;
}

const Dashboard = () => {
  const [entries, setEntries] = useState<DailyEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for demo
  useEffect(() => {
    setTimeout(() => {
      setEntries([
        {
          id: '1',
          date: '2025-06-25',
          customerName: 'Sarah Johnson',
          summary: 'Today, Sarah shared about her productive day at work. She completed a major project presentation and felt accomplished. However, she mentioned feeling slightly tired in the evening after a long day of meetings.',
          sentiment: 'Positive',
          originalLanguage: 'English',
          translatedLanguage: 'Spanish',
          callDuration: '4:32'
        },
        {
          id: '2',
          date: '2025-06-24',
          customerName: 'Michael Chen',
          summary: 'Michael had a challenging day dealing with technical issues at work. He expressed frustration but remained optimistic about finding solutions. He spent quality time with family in the evening which improved his mood.',
          sentiment: 'Neutral',
          originalLanguage: 'English',
          callDuration: '6:15'
        },
        {
          id: '3',
          date: '2025-06-23',
          customerName: 'Emily Rodriguez',
          summary: 'Emily experienced a wonderful day celebrating her birthday with friends and family. She felt grateful for the love and support from everyone. The surprise party organized by her colleagues was the highlight of her day.',
          sentiment: 'Positive',
          originalLanguage: 'Spanish',
          translatedLanguage: 'English',
          callDuration: '3:45'
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSentiment = sentimentFilter === 'all' || entry.sentiment.toLowerCase() === sentimentFilter;
    return matchesSearch && matchesSentiment;
  });

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'bg-green-100 text-green-800 border-green-200';
      case 'Negative': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return <Heart className="w-4 h-4" />;
      case 'Negative': return <MessageCircle className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-warm-gradient">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6">
            Agent Dashboard
          </h1>
          <p className="text-xl text-warm-brown/80 font-inter max-w-3xl mx-auto">
            View and manage all daily conversation entries from your Omni Dimension agent
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in-delayed">
          <Card className="bg-white/90 backdrop-blur-sm border border-cream p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="bg-soft-peach p-3 rounded-xl">
                <Phone className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="text-warm-brown/70 font-inter text-sm">Total Calls</p>
                <p className="text-warm-brown font-poppins font-bold text-2xl">127</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border border-cream p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="bg-soft-peach p-3 rounded-xl">
                <MessageCircle className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="text-warm-brown/70 font-inter text-sm">This Week</p>
                <p className="text-warm-brown font-poppins font-bold text-2xl">7</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border border-cream p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="bg-soft-peach p-3 rounded-xl">
                <Globe className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="text-warm-brown/70 font-inter text-sm">Languages</p>
                <p className="text-warm-brown font-poppins font-bold text-2xl">5</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border border-cream p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="bg-soft-peach p-3 rounded-xl">
                <Heart className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="text-warm-brown/70 font-inter text-sm">Positive Rate</p>
                <p className="text-warm-brown font-poppins font-bold text-2xl">89%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-delayed">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-brown/50 w-5 h-5" />
            <Input
              placeholder="Search by name or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-cream bg-white/90 font-inter"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={sentimentFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSentimentFilter('all')}
              className="font-poppins"
            >
              All
            </Button>
            <Button
              variant={sentimentFilter === 'positive' ? 'default' : 'outline'}
              onClick={() => setSentimentFilter('positive')}
              className="font-poppins"
            >
              Positive
            </Button>
            <Button
              variant={sentimentFilter === 'neutral' ? 'default' : 'outline'}
              onClick={() => setSentimentFilter('neutral')}
              className="font-poppins"
            >
              Neutral
            </Button>
            <Button
              variant={sentimentFilter === 'negative' ? 'default' : 'outline'}
              onClick={() => setSentimentFilter('negative')}
              className="font-poppins"
            >
              Negative
            </Button>
          </div>
        </div>

        {/* Entries */}
        <div className="space-y-6 animate-fade-in-delayed-long">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-terracotta border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-warm-brown/70 font-inter">Loading entries...</p>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-warm-brown/30 mx-auto mb-4" />
              <p className="text-warm-brown/70 font-inter text-lg">No entries found matching your criteria</p>
            </div>
          ) : (
            filteredEntries.map((entry, index) => (
              <Card key={entry.id} className="bg-white/90 backdrop-blur-sm border border-cream p-8 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="bg-soft-peach w-12 h-12 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-warm-brown font-poppins font-bold text-xl">{entry.customerName}</h3>
                      <div className="flex items-center space-x-3 text-warm-brown/70 font-inter text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(entry.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{entry.callDuration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getSentimentColor(entry.sentiment)} font-poppins`}>
                      <span className="flex items-center space-x-1">
                        {getSentimentIcon(entry.sentiment)}
                        <span>{entry.sentiment}</span>
                      </span>
                    </Badge>
                    {entry.translatedLanguage && (
                      <Badge variant="outline" className="border-terracotta text-terracotta font-poppins">
                        <Globe className="w-3 h-3 mr-1" />
                        Translated
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-warm-brown/80 font-inter leading-relaxed mb-6 text-lg">
                  {entry.summary}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-cream">
                  <div className="text-warm-brown/60 font-inter text-sm">
                    <span>Original: {entry.originalLanguage}</span>
                    {entry.translatedLanguage && (
                      <span className="ml-4">Translated: {entry.translatedLanguage}</span>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-poppins">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
