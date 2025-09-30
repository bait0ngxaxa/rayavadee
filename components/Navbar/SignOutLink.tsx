'use client'
import { SignOutButton } from "@clerk/nextjs"
import { useToast } from "@/hooks/use-toast"

const SignOutLinks = () => {
    const { toast } = useToast()
    const handleLogout = () => {
        toast({ description: "ออกจากระบบ สำเร็จ!!" });
    }


    return (
        <SignOutButton redirectUrl="/">
            <button
                className=" w-full bg-red-500 text-white hover:text-gray-200 px-2 py-1 rounded-md"
                onClick={handleLogout}
            >
                ออกจากระบบ
            </button>
        </SignOutButton>
    )
}
export default SignOutLinks