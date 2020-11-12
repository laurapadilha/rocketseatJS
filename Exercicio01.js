var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function enderecoCompleto (endereco) {
    var retorno = "O usuário mora em " + endereco.cidade + " - " + endereco.uf + ", no bairro " + endereco.bairro + ", na " + endereco.rua + ", nº " + endereco.numero;
    return retorno;
};

console.log (enderecoCompleto (endereco));
