//Obtenemos los elementos del dom
const btn_ejecucion = document.getElementById("ejecucion");
const btn_ejecutados = document.getElementById("ejecutados");
const btn_prototipos = document.getElementById("prototipos");
//Contendores
const ejecucion = document.getElementById("div-1");
const ejecutados = document.getElementById("div-2");
const prototipos = document.getElementById("div-3");

function show(principal, sec1, sec2) {
  if (principal && principal.classList.contains("hidden")) {
    principal.classList.remove("hidden");

    if (sec1 && !sec1.classList.contains("hidden")) {
      sec1.classList.add("hidden");
    }
    if (sec2 && !sec2.classList.contains("hidden")) {
      sec2.classList.add("hidden");
    }
  }
}

function active(btn_principal, btn2, btn3) {
  if (btn_principal && !btn_principal.classList.contains("active")) {
    btn_principal.classList.add("active");

    if (btn2 && btn2.classList.contains("active")) {
      btn2.classList.remove("active");
    }
    if (btn3 && btn3.classList.contains("active")) {
      btn3.classList.remove("active");
    }
  }
}

btn_ejecucion.addEventListener("click", () => {
  show(ejecucion, ejecutados, prototipos);
  active(btn_ejecucion, btn_ejecutados, btn_prototipos);
});

btn_ejecutados.addEventListener("click", () => {
  show(ejecutados, ejecucion, prototipos);
  active(btn_ejecutados, btn_ejecucion, btn_prototipos);
});

btn_prototipos.addEventListener("click", () => {
  show(prototipos, ejecutados, ejecucion);
  active(btn_prototipos, btn_ejecutados, btn_ejecucion);
});
