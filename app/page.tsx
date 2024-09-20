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

// Define separate prop interfaces using discriminated unions
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

// Component to display technology with icon
const TechnologyItem: FC<{ icon: IconType; label: string }> = ({ icon: Icon, label }) => (
  <li className="flex items-center">
    <Icon className="mr-2 h-4 w-4 text-sky-300" />
    {label}
  </li>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center p-4">
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-bg {
          background: linear-gradient(-45deg, #1e3a8a, #3b82f6, #2563eb, #1d4ed8);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-6 animated-bg p-6 rounded-lg">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-sky-400">Артем Кравченко</h1>
          <p className="text-xl text-gray-300">
            Веб-разработчик и дизайнер
          </p>
        </header>

        {/* Introduction */}
        <section className="text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-sky-300 mb-2">
            Профессиональная веб-разработка
          </h2>
          <p className="text-sm leading-relaxed">
            Я, Артем Кравченко, предоставляю высококачественные услуги по веб-разработке и дизайну. С многолетним опытом я гарантирую быстрые и надежные решения для вашего бизнеса. Свяжитесь со мной, чтобы обеспечить эффективное функционирование вашего онлайн-проекта!
          </p>
        </section>

        {/* Main Services */}
        <section className="flex justify-center space-x-8 w-full">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-sky-300">
            <div className="flex items-center space-x-2">
              <FaWrench className="h-5 w-5 text-sky-300" />
              <p className="text-lg font-bold">Разработка</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-sky-300">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="h-5 w-5 text-sky-300" />
              <p className="text-lg font-bold">Дизайн</p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="text-center max-w-2xl">
          <h3 className="text-xl font-semibold text-sky-300 mb-3">
            Технологии, с которыми я работаю
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {/* HTML/CSS/JS */}
            <TechnologyItem icon={FaHtml5} label="HTML5" />
            <TechnologyItem icon={FaCss3Alt} label="CSS3" />
            <TechnologyItem icon={FaJs} label="JavaScript" />
            {/* Frameworks */}
            <TechnologyItem icon={FaReact} label="React" />
            <TechnologyItem icon={FaVuejs} label="Vue.js" />
            {/* Design Tools */}
            <TechnologyItem icon={FaFigma} label="Figma" />
            <TechnologyItem icon={SiAdobe} label="Adobe Suite" />
            {/* Website Platforms */}
            <TechnologyItem icon={FaWordpress} label="WordPress" />
            <TechnologyItem icon={FaShopify} label="Shopify" />
            <TechnologyItem icon={FaSquarespace} label="Squarespace" />
            {/* Cloud Services and Analytics */}
            <TechnologyItem icon={FaAws} label="AWS" />
            <TechnologyItem icon={SiFirebase} label="Firebase" />
            <TechnologyItem icon={FaSearch} label="SEO" />
          </ul>
        </section>

        {/* Advantages */}
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
                <FaCheckCircle className="mr-2 h-4 w-4 text-sky-300 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="space-y-4">
          <div className="flex space-x-4">
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
          </div>
        </section>

        {/* Contacts */}
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
        </section>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-2 text-center text-xs text-gray-400 w-full">
        <p>© {new Date().getFullYear()} Артем Кравченко. Все права защищены.</p>
      </footer>
    </div>
  );
}
