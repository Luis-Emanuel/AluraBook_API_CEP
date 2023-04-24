async function buscaEndereco(cep){
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro){
      throw Error("CEP não existe !");
    }

    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");

    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
  } catch (erro){
    console.log(erro)
    mensagemErro.innerHTML = "<p>CEP invalido! Tente novamente.";

  }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

