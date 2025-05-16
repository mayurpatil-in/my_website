// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Mayur Patil - AI Engineer</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Discover Mayur Patil, a passionate AI Engineer specializing in Generative AI, Machine Learning, and Deep Learning. Dive into his journey, expertise, and commitment to driving innovation in AI technology."
      />

      {/* =============== FAVICON =============== */}
      <link rel="icon" href="/images/mfavicon.ico" type="image/x-icon" />

      {/* =============== REMIXICONS =============== */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
        crossOrigin=""
      />

      {/* =============== FONTAWESOME =============== */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin=""
      />

      {/* =============== CSS =============== */}
      <link rel="stylesheet" href="/css/styles.css" />
      <link rel="stylesheet" href="/css/swiper-bundle.min.css" />

      {/* =============== JSON-LD Schema =============== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mayur Patil",
          "url": "https://www.mayurpatil.in",
          "image": "https://www.mayurpatil.in/assets/img/hero.jpg",
          "jobTitle": "AI Engineer",
          "sameAs": [
            "https://www.linkedin.com/in/mayurpatil-in",
            "https://www.instagram.com/mayurpatil.in",
            "https://github.com/mayurpatil-in",
            "https://www.facebook.com/mayurpatil.in/",
            "https://twitter.com/mayurpatil_in",
            "https://www.kaggle.com/mayurpatilin",
            "https://medium.com/@mayurpatil-in"
          ],
          "description": "I am an AI expert specializing in generative AI, machine learning, deep learning, computer vision, and Natural Language Processing.",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Shivaji University",
            "url": "https://www.unishivaji.ac.in/"
          },
          "nationality": "Indian",
          "knowsAbout": [
            "Artificial Intelligence",
            "Generative AI",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "mayurpatil.in@hotmail.com",
            "areaServed": "IN",
            "availableLanguage": [
              { "@type": "Language", "name": "English", "alternateName": "en" },
              { "@type": "Language", "name": "Hindi", "alternateName": "hi" },
              { "@type": "Language", "name": "Marathi", "alternateName": "mr" }
            ]
          }
        })
      }} />
    </>
  );
}
