import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Стиль', icon: 'Shirt' },
    { name: 'Авто', icon: 'Car' },
    { name: 'Технологии', icon: 'Smartphone' },
    { name: 'Спорт', icon: 'Dumbbell' },
    { name: 'Культура', icon: 'Film' },
    { name: 'Путешествия', icon: 'Plane' },
  ];

  const heroArticle = {
    title: 'Новый суперкар McLaren: скорость превыше всего',
    category: 'Авто',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
    readTime: '8 мин',
  };

  const articles = [
    {
      id: 1,
      title: '10 правил мужского стиля в 2024 году',
      category: 'Стиль',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&h=400&fit=crop',
      readTime: '5 мин',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Эксклюзив: интервью с основателем Tesla о будущем энергетики',
      category: 'Технологии',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
      readTime: '12 мин',
      isPremium: true,
    },
    {
      id: 3,
      title: 'Топ-5 тренировок для набора мышечной массы',
      category: 'Спорт',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      readTime: '7 мин',
      isPremium: false,
    },
    {
      id: 4,
      title: 'Скрытые жемчужины Японии: маршрут для искушенных',
      category: 'Путешествия',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop',
      readTime: '10 мин',
      isPremium: true,
    },
    {
      id: 5,
      title: 'Разбор новых смарт-часов: стоят ли они своих денег?',
      category: 'Технологии',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
      readTime: '6 мин',
      isPremium: false,
    },
    {
      id: 6,
      title: 'Закулисье фильма года: эксклюзивный репортаж',
      category: 'Культура',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop',
      readTime: '15 мин',
      isPremium: true,
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Обзор Porsche 911 Turbo S',
      thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
      duration: '12:34',
    },
    {
      id: 2,
      title: 'Как правильно завязать галстук: 5 способов',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      duration: '8:21',
    },
    {
      id: 3,
      title: 'Тренировка чемпиона UFC',
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
      duration: '15:47',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-black text-primary font-heading">MAXIM</h1>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="story-link text-foreground hover:text-primary transition-colors">
                  Главная
                </a>
                <a href="#articles" className="story-link text-foreground hover:text-primary transition-colors">
                  Статьи
                </a>
                <a href="#videos" className="story-link text-foreground hover:text-primary transition-colors">
                  Видео
                </a>
                <a href="#categories" className="story-link text-foreground hover:text-primary transition-colors">
                  Рубрики
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 bg-muted rounded-full px-4 py-2">
                <Icon name="Search" size={18} />
                <Input
                  type="search"
                  placeholder="Поиск..."
                  className="border-0 bg-transparent focus-visible:ring-0 w-48"
                />
              </div>

              <Button variant="outline" size="icon" className="lg:hidden">
                <Icon name="Search" size={20} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 animate-fade-in">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#articles" className="text-foreground hover:text-primary transition-colors">
                Статьи
              </a>
              <a href="#videos" className="text-foreground hover:text-primary transition-colors">
                Видео
              </a>
              <a href="#categories" className="text-foreground hover:text-primary transition-colors">
                Рубрики
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 relative overflow-hidden rounded-2xl group cursor-pointer hover-scale">
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">{heroArticle.category}</Badge>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 font-heading">
                {heroArticle.title}
              </h2>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span className="flex items-center space-x-2">
                  <Icon name="Clock" size={18} />
                  <span>{heroArticle.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gradient-to-r from-secondary to-primary border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="Crown" size={32} className="text-secondary-foreground" />
                    <h3 className="text-3xl font-black text-secondary-foreground font-heading">
                      PREMIUM
                    </h3>
                  </div>
                  <p className="text-secondary-foreground/90 text-lg mb-2">
                    Эксклюзивные статьи, интервью и репортажи
                  </p>
                  <p className="text-secondary-foreground/70">
                    Получите доступ к закрытому контенту и материалам без рекламы
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="whitespace-nowrap bg-background text-foreground hover:bg-background/90">
                  Оформить подписку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="categories" className="mb-16">
          <h3 className="text-3xl font-black mb-8 font-heading">Рубрики</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover-scale cursor-pointer group border-border hover:border-primary transition-all"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name={category.icon} size={24} className="group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-semibold">{category.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="articles" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black font-heading">Последние статьи</h3>
            <Button variant="outline">
              Все статьи
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover-scale cursor-pointer group border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {article.isPremium && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      <Icon name="Crown" size={14} className="mr-1" />
                      Premium
                    </Badge>
                  )}
                  <Badge className="absolute top-3 left-3 bg-background/80 text-foreground backdrop-blur">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {article.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="videos" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black font-heading">Видео</h3>
            <Button variant="outline">
              Все видео
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden hover-scale cursor-pointer group border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-3 right-3 bg-background/80 text-foreground backdrop-blur">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-black text-primary mb-4 font-heading">MAXIM</h4>
              <p className="text-muted-foreground text-sm">
                Мужской онлайн-журнал о стиле жизни, технологиях и культуре
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Разделы</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видео</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рубрики</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Подписка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рассылка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Соцсети</h5>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 MAXIM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
