import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="User" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">О создателе</h1>
          <p className="text-xl text-muted-foreground">
            Информация об авторе проекта
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Об этом проекте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={64} className="text-white" />
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Этот сайт создан учеником 9 класса в рамках образовательного проекта по теме 
                  "Здоровый образ жизни". Цель проекта — собрать и систематизировать важную информацию 
                  о правильном питании, физической активности и режиме дня.
                </p>
                
                <Card className="bg-accent border-0">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon name="Target" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Цель проекта</h3>
                        <p className="text-sm">
                          Помочь сверстникам понять важность здорового образа жизни и дать 
                          практические рекомендации для улучшения качества жизни.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="BookOpen" className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">Образовательная ценность</h3>
                        <p className="text-sm">
                          В процессе создания сайта были изучены основы веб-разработки, 
                          дизайна и структурирования информации.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Навыки, использованные в проекте</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Исследование</h3>
                <p className="text-muted-foreground text-sm">
                  Сбор и анализ информации о здоровом образе жизни
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Layout" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Дизайн</h3>
                <p className="text-muted-foreground text-sm">
                  Создание структуры и визуального оформления сайта
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Контент</h3>
                <p className="text-muted-foreground text-sm">
                  Написание и структурирование образовательных материалов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
