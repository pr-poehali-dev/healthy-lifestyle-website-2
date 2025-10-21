import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const nutritionTips = [
    {
      icon: 'Salad',
      title: 'Ешь больше овощей и фруктов',
      description: 'Минимум 400 грамм овощей и фруктов в день обеспечат организм витаминами и клетчаткой.'
    },
    {
      icon: 'Droplet',
      title: 'Пей достаточно воды',
      description: '1.5-2 литра чистой воды в день помогают всем процессам в организме работать правильно.'
    },
    {
      icon: 'Cookie',
      title: 'Ограничь сахар и фастфуд',
      description: 'Избыток сахара и переработанной пищи может навредить здоровью и вызвать проблемы.'
    },
    {
      icon: 'Beef',
      title: 'Белки, жиры и углеводы',
      description: 'Сбалансированный рацион должен включать все макронутриенты в правильных пропорциях.'
    },
    {
      icon: 'Clock3',
      title: 'Регулярное питание',
      description: 'Ешь 3-4 раза в день примерно в одно и то же время для лучшего пищеварения.'
    },
    {
      icon: 'Sun',
      title: 'Завтрак обязателен',
      description: 'Утренний приём пищи даёт энергию на весь день и улучшает концентрацию.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="Apple" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Правильное питание</h1>
          <p className="text-xl text-muted-foreground">
            Основа здоровья и хорошего самочувствия
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nutritionTips.map((tip, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name={tip.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Примерный рацион на день</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Sunrise" className="text-primary" />
                  Завтрак (7:00 - 9:00)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Каша на молоке, яйца, цельнозерновой хлеб, фрукты, чай или сок
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Sun" className="text-primary" />
                  Обед (12:00 - 14:00)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Суп, мясо или рыба, гарнир (гречка, рис), овощной салат, компот
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Sunset" className="text-primary" />
                  Ужин (18:00 - 19:00)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Лёгкие белковые продукты (курица, творог), овощи, кефир
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
