import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Routine = () => {
  const schedule = [
    { time: '7:00', activity: 'Подъём', icon: 'Sunrise', color: 'text-orange-500' },
    { time: '7:15', activity: 'Утренняя зарядка', icon: 'Dumbbell', color: 'text-primary' },
    { time: '7:30', activity: 'Завтрак', icon: 'Coffee', color: 'text-amber-600' },
    { time: '8:00', activity: 'Школа / Учёба', icon: 'BookOpen', color: 'text-blue-600' },
    { time: '14:00', activity: 'Обед', icon: 'UtensilsCrossed', color: 'text-primary' },
    { time: '15:00', activity: 'Отдых / Хобби', icon: 'Palette', color: 'text-purple-500' },
    { time: '16:00', activity: 'Домашние задания', icon: 'PenTool', color: 'text-secondary' },
    { time: '18:00', activity: 'Спорт / Прогулка', icon: 'PersonStanding', color: 'text-primary' },
    { time: '19:00', activity: 'Ужин', icon: 'Salad', color: 'text-green-600' },
    { time: '20:00', activity: 'Свободное время', icon: 'Gamepad2', color: 'text-indigo-500' },
    { time: '21:30', activity: 'Подготовка ко сну', icon: 'Moon', color: 'text-blue-400' },
    { time: '22:00', activity: 'Сон', icon: 'BedDouble', color: 'text-indigo-600' }
  ];

  const sleepTips = [
    {
      icon: 'Clock',
      title: 'Регулярность',
      description: 'Ложись и вставай в одно и то же время, даже в выходные'
    },
    {
      icon: 'Moon',
      title: '8-9 часов сна',
      description: 'Подросткам необходимо 8-9 часов качественного сна для восстановления'
    },
    {
      icon: 'Smartphone',
      title: 'Без гаджетов',
      description: 'Откажись от телефона и компьютера за час до сна'
    },
    {
      icon: 'Wind',
      title: 'Проветривание',
      description: 'Свежий воздух в комнате помогает быстрее заснуть'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="Clock" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Режим дня</h1>
          <p className="text-xl text-muted-foreground">
            Правильный распорядок — залог продуктивности и здоровья
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Примерный распорядок дня</h2>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <Card key={index} className="hover-scale border-l-4 border-l-primary">
                <CardContent className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary w-20 flex-shrink-0">
                      {item.time}
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item.icon} size={20} className={item.color} />
                    </div>
                    <div className="text-lg font-medium">
                      {item.activity}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Здоровый сон</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sleepTips.map((tip, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={tip.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Icon name="Target" className="text-secondary" />
                Почему важен режим дня?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Повышение продуктивности</p>
                    <p className="text-sm">Организм привыкает к определённому ритму и работает эффективнее</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Укрепление иммунитета</p>
                    <p className="text-sm">Регулярный режим помогает организму лучше справляться с нагрузками</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Smile" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Хорошее настроение</p>
                    <p className="text-sm">Достаточный сон и отдых улучшают эмоциональное состояние</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Zap" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Больше энергии</p>
                    <p className="text-sm">Правильный баланс активности и отдыха даёт силы на весь день</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Routine;
