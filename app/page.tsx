'use client';

import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
} from 'react';
import Link from 'next/link';
import { Mail, Phone, Wrench, CheckCircle } from 'lucide-react';

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
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-blue-500 hover:bg-blue-600 text-white';

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
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 text-gray-100 flex flex-col justify-center items-center p-4">
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">[Your Name]</h1>
          <p className="text-xl text-gray-300">
            Air Conditioner Repair Specialist
          </p>
        </header>

        {/* Introduction */}
        <section className="text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Professional Air Conditioner Repair
          </h2>
          <p className="text-sm leading-relaxed">
            I, [Your Name], provide high-quality air conditioner repair and maintenance services. With years of experience, I guarantee quick and reliable solutions for your comfort. Contact me to ensure the efficient operation of your cooling system!
          </p>
        </section>

        {/* Main Services */}
        <section className="flex justify-center space-x-8 w-full">
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-blue-300">
            <div className="flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-blue-300" />
              <p className="text-lg font-bold">Repair</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-lg border-l-4 border-blue-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-300" />
              <p className="text-lg font-bold">Maintenance</p>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="text-center max-w-2xl">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">
            Why Choose Me?
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              'Professional Approach',
              'Fast Service',
              'Quality Parts',
              'Affordable Prices',
              'Work Warranty',
              'Customized Solutions',
            ].map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-4 w-4 text-blue-300 flex-shrink-0 mt-1" />
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
              href="mailto:your-email@example.com"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button
              asLink
              href="tel:+1234567890"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </section>

        {/* Contacts */}
        <section className="text-center max-w-2xl">
          <h4 className="text-lg font-semibold text-blue-300 mb-2">Contact Information</h4>
          <p className="text-sm">
            <strong>Address:</strong> [Your Address]
          </p>
          <p className="text-sm">
            <strong>Email:</strong> <a href="mailto:your-email@example.com" className="text-blue-300 underline">your-email@example.com</a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-300 underline">+1234567890</a>
          </p>
          <p className="text-sm">
            <strong>Website:</strong> <a href="https://your-website.com" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">your-website.com</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-2 text-center text-xs text-gray-400 w-full">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
