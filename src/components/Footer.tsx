import footerLogo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={footerLogo}
              alt="Dev Stack Logo"
              className="h-10 w-auto"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-orange-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-orange-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-orange-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-orange-500"
              >
                Cookie Policy
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-orange-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-orange-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;