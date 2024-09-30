// import './navbar.css'
import { OrganizationSwitcher, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'


export default function Navbar() {

  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(location.href.split('/')[3])
  }, [])

  const active = 'text-foreground'
  const desactive = 'text-muted-foreground'

  return (
    <div className='w-screen h-auto flex gap-4 items-center justify-between px-10 py-4 border-b border-foreground bg-slate-700'>
      <Link to='/' className='text-primary font-bold MiShadow'>Brand & Logo</Link>
      <div className="flex gap-4 items-center px-4">
        <Link to='/' className={url === '' ? active : desactive}>Home</Link>
        <SignedOut>
          <SignInButton>
            <Button>
              Comenzar
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="w-auto flex gap-4 items-center px-4">
            <Link to='/dashboard'  className={url === 'dashboard' ? active : desactive}>Dashboard</Link>
            <UserButton />
            <OrganizationSwitcher />
          </div>
        </SignedIn>
      </div>
    </div>
  )
}
