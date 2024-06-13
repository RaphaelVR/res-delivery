import Slider from './components/Slider'
import Featured from './components/Featured'
import Offer from './components/Offer'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main> 
      <Slider />
      <Featured />
      <Offer />
      <Analytics/>
    </main>
  )
}
