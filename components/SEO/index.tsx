import Head from "next/head"
import { useRouter } from "next/router"
import { IProduct } from "../../types/IProduct"
import meta from "./meta"

interface Props {
  title?: string
  description?: string
  image?: string
  shemaType: string,
  product?: IProduct
  keywords?: string
}

const SEO: React.FC<Props> = ({ title = meta.title, description = meta.description, image = meta.image, shemaType, product, keywords = meta.keywords }) => {
  const url = useRouter();

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ru_KZ" />
      <meta property="og:site_name" content={meta.site_name} />

      {product ?
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": 'Product',
              name: title,
              about: description,
              description: description,
              image: image,
              url: url.pathname,

              aggregateRating: {
                "@type": "AggregateRating",
                "ratingValue": Number(product.rating).toPrecision(1).toString(),
                // "reviewCount":
              },
              offers: {
                "@type": "Offer",
                url: url.pathname,
                priceCurrency: "KZT",
                price: product.price,
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock"
              }
            }),
          }}
        />
        :
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": shemaType,
              name: title,
              about: description,
              description: description,
              url: url.pathname,
            })
          }}
        />
      }
      <meta name="keywords" content={keywords} />
      <meta charSet="UTF-8" />
      <meta name="author" content="ADU24 Group" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Head>
  )
}

export default SEO;