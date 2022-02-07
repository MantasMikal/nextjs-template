import { NextSeo } from 'next-seo'
import { string, object } from 'prop-types'

import config from '../../../config'

const { url } = config.meta

const StandardMeta = ({ title, description, canonical, image }) => {
  const canonicalUrl = `${url}${canonical}`
  const config = {
    title: title,
    description: description,
    ...(canonical && { canonical: canonicalUrl }),
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      images: image && [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: 'Example site'
        }
      ]
    }
  }
  return <NextSeo {...config} />
}

StandardMeta.propTypes = {
  title: string,
  description: string,
  canonical: string,
  image: object
}

export default StandardMeta
