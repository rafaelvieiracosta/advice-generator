const btn = document.querySelector("button");
const advice = document.querySelector("p");
const id = document.querySelector("span");

async function handleAdvice() {
  const apiJSON = await (
    await fetch(
      `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 223)}`
    )
  ).json();

  console.log(apiJSON);
  id.innerText = apiJSON.slip.id;
  advice.innerText = `"${apiJSON.slip.advice}"`;
}

btn.addEventListener("click", handleAdvice);
