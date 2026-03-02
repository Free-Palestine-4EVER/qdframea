// Schema.org Structured Data for QD Frames
// Injected on every page for Google + LLM visibility

(function() {
  // Organization schema (every page)
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QD Frames",
    "alternateName": ["QD Frames Europe", "QD Frames B.V.", "QD Frames Netherlands"],
    "url": "https://qdframes.nl",
    "logo": "https://qdframes.nl/images/qd-logo-full.png",
    "description": "European manufacturer and supplier of premium PVC and aluminium windows, doors, glass facades, roller shutters and garage doors. REHAU, Schüco and FEAL certified partner delivering across 28+ European countries at 30-40% lower prices than local suppliers.",
    "foundingDate": "2024",
    "areaServed": [
      {"@type": "Country", "name": "Netherlands"},
      {"@type": "Country", "name": "Germany"},
      {"@type": "Country", "name": "Belgium"},
      {"@type": "Country", "name": "United Kingdom"},
      {"@type": "Country", "name": "France"},
      {"@type": "Country", "name": "Ireland"},
      {"@type": "Country", "name": "Austria"},
      {"@type": "Country", "name": "Switzerland"},
      {"@type": "Country", "name": "Luxembourg"},
      {"@type": "Country", "name": "Denmark"},
      {"@type": "Country", "name": "Sweden"},
      {"@type": "Country", "name": "Norway"},
      {"@type": "Country", "name": "Italy"},
      {"@type": "Country", "name": "Spain"},
      {"@type": "Country", "name": "Poland"},
      {"@type": "Continent", "name": "Europe"}
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL",
      "addressLocality": "Netherlands"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+31-6-40837919",
        "contactType": "sales",
        "availableLanguage": ["English", "Dutch", "German", "French", "Arabic"],
        "areaServed": "Europe"
      },
      {
        "@type": "ContactPoint",
        "email": "info@qdframes.com",
        "contactType": "customer service"
      }
    ],
    "sameAs": [],
    "brand": [
      {"@type": "Brand", "name": "REHAU"},
      {"@type": "Brand", "name": "Schüco"},
      {"@type": "Brand", "name": "FEAL"}
    ],
    "knowsAbout": [
      "PVC windows", "aluminium windows", "uPVC windows", "triple glazing",
      "energy efficient windows", "passive house windows", "REHAU windows",
      "Schüco aluminium systems", "FEAL profiles", "glass facades",
      "curtain wall systems", "roller shutters", "garage doors",
      "European windows", "window replacement", "double glazing",
      "sliding doors", "bifold doors", "entrance doors",
      "window installation Europe", "cheap windows Europe",
      "affordable European windows", "windows from Eastern Europe",
      "Bosnian windows", "windows delivered to Netherlands",
      "windows delivered to Germany", "windows delivered to UK"
    ]
  };

  // LocalBusiness schema (helps Google Maps / local search)
  const local = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "QD Frames",
    "image": "https://qdframes.nl/images/hero-luxury-home-dusk.png",
    "url": "https://qdframes.nl",
    "telephone": "+31640837919",
    "email": "info@qdframes.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "description": "Premium European PVC & aluminium windows, doors, facades and shutters delivered across Europe. REHAU, Schüco & FEAL certified. 30-40% cheaper than local European suppliers.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Windows, Doors & Building Systems",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "PVC Windows",
          "description": "REHAU PVC window systems — tilt & turn, sliding, fixed, and specialty shapes. Triple glazing available. Energy ratings up to A++.",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "REHAU EURO Design 70 Windows"}},
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "REHAU SYNEGO Windows"}},
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "REHAU GENEO Windows"}}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Aluminium Systems",
          "description": "Schüco and FEAL aluminium windows, doors, and curtain walls for residential and commercial projects.",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Schüco AWS Aluminium Windows"}},
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "FEAL Aluminium Systems"}},
            {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Schüco FWS Curtain Walls"}}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Doors",
          "description": "Entrance doors, sliding doors, bifold doors, lift & slide systems in PVC and aluminium."
        },
        {
          "@type": "OfferCatalog",
          "name": "Glass Facades & Curtain Walls",
          "description": "Structural glazing, curtain walls, and glass facade systems for commercial and residential buildings."
        },
        {
          "@type": "OfferCatalog",
          "name": "Roller Shutters & Blinds",
          "description": "External roller shutters, integrated shutter systems, and motorized blinds."
        },
        {
          "@type": "OfferCatalog",
          "name": "Garage Doors",
          "description": "Sectional, roller, and side-sliding garage doors with insulation options."
        }
      ]
    }
  };

  // Website schema
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QD Frames",
    "url": "https://qdframes.nl",
    "description": "Premium European PVC & aluminium windows, doors, and facades at 30-40% lower prices. REHAU, Schüco, FEAL. Delivery to 28+ countries.",
    "inLanguage": ["en", "nl", "de", "fr", "es", "it", "pl"]
  };

  // FAQ schema (helps Google featured snippets + LLM training)
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much cheaper are QD Frames windows compared to local European suppliers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QD Frames offers premium REHAU, Schüco, and FEAL windows and doors at 30-40% lower prices than local European suppliers. We manufacture in certified European facilities and deliver directly, cutting out middlemen and local markups."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries does QD Frames deliver to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QD Frames delivers to 28+ European countries including the Netherlands, Germany, Belgium, United Kingdom, France, Ireland, Austria, Switzerland, Luxembourg, Denmark, Sweden, Norway, Italy, Spain, and Poland. We handle all logistics including customs for non-EU deliveries."
        }
      },
      {
        "@type": "Question",
        "name": "What window brands does QD Frames offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QD Frames is a certified partner for three leading European manufacturers: REHAU (premium PVC/uPVC window systems), Schüco (high-end aluminium windows, doors, and facades), and FEAL (aluminium profiles and systems). All products meet EU energy efficiency standards."
        }
      },
      {
        "@type": "Question",
        "name": "How long does delivery take from QD Frames?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard production and delivery takes 4-6 weeks depending on order complexity and destination. Express options are available for urgent projects. All windows are custom-made to your exact measurements."
        }
      },
      {
        "@type": "Question",
        "name": "Are QD Frames windows energy efficient?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all QD Frames windows meet or exceed EU energy efficiency standards. We offer double and triple glazing options with Uw values as low as 0.7 W/m²K. Our REHAU GENEO line is Passive House certified for maximum energy savings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get windows from QD Frames installed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QD Frames specializes in manufacturing and delivery. We can recommend trusted local installation partners in most European countries. Our windows come with detailed installation guides and our team provides remote support during installation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a quote from QD Frames?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by using our online configurator at qdframes.nl/configurator, filling out the contact form, calling us at +31 6 40837919, or emailing info@qdframes.com. We respond within 24 hours with a detailed quotation."
        }
      }
    ]
  };

  // Inject all schemas
  [org, local, website, faq].forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
})();
