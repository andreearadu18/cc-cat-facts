import Image from 'next/image'
import { Inter } from 'next/font/google'
import CatFact from 'js/components/SavedFacts'
import SavedFacts from "js/components/SavedFacts";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <h1>Cat Fact App!</h1>
            <SavedFacts/>
        </div>
    )
}


