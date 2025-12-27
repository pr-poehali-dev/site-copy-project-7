import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Comments from '@/components/Comments';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Оптическая иллюзия с ослепительным эффектом',
      category: 'Развлечения',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
      readTime: '3 мин',
      author: 'Олег Бочаров',
      date: '27 декабря 2024',
      isPremium: false,
      content: `
        <p>Человеческий мозг — удивительный инструмент, который иногда играет с нами злые шутки. Оптические иллюзии — яркое тому подтверждение.</p>
        
        <p>Сегодня мы покажем вам картинку, которая буквально исчезает прямо на глазах. Этот эффект основан на особенностях работы нашего зрительного восприятия и периферического зрения.</p>
        
        <h2>Как это работает?</h2>
        
        <p>Когда вы фокусируетесь на центральной точке изображения, периферические элементы начинают постепенно исчезать. Это происходит из-за явления, которое называется "эффект Трокслера" — открытого швейцарским врачом Игнацем Полем Виталем Трокслером еще в 1804 году.</p>
        
        <p>Суть эффекта в том, что наше зрение адаптируется к неподвижным объектам в периферическом поле зрения, и мозг начинает их "игнорировать", считая несущественными для выживания.</p>
        
        <h2>Попробуйте сами</h2>
        
        <p>Чтобы увидеть эффект в действии:</p>
        <ul>
          <li>Смотрите строго в центр изображения, не отводя взгляд</li>
          <li>Не моргайте как можно дольше</li>
          <li>Сохраняйте фокус на центральной точке в течение 20-30 секунд</li>
          <li>Вы заметите, как окружающие элементы начнут постепенно исчезать</li>
        </ul>
        
        <h2>Научное объяснение</h2>
        
        <p>Нейробиологи объясняют этот феномен тем, что наши глаза постоянно совершают микродвижения (саккады), которые обновляют визуальную информацию. Когда мы фиксируем взгляд на одной точке, эти движения минимизируются, и неподвижные объекты в периферическом зрении перестают стимулировать нейроны сетчатки.</p>
        
        <p>В результате мозг перестает получать сигналы об этих объектах и "стирает" их из нашего восприятия. Это эволюционный механизм, помогающий нам концентрироваться на важных изменениях в окружающей среде.</p>
        
        <h2>Практическое применение</h2>
        
        <p>Хотя это может показаться просто забавным трюком, понимание таких оптических иллюзий помогает ученым:</p>
        <ul>
          <li>Изучать механизмы работы зрительной системы</li>
          <li>Разрабатывать методы лечения зрительных расстройств</li>
          <li>Создавать более эффективные интерфейсы и дисплеи</li>
          <li>Понимать, как мозг обрабатывает визуальную информацию</li>
        </ul>
        
        <p>Такие исследования имеют важное значение для нейронаук и помогают нам лучше понять, как работает наше восприятие реальности.</p>
      `,
    },
    {
      id: 2,
      title: 'Все книги Дэна Брауна — от самых безумных до шедевров',
      category: 'Развлечения',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=600&fit=crop',
      readTime: '12 мин',
      author: 'Никита Шабалов',
      date: '27 декабря 2024',
      isPremium: true,
      content: `
        <p>Дэн Браун — один из самых успешных писателей XXI века. Его книги проданы тиражом более 200 миллионов экземпляров по всему миру, а "Код да Винчи" стал культурным феноменом, породившим множество споров и дискуссий.</p>
        
        <h2>Ранние работы</h2>
        
        <p>Мало кто знает, но до всемирной славы Браун написал несколько книг, которые не получили такого признания. "Цифровая крепость" (1998) — его дебютный роман о криптографии и национальной безопасности — показал интерес автора к технологиям и конспирологии.</p>
        
        <p>"Точка обмана" (2001) — триллер о политических интригах в NASA — продемонстрировал способность Брауна создавать захватывающие истории на стыке науки и власти.</p>
        
        <h2>Серия о Роберте Лэнгдоне</h2>
        
        <h3>Ангелы и демоны (2000)</h3>
        <p>Первая книга о профессоре символогии Роберте Лэнгдоне. ЦЕРН, иллюминаты, антиматерия и Ватикан — Браун создал идеальную формулу интеллектуального триллера, которая принесет ему мировую славу.</p>
        
        <h3>Код да Винчи (2003)</h3>
        <p>Абсолютный бестселлер, перевернувший книжный рынок. История о Святом Граале, тайном обществе Приората Сиона и возможных потомках Иисуса Христа вызвала бурю споров. Католическая церковь критиковала книгу, но это только подогрело интерес читателей.</p>
        
        <p>Более 80 миллионов проданных экземпляров, экранизация с Томом Хэнксом — "Код да Винчи" стал не просто книгой, а культурным явлением.</p>
        
        <h3>Утраченный символ (2009)</h3>
        <p>Действие переносится в Вашингтон, округ Колумбия. Масоны, древние символы и секреты американских отцов-основателей — Браун продолжает исследовать тайные общества и эзотерические знания.</p>
        
        <h3>Инферно (2013)</h3>
        <p>Лэнгдон отправляется во Флоренцию, где сталкивается с загадками, связанными с "Божественной комедией" Данте. Книга поднимает вопросы перенаселения и биоэтики.</p>
        
        <h3>Происхождение (2017)</h3>
        <p>Самая философская книга серии. Лэнгдон исследует вечные вопросы: откуда мы пришли и куда идем? Действие разворачивается в Испании, на фоне конфликта науки и религии.</p>
        
        <h2>Формула успеха</h2>
        
        <p>Что делает книги Брауна такими популярными?</p>
        <ul>
          <li><strong>Образовательный аспект</strong> — читатели узнают об искусстве, истории, науке</li>
          <li><strong>Короткие главы</strong> — создают эффект "американских горок"</li>
          <li><strong>Клиффхэнгеры</strong> — каждая глава заканчивается интригой</li>
          <li><strong>24-часовой формат</strong> — действие происходит в сжатые сроки</li>
          <li><strong>Реальные локации</strong> — читатели могут посетить места из книг</li>
        </ul>
        
        <h2>Критика</h2>
        
        <p>Несмотря на коммерческий успех, Браун часто подвергается критике литературных критиков за:</p>
        <ul>
          <li>Упрощенный стиль написания</li>
          <li>Предсказуемые сюжетные повороты</li>
          <li>Стереотипных персонажей</li>
          <li>Историческую неточность ради драматического эффекта</li>
        </ul>
        
        <h2>Наследие</h2>
        
        <p>Дэн Браун создал новый жанр — интеллектуальный блокбастер. Его книги доказали, что массовая литература может быть одновременно развлекательной и познавательной. Миллионы людей благодаря его романам заинтересовались историей искусства, символизмом и наукой.</p>
        
        <p>Вне зависимости от мнения критиков, Браун остается одним из самых читаемых авторов современности, чьи книги переведены на десятки языков и экранизированы Голливудом.</p>
      `,
    },
    {
      id: 3,
      title: 'Как правильно выбрать первые часы: гид для начинающих',
      category: 'Гид',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&h=600&fit=crop',
      readTime: '10 мин',
      author: 'Максим Петров',
      date: '26 декабря 2024',
      isPremium: false,
      content: `
        <p>Покупка первых качественных часов — важный шаг для любого мужчины. Это не просто аксессуар, а инвестиция, которая может прослужить всю жизнь. Но как не потеряться среди тысяч моделей и брендов?</p>
        
        <h2>Определите бюджет</h2>
        
        <p>Первый и самый важный вопрос — сколько вы готовы потратить? Часовой рынок условно делится на несколько сегментов:</p>
        
        <ul>
          <li><strong>До 20 000 ₽</strong> — модные часы (Daniel Wellington, MVMT, Fossil)</li>
          <li><strong>20 000-50 000 ₽</strong> — японские бренды (Seiko, Citizen, Orient)</li>
          <li><strong>50 000-150 000 ₽</strong> — entry-level Swiss (Tissot, Hamilton, Longines)</li>
          <li><strong>150 000-500 000 ₽</strong> — премиум Swiss (Omega, Tudor, Breitling)</li>
          <li><strong>500 000+</strong> — люкс (Rolex, Patek Philippe, Audemars Piguet)</li>
        </ul>
        
        <h2>Механика или кварц?</h2>
        
        <h3>Кварцевые часы</h3>
        <p><strong>Плюсы:</strong> точность (±15 секунд в месяц), минимальное обслуживание, доступная цена</p>
        <p><strong>Минусы:</strong> требуют замены батарейки раз в 2-3 года, меньше престижа</p>
        
        <h3>Механические часы</h3>
        <p><strong>Плюсы:</strong> престиж, сложность механизма, не нужна батарейка, могут служить поколениями</p>
        <p><strong>Минусы:</strong> требуют завода, точность ±5-10 секунд в день, дороже в обслуживании</p>
        
        <p><strong>Наш совет:</strong> для первых часов выбирайте механику — это настоящий опыт владения часами.</p>
        
        <h2>Размер и посадка</h2>
        
        <p>Диаметр корпуса должен соответствовать размеру вашего запястья:</p>
        <ul>
          <li><strong>Тонкое запястье (15-17 см)</strong> — 36-40 мм</li>
          <li><strong>Среднее запястье (17-19 см)</strong> — 40-42 мм</li>
          <li><strong>Крупное запястье (19+ см)</strong> — 42-46 мм</li>
        </ul>
        
        <p>Проверьте, чтобы ушки корпуса не выступали за край запястья — это признак неправильного размера.</p>
        
        <h2>Стиль и универсальность</h2>
        
        <p>Для первых часов выбирайте универсальную модель, которая подойдет к любому образу:</p>
        
        <h3>Три беспроигрышных варианта:</h3>
        
        <p><strong>1. Классические dress-часы</strong></p>
        <p>Тонкий корпус, кожаный ремешок, минималистичный дизайн. Примеры: Tissot Le Locle, Orient Bambino, Seiko Presage.</p>
        
        <p><strong>2. Спортивно-элегантные</strong></p>
        <p>Стальной браслет, водозащита 100м, универсальный дизайн. Примеры: Seiko SKX, Hamilton Khaki Field, Tissot Gentleman.</p>
        
        <p><strong>3. Дайверы</strong></p>
        <p>Водозащита 200м+, вращающийся безель, спортивный стиль. Примеры: Seiko Prospex, Orient Ray/Mako, Longines HydroConquest.</p>
        
        <h2>На что обратить внимание в магазине</h2>
        
        <ol>
          <li><strong>Примерьте часы</strong> — они должны сидеть комфортно и не болтаться</li>
          <li><strong>Проверьте механизм</strong> — у автоматических часов ротор должен свободно вращаться</li>
          <li><strong>Оцените качество</strong> — нет ли царапин, правильно ли нанесены индексы</li>
          <li><strong>Убедитесь в подлинности</strong> — требуйте сертификат и гарантийный талон</li>
          <li><strong>Проверьте водозащиту</strong> — заводная головка должна быть плотно закручена</li>
        </ol>
        
        <h2>Лучшие модели для старта</h2>
        
        <h3>До 30 000 ₽</h3>
        <ul>
          <li>Seiko 5 Sports — легенда японского часового дела</li>
          <li>Orient Bambino — элегантная классика</li>
          <li>Citizen Eco-Drive — не нужна замена батарейки</li>
        </ul>
        
        <h3>30 000-70 000 ₽</h3>
        <ul>
          <li>Seiko Presage Cocktail Time — изысканный дизайн</li>
          <li>Hamilton Khaki Field — военная история</li>
          <li>Tissot Gentleman Powermatic 80 — Swiss качество</li>
        </ul>
        
        <h3>70 000-150 000 ₽</h3>
        <ul>
          <li>Longines Conquest — универсальный инструмент</li>
          <li>Oris Aquis — профессиональный дайвер</li>
          <li>Tudor Black Bay 58 — винтажный шарм (если найдете по цене)</li>
        </ul>
        
        <h2>Уход за часами</h2>
        
        <p>Чтобы часы служили долго:</p>
        <ul>
          <li>Механические часы нужно обслуживать каждые 3-5 лет</li>
          <li>Не носите неводозащитные часы под дождем</li>
          <li>Храните в шкатулке или на заводчике</li>
          <li>Избегайте резких ударов и магнитных полей</li>
          <li>Протирайте корпус мягкой тканью</li>
        </ul>
        
        <h2>Заключение</h2>
        
        <p>Покупка первых часов — это начало увлекательного путешествия в мир часового искусства. Не гонитесь за престижными брендами, выбирайте то, что нравится вам. Качественные часы — это спутник на всю жизнь, который будет напоминать о важных моментах.</p>
        
        <p>Помните: лучшие часы — те, которые вы будете носить каждый день с удовольствием.</p>
      `,
    },
  ];

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 font-heading">Статья не найдена</h1>
          <Button onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            На главную
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
            <h1 className="text-2xl font-black text-primary font-heading">MAXIM</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Badge className="mb-4 bg-primary text-primary-foreground">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading">{article.title}</h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground mb-6">
            <span className="flex items-center space-x-2">
              <Icon name="User" size={18} />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Icon name="Calendar" size={18} />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Icon name="Clock" size={18} />
              <span>{article.readTime}</span>
            </span>
          </div>

          {article.isPremium && (
            <div className="mb-6 p-4 border border-secondary rounded-lg bg-secondary/10 flex items-center space-x-3">
              <Icon name="Crown" size={24} className="text-secondary" />
              <div>
                <p className="font-semibold">Премиум-статья</p>
                <p className="text-sm text-muted-foreground">Эксклюзивный материал для подписчиков</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            color: 'hsl(var(--foreground))',
          }}
        />

        <Separator className="my-8" />

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="ThumbsUp" size={18} className="mr-2" />
              Нравится
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Bookmark" size={18} className="mr-2" />
              Сохранить
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Поделиться:</span>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Link" size={18} />
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <Comments articleId={article.id} />

        <Separator className="my-12" />

        <section>
          <h3 className="text-2xl font-black mb-6 font-heading">Читайте также</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Card
                key={related.id}
                className="overflow-hidden hover-scale cursor-pointer group border-border"
                onClick={() => navigate(`/article/${related.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {related.isPremium && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      <Icon name="Crown" size={14} className="mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 text-xs">{related.category}</Badge>
                  <h4 className="text-sm font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-border py-12 mt-16">
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
                <li><a href="/#articles" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="/#videos" className="hover:text-primary transition-colors">Видео</a></li>
                <li><a href="/#categories" className="hover:text-primary transition-colors">Рубрики</a></li>
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

export default Article;