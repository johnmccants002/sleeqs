import Link from "next/link";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <title>Sleeqs - Elegant and Beautiful Lashes</title>
        <meta
          name="description"
          content="Welcome to Sleaqs, where elegance and beauty meet. Discover our collection of premium lashes and elevate your look today."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <footer className="bg-black text-white">
        <div className="container mx-auto py-8 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Sleaqs
              </h3>
              <p
                className="text-gray-400 mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Sleaqs is a lashes company that brands themselves on elegance
                and beauty. We sell high-quality lashes direct to consumers.
              </p>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" legacyBehavior>
                    <a
                      className="text-gray-400 hover:text-white"
                      style={{ fontFamily: "Cormorant, serif", color: "white" }}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products" legacyBehavior>
                    <a
                      className="text-gray-400 hover:text-white"
                      style={{ fontFamily: "Cormorant, serif", color: "white" }}
                    >
                      Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" legacyBehavior>
                    <a
                      className="text-gray-400 hover:text-white"
                      style={{ fontFamily: "Cormorant, serif", color: "white" }}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    <a
                      className="text-gray-400 hover:text-white"
                      style={{ fontFamily: "Cormorant, serif", color: "white" }}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Follow Us
              </h3>
              <ul
                className="flex space-x-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    style={{ fontFamily: "Cormorant, serif", color: "white" }}
                  >
                    {/* <FaIcon icon={faFacebook} size="lg" /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    style={{ fontFamily: "Cormorant, serif", color: "white" }}
                  >
                    {/* <FaIcon icon={faTwitter} size="lg" /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white"
                    style={{ fontFamily: "Cormorant, serif", color: "white" }}
                  >
                    {/* <FaIcon icon={faInstagram} size="lg" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Contact Us
              </h3>
              <p
                className="text-gray-400 mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Email: <a href="mailto:info@sleaqs.com">info@sleaqs.com</a>
              </p>
              <p
                className="text-gray-400 mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Phone: <a href="tel:+1234567890">(123) 456-7890</a>
              </p>
              <p
                className="text-gray-400 mb-4"
                style={{ fontFamily: "Cormorant, serif", color: "white" }}
              >
                Address: 123 Main St. Anytown, USA
              </p>
            </div>
          </div>
          <hr className="my-8" />
          <div className="text-center text-gray-400">
            <p style={{ fontFamily: "Cormorant, serif", color: "white" }}>
              &copy; 2023 Sleaqs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
