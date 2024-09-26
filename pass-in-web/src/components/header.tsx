import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div className="">
      <img src={nlwUniteIcon} alt="NLW Unite" />

      <nav>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}
