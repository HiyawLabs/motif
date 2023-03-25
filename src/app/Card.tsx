import Image from "next/image"
import Link from "next/link"

function Card({ item }) {

  console.log(item)
  return (

    <div className="max-w-full bg-white dark:bg-gray-800">


      <Link href="#">
        <Image className="rounded-lg p-3" width={1000} height={324} src={item.feature_image} alt="moon" />
      </Link>


      <div className="p-3">

        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400"> Mar 10, 2023 </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> {item.reading_time} min read </p>
        </div>


        <Link href={`/read/${item.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </Link>

      </div>

    </div>

  )

}



export default Card
