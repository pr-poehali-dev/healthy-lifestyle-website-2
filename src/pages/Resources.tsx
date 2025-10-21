import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Resources = () => {
  const sources = [
    {
      category: 'Медицинские источники',
      icon: 'Heart',
      items: [
        'Министерство здравоохранения РФ - официальные рекомендации по ЗОЖ',
        'Всемирная организация здравоохранения (ВОЗ) - стандарты здорового питания',
        'Роспотребнадзор - нормы питания для школьников'
      ]
    },
    {
      category: 'Образовательные ресурсы',
      icon: 'BookOpen',
      items: [
        'Учебник "Биология. 9 класс" - раздел о здоровье человека',
        'Учебник "Физическая культура" - рекомендации по физической активности',
        'Научно-популярные статьи о здоровом образе жизни для подростков'
      ]
    },
    {
      category: 'Дизайн и разработка',
      icon: 'Palette',
      items: [
        'Google Fonts - шрифты Montserrat и Open Sans',
        'Lucide Icons - набор иконок для интерфейса',
        'Unsplash / Pexels - изображения на тему здорового образа жизни'
      ]
    },
    {
      category: 'Инструменты',
      icon: 'Wrench',
      items: [
        'React - библиотека для создания интерфейса',
        'Tailwind CSS - фреймворк для стилизации',
        'Vite - инструмент для сборки проекта'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="Library" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Использованные ресурсы</h1>
          <p className="text-xl text-muted-foreground">
            Источники информации и инструменты для создания проекта
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {sources.map((source, index) => (
              <Card key={index} className="border-2 hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={source.icon} size={24} className="text-primary" />
                    </div>
                    {source.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {source.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Icon name="Info" className="text-primary" />
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Icon name="AlertCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Вся информация на сайте носит образовательный характер и предназначена 
                    для ознакомительных целей.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="Shield" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Перед внесением серьёзных изменений в диету или режим физических нагрузок 
                    рекомендуется проконсультироваться с врачом или специалистом.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Icon name="BookMarked" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>
                    Все материалы подобраны из проверенных источников и адаптированы 
                    для учащихся 9 класса.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Благодарности</h2>
          <Card>
            <CardContent className="pt-8">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Благодарю преподавателей за помощь и поддержку в создании этого проекта, 
                  а также всех, кто вдохновляет на ведение здорового образа жизни.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-secondary" />
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-primary" />
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

export default Resources;
