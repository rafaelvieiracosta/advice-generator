const btn = document.querySelector("button");
const advice = document.querySelector("p");
const id = document.querySelector("span");

async function handleAdvice() {
  btn.setAttribute("disabled", "disabled");

  const apiJSON = await (
    await fetch(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 224)}`
    )
  ).json();

  id.innerText = apiJSON.slip.id;
  advice.innerText = `"${apiJSON.slip.advice}"`;

  btn.removeAttribute("disabled");
}

btn.addEventListener("click", handleAdvice);
