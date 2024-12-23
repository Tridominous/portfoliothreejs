

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon">
            <a href="https://github.com/Tridominous" target="_blank" className="w-1/2 h-1/2">
                <img src="/assets/github.svg" alt="github" />
            </a>
            </div>
            {/* <div className="social-icon">
                <img src="/assets/icons8-x.svg" alt="twitter" className="w-1/2 h-1/2 bg-white"/>
            </div> */}
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/james-mou/" target="_blank" className="w-1/2 h-1/2 bg-white">
                <img src="/assets/linkedin2.svg" alt="linkedin" />
            </a>
            </div>
            {/* <div className="social-icon">
                <img src="/assets/notion.svg" alt="notion" className="w-1/2 h-1/2"/>
            </div> */}
        </div>

        <p className="text-white-500">© James Mou {new Date().getFullYear()}. All rights reserved.</p>
    </section>
  )
}

export default Footer