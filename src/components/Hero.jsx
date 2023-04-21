import { logo, github } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">


        <button
          type="button"
          onClick={() => {window.open(`https://chat.openai.com/`)}}
        >
          <img src={logo} alt="openai_logo" className="w-14 object-contain" />
        </button>

        <button
          type="button"
          onClick={() => {window.open(`https://github.com/cjsarab/ai_summariser`)}}
        >
          <img src={github} alt="github_logo" className="w-14 object-contain" />
        </button>

      </nav>

      <h1 className="head_text">
        Summarise Articles with <br className="max-md:hidden"/>
        <span className="head_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Let modern technology condense lengthy articles for you.
      </h2>
    </header>
  )
}

export default Hero