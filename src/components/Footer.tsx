import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
      </div>
    </footer>
  )
}
