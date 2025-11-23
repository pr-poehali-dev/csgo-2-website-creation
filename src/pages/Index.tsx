import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('history');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const timeline = [
    { year: '1999', title: 'Рождение легенды', description: 'Выход Half-Life mod - Counter-Strike' },
    { year: '2004', title: 'Counter-Strike: Source', description: 'Перенос на движок Source Engine' },
    { year: '2012', title: 'CS:GO эра', description: 'Глобальная революция киберспорта' },
    { year: '2023', title: 'Counter-Strike 2', description: 'Новая эра на Source 2 Engine' }
  ];

  const teams = [
    {
      name: 'Террористы',
      icon: 'Flame',
      color: 'text-primary',
      description: 'Нападающая сторона',
      objectives: ['Установить бомбу C4', 'Уничтожить всех противников', 'Удержать позиции до взрыва'],
      weapons: ['AK-47', 'AWP', 'Desert Eagle']
    },
    {
      name: 'Контр-террористы',
      icon: 'Shield',
      color: 'text-secondary',
      description: 'Защищающаяся сторона',
      objectives: ['Обезвредить бомбу', 'Защитить точки закладки', 'Уничтожить всех террористов'],
      weapons: ['M4A4/M4A1-S', 'AWP', 'USP-S']
    }
  ];

  const gameModes = [
    {
      title: 'Competitive',
      icon: 'Trophy',
      players: '5v5',
      rounds: '30 раундов',
      description: 'Соревновательный режим с рейтингом. Команды сражаются до 16 побед.',
      features: ['Экономическая система', 'Тактическая глубина', 'Рейтинговая система']
    },
    {
      title: 'Wingman',
      icon: 'Users',
      players: '2v2',
      rounds: '16 раундов',
      description: 'Быстрый формат 2 на 2 на уменьшенных картах.',
      features: ['Одна точка закладки', 'Динамичный геймплей', 'Отдельный рейтинг']
    },
    {
      title: 'Deathmatch',
      icon: 'Crosshair',
      players: 'до 20 игроков',
      rounds: 'бесконечно',
      description: 'Свободная стрельба для тренировки навыков.',
      features: ['Мгновенное возрождение', 'Все оружие доступно', 'Тренировка прицеливания']
    },
    {
      title: 'Casual',
      icon: 'Gamepad2',
      players: '10v10',
      rounds: '15 раундов',
      description: 'Расслабленный режим без давления рейтинга.',
      features: ['Дружественный огонь выключен', 'Автоматическая броня', 'Идеально для новичков']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 text-primary border-primary">
            Source 2 Engine
          </Badge>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient">
            COUNTER-STRIKE 2
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            От легендарного мода до новой эры киберспорта. История, команды и режимы культовой игры.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('history')}
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover-scale transition-all"
            >
              <Icon name="Clock" size={24} />
              История игры
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="group flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover-scale transition-all"
            >
              <Icon name="Users" size={24} />
              Команды
            </button>
            <button
              onClick={() => scrollToSection('modes')}
              className="group flex items-center gap-2 px-8 py-4 bg-card text-card-foreground border-2 border-border rounded-lg font-bold text-lg hover-scale transition-all"
            >
              <Icon name="Gamepad2" size={24} />
              Режимы
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </div>

      <section id="history" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 text-base px-4 py-1">1999-2024</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">История Counter-Strike</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От скромного мода до глобального киберспортивного феномена
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="inline-block hover-scale">
                      <CardHeader>
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <CardDescription className="text-lg">{event.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background">
                    <span className="text-2xl font-bold text-primary-foreground">{event.year.slice(2)}</span>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teams" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-1">T vs CT</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Команды</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Две противоборствующие силы с уникальными целями и тактикой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <Card 
                key={team.name}
                className="hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-muted ${team.color}`}>
                      <Icon name={team.icon as any} size={40} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{team.name}</CardTitle>
                      <CardDescription className="text-lg">{team.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Target" size={20} />
                        Цели
                      </h4>
                      <ul className="space-y-2">
                        {team.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <Icon name="CheckCircle2" size={16} className="mt-1 text-primary" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Crosshair" size={20} />
                        Основное оружие
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {team.weapons.map((weapon) => (
                          <Badge key={weapon} variant="secondary" className="text-sm">
                            {weapon}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="modes" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-1">Game Modes</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Игровые режимы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От соревновательных матчей до свободной стрельбы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gameModes.map((mode, index) => (
              <Card 
                key={mode.title}
                className="hover-scale animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Icon name={mode.icon as any} size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{mode.title}</CardTitle>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">{mode.players}</Badge>
                        <Badge variant="outline">{mode.rounds}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wider">
                      Особенности
                    </h4>
                    <ul className="space-y-2">
                      {mode.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="Zap" size={16} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Crosshair" size={24} className="text-primary" />
            <span className="text-2xl font-bold">Counter-Strike 2</span>
          </div>
          <p className="text-muted-foreground">
            Игровой портал о легендарной серии Counter-Strike
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#history" className="text-muted-foreground hover:text-primary transition-colors">
              История
            </a>
            <a href="#teams" className="text-muted-foreground hover:text-primary transition-colors">
              Команды
            </a>
            <a href="#modes" className="text-muted-foreground hover:text-primary transition-colors">
              Режимы
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
