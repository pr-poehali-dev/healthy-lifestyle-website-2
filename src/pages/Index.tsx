import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.7), rgba(59, 130, 246, 0.7)), url('https://cdn.poehali.dev/projects/2f1e362a-1fe5-4888-9c42-42ff56e18563/files/b84110c0-22d5-4f52-975e-505805e0a7f8.jpg')`
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/projects/2f1e362a-1fe5-4888-9c42-42ff56e18563/files/a168b283-f96c-440a-88c2-346ea3093b6b.jpg" 
            alt="Эмблема ЗОЖ"
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl animate-scale-in"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Здоровый образ жизни
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Твой путь к здоровью начинается здесь
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            Узнать больше
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">О проекте</h2>
          <p className="text-lg text-foreground leading-relaxed text-center mb-12">
            Этот образовательный проект создан для учеников 9 класса. Здесь ты найдёшь всю 
            необходимую информацию о здоровом образе жизни: правильном питании, спорте и 
            режиме дня. Забота о своём здоровье — это инвестиция в будущее!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Разделы сайта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/nutrition" className="hover-scale">
              <Card className="h-full border-2 hover:border-primary transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Apple" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Питание</h3>
                  <p className="text-muted-foreground">
                    Основы правильного питания и здорового рациона
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/sport" className="hover-scale">
              <Card className="h-full border-2 hover:border-secondary transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Dumbbell" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Спорт</h3>
                  <p className="text-muted-foreground">
                    Физическая активность и её влияние на организм
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/routine" className="hover-scale">
              <Card className="h-full border-2 hover:border-primary transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Режим дня</h3>
                  <p className="text-muted-foreground">
                    Правильный распорядок дня для продуктивности
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link to="/about" className="hover:text-primary transition-colors">
              О создателе
            </Link>
            <Link to="/resources" className="hover:text-primary transition-colors">
              Использованные ресурсы
            </Link>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Здоровый образ жизни. Образовательный проект для 9 класса.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
