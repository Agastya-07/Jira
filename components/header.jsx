import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="conatainer mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/1.png"}
            alt="TOR-Q logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive">
              <PenBox size={18} />
              create project
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline" className="hover:bg-orange-800">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
