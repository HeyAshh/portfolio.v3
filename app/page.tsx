'use client';

import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
} from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaVuejs, 
  FaFigma, 
  FaWordpress, 
  FaShopify, 
  FaSquarespace, 
  FaAws, 
  FaSearch 
} from 'react-icons/fa';
import { SiAdobe, SiFirebase } from 'react-icons/si';
import { IconType } from 'react-icons';

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

const TechnologyItem: FC<{ icon: IconType; label: string }> = ({ icon: Icon, label }) => (
  <li className="flex items-center justify-center">
    <Icon className="mr-2 h-4 w-4 text-sky-300" />
    <span className="text-center">{label}</span>
  </li>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold tracking-tighter text-sky-400">Артем Кравченко</h1>
        <p className="text-2xl text-gray-300">
          Веб-разработчик и дизайнер
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold text-sky-300 mb-4">
            Профессиональная веб-разработка
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Я, Артем Кравченко, предоставляю высококачественные услуги по веб-разработке и дизайну. С многолетним опытом я гарантирую быстрые и надежные решения для вашего бизнеса. Свяжитесь со мной, чтобы обеспечить эффективное функционирование вашего онлайн-проекта!
          </p>
        </section>

        {/* Main Services */}
        <section className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <FaWrench className="h-5 w-5 text-sky-300" />
            <p className="text-lg font-bold text-white">Разработка</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="h-5 w-5 text-sky-300" />
            <p className="text-lg font-bold text-white">Дизайн</p>
          </div>
        </section>

        {/* Technologies */}
        <section className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">
            Технологии, с которыми я работаю
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm justify-items-center">
            <TechnologyItem icon={FaHtml5} label="HTML5" />
            <TechnologyItem icon={FaCss3Alt} label="CSS3" />
            <TechnologyItem icon={FaJs} label="JavaScript" />
            <TechnologyItem icon={FaReact} label="React" />
            <TechnologyItem icon={FaVuejs} label="Vue.js" />
            <TechnologyItem icon={FaFigma} label="Figma" />
            <TechnologyItem icon={SiAdobe} label="Adobe Suite" />
            <TechnologyItem icon={FaWordpress} label="WordPress" />
            <TechnologyItem icon={FaShopify} label="Shopify" />
            <TechnologyItem icon={FaSquarespace} label="Squarespace" />
            <TechnologyItem icon={FaAws} label="AWS" />
            <TechnologyItem icon={SiFirebase} label="Firebase" />
            <TechnologyItem icon={FaSearch} label="SEO" />
          </ul>
        </section>

        {/* Advantages */}
        <section className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">
            Почему выбирают меня?
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm justify-items-center">
            {[
              'Профессиональный подход',
              'Быстрое выполнение',
              'Качественные материалы',
              'Доступные цены',
              'Гарантия работы',
              'Индивидуальные решения',
            ].map((point, index) => (
              <li key={index} className="flex items-center justify-center">
                <FaCheckCircle className="mr-2 h-4 w-4 text-sky-300 flex-shrink-0 mt-1" />
                <span className="text-center text-white">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="flex justify-center space-x-4 mb-8">
          <Button
            asLink
            href="mailto:artem.v11@proton.me"
          >
            <FaEnvelope className="mr-2 h-5 w-5" />
            Отправить Email
          </Button>
          <Button
            asLink
            href="tel:+79281502762"
          >
            <FaPhone className="mr-2 h-5 w-5" />
            Позвонить сейчас
          </Button>
        </section>

        {/* Contacts */}
        <section className="text-center max-w-2xl mx-auto mb-8">
          <h4 className="text-lg font-semibold text-sky-300 mb-2">Контактная информация</h4>
          <p className="text-sm text-gray-200">
            <strong>Адрес:</strong> [Ваш адрес]
          </p>
          <p className="text-sm text-gray-200">
            <strong>Email:</strong> <a href="mailto:artem.v11@proton.me" className="text-sky-300 underline">artem.v11@proton.me</a>
          </p>
          <p className="text-sm text-gray-200">
            <strong>Телефон:</strong> <a href="tel:+79281502762" className="text-sky-300 underline">+7 928 150-27-62</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        <p>© 2024 Артем Кравченко. Все права защищены.</p>
      </footer>
    </div>
  );
}
