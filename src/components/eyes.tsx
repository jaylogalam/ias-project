import { Eye, EyeOff } from "lucide-react";

type EyesProps = React.SVGProps<SVGSVGElement> & {
  state: boolean;
};

function Eyes({ state, className, ...props }: EyesProps) {
    const style = "absolute right-4 top-9 text-gray-500";
    
    return state ? (
      <Eye
        {...props}
        className={style}
        size={18}
      />
    ) : (
      <EyeOff
        {...props}
        className={style}
        size={18}
      />
    );         
}

export default Eyes