const servicos = [
    {
        imagem: `//img.icons8.com/ios/100/money-bag-euro.png`,
        servico: 'Crédito Consignado',
        texto: `- Aposentados <br> - Pensionistas <br> - Servidores Públicos <br> - LOAS <br> - SIAPE`
    },
    {
        imagem: `//img.icons8.com/ios/100/banknotes.png`,
        servico: 'Crédito Pessoal',
        texto: `- Débito na conta de luz <br> - Via cartão de crédito <br> - Débito em conta `
    },
    {
        imagem: `//img.icons8.com/ios/100/farm.png" alt="farm`,
        servico: 'Crédito Rural',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong> à <strong>expandirem suas operações</strong>, fazer investimentos ou <strong>custear a produção.`
    },
    {
        imagem: `//img.icons8.com/ios/100/security-checked.png`,
        servico: 'Seguros',
        texto: `A In Créditos possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade!`
    },
    {
        imagem: `//img.icons8.com/ios/100/money-transfer.png`,
        servico: 'Consórcios',
        texto: `A In Créditos oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade. Trabalhamos com todos os tipos de consórcios!`
    },
    {
        imagem: `//img.icons8.com/ios/100/solar-panel--v1.png`,
        servico: 'Energia Solar',
        texto: `Já pensou em <strong>reduzir sua conta de energia em até 95%</strong>? Fazemos seu projeto e financiamento do investimento!`
    },
    {
        imagem: `//img.icons8.com/dotty/80/refund-2.png`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong> para te ajudar a honrar com seus compromissos!`
    },
    {
        imagem: `//img.icons8.com/ios/100/car--v1.png`,
        servico: 'Financiamento Veicular',
        texto: `Está na hora de adquirir seu <strong>novo veículo</strong>! Com a In Créditos você tem as <strong>melhores taxas</strong> e opções de financiamento!`
    },
    {
        imagem: `//img.icons8.com/ios/100/cottage--v1.png`,
        servico: 'Financiamento Residencial',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a In Créditos você tem as <strong>melhores taxas</strong> e opções de financiamento e refinanciamento residencial!`
    },
    {
        imagem: `//img.icons8.com/ios/100/get-cash--v1.png`,
        servico: 'Crédito com Garantia',
        texto: `Precisando de dinheiro? Aqui temos <strong>créditos com garantia de veículo e imóvel</strong> com as <strong>melhores taxas</strong>!`
    },
    {
        imagem: `//img.icons8.com/ios/100/broom.png`,
        servico: 'Limpa Nome',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando aprovações.`
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img width="96" height="96" src="https:${servico.imagem}" alt="get-cash--v1"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}