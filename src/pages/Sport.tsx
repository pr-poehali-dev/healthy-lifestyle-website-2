import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Sport = () => {
  const benefits = [
    {
      icon: 'Heart',
      title: 'Укрепление сердца',
      description: 'Регулярные тренировки улучшают работу сердечно-сосудистой системы'
    },
    {
      icon: 'Battery',
      title: 'Больше энергии',
      description: 'Физическая активность повышает общий уровень энергии и выносливость'
    },
    {
      icon: 'Brain',
      title: 'Улучшение памяти',
      description: 'Спорт стимулирует работу мозга и улучшает когнитивные функции'
    },
    {
      icon: 'Smile',
      title: 'Хорошее настроение',
      description: 'Во время тренировок вырабатываются эндорфины — гормоны счастья'
    }
  ];

  const activities = [
    {
      name: 'Бег',
      duration: '20-30 минут',
      frequency: '3-4 раза в неделю',
      icon: 'PersonStanding'
    },
    {
      name: 'Плавание',
      duration: '30-45 минут',
      frequency: '2-3 раза в неделю',
      icon: 'Waves'
    },
    {
      name: 'Велосипед',
      duration: '30-60 минут',
      frequency: '2-4 раза в неделю',
      icon: 'Bike'
    },
    {
      name: 'Йога',
      duration: '20-40 минут',
      frequency: 'Ежедневно',
      icon: 'Circle'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-secondary/10 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="Dumbbell" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-secondary">Спорт и физическая активность</h1>
          <p className="text-xl text-muted-foreground">
            Движение — это жизнь!
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Польза регулярных тренировок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-scale border-2 hover:border-secondary transition-all">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Виды активности для подростков</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name={activity.icon} size={24} className="text-secondary" />
                    </div>
                    {activity.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-muted-foreground">Продолжительность: {activity.duration}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-muted-foreground">Частота: {activity.frequency}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Icon name="Lightbulb" className="text-primary" />
                Важно помнить
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Начинай с разминки и заканчивай растяжкой</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Увеличивай нагрузку постепенно</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Пей воду во время тренировки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Слушай своё тело и не перегружайся</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Минимум 60 минут активности каждый день для подростков</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sport;
