import Image from "next/image"
import { Heading } from '@pixelwolfhq/ui'

export default function Index(): JSX.Element {
  return (
    <div className="pixelwolf">
      <Image src="/images/logo.svg" alt="Pixelwolf" width={241} height={42} />
      <Heading as="h1">@pixelwolfhq/next-template</Heading>
    </div>
  )
}
