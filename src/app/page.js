import { BsChatText } from "react-icons/bs";
import { GiMusicSpell } from "react-icons/gi";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";

export default function HomePage() {
  return (

    <div className="m-auto">
      <Title />
      <div className="mt-4 flex gap-4 w-4/5 m-auto">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>

  )
}

const Title = () => {
  const title = " Craft Your Affirmations. "
  const title2 = " Your Words , Your Belief Your Power"
  return (
    <div className="inline text-center">
      <p className="text-3xl font-serif">{title}</p>
      <p className=" text-muted-foreground">{title2}</p>
    </div>

  )
}

const LeftPanel = () => {

  return (
    <div className="flex flex-col gap-4 w-1/2 border p-4 rounded-md ">
      <div className="1 flex">
        <BsChatText className="text-primary mr-4" size={30} />
        <div className="texts">
          <p>Positive Affirmations</p>
          <p className="text-sm">Generate affirmations for daily inspiration</p>
        </div>
      </div>
      <div className="2 flex">
        <GiMusicSpell className="text-primary mr-4" size={30} />
        <div className="texts">
          <p>Positive Affirmations</p>
          <p className="text-sm">Generate affirmations for daily inspiration</p>
        </div>
      </div>
      <div className="3 flex">
        <BiSolidMessageSquareEdit className="text-primary mr-4" size={30} />
        <div className="texts">
          <p>Positive Affirmations</p>
          <p className="text-sm">Generate affirmations for daily inspiration</p>
        </div>
      </div>

    </div>

  )
}
const RightPanel = () => {

  return (
    <div className="flex flex-col gap-2 w-1/2 border border-md  rounded-md items-center p-3">
      <img src="https://th.bing.com/th/id/OIG2.ks9mZNxIONrvVXsIwD4R?pid=ImgGn" className="w-16 h-16 rounded-full" alt="logo" />
      <p className="text-2xl font-serif text-center">Create Account
      </p>
      <p className="text-base font-sans">Join the Platform!</p>
      <div className="w-4/5 py-2 px-4 bg-muted cursor-pointer hover:bg-muted-foreground border rounded-md  flex justify-center"  >
        <div className="flex">
          <img src="/google_logo.png" className="h-6 w-6 mr-3" alt="" /> <p>
            Sign In with Google
          </p>
        </div>
      </div>
      <p className="text-xs my-4">
        <SiTicktick className="inline mr-2" /> Agree to Terms & Privacy
      </p>
    </div>
  )
}
