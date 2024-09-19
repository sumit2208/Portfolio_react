import React from 'react'
import PIc from '../assets/sumit.png'

function Footer() {
  return (
    <div>
      <div className='  border-b-2 border-neutral-600 text-2xl mb-20 mt-10 flex item-center justify-center py-2 '> 
            <span style={{fontWeight:'800'}}>PERSONAL TOUCH</span>
         </div>

         


         <footer class="bg-slate-950 dark:bg-gray-900 shadow mb-2 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                  <img src={PIc} class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sumit Gupta</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white">Contact</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" class="hover:underline">9022445584</a>
                      </li>
                       
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-black-900 uppercase dark:text-white">Check Outtnpm ru</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/sumit2208" class="hover:underline target='_blank' ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/sumit-gupta-543ba1244/" target='_blank' class="hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold    uppercase dark:text-white">Email</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZPGVKFkzbDXQnVvWpLNFwQlNkzRvwLsRmMgDnqgQNwhhpqnzNgTlhtXcdRCbhhNkdJbCP" target='_blank' class="hover:underline">sg442754@gmail.com</a>
                      </li> 
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023  All Rights Reserved.
          </span>
         
      </div>
    </div>
</footer>

 
    </div>
  )
}

export default Footer
