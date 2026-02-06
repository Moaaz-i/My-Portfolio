import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 0
  }
}

export default nextConfig
