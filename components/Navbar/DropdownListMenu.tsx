import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';
import SignOutLinks from './SignOutLink';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

const DropdownListMenu = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline'>
                        <AlignLeft />
                        <UserIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                    {/* Logouted */}
                    <SignedOut>
                        <DropdownMenuItem>
                            <SignInButton mode='modal'>
                                <button className='w-full'>เข้าสู่ระบบ</button>
                            </SignInButton>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            {/* Signup */}
                            <SignUpButton mode='modal'>
                                <button className='w-full'>สมัครสมาชิก</button>
                            </SignUpButton>
                        </DropdownMenuItem>
                    </SignedOut>

                    {/* LogIned */}
                    <SignedIn>

                        {
                            links.map((item, index) => {
                                return (
                                    <DropdownMenuItem key={index}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>
                                );
                            })
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <SignOutLinks />
                        </DropdownMenuItem>
                    </SignedIn>

                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}
export default DropdownListMenu