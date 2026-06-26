import { asset } from "@/lib/asset";

type FooterLink = {
  label: string;
  href: string;
  testid: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const columns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      {
        label: "Issuing",
        href: "https://highnote.com/products/issuing",
        testid: "footer::link::products-issuing",
      },
      {
        label: "Acquiring",
        href: "https://highnote.com/products/acquiring",
        testid: "footer::link::products-acquiring",
      },
      {
        label: "Credit",
        href: "https://highnote.com/products/credit",
        testid: "footer::link::products-credit",
      },
      {
        label: "Money Movement",
        href: "https://highnote.com/solutions/money-movement",
        testid: "footer::link::solutions-money-movement",
      },
      {
        label: "Unified Payments",
        href: "https://highnote.com/products/unified-payments",
        testid: "footer::link::products-unified-payments",
      },
    ],
  },
  {
    title: "Use Cases",
    links: [
      {
        label: "AP & Bill Pay",
        href: "https://highnote.com/solutions/ap-automation",
        testid: "footer::link::solutions-ap-automation",
      },
      {
        label: "Spend Management",
        href: "https://highnote.com/solutions/spend-management",
        testid: "footer::link::solutions-spend-management",
      },
      {
        label: "Fleet",
        href: "https://highnote.com/solutions/fleet",
        testid: "footer::link::solutions-fleet",
      },
      {
        label: "Travel and OTAs",
        href: "https://highnote.com/solutions/travel",
        testid: "footer::link::solutions-travel",
      },
      {
        label: "Platforms",
        href: "https://highnote.com/solutions/embedded-finance",
        testid: "footer::link::solutions-embedded-finance",
      },
      {
        label: "Embedded Finance",
        href: "https://highnote.com/solutions/embedded-finance",
        testid: "footer::link::solutions-embedded-finance",
      },
      {
        label: "Branded Credit",
        href: "https://highnote.com/solutions/branded-credit",
        testid: "footer::link::solutions-branded-credit",
      },
      {
        label: "Vertical SaaS",
        href: "https://highnote.com/solutions/saas",
        testid: "footer::link::solutions-saas",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Product Updates",
        href: "https://highnote.com/product-updates",
        testid: "footer::link::product-updates",
      },
      {
        label: "Executive Playbooks",
        href: "https://highnote.com/playbooks",
        testid: "footer::link::playbooks",
      },
      {
        label: "Support",
        href: "https://support.highnote.com",
        testid: "footer::link::support",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/highnote",
        testid: "footer::link::www",
      },
      {
        label: "Privacy",
        href: "https://highnote.com/agreements/privacy",
        testid: "footer::link::agreements/privacy",
      },
      {
        label: "Terms",
        href: "https://highnote.com/agreements/terms",
        testid: "footer::link::agreements/terms",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        label: "Documentation",
        href: "https://docs.highnote.com",
        testid: "footer::link::documentation",
      },
      {
        label: "API Reference",
        href: "https://docs.highnote.com/docs/api-reference/query",
        testid: "footer::link::api-reference",
      },
      {
        label: "API Changelog",
        href: "https://docs.highnote.com/changelog",
        testid: "footer::link::api-changelog",
      },
      {
        label: "Status",
        href: "https://status.highnote.com",
        testid: "footer::link::status",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "https://highnote.com/about",
        testid: "footer::link::about",
      },
      {
        label: "Press",
        href: "https://highnote.com/press",
        testid: "footer::link::press",
      },
      {
        label: "Careers",
        href: "https://highnote.com/careers",
        testid: "footer::link::careers",
      },
      {
        label: "Brand",
        href: "https://highnote.com/brand",
        testid: "footer::link::brand",
      },
      {
        label: "Blog",
        href: "https://highnote.com/blog",
        testid: "footer::link::blog",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      aria-labelledby="footerHeading"
      className="bg-blackBG px-5 pt-16 pb-16 text-white antialiased"
    >
      <h2 className="sr-only" id="footerHeading">
        Footer
      </h2>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
          <div className="relative col-span-2 pb-4 md:col-span-1 md:pb-0">
            <img
              alt="Highnote"
              className="h-12 w-12"
              src={asset("/img/highnote-circle-white.svg")}
            />
          </div>
          {columns.map((column) => (
            <div key={column.title} className="col-span-1 pt-5 md:pt-0">
              <p className="mb-4 text-xs font-medium">{column.title}</p>
              <ul className="space-y-4">
                {column.links.map((link, index) => (
                  <li key={`${link.testid}-${index}`}>
                    <a
                      className="group flex items-center text-xs text-white opacity-80 duration-200 hover:opacity-100"
                      data-testid={link.testid}
                      href={link.href}
                    >
                      {link.label}
                      <span className="inline-block">
                        <img
                          alt=""
                          className="-translate-x-1 opacity-0 duration-100 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                          src={asset("/img/white-arrow-icon.svg")}
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-32 opacity-50">
          <div className="text-xxs space-y-4 leading-5">
            <p>©2026 Highnote Platform, Inc.</p>
            <p>
              Highnote Platform Inc.&apos;s subsidiary, Highnote Payments, Inc.,
              is registered as a Money Services Business (MSB) with the Financial
              Crimes Enforcement Network (FinCEN), and is actively pursuing Money
              Transmitter Licenses (MTLs){" "}
              <a href="/agreements/state-licenses" className="underline">
                across individual U.S. states
              </a>
              . Prior to securing licenses in particular jurisdictions, Highnote
              will be providing services pursuant to a bank sponsorship model.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
