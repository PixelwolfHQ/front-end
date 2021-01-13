import Image from "next/image"

export default function Index(): JSX.Element {
  return (
    <div className="pixelwolf">
      <Image src="/images/logo.svg" alt="Pixelwolf" width={241} height={42} />
    </div>
  )
}
