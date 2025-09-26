import { PlayIcon } from "@heroicons/react/24/solid"

export const PlayButton = () => {
  return (
    <button className="flex shadow-lg px-8 py-3 rounded-2xl justify-center items-center hover:bg-gray-200 gap-2">
        <PlayIcon className="size-8"/>
        <p className="text-2xl">Play</p>
    </button>
  )
}
