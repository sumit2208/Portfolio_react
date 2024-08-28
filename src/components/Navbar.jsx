 import  {FaLinkedin} from "react-icons/fa"
 import  {FaGithub} from "react-icons/fa"
 import { FaEnvelope } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className="  mb-20  flex item-center justify-between py-6     rounded-2xl">
     <div className="flex flex-shrink-0 items-center">
     <span className= "  ml-7 text-2xl">Developer</span>
     </div> 
     <div className="flex items-center justify-center gap-4 text-2xl  mr-7  cursor-pointer">
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZPGVKFkzbDXQnVvWpLNFwQlNkzRvwLsRmMgDnqgQNwhhpqnzNgTlhtXcdRCbhhNkdJbCP" target='_blank' class="hover:underline"><FaEnvelope/></a>
    <a href="https://github.com/sumit2208" class="hover:underline target='_blank' "><FaGithub/></a>
    <a href="https://www.linkedin.com/in/sumit-gupta-543ba1244/" target='_blank' class="hover:underline"><FaLinkedin/></a>
     </div>
    </nav>
  )
}

export default Navbar
