import App from '@/src/App'
import '../../index.css'
// import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <App />
}