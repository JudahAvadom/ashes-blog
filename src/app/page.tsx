import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-4'>
      <div
        style={{textAlign:'-webkit-center'}}
      >
        <Image
          src="/ash.png"
          width={100}
          height={100}
          alt="Ash logo"
        />
      </div>
      <h1 className="text-3xl text-white text-center">Sean Bienvenidos a ASH</h1>
    </div>
  )
}
