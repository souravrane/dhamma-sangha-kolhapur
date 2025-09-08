import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com/@sanghadhammakolhapur",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/sanghadhammakolhapur",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "आमच्याबद्दल", href: "/about" },
    { name: "आमचा ब्लॉग", href: "/blogs" },
    { name: "कार्यक्रम", href: "/events" },
    { name: "गॅलरी", href: "/gallery" },
    { name: "संपर्क", href: "/contact" },
    { name: "समुदायात सामील व्हा", href: "/join" },
  ];

  return (
    <footer className="bg-cambridge_blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="धम्म संघ कोल्हापूर लोगो"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-serif font-semibold">
                धम्म संघ
              </span>
            </div>
            <p className="text-gray-100 mb-4 max-w-md">
              वैज्ञानिक, साक्ष्य-आधारित दृष्टिकोनातून बुद्धाच्या शिकवणींचा
              अभ्यास करणारा समुदाय. सजग जीवनाची परिवर्तनकारी शक्ती शोधण्यासाठी
              आमच्यात सामील व्हा.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">द्रुत दुवे</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">संपर्क</h3>
            <div className="space-y-2 text-gray-100">
              <p>📍 कोल्हापूर, महाराष्ट्र</p>
              <p>📧 info@dhammasanghakolhapur.com</p>
              <p>🕐 रविवारी सकाळी 10:00 वाजता</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-100">
            © {currentYear} धम्म संघ कोल्हापूर. सर्व हक्क राखीव.
          </p>
          <p className="text-sm text-gray-200 mt-2">
            सर्व प्राणी सुखी आणि दुःखमुक्त असोत.
          </p>
        </div>
      </div>
    </footer>
  );
}
