function contar() {
  let ini = document.querySelector("#txti");
  let fim = document.querySelector("#txtf");
  let passo = document.querySelector("#txtp");
  let res = document.querySelector("#res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = "Contando:";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
