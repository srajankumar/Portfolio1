import Image from "next/image"

const Background = () => {
  return (
    <div>
      <div className="fixed opacity-90">
        <Image
          src="/assets/Bg_BlackishBlue.jpg"
          alt="background"
          className="fixed object-cover w-full h-full"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  )
}

export default Background
