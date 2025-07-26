const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const titulotopo = document.getElementById("titulo");
const apelidos = ["Lari", "Lalá", "Teixeira", "Larissa Teixeira"];
titulotopo.style.color = "var(--lavender-web)";
titulotopo.style.fontSize = "2.8rem";
titulotopo.style.fontWeight = "700";
titulotopo.style.fontFamily = "Times";

let i = 0;

setInterval(() => {
  titulotopo.innerText = apelidos[i];
  i = (i + 1) % apelidos.length; // volta pro início quando acabar
}, 3000);


formulario.addEventListener('submit', function (event) {

  event.preventDefault();

  const campoNome = document.querySelector('#name');
  const txtNome = document.querySelector('#txtNome');

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = 'O nome deve ter no mínimo 3 caracteres.';
    campoNome.style.borderBottom = "2px solid red";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = '';
  }

  const campoEmail = document.querySelector('#email');
  const txtEmail = document.querySelector('#txtEmail');

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = 'Digite um E-mail válido.';
    campoEmail.style.borderBottom = "2px solid red";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = '';
  }

  const campoSubject = document.querySelector('#subject');
  const txtSubject = document.querySelector('#txtSubject');

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
    campoSubject.style.borderBottom = "2px solid red";
    campoSubject.focus();
    return;
  } else {
    txtSubject.innerHTML = '';
  }

  const campoMessage = document.querySelector('#message');

  window.alert("Formulário enviado com sucesso!");

  campoNome.value = ''
  campoEmail.value = ''
  campoSubject.value = ''
  campoMessage.value = ''

});

/*
  for (let i = 0; i < apelidos.length; i++) {
    const element = apelidos[i];

    setTimeout(() => {
      titulotopo.innerText = element

    }, i * 4000)
   }
Ideia com for funciona, mas não repete infinitamente;e adicionar looping com while sobrecarrega o navegador.
melhor opção é usar o método setInterval para repetir apenas o trecho continuamente */




