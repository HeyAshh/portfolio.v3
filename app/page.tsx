'use client';

import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
} from 'react';
import Link from 'next/link';
import { Mail, Phone, Wrench, CheckCircle, Html5, Css3, Javascript, ReactLogo, Vuejs, Adobe, Figma, WordPress, Shopify, Squarespace, Aws, Firebase, Analytics, Search } from 'lucide-react';

// Определение отдельных интерфейсов пропсов с использованием дискриминированных объединений
interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: false;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asLink: true;
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button: FC<ButtonProps> = ({
  children,
  asLink,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-sky-500 hover:bg-sky-600 text-white';

  if (asLink) {
    const { href, ...restProps } = props as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${baseClasses} ${className}`}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center p-4">
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-6">
        {/* Заголовок */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-sky-400">Артем Кравченко</h1>
          <p className="text-xl text-gray-300">
            Веб-разработчик и дизайнер
          </p>
        </header>

        {/* Введение */}
        <section className="text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">
            Профессиональная веб-разработка
          </h2>
          <p className="text-sm leading-relaxed">
            Я, Артем Кравченко, предоставляю высококачественные услуги по веб-разработке и дизайну. С многолетним опытом я гарантирую быстрые и надежные решения для вашего бизнеса. Свяжитесь со мной, чтобы обеспечить эффективное функционирование вашего онлайн-проекта!
          </p>
        </section>

        {/* Основные услуги */}
        <section className="flex justify-center space-x-8 w-full">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-sky-300">
            <div className="flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-sky-300" />
              <p className="text-lg font-bold">Разработка</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-sky-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-sky-300" />
              <p className="text-lg font-bold">Дизайн</p>
            </div>
          </div>
        </section>

        {/* Технологии */}
        <section className="text-center max-w-2xl">
          <h3 className="text-xl font-semibold text-sky-300 mb-3">
            Технологии, с которыми я работаю
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {/* HTML/CSS/JS */}
            <li className="flex items-center">
              <Html5 className="mr-2 h-4 w-4 text-sky-300" />
              HTML5
            </li>
            <li className="flex items-center">
              <Css3 className="mr-2 h-4 w-4 text-sky-300" />
              CSS3
            </li>
            <li className="flex items-center">
              <Javascript className="mr-2 h-4 w-4 text-sky-300" />
              JavaScript
            </li>
            {/* Фреймворки */}
            <li className="flex items-center">
              <ReactLogo className="mr-2 h-4 w-4 text-sky-300" />
              React
            </li>
            <li className="flex items-center">
              <Vuejs className="mr-2 h-4 w-4 text-sky-300" />
              Vue.js
            </li>
            {/* Инструменты дизайна */}
            <li className="flex items-center">
              <Figma className="mr-2 h-4 w-4 text-sky-300" />
              Figma
            </li>
            <li className="flex items-center">
              <Adobe className="mr-2 h-4 w-4 text-sky-300" />
              Adobe Suite
            </li>
            {/* Платформы для создания сайтов */}
            <li className="flex items-center">
              <WordPress className="mr-2 h-4 w-4 text-sky-300" />
              WordPress
            </li>
            <li className="flex items-center">
              <Shopify className="mr-2 h-4 w-4 text-sky-300" />
              Shopify
            </li>
            <li className="flex items-center">
              <Squarespace className="mr-2 h-4 w-4 text-sky-300" />
              Squarespace
            </li>
            {/* Облачные сервисы и аналитика */}
            <li className="flex items-center">
              <Aws className="mr-2 h-4 w-4 text-sky-300" />
              AWS
            </li>
            <li className="flex items-center">
              <Firebase className="mr-2 h-4 w-4 text-sky-300" />
              Firebase
            </li>
            <li className="flex items-center">
              <Analytics className="mr-2 h-4 w-4 text-sky-300" />
              Аналитика
            </li>
            <li className="flex items-center">
              <Search className="mr-2 h-4 w-4 text-sky-300" />
              SEO
            </li>
          </ul>
        </section>

        {/* Преимущества */}
        <section className="text-center max-w-2xl">
          <h3 className="text-xl font-semibold text-sky-300 mb-3">
            Почему выбирают меня?
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              'Профессиональный подход',
              'Быстрое выполнение',
              'Качественные материалы',
              'Доступные цены',
              'Гарантия работы',
              'Индивидуальные решения',
            ].map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-sky-300 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Призыв к действию */}
        <section className="space-y-4">
          <div className="flex space-x-4">
            <Button
              asLink
              href="mailto:artem.v11@proton.me"
            >
              <Mail className="mr-2 h-5 w-5" />
              Отправить Email
            </Button>
            <Button
              asLink
              href="tel:+79281502762"
            >
              <Phone className="mr-2 h-5 w-5" />
              Позвонить сейчас
            </Button>
          </div>
        </section>

        {/* Контакты */}
        <section className="text-center max-w-2xl">
          <h4 className="text-lg font-semibold text-sky-300 mb-2">Контактная информация</h4>
          <p className="text-sm">
            <strong>Адрес:</strong> [Ваш адрес]
          </p>
          <p className="text-sm">
            <strong>Email:</strong> <a href="mailto:artem.v11@proton.me" className="text-sky-300 underline">artem.v11@proton.me</a>
          </p>
          <p className="text-sm">
            <strong>Телефон:</strong> <a href="tel:+79281502762" className="text-sky-300 underline">+7 928 150-27-62</a>
          </p>
          <p className="text-sm">
            <strong>Веб-сайт:</strong> <a href="https://your-website.com" className="text-sky-300 underline" target="_blank" rel="noopener noreferrer">your-website.com</a>
          </p>
        </section>
      </main>

      {/* Подвал */}
      <footer className="absolute bottom-2 text-center text-xs text-gray-400 w-full">
        <p>© {new Date().getFullYear()} Артем Кравченко. Все права защищены.</p>
      </footer>
    </div>
  );
}
