function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jfif")
    img.setAttribute(
      "alt",
      "Foto de Anderson Breno sorrindo, vestindo camisa social preta e janelas ao fundo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.jfif")
    img.setAttribute(
      "alt",
      "Foto de Anderson Breno em um elevador, segurando o celular vestido de camisa social verde e crachá"
    )
  }
}
