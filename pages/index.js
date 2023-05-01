import Image from 'next/image'
import { Inter } from 'next/font/google'
import CatFact from 'js/components/CatFact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <CatFact />
      </div>
  )
}


