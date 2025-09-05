import { cn } from "@/utils/twMerge";

type Props = {
    strength: number
    error?: any
}

function StrengthMeter({ strength, error }: Props) {
    // if (error) return null;
    console.log(strength)

    const text = ["Weak", "Average", "Strong", "Very Strong"]
    const color = ["bg-red-500", "bg-yellow-500", "bg-green-400", "bg-green-800"];
    const length = ["w-1/4", "w-1/2", "w-3/4", "4/4"]
    return (
      <div className="absolute bottom-0 left-0 w-full rounded-2xl bg-gray-500 h-[.2550rem]">
        <div
          className={cn("rounded-2xl h-[.2550rem] ", color[strength+1], length[strength+1])}
        ></div>
        {/* <p className={cn("text-sm", color[strength])}>{text[strength]}</p> */}
      </div>
    );
}

export default StrengthMeter