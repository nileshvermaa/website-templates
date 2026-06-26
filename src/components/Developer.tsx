import { asset } from "@/lib/asset";
import { ArrowRightIcon } from "@/components/icons";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/img/icon-graphql.svg",
    title: "GraphQL API",
    description: "Unified GraphQL for cards, ledgers, payments, and more.",
  },
  {
    icon: "/img/icon-notifications.svg",
    title: "Real-Time Webhooks",
    description:
      "Real-time events for transactions, authorizations, and state changes.",
  },
  {
    icon: "/img/icon-dashboard.svg",
    title: "Robust Sandbox Environment",
    description:
      "Production-mirroring sandbox for safer builds and faster iteration.",
  },
  {
    icon: "/img/icon-security.svg",
    title: "Enterprise-Ready Security",
    description:
      "Built-in security and compliance that scales with your programs.",
  },
];

const KEYWORD = "#ff79c6";
const FIELD = "#8be9fd";
const STRING = "#f1fa8c";
const PUNCT = "#bd93f9";
const BRACE = "#6b7280";

export default function Developer() {
  return (
    <section className="bg-bone px-5 pt-10 pb-10 antialiased md:pb-20">
      <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-16 sm:pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display max-w-xl text-2xl lg:text-5xl">
                A developer platform built for the future
              </h2>
              <p className="mt-6 max-w-lg text-[18px] leading-relaxed opacity-60">
                Build and ship financial products without the infrastructure
                overhead. Focus on your product experience while Highnote
                handles the rest.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-base opacity-60 duration-200 hover:opacity-100"
                href="https://docs.highnote.com"
              >
                View the docs
                <ArrowRightIcon
                  aria-hidden="true"
                  className="inline-block duration-200 ease-in-out group-hover:translate-x-1"
                />
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5 md:gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="max-w-sm">
                  <div className="bg-ash mb-3 flex h-10 w-10 items-center justify-center rounded-lg md:h-12 md:w-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={feature.title}
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      className="h-5 w-5 md:h-6 md:w-6"
                      src={asset(feature.icon)}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h3 className="text-xs font-medium">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed opacity-60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — dark code panel */}
          <div className="rounded-highnote hidden min-h-[760px] overflow-hidden bg-[#111] lg:flex">
            <div className="font-mono flex w-full flex-col gap-8 p-8 text-[13px] leading-[1.7] text-[#e2e0d6]">
              {/* Query block */}
              <div>
                <div className="mb-3 text-xs font-medium tracking-wide text-[#6b7280] uppercase">
                  Query
                </div>
                <div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: KEYWORD }}>mutation</span>
                    <span style={{ color: BRACE }}> {"{"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"  createPaymentCard"}</span>
                    <span style={{ color: PUNCT }}>(</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"    input"}</span>
                    <span style={{ color: BRACE }}>{": {"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"      cardProductId"}</span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>&quot;cprod_1a2b3c&quot;</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>
                      {"      financialAccountId"}
                    </span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>&quot;fa_9x8y7z&quot;</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"    }"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: PUNCT }}>{"  )"}</span>
                    <span style={{ color: BRACE }}> {"{"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"    id"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"    last4"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"    status"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{"    network"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"  }"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Response block */}
              <div>
                <div className="mb-3 text-xs font-medium tracking-wide text-[#6b7280] uppercase">
                  Response
                </div>
                <div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"{"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{'  "data"'}</span>
                    <span style={{ color: BRACE }}>{": {"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>
                      {'    "createPaymentCard"'}
                    </span>
                    <span style={{ color: BRACE }}>{": {"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{'      "id"'}</span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>
                      &quot;card_4f8a2e1b&quot;
                    </span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{'      "last4"'}</span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>&quot;4289&quot;</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{'      "status"'}</span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>&quot;ACTIVE&quot;</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: FIELD }}>{'      "network"'}</span>
                    <span style={{ color: PUNCT }}>{": "}</span>
                    <span style={{ color: STRING }}>&quot;VISA&quot;</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"    }"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"  }"}</span>
                  </div>
                  <div style={{ opacity: 1 }}>
                    <span style={{ color: BRACE }}>{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
