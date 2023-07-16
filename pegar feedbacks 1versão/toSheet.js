const XLSX = require("xlsx")

const data = [
  {
    cargo: "Funcionário(a) atual",
    date: "30 de dez. de 2021 - Assistente Comercial",
    pros: "Simpress é uma escola, todos os dias aprendo algo a mais que me torna uma profissional melhor e mais capacitada, é uma Empresa que cuida do seu funcionário e que tem o melhor ambiente que já tive a feliz oportunidade de presenciar.",
    contra: "Nada a informar contra a Empresa Simpress, só elogios!"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de ago. de 2022 - Auxiliar Técnico",
    pros: "Ambiente de trabalho bom, equipe competente",
    contra: "Não há crescimento, pouco beneficio"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "31 de ago. de 2022 - Administrative Assistant",
    pros: "Ambiente desafiador e de aprendizado.",
    contra: "Falta de oportunidade de crescimento na carreira."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "8 de ago. de 2022 - Técnico Eletrônico",
    pros: "Ambiente de trabalho muito bom, diversas oportunidades para crescimento de carreira",
    contra: "Não tenho nada contra a relatar"
  },
  {
    date: "8 de ago. de 2022 - Analista De Produção",
    pros: "qualidade de vida, bom ambiente de trabalho,PLR",
    contra: "salários um pouco defasadose poderiam aumentar o vr"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "21 de ago. de 2022 - Funcionário confidencial",
    pros: "Ótima empresa Ótima plr Bons benefícios Tudo certo Tudo",
    contra: "Flexibilidade Sede longe Apenas isso Somente Isso Ok"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "30 de ago. de 2022 - Supervisor Serviços Gerais",
    pros: "- PLR, Benefícios, Flexibilidade, transparência, processos",
    contra: "empresa tem oportunidade de se adequar ou atualizar politicas salarias de cargos"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "23 de ago. de 2022 - Analista cobrança",
    pros: "PLR semestral, hibrido no pós pandemia",
    contra: "chefes ao invés de líderes, piso salarial abaixo do mercado, sistema pouco utilizado no mercado"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "20 de ago. de 2022 - Técnico Residente",
    pros: "PLR muito boa, para técnico e cargos acima, plano de saúde também é otimo, pagamente sempre adiantado.",
    contra: "Falta plano de carreira para técnico residente em Brasília e um salário compatível com o mercado, ticket é um pouco baixo."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "2 de ago. de 2022 - Assistente Administrativo",
    pros: "Ótimo salário, ótimos benefícios, equipe maravilhosa",
    contra: "Não tem , apaixonada por esta empresa"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "2 de ago. de 2022 - Técnico Em Eletrônica Residente",
    pros: "Treinamentos, incentivos à estudo, Logística de peças e suprimentos relativamente boa.",
    contra: "Baixo salário e benefícios, alta cobrança referente a vestimentas (camisa por dentro da calça e sapato social) e relatórios de controle onde o técnico acaba fazendo um pouco do papel do gestor."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "7 de jul. de 2022 - Técnico Eletrônico I",
    pros: "Plano de carreira e equipe pro ativa",
    contra: "Muitas oportunidades nas capitais somente ."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "19 de jul. de 2022 - Analista De Marketing De Produto Sênior",
    pros: "Empresa estruturada, como bom PLR (principal atrativo)",
    contra: "Benefícios abaixo da média do mercado. Não valoriza o funcionário nem na hora em que ele pede pra sair. Não têm coragem de oferecer nem um panetone no fim do ano (não que tenham obrigação, mas toda empresa que se preza faz isso de bom grado)."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "30 de jun. de 2022 - Funcionário confidencial",
    pros: "O principal ponto a destacar é o clima organizacional, as pessoas são muito amigas e colaborativas. Os benefícios estão em evolução, mas bastante coisa já tem evoluído nos últimos tempos.",
    contra: "A alta liderança é um pouco ultrapassada, a empresa precisaria de uma renovação total desse time para virar uma empresa realmente moderna, no ramo de tecnologia."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "12 de jul. de 2022 - Técnico Eletrônico",
    pros: "Oportunidade de crescimento. Disposição de ensinar",
    contra: "Má organização de alguns gestores"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "11 de jul. de 2022 - Funcionário confidencial",
    pros: "Grande aprendizado para entrar no mercado trabalho",
    contra: "Sem plano de carreira para os funcionário de menor cargo"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "11 de jul. de 2022 - Advogada",
    pros: "boa organização, tranquilo para trabalhar",
    contra: "Sem plano de carreira, poucas oportunidades"
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "9 de jul. de 2022 - Técnico Em Eletrônica Residente",
    pros: "PLR 2 vezes no ano e benefícios.",
    contra: "Salário baixo, você fica invisível no cliente que você fica."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "21 de jun. de 2022 - Analista Sênior",
    pros: "Ambiente de trabalho agradável, boa comunicação e benefícios",
    contra: "Sem contras até esse momento"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jun. de 2022 - Técnico De Laboratório Júnior",
    pros: "Muito preocupado com o colaborador, tanto com a carreira profissional, quanto com a vida pessoal.",
    contra: "Até o momento não há nada contra."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "15 de jun. de 2022 - Analista De Suporte",
    pros: "plr alto, gostoso trabalhar la",
    contra: "paga mal e VR baixo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "14 de jun. de 2022 - Analista De Operações",
    pros: "Participação de lucro a cada seis meses",
    contra: "Sem plano de carreira dos funcionários"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "27 de mai. de 2022 - Funcionário confidencial",
    pros: "Fornece um ótimo sistema para aprendizagem",
    contra: "Alguns cursos com conteúdo limitado"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de jun. de 2022 - Técnico Em Informática",
    pros: "Empresa sempre atualizando o funcionários com as éticas trabalhistas e curso sobre seus equipamentos. Salário em dia e benefícios",
    contra: "Nada a declarar compra essa empresa."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "23 de jun. de 2022 - Analisa de Suporte Pleno",
    pros: "Só PLR de bom. e ambiente pra trabalhar é bom",
    contra: "VR baixo Salario abaixo do mercado E poucos benefícios."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jun. de 2022 - Assistente Administrativo",
    pros: "PLR, duas vezes por ano.",
    contra: "Plano de saúde, vale refeição."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "10 de jun. de 2022 - Funcionário confidencial",
    pros: "Otimas oportunidades de crescimento, pagamento em dia e valor de VR otimo",
    contra: "Sinceramente até o momento nada doque reclamar"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "31 de mai. de 2022 - Analista De Infraestrutura Sênior",
    pros: "empresa de grande porte diversas oportunidades e beneficios",
    contra: "demanda alta de atendimentos e ocorrencias"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "1 de jun. de 2022 - Supervisor",
    pros: "Empresa com ótimo ambiente para exercer as atividades, benefícios, remuneração, valorização por bom desempenho, acompanhamento dos gestores.",
    contra: "Alta rotatividade de funcionários, nível elevado de exigência, muitas ferramentas e aplicações que dificultam nas atividades."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jun. de 2022 - Técnico De Eletrônica",
    pros: "Estar trabalhando é o único pro, pois os contras são muitos!",
    contra: "Desconto no pagamento de ticket o que é humilhante pq fazendo as contas do que se ganha e do desconto recebemos menos que o valor da sexta básica."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "25 de mai. de 2022 - Técnico Volante",
    pros: "Ótimo ambiente de trabalho, bom lugar",
    contra: "Até o momento sem contras na avaliação"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de mai. de 2022 - Operador De Site Júnior",
    pros: "Vale refeição, participação de lucros, grande oportunidade de crescimento",
    contra: "Salário, desconta 20% em cima do valor do VR"
  },
  {
    date: "24 de mai. de 2022 - Gerente De Canais III",
    pros: "Ambiente extremamente agradável, facil adaptação.",
    contra: "Nada a declarar. Adaptação de forma clara e transparente."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    contra: "Grande fluxo de trabalho além do horário comercial diariamente e muitas vezes alguns dias do fim de semana"
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "18 de mai. de 2022 - Técnico Em Eletrotécnica",
    pros: "na epoca tinha uns beneficios legais, plano, vale alimentação, vale refeição, vale transporte, PL semestral. Prezavam pela qualidade de vida",
    contra: "nas filiais não tinha plano de carreira, e muita burocracia"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "1 de mai. de 2022 -",
    pros: "excelente plr e ambiente de trabalho",
    contra: "convênio com baixa cobertura na zona oeste e falta de benefícios além dos padrões"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "5 de mai. de 2022 - Asistente Administrativo",
    pros: "salário compatível, ótimos lideres dispostos a desenvolver o funcionário.",
    contra: "Não espaço para o funcionário ficar"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "6 de jun. de 2022 - Líder De Equipe",
    pros: "A única coisa boa da empresa são as pessoas. Que infelizmente não são valorizadas. Isso explica os índices alarmantes de Turnover. A empresa é boa para cargos altos de gestão, se você estiver abaixo disso, corra",
    contra: "Uma empresa sem plano de carreiras e focada em acionistas gananciosos. Veja o que eles chamam de benefícios: 1 - Café com a Simpress: É um bate papo com o Diretor, pois eles adoram ser ovacionados e admirados. 2 - Empréstimo Consignado – Isso não é benefício, você vai devolver o dinheiro que pegou e ainda fazer eles lucrarem com juros. 3 - Homenagem por tempo de empresa – Você vai receber um E-mail te elogiando pelo tempo de casa, nada além disso. 4 - Multiplique: Você pode ensinar o que sabe aos outros. Desde quando isso é benefício? 5 - Participação nos resultados – A PLR é boa, mas isso é salário. Pagam CLT baixa e complementam com PLR 6 - Quem indica amigo é: Vergonhoso isso aqui, não? Você ganha 100 reais se indicar uma pessoa e essa for contratada. 7 - Seguro de Vida – É o mínimo, né? Toda empresa tem! 8 - Universidade Simpress: Nada relevante aqui, a não ser que você queira aprender a consertar uma impressora. Serve se você for um técnico de impressoras, fora isso... 9 - Vale Refeição – Vexatório! É um vale pequeno onde ainda tiveram a frieza de colocar um desconto gigante em cima do valor ."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "17 de mai. de 2022 - Técnico Eletrônico I",
    pros: "Salario em dia Plano de saúde (cooparticipação) PLR gympass Ticket VR OU VA (você que escolhe) Vale transporte Possibilidade de mudar de estado Possibilidade de subir para gestão",
    contra: "Salario baixo para categoria de Técnico e Administrativo Plano de carreira ruim Alguns lideres não sabem o trabalho que devem fazer Muita panelinha entre lideres e seus protegidos Não oferece uma jornada de trabalho muito flexível; Cobra coisas desnecessárias; Atraso em algumas entregas;"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "4 de mai. de 2022 - Coordenador De TI",
    pros: "Empresa com grande foco nos colaboradores. Ótimo ambiente de trabalho. Formato hibrido visando a qualidade de vida dos profissionais. Maior PLR que já vi no mercado",
    contra: "Salários na média do mercado"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "30 de abr. de 2022 - Analista Suporte Pleno",
    pros: "Eu aprendi muito nessa empresa e sou muito grata por tudo que vivi e me dediquei ao máximo, foram 9 anos muito bom.",
    contra: "Não tive outras oportunidade de cargo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "4 de mai. de 2022 - Operador De Site Pleno",
    pros: "A participação de lucros, conteúdos da universidade Simpress",
    contra: "- Piso salarial baixo, poucas chances de efetivação, exige certificações para vagas como técnico porem, não oferece ajuda de custo (ou pelo menos não tive orientação da gestão), não levam em conta a bagagem que o funcionário tem limitando a vaga promocional apenas por uma certificação. - Procedimentos engessados com pouca ou quase nenhuma forma de flexibilidade."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "3 de mai. de 2022 - Analista De Backoffice",
    pros: "Pagamentos em dia, benefícios, PLR e plano de carreira",
    contra: "As vezes os processos são meio bagunçados"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "27 de abr. de 2022 - Analista Trade Marketing",
    pros: "Benefícios, pessoas, flexibilidade e aprimoramento",
    contra: "Demora no crescimento e não há um organograma previamente montado"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "26 de abr. de 2022 - Técnico Em Eletrônica",
    pros: "Benefícios interessantes, oportunidade de aprendizado",
    contra: "a falta de plano de carreira para algumas areas operacionais."
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "11 de mai. de 2022 - Líder De Serviços",
    pros: "É uma empresa sob o guarda chuvas da Marca HP.",
    contra: "Por ser uma empresa sob o Guarda chuvas da marca HP possui muitas diferenças para os profissionais que já passaram pela multinacional. Infelizmente a cultura pouco meritocrática da empresa desmotiva os profissionais que lá estão."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de abr. de 2022 - Técnico Residente",
    pros: "Salário, participação e benefícios ótimos",
    contra: "Minha área fica um pouco isolado dos outros funcionários da empresa até dos meus superiores"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "26 de abr. de 2022 - Coordenador De Serviços",
    pros: "A Simpress é uma empresa com excelente ambiente de trabalho (ambiente colaborativo), com uma cultura empresarial bem definida. Aqui o aprendizado é constante, pois temos excelentes profissionais. Seja um Simlover você também!!!",
    contra: "não tenho apontamentos negativos para empresa."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "25 de abr. de 2022 - Gerente Comercial Sênior",
    pros: "Empresa utiliza o regime híbrido (escritório e home office), facilitando o nosso dia a dia. RH e Liderança focados na capacitação dos funcionários. Autonomia para a Execução de Tarefas e Apoio do Gerente da Área nas Visitas a Clientes. Ótimo Clima para se trabalhar e o RH muito atuante nestes 3 meses, em que entrei na empresa.",
    contra: "Não tenho nada a declarar de contra neste período."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "3 de mai. de 2022 - Auxiliar Administrativo",
    pros: "Empresa não atrasa pagamentos, tem PLR 2 vezes ao ano, plano de saúde com coparticipação entre outros benefícios, no geral uma empresa boa.",
    contra: "Muito trabalho para poucos colaboradores, principalmente no time de serviços. Alguns líderes não motivam os colaboradores e não sabem lidar com os mesmos. Empresa com pouca oportunidade de crescimento profissional, sendo possível crescer dentro da companhia quando um colaborador superior é promovido também ou por demissão/desligamento do mesmo. Salario muito abaixo do mercado."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "19 de mai. de 2022 - Analista De Projetos",
    pros: "Diria que somente a PLR é boa. Semestral e com bons valores.",
    contra: "A empresa confia no fato de ter uma boa PLR (Paga salário abaixo do mercado), mas não tem plano de carreira, não investe nos funcionários, não há subsídios para cursos. Antes da pandemia tinha café da manhã e hoje não tem mais. É corriqueiro ver pessoas já em cargos altos serem promovidas e as pessoas em cargos mais baixos abandonando a empresa, mesmo depois de anos de empresa."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "5 de mai. de 2022 - Técnico Em Eletrônica",
    pros: "Aprendizado, a muito custo pois só depende de vc",
    contra: "Gestão, presidência, salário, recursos de trabalho, espaço, tentam implementar processos sem lógica, que mais atrapalham do que ajuda no processo, pagam uma misera PLR 2 vezes ao ano e acho que tá bom, o salario é muito abaixo da média e as funções exercidas as vezes ultrapassam o que fomos contratados pra fazer, um sentimento de completa insatisfação com uma empresa que tem selo GPTW e se diz ótima para trabalhar"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "12 de abr. de 2022 - Analista De Inteligência De Mercado Pleno",
    pros: "Pessoas comprometidas, amigáveis e proporciona crescimento profissional.",
    contra: "Cultura inflexível e burocrática, o que torna os processos lentos."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de abr. de 2022 - Jovem Aprendiz",
    pros: "Os gestores estão realmente preocupados em te fazer crescer dentro e se não fora da empresa!",
    contra: "Há empresas onde o salário para jovens aprendizes são maiores."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "12 de abr. de 2022 - Técnico Em Eletrônica I",
    pros: "Participação de lucros, assistência médica",
    contra: "Liderança ausente e cobra muito os técnicos"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "15 de abr. de 2022 - Analista Pleno",
    pros: "A PLR é muito boa, é o que praticamente faz com que as pessoas fiquem na empresa.",
    contra: "Estrangulam os funcionários por falta de aumento e promoções (Embora haja muito elogio verbal) até que os mesmos peçam as contas. Nesse momento fazem propostas, alguns aceitam e ficam, mas a maioria não aceita e pede demissão mesmo assim. Mesmo funcionários com 5 a 10 anos de casa pedem demissão. Em algumas areas, existe até mesmo um clima hostil. Contam os centavos para dar um aumento."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "27 de abr. de 2022 - Funcionário confidencial",
    pros: "Se voce tiver sorte de ter um gestor de verdade tera oportunidades conforme mostrar merecimento",
    contra: "Algumas areas prendem o colaborador nao deixando ele trocar de area"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de abr. de 2022 - Operador De Site Pleno",
    pros: "Oportunidade para pessoas com deficiência",
    contra: "Gestão de pessoas nos postos de trabalho"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "26 de abr. de 2022 - Analista De Negócios Júnior",
    pros: "Faço parte da Cia a menos de um mês, e posso dizer que desde o processo de entrevistas até o momento, fui bem acolhida. O respeito pelo tempo de adaptação e integração é fantástico. Prevejo uma parceria de longa data. Os benefícios estão compatíveis com o que o mercado pratica.",
    contra: "Até o momento não sou capaz de elencar pontos negativos da Simpress."
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "21 de abr. de 2022 - Analista",
    pros: "Fretado sem custo PLR (razoável)",
    contra: "Oferece benéficos como plano de saúde mas reclama se usado por causa de custos. Coloca o PLR como se fosse melhor coisa do planeta, porém enquanto um analista ganha 1000 de PLR, o coordenador ganha 50 mil e o gerente 100 mil, então o benefício é apenas pra gestão . Não tem um espaço de convívio social dos funcionários. Em dias de chuva, há duas opções: ou fica na chuva ou volta a trabalhar, pq não tem onde sentar. Oportunidade de crescimento é mínima. Remuneração ruim, visando que não há benefícios Sem incentivo à estudo ou certificações, apenas cobranças da Gerência"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de abr. de 2022 - Técnico",
    pros: "Empresa dinâmica e inovadora, e muito conceituada no mercado",
    contra: "Sem perspectiva alguma de melhorar de cargo"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "30 de mar. de 2022 - Técnico Residente I",
    pros: "A empresa tem muito benefícios e o que agrada mais é a PLR",
    contra: "Esquecem de você se estiver trabalhando em um cliente"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "24 de mar. de 2022 - Técnico De Eletrônica",
    pros: "Participação de lucros muito atrativo.",
    contra: "O salário está muito abaixo do praticado com o mercado, gestores não tão bem preparados para gerir equipes."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de mar. de 2022 - Operador De Site Júnior",
    pros: "Adquirir experiência no âmbito corporativo",
    contra: "Poucas tarefas, sem feedback do supervisor"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "20 de mar. de 2022 - Analista",
    pros: "Salário compatível, PLR de 6 em 6 meses podendo ser maior que o salário, acomodaçoes agradaveis, convenio médico e odontologico, VR e maquina de café.",
    contra: "Gestão! Alguns gestores acham que são infinitamente superiores.... mas, faz parte."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "4 de mar. de 2022 - Técnico Em Eletrônica",
    pros: "Ótimos Benefícios Oportunidade de aprendizados Se tiver interesse buscar, te oportunidade de crescimento profissional, PLR, Campanhas Ótimas pessoas",
    contra: "Salário, ainda que dentro do padrão, é baixo."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "23 de mar. de 2022 - Analista Negócios Pleno",
    pros: "A empresa oferece PLR semestral, plano de carreira, regime híbrido (para alguns casos 100% home), se preocupa com inclusão dos funcionários e diversidade na grade de colaboradores.",
    contra: "Local de difícil acesso (Santana de Parnaíba)"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "9 de mar. de 2022 - Almoxarife",
    pros: "Pagamentos e benefícios em dia",
    contra: "Falta de espaço para trabalhar"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "23 de mar. de 2022 - Técnico em Eletrônica Jr",
    pros: "PLR razoável Vale razoável Possibilidade de crescimento",
    contra: "Muita demanda dos clientes e pouco apoio por parte da matriz"
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "4 de abr. de 2022 - Operador De Soluções Ao Cliente",
    pros: "- Bons Benefícios - PLR - Gym Pass - Plano Saúde",
    contra: "- Gerência pouco comunicativa - Falta de treinamentos de iniciação."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "3 de mar. de 2022 - Analista De Produtos Júnior",
    pros: "Excelente empresa, procuram sempre proporcionar ao funcionário estabilidade, Possui uma PLR interessantíssima, e bom Ambiente de trabalho",
    contra: "O benefício de VR/VA poderia ser melhor"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "2 de mar. de 2022 - Analista De Suporte",
    pros: "Reconhecimento pelo trabalho, respeito as pessoas, gerencia participativa, possibilidade de desenvolvimento e plano de carreira.",
    contra: "Não classifico como contra, mas a necessidade de estar na empresa o tempo inteiro, sendo que a localidade é de difícil acesso."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "28 de fev. de 2022 - Líder De Serviços",
    pros: "Oportunidade para Crescimento para quem realmente interessa",
    contra: "Processos internos burocráticos tornando atividades vagarosas"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "25 de fev. de 2022 - Operador De Suporte Técnico",
    pros: "benefícios bons. Pagamento cai no dia correto. Horário bom pra conciliar com a vida pessoal.",
    contra: "Logística Atraso em alguns processos Ambiente de trabalho Salário baixo"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de mar. de 2022 - Operador De Site Júnior",
    pros: "Aprendizagem, ambiente de trabalho, benefícios, liderança",
    contra: "Salario, direção, escritório não da apoio a quem fica no cliente"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de fev. de 2022 - Account Executive",
    pros: "Benéficos e plano de carreira.",
    contra: "Alto volume de processos e sistemas, que estão em processo de melhoria."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "16 de fev. de 2022 - Customer Success",
    pros: "Otima empresa, salário, benefícios,PLR e varios programas de bem estar ao funcionario com a reestruturação do RH",
    contra: "Carga de trabalho excessiva, precisamos de mais colaboradores"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "21 de fev. de 2022 - Técnico Eletrônica Residente I",
    pros: "A empresa fornece cursos técnicos e de gestão.",
    contra: "Sem Contras até o momento."
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "18 de fev. de 2022 - Analista De Soluções Júnior",
    pros: "Nunca atrasou salário PLR é um enorme diferencial",
    contra: "Alguns processos não fazem sentido"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de fev. de 2022 - Técnico Eletrônico",
    pros: "Benefícios Vale PLR Horário Salário",
    contra: "Nada . . . ."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "11 de fev. de 2022 - Líder Serviços 1",
    pros: "Bons líderes que são incentivados pela empresa a acompanhar o desenvolvimento de seus colaboradores.",
    contra: "Salário e VR com valores abaixo do mercado."
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "8 de fev. de 2022 - Técnico Eletrônico",
    pros: "Empresa dá grandes possibilidades de crescimento",
    contra: "Não tem contra trabalhar nesta empresa"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de fev. de 2022 - Supervisor",
    pros: "Empresa que se preocupa com o colaborador, desde o crescimento profissional como a saúde e bem star familiar.",
    contra: "Ainda não identifiquei pontos contra."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "9 de fev. de 2022 - Operador De Site Júnior",
    pros: "Pagamento em dia, bons benefícios",
    contra: "Difícil ascensão de cargos internos"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "28 de jan. de 2022 - Funcionário confidencial",
    pros: "Empresa com rotina Dinâmica, valoriza o protagonismo do profissional, sabe reconhecer as pessoas e seus esforços!",
    contra: "Atua em um mercado muito competitivo e agressivo, sendo necessário ações dos colaboradores para manter a empresa competitiva."
  },
  {
    contra: "Péssimo ambiente de trabalho, assédio moral e péssimo RH."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de fev. de 2022 - Analista De Faturamento Sênior",
    pros: "Bom salário, participação nos lucros 2 vezes ao ano. Empresa sempre em crescimento.",
    contra: "Volume alto de entregas por analista."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "4 de fev. de 2022 - Analista Planejamento Financeiro Sênior",
    pros: "oportunidades de melhorias e crescimento profissional",
    contra: "Não tem vagas 100% home office"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "3 de mar. de 2022 - Operador de Sites JR",
    pros: "a empresa faz o pagamento em dia",
    contra: "Não tem a menor consideração e respeito com os funcionários, muito desorganizada."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "26 de jan. de 2022 - Analista De Treinamento E Desenvolvimento Sênior",
    pros: "Empresa com visão atual Focada nos resultados e crescimento Forte vontade de ser melhor para os colaboradores Grandes chances de crescimento para a satisfação do colaborador",
    contra: "Em alguns temas ainda está em desenvolvimento, mas já deu o primeiro passo É possível melhorar os benefícios para o colaborador"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "7 de fev. de 2022 - Técnico Em Eletrônica",
    pros: "PLR, Não falham nos pagamentos",
    contra: "Gestores imediatos mal preparados e pensam somente em sim."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "3 de fev. de 2022 - Analista De Comunicação",
    pros: "- PLR - Restaurante no local",
    contra: "- Plano de Saúde com pouca rede credenciada"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "14 de jan. de 2022 - Técnico Residente I",
    pros: "Participação de Lucros Salario Plano de Saúde Ferramentas de Estudo Compromisso com funcionários",
    contra: "Vale Alimentação Oportunidades Aumento Salarial Vale Transporte Vale Refeição"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "19 de jan. de 2022 - Líder",
    pros: "Empresa bem dinâmica, equipe muito proativa, PLR semestral, plano de saúde, plano odontológico, VR.",
    contra: "Não tenho nada que ache negativo na empresa"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de dez. de 2021 - Assistente Comercial",
    pros: "Simpress é uma escola, todos os dias aprendo algo a mais que me torna uma profissional melhor e mais capacitada, é uma Empresa que cuida do seu funcionário e que tem o melhor ambiente que já tive a feliz oportunidade de presenciar.",
    contra: "Nada a informar contra a Empresa Simpress, só elogios!"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "13 de jan. de 2022 - Supervisor De Serviços",
    pros: "Oportunidade de Crescimento interno PLR 2 vezes ao ano RH presente, gestão humanizada. Ambiente de desenvolvimento constante",
    contra: "Muito trabalho, necessário disciplina do profissional para garantir o equilíbrio com a vida pessoal."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de jan. de 2022 - Suporte técnico",
    pros: "Bem estruturada, organizada, paga certinho, PLR é bom comparado com outras empresas do mesmo seguimento, o ambiente de trabalho é bem diversificado, a Simpress original é excelente empresa para se trabalhar, estudar, se graduar e crescer. Não é uma empresa que costuma mandar técnicos embora por qualquer besteira. Sempre há serviço, os técnicos não se matam de trabalhar(depende do cliente no qual eles vão te alocar é claro)",
    contra: "A compra da empresa pela HP, mudou um pouco a identidade da Simpress, trazendo \"supervisores e líderes\" que não entendem oque é escopo de trabalho, muitos deles tem muitos anos de casa e são pseudos Líderes, chefes e Técnicos porque não se graduarão para exercer esses cargos, acabam gerando bastante conflitos. Salario também é um pouco abaixo do mercado, porem com a compra da empresa pela HP, isso está sendo melhorado."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "20 de jan. de 2022 - Funcionário confidencial",
    pros: "Talvez vivendo um momento de mudanças.",
    contra: "Empresa com aspecto muito tradicional, tem muitas dificuldades de mudança e um ambiente complicado de trabalho."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "29 de dez. de 2021 - Analista de Suporte Jr",
    pros: "Aprendizado, cultura, valores e respeito",
    contra: "Por hora, nada a declarar ."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "28 de dez. de 2021 - Supervisor",
    pros: "Me sinto com se fosse o dono da Simpress, tenho muito orgulho de fazer parte e participar do seu crescimento. Me sinto feliz e motivado em levantar todos os dias para trabalhar e cumprir meu papel nessa grande empresa. Satisfação total em ser um #simlove",
    contra: "Demora na entrega de toner e alteração de endereço"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "28 de dez. de 2021 - Analista Planejamento Demanda",
    pros: "Empresa estável, Mercado com ótima rentabilidade, somos tratados bem dentro do ambiente de trabalho, ética, salário compatível,",
    contra: "alguns benefícios são pouco diversificados"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "28 de dez. de 2021 - Especialista em soluções de TI",
    pros: "Salários acima da média de mercado, ambiente corporativo acolhedor, oportunidades sólidas de crescimento e mudança de área dentro da própria empresa, acesso direto e tratamento igual para igual com os gestores.",
    contra: "Não consigo me lembrar de nada.."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "28 de dez. de 2021 - Técnico Eletrônico Júnior",
    pros: "Utilizar o aprendizado do curso técnico de automação industrial e exercer a função de técnico Eletrônico",
    contra: "como Sou novo integrante, faltou a parte técnica do treinamento ser presencial."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "20 de dez. de 2021 - Operador",
    pros: "Empresa top, chefia boa, estrutura excelente",
    contra: "Não tem oportunidade de crescimento"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "30 de dez. de 2021 - Assistente Administrativo De Vendas",
    pros: "Empresa muitoa boa, cultura organizacional muito receptiva e colaborativa. As pessoas se ajudam em prol de alcancar um objetivo.",
    contra: "Não temos muitos benefícios como funcionários, somente a PLR 2 vezes ao ano que é bem generosa, mas o VR é bem baixo, não temos VA, não temos confraternização e não somos reconhecidos pelo trabalho."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "28 de dez. de 2021 - Analista De Negócios Sênior",
    pros: "Flexibilidade, empresa com mindset de inovação e pessoas colaborativas.",
    contra: "Alguns gestores mais antigos com pensamento mais arcaico e por ser uma empresa com conceito familiar muitas decisões TOP Down."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "23 de dez. de 2021 - Técnico Residente I",
    pros: "Empresa grande e bem organizada",
    contra: "Falta de acompanhamento para o funcionário recém chegado"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "8 de dez. de 2021 - Técnico Eletrônico",
    pros: "Treinamentos, oportunidades internas, equipe dedicada é excelentes benefícios",
    contra: "Não conheço nada de contra na empresa"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "12 de jan. de 2022 - Analista",
    pros: "Paga duas vezes plr ao ano. Salário razoável. A empresa diz sempre pensar em você.",
    contra: "Fui demitido da noite para o dia, chefe muito legal, tudo muito bom, eu estava em reunião e não tinha o que reclamar, até receber uma ligação do meu chefe falando que fui demitido, e a causa seria corte de funcionário, a demissão vem da gerência, especificamente do Arruda, todos sabiam do meu potencial profissionalismo e responsabilidade, fora meus problemas financeiros e minha filha que precisa de mim, isso não levou nada em conta para a Simpress, sinto que fui chutado. Vale refeição muito baixo, e está cercado de restaurante caro, por ficar localizado na região de classe alta em Alphaville."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "14 de dez. de 2021 - Gerente De Contas",
    pros: "Salários sempre em dia e bom plr.",
    contra: "Empresa precisa melhorar os processos internos para apoio de todas as áreas."
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "14 de dez. de 2021 - Técnico De Eletrônica",
    pros: "Suporte, PLR, Universidade Simpress Lá no de Saúde, Vale Alimentação e Refeição",
    contra: "Salário baixo, Falta de estabilidade."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "27 de nov. de 2021 - Operador site Pl",
    pros: "Empresa ótima com plr, vr, vt entre outro",
    contra: "nada a dizer, empresa muito boa"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "10 de dez. de 2021 - Analista Recursos Humanos",
    pros: "Vejo que a Simpress é cia focada em resultados.",
    contra: "Nem todas as áreas e colaboradores recebem suporte para atingir os resultados esperados."
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "16 de nov. de 2021 - Assistente Administrativo",
    pros: "Empresa excelente para trabalhar, ótimos benefícios",
    contra: "Longe da minha casa, alguns Gestores não são muitos prstativos, minha opinião!"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "25 de nov. de 2021 - Funcionário confidencial",
    pros: "salario e muitos benefícios bons",
    contra: "sem possibilidade de crescimento profissional"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "25 de nov. de 2021 - Técnico Eletrônico",
    pros: "oferecem certos beneficios mas exigem muito do funcionario",
    contra: "pagam pouco e exigem muito do colaborador, horas e horas nao c"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2021 - Operador De Site Júnior",
    pros: "Ótimo lugar para trabalhar, com fácil acesso ao crescimento profissional.",
    contra: "Não tem nenhum contra para ser destacado."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "3 de nov. de 2021 - Suporte técnico",
    pros: "otima empresa, bons funcionarios, fiz varios colegas.",
    contra: "plano de carreira difícil, demora demais."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "3 de nov. de 2021 - Assistente",
    pros: "Empresa comprometida com os funcionários e ótimos benefícios.",
    contra: "Salário não é muito atrativo"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "17 de nov. de 2021 - Auxiliar Técnico De Eletrônica",
    pros: "Bons benefícios, possuía plr, e o serviço não era pesado.",
    contra: "Uniforme muito quente, e pouco auxílio para comprar calças sociais, o dinheiro saia praticamente do bolso do funcionário."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "1 de nov. de 2021 - Analista de vendas Jr",
    pros: "PLR 2 x ao ano.",
    contra: "Não tem VA. Teve no passado e tiraram esse benefício."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "5 de nov. de 2021 - Técnico Em Eletrônica",
    pros: "PLR Boa, Gestores compreensivos e lugar com bom ambiente para trabalhar.",
    contra: "salário é menor do que os concorrentes."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2021 - Assistente Pleno",
    pros: "PLR bacana por ano, e o cliente é sensacional",
    contra: "Coordenadores difíceis de lidarem , 6 anos sem aumento, e fazendo trabalho de Três, não tem reconhecimento, e não tem conversa para subir de cargo, ou pede as contas ou continua como está."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "17 de out. de 2021 - Operador De Site",
    pros: "Muitos benefícios, empresa em constante crescimento",
    contra: "Localização antiga da matriz era um pouco ruim"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de out. de 2021 - Vendedor",
    pros: "Não tem prós é excelente",
    contra: "ótimo, engajador, desafiador, muito excelente."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "9 de nov. de 2021 - Técnico Eletrônica Residente I",
    pros: "PLR 2 vezes ao ano, pagamento em dia",
    contra: "Planos de carreira não existe quando se fala em simpress; favoritismo da gestão sobre determinados colaboradores, pressão da gestão"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "9 de nov. de 2021 - Funcionário confidencial",
    pros: "Foco no negócio, espírito empreendedor",
    contra: "Oportunidades de crescimento limitadas a atuacao nacional da empresa"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "8 de nov. de 2021 - Supervisor%2FCoordenador",
    pros: "PLR, aprendizado, disponibilização da informação, tentativa e erro.",
    contra: "Baixo salário, gestão micro, excesso de controles, excesso de projeto vs capacidade de carga, implantação de advertências."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "28 de out. de 2021 - Analista De Projetos",
    pros: "Tem PRL para todos colaboradores, vale refeição ou alimentação, previdência privada para alguns cargos",
    contra: "Possibilidade de crescimento nas filiais são mais restritas que na sede"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "26 de out. de 2021 - Líder De Serviços",
    pros: "Benefícios, Capacitação,Organização, Flexibilidade, Pensamento Sistêmico",
    contra: "Salário, Valorização profissional, Plano de Carreira, Transformação Digital, Retenção de Talentos"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de out. de 2021 - Comprador",
    pros: "Estabilidade, benefícios, equipe, ambiente, boa oportunidade de aprendizado",
    contra: "Localização, acesso a restaurantes, acesso com transporte público"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "8 de out. de 2021 - Assistente Administrativo",
    pros: "Empresa com ótimos benefícios e PLR",
    contra: "Nada a declarar, empresa que recomendo em todos aspectos"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "2 de out. de 2021 - Operador De Site Júnior",
    pros: "Paga em dia, tem chance de promoções.",
    contra: "Ainda não tenho algo contra no sentido de empresa na minha experiência."
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "8 de out. de 2021 - Analista Cobranç a",
    pros: "Participação nos lucros Inserir o VA no salario por um lado foi bom",
    contra: "Convenio intermedica é ruim Pra quem atua na matriz nao tem VR e nem VA ( incoporado no salario porem aumentou o desconto) Nao tem ajuda de custo pra quem precisa de fretado (antes da pandemia) Promoçoes dependendo do setor é somente pra quem adular a gestão Perfil geral da empresa não gostam muito de pensar."
  },
  {
    date: "28 de set. de 2021 - Suporte técnico",
    contra: "Sobrecarga, desorganização interna, logística, residencia em cliente,"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "20 de out. de 2021 - Técnico",
    pros: "Uma empresa líder no mercado",
    contra: "Empresa que não valorizava os funcionários"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "20 de out. de 2021 - Customer Service Supervisor",
    pros: "Empresa grande e com benefícios atrativos",
    contra: "Remuneração incompatível com as funções"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "7 de out. de 2021 - Analista",
    pros: "Empresa sólida no mercado, transmite segurança para os colaboradores, a PLR é ótima e faz a diferença.",
    contra: "Há disparidade de salário dentro de um mesmo cargo. Promoções levam o dobro do tempo que eles alegam para os novos colaboradores. Direção prega valores que nem sempre cumpre."
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "21 de set. de 2021 - Líder De Serviços",
    pros: "Ótima empresa para se trabalhar.",
    contra: "VR muito baixo se comparando com outras empresas."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "15 de set. de 2021 - Técnico Eletrônico Residente",
    pros: "Participação nos lucros, possui plano de carreira. Vários benefícios como: VT, VA, PL, plano de saúde, odontológico etc.",
    contra: "Muito desorganizada no que se refere a implantação de um novo projeto! Avisando os funcionários sempre em cima da hora quando à a necessidade de viagens a trabalho."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "21 de ago. de 2021 - Assistente",
    pros: "Simpress a melhor empresa que já trabalhei",
    contra: "Não tenho o que reclamar"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de set. de 2021 - Assistente",
    pros: "Salário em dia, escritório agradável, pacote de benefícios aceitável.",
    contra: "Infelizmente a empresa visa mais lucro e visão de mercado. São raros os reconhecimentos voltados a todos os funcionários. Ambiente de trabalho carregado, com muita pressão por parte dos superiores. Gestão antiquada e sem inovações. Salário abaixo do mercado, utilizam o pagamento de PLR como justificativa."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "11 de ago. de 2021 - Técnico Eletrônico",
    pros: "- PLR - Supervisão Humana - Flexibilidade para organizar as Férias - Salário nunca atrasa, paga até antecipado - Ticket Bom",
    contra: "- Falta de oportunidades de crescimento para os Técnicos na filial do Nordeste - Processos Duplicados - Decisões de processos técnicos de maneira Top Down sem consultar a base, causando retrabalho em algumas atividades"
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "27 de ago. de 2021 - Líder De Serviços",
    pros: "PLR muito atrativa comparada ao mercado.",
    contra: "Sistema de cargos, convênio com faculdade."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "24 de ago. de 2021 - Analista Comercial Júnior",
    pros: "Benefícios em geral são de acordo com o mercado e a empresa paga comissão e PLR",
    contra: "Gestão pessima, principalmente da diretoria comercial e NCD, empresa parece que está nos anos 80."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "22 de ago. de 2021 - Operador De Site Júnior",
    pros: "Muitos beneficios. plano de saude, plr, seguro de vida.",
    contra: "Poucas chances de crescimento na empresa."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "17 de ago. de 2021 - Assistente Administrativo",
    pros: "salario dentro do padrao, beneficio otimo, PPR muito boa, ambiente lindo",
    contra: "sem empatia com colegas de trabalho, longe o local do trabalho, horario muito puxado"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de ago. de 2021 - Técnico Em Eletrônica",
    pros: "Empresa paga tudo em dia, tem benefícios excelentes, está num bom padrão de crescimento, em uma área em que é líder e extremamente profissional.",
    contra: "Como todo o mal de empresa grande, vai subindo o nível e entendendo o jogo, percebendo que há muita briga de egos nas mais altas posições, afetando quem está na ponta do serviço."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "27 de jul. de 2021 - Analista Suporte",
    pros: "Uma ótima empresa e super honesta",
    contra: "Poucas oportunidades e reconhecimento com os funcionários"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de jul. de 2021 - Técnico Eletrônico",
    pros: "Muito boa para se trabalhar e crescer profissionalmente.",
    contra: "Não tem nenhum contra empresa excelente."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "4 de ago. de 2021 - Auxiliar Administrativo",
    pros: "Um ambiente bom e bom trabalhadores e gentis. Fácil acesso próximo ao metrô e fácil acesso a ônibus. Salário bom. Lugar próximo ao tribunal",
    contra: "Va ruim, longe de bancos, prédio com pouca ecessibilidade, gestores muitas vezes grossos e o Rh finge que não vê péssimo benefício de saúde"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "14 de jul. de 2021 - Administrative Assistant",
    pros: "Muitos benefícios e Horário Flexível",
    contra: "Sem plano de carreira e falta de reconhecimento."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "16 de ago. de 2021 - Sales Manager",
    pros: "Salário bom, comissões agressivas, boa carteira de clientes, boa exposição para o mercado, participação de eventos de altíssimo valor agregado. Área de operações muitíssimo competente.",
    contra: "Liderança que pratica a microgestão. Qualidade de vida muito ruim. Tem a cultura de que ser workaholic é positivo. Liderança não respeita horários e nem fins de semana para comunicação com time. Salário fixo de vendedores muito baixo, o que dificulta contratar pessoas boas, de nível senior que fiquem na empresa. Altíssima rotatividade de vendedores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jul. de 2021 - Analista De Soluções Júnior",
    pros: "Sempre há oportunidade de crescimento. PLR semestral muita boa. Pagamento em dia. Apoio ao funcionário",
    contra: "Salário relativamente baixo em relação ao mercado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jul. de 2021 - Coordenador De Serviços Ao Cliente",
    pros: "Ótima empresa sempre olhando para seus funcionários",
    contra: "Nada a declarar empresa de ótima qualidade"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "8 de jul. de 2021 - Coordenador De Serviços",
    pros: "Empresa com uma energia e vibração muito envolvente. Uma busca constante de atender com excelência ao cliente externo, além de sempre estar atenta aos movimentos de mercado e crescimento de negócios. Muito ativa na atração e retenção de talentos. Tem evoluído na questão de uma gestão mais humana.",
    contra: "Em minha observação não tenho nada que venha a declarar."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "22 de jul. de 2021 - Continuous Improvement Leader",
    pros: "O cargo é ótimo para que está começando, irá interagir com diferentes linguagens e atuar na solução de bugs",
    contra: "sem uma indicação de contras no momento."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "12 de jul. de 2021 - Operador",
    pros: "Benefícios, equipe, organização, pagamento certo",
    contra: "Sem plano de carreira e salario"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "25 de jun. de 2021 - Supervisor/Coordenador",
    pros: "Empresa sólida, com valores claramente praticados e vivenciados em seu dia-a-dia. Possui políticas de não discriminação, não assédio e ações para preservar a integridade dos colaboradores. Empresa cumpre e não falha com seus compromissos com seus colaboradores e com seus clientes. Possui um bom clima organizacional e plano de carreira.",
    contra: "Atuar com foco maior em automatizar os processos."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "6 de jul. de 2021 - Analista De Compras Sênior",
    pros: "salario relativamente bom, muito aprendizado",
    contra: "alta carga de demanda de trabalho, falta de ferramenta e pessoas"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de jun. de 2021 - Enfermeira Do Trabalho",
    pros: "Salário acima do mercado, PLR, Horário.",
    contra: "Distância de algumas regiões centrais"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de jun. de 2021 - Assistente Fiscal",
    pros: "Plr Gympass Vr Plano de saúde Carga horária",
    contra: "Não há plano de carreira Não ajuda com custo de curso Não tem cesta Salários não compatíveis com o mercado Localização"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "15 de jun. de 2021 - Gerente desenvolvimento de software",
    pros: "Dinamismo, colaboração, tecnologia de ponta, inovação contínua, projetos estratégicos, metodologia ágil, oportunidade de crescimento.",
    contra: "para profissionais que não lidem bem com metas e desafios a Simpress não é o local ideal."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "26 de jun. de 2021 - Técnico Residente Júnior",
    pros: "PLR, estabilidade de se manter no cliente.",
    contra: "Salário baixo, vagas internas procurando um unicórnio, Além da matriz ficar fora de São Paulo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "24 de jun. de 2021 - Técnico eletronica",
    pros: "PLR Boa, porem os cargos maiores ganham mais, os cargos menores deveriam receber uma maior valor.",
    contra: "Deveria ter além do VR um valor de VA a mais para ajudar."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "5 de jul. de 2021 - Técnico De Eletrônica Residente I",
    pros: "Pacote de benefícios, bom relacionamento com os funcionários.",
    contra: "Até o momento não tenho."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "6 de jul. de 2021 - Técnico",
    pros: "salario adiantado ou cai no dia",
    contra: "muitas vezes o técnico vai trabalhar sem treinamento ou suporte adequados"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "2 de jul. de 2021 - Analista De Pós Vendas",
    pros: "Empresa muito séria pacotes de benéfico muito bom.",
    contra: "Empresa cresceu muito rápido, então exige um psicólogico muito forte com a pressão diária e quantidade de trabalho."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "28 de jun. de 2021 - Analista De BI",
    pros: "PLR, Bonus, Home Office, Equipe",
    contra: "Beneficios e Piso Salarial, Organização de Demandas"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "25 de jun. de 2021 - Técnico Eletrônico",
    pros: "Ambiente legal e bons realacionamentos.",
    contra: "Baixo salario e estrutura engessada"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "24 de jun. de 2021 - Analista Programador Pleno",
    pros: "Empresa muito boa de se trabalhar e paga bem na PLR",
    contra: "Não tem plano de carreira bem estruturado"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "10 de jun. de 2021 - Técnico Eletrônico",
    pros: "ambiente tranquilo, trabalho bem descontraído",
    contra: "falta de oportunidade, metas inatingíveis"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "8 de jun. de 2021 - Funcionário confidencial",
    pros: "A Simpress é uma escola e Proporciona muito aprendizado.",
    contra: "Modelo de gestão muito engessado, antigo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de mai. de 2021 - Assistente Administrativo",
    pros: "Ótima, bem organizada, pessoal receptivo.",
    contra: "Não há nada a dizer."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "4 de mai. de 2021 - Técnico Residente",
    pros: "Empresa preza pelo seus funcionários",
    contra: "Até agora nenhum algo contra"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "23 de jun. de 2021 - Técnico",
    pros: "beneficios, convenios, plano de carreira, parcerias, clientes",
    contra: "salario, distancia, plano de saúde coparticipação"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "10 de jul. de 2021 - Analista",
    pros: "Aprendizado e desenvolvimento, PLR bom",
    contra: "carga de trabalho massacrante, remuneração e benefícios abaixo do mercado"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "16 de jun. de 2021 - Técnico Eletrônica Residente I",
    pros: "Para quem não consegue outro emprego melhor, muito bom.",
    contra: "Jogam tudo para o time de serviços. Salario muito abaixo do mercado. Pouca oportunidade de crescimento."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "30 de mai. de 2021 - Técnico Electronico",
    pros: "Ótimos benefícios, flexibilidade, carreira, cultura",
    contra: "Salario abaixo do Mercado, plano de carreira não claro"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de mai. de 2021 - Técnico Eletrônico",
    pros: "Excelente PL. Bons beneficios e pagamento antecipado.",
    contra: "Sem muita oportunidade de crescimento de carreira."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "4 de mai. de 2021 - Assistente Administrativo",
    pros: "Oportunidades para desenvolvimento pessoal e profissional",
    contra: "No meu caso o que dificultava era a distância, mas agora no sistema de home office fiquei bem contente e consigo produzir bem mais."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "26 de abr. de 2021 - Técnico Residente I",
    pros: "Não atrasa salario, ou qualquer questão relacionada a finanças do funcionário",
    contra: "Poucas oportunidades de crescimento e baixos salários"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "17 de mai. de 2021 - Técnico Eletroeletrônico",
    pros: "Ótimos benefícios. Plr muito bom",
    contra: "Sem expectativa de crescimento. Só tem oportunidade quem mora na capital, quem é do interior não tem crescimento profissional."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de abr. de 2021 - Gerente Executivo",
    pros: "dinâmica, ágil, colaborativa, versátil, flexível",
    contra: "multi processos, processo sobre demanda, picos de demanda, muita intervenção manual"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "13 de mai. de 2021 - Auxilar De Produção",
    pros: "a mesma coisa empressa boa de trabalhar",
    contra: "nada contra pagamento em dia beneficios também"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "18 de mai. de 2021 - Assistente De Inteligência De Mercado",
    pros: "Clima organizacional, autonomia nas atividades e flexibilidade.",
    contra: "Salário e benefícios são inferiores à média do Mercado; rotatividade."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "3 de mai. de 2021 - Analista",
    pros: "Pessoas, benefícios, PLR, sistemas, integração",
    contra: "Pessoas muito antigas e falta de plano de carreira"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "29 de abr. de 2021 - Diretor",
    pros: "Equipe engajada e empresa preparada para perenização",
    contra: "Localização da matriz muito distante de SP"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "27 de abr. de 2021 - Técnico Eletrônico",
    pros: "Empresa que visa o bem estar dos funcionários, da condições para que os mesmo entregue um bom serviço aos clientes.",
    contra: "não tenho pontos negativos a apontar"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "27 de abr. de 2021 - Operadora de Site Júnior",
    pros: "Empresa se preocupa com o funcionário",
    contra: "Poucas oportunidades de carreira na empresa"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "5 de mai. de 2021 - Técnico De Eletrônica I",
    pros: "Pagamentos em dia, facilidade de diálogo com seus supervisores imediatos, empresa zela pelo bem estar. Excelente pacote de benefícios com PLR semestral.",
    contra: "Não tenho nada a dizer contra a empresa."
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "4 de mai. de 2021 - Gerente Comercial",
    pros: "Time engajado e muito colaborativo. Liberdade para sugerir e discutir pontos de melhoria e ideias de novos negócios. Time executivo extremamente alinhado e pronto para decidir, a COVID destacou ainda mais essa competência. Metas agressivas e que exigem muito de cada profissional ambiente descontraído.",
    contra: "salário precisa ser alinhado ao mercado"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de abr. de 2021 - Analista De Backoffice Sênior",
    pros: "Pagamentos em dia, PLR similar a de bancos, plano de carreira",
    contra: "Vale refeição/alimentação muito baixo, Baixa rotatividade nas cadeiras de gestão/diretoria, dificultando a escalada dos que vem de baixo."
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "28 de abr. de 2021 - Auxiliar Administrativo",
    pros: "Pagamentos em dia e benefícios",
    contra: "Dificuldade em subir de cargo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "12 de abr. de 2021 - Executivo",
    pros: "Time engajado, comprometido e orientado a resultados",
    contra: "Cultura com aversão a erros"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "8 de abr. de 2021 - Técnico em Eletrônica",
    pros: "bons benefícios, horário flexível, fácil interação com gestor, bom salario",
    contra: "não tenho nada a dizer contra a empresa"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "8 de abr. de 2021 - Analista de Suporte Técnico",
    pros: "Ótima CIA, ótimos benefícios, respeito as pessoas",
    contra: "Não há contras, empresa cumpre o que promete"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "18 de abr. de 2021 - Analista De Suporte Pleno",
    pros: "Benefícios razoáveis incluindo PLR Salário dentro da média para a posição (área de suporte) Recrutamento interno (oportunidades) Pagamento do salário e dos benefícios sempre dentro da data",
    contra: "Na minha posição ao menos, sem plano de carreira Sem avaliação do desempenho do colaborador Nenhum outro no âmbito empregatício (talvez em relação a operação)"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "13 de abr. de 2021 - Analista",
    pros: "Benefício de recebimento do PLR semestral",
    contra: "Empresa não possui plano de carreira e internamente há grande dificuldade de remanejamento para outras áreas."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "8 de abr. de 2021 - Analista",
    pros: "Salário compatível com o mercado.",
    contra: "Maior parte da liderança da cia é antiga, desatualizada com o mercado 2020, não possui soft skills, o que dificulta o andamento saudável dos colaboradores. Processos e valores antigos."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "24 de mar. de 2021 - Supervisor Operacional",
    pros: "Plr, vale alimentação, plano de carreira",
    contra: "Nada, nao tem, não ha, inexistente"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "24 de mar. de 2021 - Jovem Aprendiz",
    pros: "pessoas muito legais e acolhedoras",
    contra: "Salário muito abaixo da média"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "22 de mar. de 2021 - Técnico Em Eletrônica Júnior",
    pros: "Em relação a Benefícios? incríveis sem palavras",
    contra: "Infelizmente acreditava em um salario melhor, porem precisamos trabalhar e vamos lutando pra ganhar mais."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "5 de mar. de 2021 - Técnico",
    pros: "Salario, beneficios, otimos gestores, empresa que respeita o funcionario",
    contra: "Localizacao, distância, trabalho prestando servico a outra empresa"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "18 de mar. de 2021 - Funcionário confidencial",
    pros: "Empresa inclui ótimos benefícios para os colaboradores.",
    contra: "Sem plano de carreira definido para os colaboradores."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "17 de mar. de 2021 - Técnico Em Eletrônica II",
    pros: "Bons benefícios, como Gympass e PLR.",
    contra: "salário baixo para o cargo e tarefa realizada"
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "16 de mar. de 2021 - Gerente de Negócios",
    pros: "Pagamento em dia ou antecipado. Plr. Produtos competitivos, fornecem PC, celular, pagam km rodado, comissão",
    contra: "Muito processo. Muitos treinamentos e atividades extras que atrapalham o foco nas vendas"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "15 de mar. de 2021 - Operador De Site J nior",
    pros: "Tentavam ser atenciosos porém não sabem lidar com os funcionários",
    contra: "O supervisor direto que era responsável por mim, me cobrava coisas sem nunca ter feito um treinamento adequado comigo."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "11 de mar. de 2021 - Estagiário",
    pros: "paga em dia, VR VA e TICKET CAR bons",
    contra: "paga mau, sem plano de crescimento"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "12 de mar. de 2021 - Analista De Processos",
    pros: "PLR é muito boa, semestral.",
    contra: "Não valoriza o funcionário, ambiente tenso, não é descontraído, embora tenha um staff bem jovem."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de fev. de 2021 - Técnico em Eletrônica",
    pros: "Bons benefícios que a empresa oferece",
    contra: "Liderança precisa saber o que é ser líder"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "23 de fev. de 2021 - Programador Júnior",
    pros: "Funcionários bom e dispostos a ajudar.",
    contra: "Gestores ultrapassados que não pensam nos funcionários"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "22 de fev. de 2021 - Gerente De Contas",
    pros: "Benefícios são excelentes; Há um plano de carreira - a diretoria observa seu trabalho; Funcionários são cuidados;",
    contra: "Muita burocracia; Acúmulo de funções; SLA interno muito longo;"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "23 de jan. de 2021 - Funcionário confidencial",
    pros: "ótima oportunidade de se auto desenvolver.",
    contra: "Salário bem abaixo da concorrência."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de jan. de 2021 - ANALISTA DE TI",
    pros: "Empresa voltada a ideias novas de todos os funcionários e sempre focada em modernizar o seu serviço",
    contra: "Salário abaixo do esperado pelas funções exercidas"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "10 de jan. de 2021 - Coordenadora",
    pros: "Colaboração, autonomia e aprendizados em resolução de problemas",
    contra: "Alta carga de trabalho e falta de reconhecimento"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de mar. de 2021 - Community Health Nurse II",
    pros: "distancia, salario, chefia, beneficios, treinamento",
    contra: "beneficios, cesta , cursos, gestao, chefia"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de fev. de 2021 - Técnico eletronica",
    pros: "um bom aprendizado para suporte a impressoras",
    contra: "Gestores não tem reconhecimento com funcionários que lida direto com os clientes (residente), enquanto não tem nenhum problema no cliente você não é lembrando, só lembram quando surge algum problema."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de dez. de 2020 - Funcionário confidencial",
    pros: "Crescimento profissional, lider de mercado",
    contra: "Pressão por resultados. Alta cobrança"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de dez. de 2020 - Aux Administrativo/Financeiro",
    pros: "Uma empresa boa de se trabalhar e com salários em dia",
    contra: "Pouca oportunidade de crescimento em relação a planos de carreira"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de nov. de 2020 - Técnico Eletrônica Residente I",
    pros: "Possui diversos benefícios, realiza os pagamentos em dia (Até mesmo adiantado), tem muitas vagas internas.",
    contra: "Depende muito qual cliente você vai prestar os serviços para saber o dia-a-dia."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de out. de 2020 - Técnico em Eletrônica",
    pros: "Paga tudo certo e tem bons Benefícios",
    contra: "Salário abaixo da média do mercado. Dificuldade em crescimento"
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "20 de set. de 2020 - Técnico senior",
    pros: "Beneficios são muito bom , duas PLR no ano",
    contra: "Por conta dos benefício , salários muito a baixo do mercado,"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "15 de set. de 2020 - Funcionário confidencial",
    pros: "Salário pago em dia, PLR.",
    contra: "Sem plano de carreira na prática."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "31 de ago. de 2020 - Analista Recursos Humanos",
    pros: "PLR, beneficios e preocupação com saúde mental dos colaboradores.",
    contra: "Falta de plano de carreira estruturado e localidade ruim da Matriz."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de set. de 2020 - T cnico Residente I",
    pros: "presteza ao funcionário em tratar bem.",
    contra: "distância entre minha cidade e ao do meu emprego, também distancia onde os beneficios cobrem"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de jul. de 2020 - Assitente administrativo",
    pros: "ótima empresa, bons benefícios, salário compatível com o mercado.",
    contra: "Localização um pouco difícil de transporte público."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "8 de jul. de 2020 - Desenvolvedor",
    pros: "Pagamentos em dia, adicionais pagos nas datas corretas.",
    contra: "Diz que existe promoções, porém no período que estive não conheci nem um caso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "24 de nov. de 2020 - T&eacute; cnico Eletr&ocirc; nico",
    pros: "Pagamentos em dia, uma facilidade de diálogo com seus supervisores imediatos, empresa zela pelo bem estar.",
    contra: "A empresa deveria olhar melhor para os funcionários que estão em seus clientes ou que fazem os apoios, pois muitas coisas são feitas apenas para suas filiais deixando de lado o restante."
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "11 de nov. de 2020 - Técnico Eletrônico Pleno",
    pros: "Bom salário e bons benefícios",
    contra: "muitas regras e muita burocracia - expremem o funcionário até fazer suco com muitas tarefas além do seu ofício"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "6 de jul. de 2020 - Gerente De Negócios",
    pros: "Bons benefícios, boa localização, flexibilidade",
    contra: "Má gestão, gestão confusa, pouco incentivo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "27 de mar. de 2020 - Operador De Site Pleno",
    pros: "Salário em dia, bom convênio médico, VR, VT, PLR, horário.",
    contra: "Não vejo nenhum contra a apresentar no momento."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "26 de mar. de 2020 - Coordenador De Remuneração E Benefícios",
    pros: "PLR elevado; Empresa familiar; ambiente bom",
    contra: "Restaurante; Benefícios; falta de oportunidade e sem planos de carreira"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de mar. de 2020 - Técnico Em Eletrônica Residente",
    pros: "Plano de Carreira / PLR",
    contra: "Salários injustos para os residentes"
  },
  {
    pros: "Ambiente fantástico, empresa muito pontual",
    contra: "Ainda não consegui ver contras de vrdade"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "8 de jun. de 2020 - Executivo De Contas",
    pros: "bastante suporte a vendas e bonus por meta",
    contra: "muita burocracia e processos confusos"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "1 de jun. de 2020 - Tecnico De Eletrônica Júnior",
    pros: "Participação de lucros, liberdade para trabalhar , boa convivência na empresa",
    contra: "Dificuldade em crescimento, empresa focada na matriz"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "27 de mai. de 2020 - Analista De Recursos Humanos",
    pros: "Empresa dinâmica, que vem num crescimento interessante.",
    contra: "Faltam ações para pessoas. As áreas de RH não trabalham em parceria, muitas vezes."
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "26 de mai. de 2020 - Gerentebde contas",
    pros: "Etica, bons rendimentos e bom relacionamento",
    contra: "Plano de carreira, foco em lideranca, processos"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "6 de mai. de 2020 - Especialista Em Projetos",
    pros: "Empresa com oportunidade de crescimento, equipe acolhedora.",
    contra: "Localização, empresa fica em um local em Alphaville com transito intenso."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "29 de jan. de 2020 - Assistente",
    pros: "Tudo muito bom em todas trampo",
    contra: "Hora muito sobrecarregado, muito puxado"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "15 de jan. de 2020 - Operador De Site",
    pros: "Empresa flexível, com culturas sólidas e dinamismo.",
    contra: "somente uma: remuneração abaixo das expectativas."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "10 de dez. de 2019 - Analista Júnior",
    pros: "Boa PLR,pagamento em dia,salário razoável",
    contra: "Péssimo plano de carreira,Sem qualidade de vida"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de fev. de 2020 - Líder De Serviços",
    pros: "Recém remanejado. Sem muito o que avaliar.",
    contra: "Fomos remanejados para essa empresa. Dessa forma, perdemos vários benefícios."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de nov. de 2019 - Funcionário confidencial",
    pros: "Bom ambiente, bom PLR e benefícios, horários flexíveis!",
    contra: "Alguns gestores muito aquém do nível esperado, algumas áreas com falta de colaboradores, foco em parâmetros de desempenho desatualizados e não nas entregas."
  },
  {
    cargo: "Funcionário(a) atual, mais de 8 anos",
    date: "1 de fev. de 2020 - Analista De Faturamento Pleno",
    pros: "Temos benefícios como convênio, assistência odontológica, plr.. o ambiente é de rápido desenvolvimento e oferece muito aprendizado a quem estiver interessado.",
    contra: "Não temos mais vale alimentação, foi incorporado ao nosso salário, causou um aumento do desconto de ir. A gestão comete muitos erros em relação ao desenvolvimento de pessoas, muito foco em ter retorno sem estruturar o que vem antes do resultado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jan. de 2020 - Funcionário confidencial",
    pros: "Salário justo, bons beneficios, gestores que querem levar seus funcionários a níveis maiores.",
    contra: "Sem oportunidades de crescimento na capital para áreas que não sejam técnicas e/ou de campo."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "13 de dez. de 2019 - Técnico Em Eletrônica",
    pros: "Salário compatível com o mercado Benefícios satisfatório Participação de lucros duas vezes ao ano. Plano Médico Plano Odontológico Gympass Seguro de vida",
    contra: "Técnico alocado no cliente sofre muita pressão se não for uma pessoa controlada perde a paciência com vários problemas provocados pelos usuários do contrato."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de dez. de 2019 - Operador De Site",
    pros: "Benefícios,PL Saúde, PLR, PL Odonto, VT, VR",
    contra: "Baixa remuneração, Valor VR Baixo, Avaliação de desempenho baixo"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de jan. de 2020 - Consultant/Project Manager II",
    pros: "Tem bons benefícios Restaurante na empresa",
    contra: "Não tem diversidade de pessoas Cultura antiga e retrógrada"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "26 de nov. de 2019 - Analista Programador",
    pros: "Salário Benefício Oportunidade de aprendizado Autonomia nas decisões",
    contra: "Diretoria que só pensa no lucro Gerentes de TI atrasados e parados no tempo"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "13 de out. de 2019 - Técnico De Manutenção",
    pros: "Benefícios, dependendo da área o ambiente é agradável. Cursos de aprendizado on line.",
    contra: "Falta de perfil profissional ao receber feedback, exigências sem ao menos haver condições de trabalho favoráveis. Somente se exige números sem entender o funcionário. Reembolso demorado, salário abaixo do mercado, reembolso km muito abaixo do que se gasta com o veículo. Sem auxílio manutenção e aluguel pago pelo veículo só paga parte de uma prestação dependendo do modelo ou ano do veículo e sem seguro."
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "14 de dez. de 2019 - Auxiliar Técnico",
    pros: "Benefícios(plano de saúde, alimentação e refeição).",
    contra: "O salário é muito baixo para o operacional destoado dos ganhos das áreas gerenciais."
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "25 de out. de 2019 - Funcionário confidencial",
    pros: "Empresa dinâmica e atualizada, ambiente de trabalho agradável",
    contra: "no momento não tenho nada a declarar"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "28 de out. de 2019 - Funcionário confidencial",
    pros: "Networking, aprendizagem, fretado, gympass, restaurante",
    contra: "Não possui plano de carreira na prática"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "4 de out. de 2019 - Técnico Residente Júnior",
    pros: "Ambiente favorável, suporte integral para execução de qualquer atividade.",
    contra: "Clima entre funcionário e liderança constantemente tenso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de out. de 2019 - Funcionário confidencial",
    pros: "Estabilidade bom ambiente empresa inovadora",
    contra: "Salarios em algumas funções estão abaixo do mercado"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de nov. de 2019 - Analista Pleno",
    pros: "Salário bem compatível com o mercado, benefícios bons e ótimo ambiente de trabalho",
    contra: "Por enquanto nada que desabone"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "11 de nov. de 2019 - Tecnico em eletrônica residente",
    pros: "Bons benefícios como plano médico, VA, VR, PLR razoável, gympass. Treinamento bem completo.",
    contra: "O salário é muito baixo e o plano de carreira pra quem mora no interior é extremamente limitado. A empresa é bastante burocrática e muita coisa engessada que precisa modernizar. O atendimento dos funcionários do RH é muito ruim."
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "8 de out. de 2019 - Líder De Equipe",
    pros: "Oportunidades para o crescimento proficíonal dos funcionários.",
    contra: "Benefícios, aumentar o valor do VR e fornecer um vale alimentação aos funcionários."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de out. de 2019 - Funcionário confidencial",
    pros: "Salários em dia, benefícios sempre pagos em dia.",
    contra: "Muito trabalho para poucos colaboradores, salário baixo, mal gerenciado e plano de carreira zero."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de jul. de 2019 - Funcionário confidencial",
    pros: "Ótima empresa para trabalhar no ramo",
    contra: "nenhuma desvantagem ate o momento"
  },
  {
    cargo: "Funcionário(a) atual, menos de um ano",
    date: "6 de out. de 2019 - Analista De Recursos Humanos",
    pros: "Empresa com bons benefícios e bom PLR",
    contra: "A empresa cresceu, porem os gestores ainda tem mentalidade de empresa pequena. Muito imaturos. Salários abaixo do mercado."
  },
  {
    cargo: "Funcionário(a) atual, mais de 10 anos",
    date: "6 de set. de 2019 - Funcionário confidencial",
    pros: "Home Office, paga bem, paga em dia, oferece benefícios",
    contra: "Nenhuma, não há. Excelente empresa"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "5 de set. de 2019 - Funcionário confidencial",
    pros: "Participação nos Lucros, Salários e benefícios",
    contra: "Gestão de pessoas muito fraca"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de ago. de 2019 - Funcionário confidencial",
    pros: "Ótimos benéficos, bom salário, paga em dia.",
    contra: "Não há, trata-se de uma boa empresa. Não vejo desvantagens."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de ago. de 2019 - Funcionário confidencial",
    pros: "Produto, portfólio, marketing, cursos e plr",
    contra: "Empresa com diversos sistemas e áreas sem interação, sem sentimento de dono"
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "1 de ago. de 2019 - Tecnico Volante",
    pros: "Plano de carreira tanto interno quanto externo (Empresa foca no progresso do funcionário, independente se ele ficará na Simpress ou não), Benefícios, PLR",
    contra: "Salário baixo com relação a outros"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "29 de jul. de 2019 - Técnico Residente",
    pros: "Participação de Lucros e resultados, VR, VT.",
    contra: "Salário poderia ser um pouco melhor."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de set. de 2019 - Funcionário confidencial",
    pros: "Todos os benefícios são ótimos",
    contra: "Plano de carreira pra quem mora em cidades dos interior do estado não funciona"
  },
  {
    cargo: "Funcionário(a) atual, mais de 5 anos",
    date: "18 de jul. de 2019 - Líder De Serviços",
    pros: "PLR, ambiente de trabalho, benefícios muito bons",
    contra: "Aumento de salário por desempenho praticamente não existe"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "5 de jul. de 2019 - Vendedor Comercial",
    pros: "Flexivel, flexivel, flexivel, flexivel, flexivel",
    contra: "Uso do carro próprio para visitas em clientes, Baixo valor de Reembolso por KM, Baixo Salário,"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de mai. de 2019 - Técnico De Eletrônica Volante Júnior",
    pros: "Reconhecimento de trabalho, remuneração satisfatória, ótimas ferramentas de trabalho, boas expectativas de crescimento profissional............",
    contra: "Algumas vezes falha de comunicação entre diferentes setores, impactando nos prazos de atendimento, mas nada que prejudique o profissional...."
  },
  {
    cargo: "Ex-funcionário(a), mais de 5 anos",
    date: "1 de jul. de 2019 - Técnico Eletrônico",
    pros: "Flexibilidade com o funcionário, Procura constante em melhorias para o funcionário Proporciona ferramentas adequadas para o seu trabalho Possibilidade de crescimento profissional",
    contra: "Problemas todas as empresas tem portanto não quero ser injusto para com a empresa."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "12 de jul. de 2019 - Analista Programador Júnior",
    pros: "Boa empresa para iniciar no mercado de trabalho.",
    contra: "Não há plano de carreira."
  },
  {
    cargo: "Funcionário(a) atual, mais de um ano",
    date: "27 de jun. de 2019 - Técnico Em Eletrônica Residente",
    pros: "Gestores se preocupam com seus funcionários. Benefícios de acordo com mercado.",
    contra: "Salário inferior ao praticado por outras empresas do setor."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "27 de jun. de 2019 -",
    pros: "Bom aprendizado. Plr e benefícios razoáveis.",
    contra: "Falta de valorização. Metas inalcançáveis para não pagar o teto do plr. Vale coxinha de VR. Só cobram o ônus de ser subsidiária Hp. Porém o bônus mesmo nunca será igual ao que a Hp oferece"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "28 de jun. de 2019 - Funcionário confidencial",
    pros: "Plr, benefícios, flexibilidade, conhecimento",
    contra: "Salário um pouco baixo, mas compensa com os benefícios"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de mai. de 2019 - Técnico De Suporte Júnior",
    pros: "Tudo é ótimo como um todo desde, liberdade de trabalho, horários flexíveis, ótimo convenio médico, restaurante com churrascaria no local. Participação dos lucos da empresa, Benefício flexível.",
    contra: "Salario é um pouco a baixo do praticado pela classe do cargo. Não temos uma área de descanso para a pausa a pós o almoço. Nem tudo que propomos de melhoria para as áreas é escutado e praticado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de mai. de 2019 - Analista De Negócios Digitais",
    pros: "As pessoas são acessíveis e colaborativas. Os projetos são desafiadores e sempre inovadores. Ambiente agradável e sofisticado. Oportunidade continua de aprendizado.",
    contra: "Conflito de interesse entre as diretorias da Cia, alguns gestores são resistentes a mudança de mindset inovador. Empresa ainda reluta muito para mudança da cultura familiar."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de mai. de 2019 - Analista De Projetos Júnior",
    pros: "Oportunidade de carreira, ao longo dos meus quase 8 anos de empresa, tive a oportunidade de me movimentar por 3 vezes, atuando em áreas diferentes.",
    contra: "Locomoção, a localidades é um pouco distante, percebo que essa é a \"reclamação\" da maioria, e o trajeto dos fretados disponíveis não atende da forma que gostaríamos, dificulta os acesso fazendo com que a grande maioria tenha que pegar outros ônibus até chegar ao destino."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de mai. de 2019 - Técnico Eletrônico Residente",
    pros: "gratificações e ambiente de trabalho........................................................................................................................................",
    contra: "falta de oportunidades para crescimento..........................................................................................................................."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de mai. de 2019 - Técnico De Eletrônica Residente I",
    pros: "Benefícios e a PL. A empresa possuí um site com conteúdo de cursos técnicos e de áreas estratégicas do negócio que agregam conhecimento e geram certificados.",
    contra: "Salário baixo e pouca oportunidade de crescimento. O plano de saúde que era bom foi alterado para outra operadora que tem pouco alcance no Rio de Janeiro."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "5 de mai. de 2019 - Analista Contábil Sênior",
    pros: "Beneficios e PLR (semestral ) são excelentes mas o salário é médio em comparação com outras empresas. Empresa reconhecida no mercado ...............",
    contra: "Diretoria conservadora e machista RH muito bagunçado sem controle e sem propósito de RH........................... ......................................................................"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de abr. de 2019 - Assistente Fiscal",
    pros: "A simpress oferece bons benefícios incluindo o PLR e também é um ambiente agradável de se trabalhar. Possui salários equiparados ao mercado de trabalho.",
    contra: "A empresa não possui plano de carreira, então algumas pessoas acabam ficando na mesma função por muitos anos. O convênio agora é da Intermédica o que caiu um pouco o nível comparado ao que tínhamos."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de abr. de 2019 - Operador Júnior",
    pros: "Oportunidade de crescimento e desenvolvimento profissional. Trabalho em equipe, apoio dos departentos, apoio de líderes e gestores. Oportunidade de adquirir mais conhecimento e aprimoramento.",
    contra: "Nao temos descontos em faculdades. Gostaria que tivéssemos auxílio creche ou escola para funcionários com filhos. Fora isso acho tudo perfeito."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de abr. de 2019 - Analista De Sistemas Delphi",
    pros: "Flexibilidade e uma excelente oportunidade de crescimento, pois a empresa nos dá sempre a oportunidade de crescer e desenvolver melhorias.",
    contra: "Plano de carreira demora um pouco para que possamos a concorrer a outra vaga ou outra função em áreas diferente na empresa, mais no geral é muito bom."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de mai. de 2019 - Técnico Em Eletrônico Residente I",
    pros: "Pagamentos sempre em dia, bons benefícios. 1",
    contra: "Muita responsabilidade para pouca remuneração, além do mais sempre vão te tirando do seu escopo de trabalho te aumentando o trabalho e seu salario nunca aumenta com o único intuito de economia."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "13 de abr. de 2019 - Líder De Serviços",
    pros: "Pagam em dia e a empresa é líder de mercado o que é bom para o currículo, mas não tem nenhum diferencial. Fingem ser o que não são. Decepcionante.",
    contra: "Empresa extremamente burocrática, tudo demora, o colaborador não tem nenhuma autônomo, modelo de gestão completamento vertical. Falta incentivo aos funcionários."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de abr. de 2019 -",
    pros: "Restaurante no prédio, fretado, boa infraestrutura. Benefícios na média do mercado. Um lugar legal pra quem busca o primeiro emprego, aprendizes, estagiários, etc. Cuidem das pessoas como vocês estão cuidando do visual da empresa.",
    contra: "Não há absolutamente nenhum plano de carreira, nem mesmo simbólico. Não existe promoção, em lugar disso, os funcionários procuram ir para outras áreas. Não há distinção dos colaboradores por experiência e nem por conhecimento. Não existe plano de cargos e salários, nem adequação. Os únicos que comeram o faturamento da empresa são os acionistas e os funcionários com cargo acima de coordenador. O restante é encarado como 'massa', 'povão', inclusive com piadinhas entre os corredores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2019 - Almoxarife",
    pros: "Alguns benefícios que podem agradar os funcionários, horários que é o horário comercial e não trabalham aos sábados sendo desse maneira até atraindo quem se candidata as possíveis vagas .",
    contra: "Falta de profissionalismo na hora de oferecer a quem possa exercer as oportunidades vista , então acabam dando oportunidades erradamente no contesto geral deixando funcionários insatisfeito ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de fev. de 2019 - Auxiliar Administrativo",
    pros: "Empresa muito boa, pagamento e benefícios sempre em dia, plano de saúde, plano odontológico, vale refeição, vale transporte participacao dos lucros (plr)",
    contra: "Empresa sem plano de carreira, dificultando o crescimento profissional dentro da mesma, só é possível crescer dentro da companhia quando um colaborar acima sobe também (formulando uma espécie de pirâmide) ou por demissão do mesmo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "19 de fev. de 2019 - Técnico Em Suporte Técnico Júnior",
    pros: "Tem Plr e não atrasa o pagamento. Bom ambiente de trabalho. Ótimo prestador de serviço na área líder de outsorcing. A empresa possui plano de saúde.",
    contra: "Empresa de pouco crescimento profissional exigente, porém não dá oportunidade de crescimento para seus colaboradores em todas as áreas pra crescer alguém tem que ser mandado embora."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de jan. de 2019 - Operador De Site Júnior",
    pros: "Empresa não atrasa salário e possui PLR.",
    contra: "Funcionário sofre com a ausência de gestão. Sem valorização e sem plano de carreira."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de mar. de 2019 - Aprendiz Administrativo",
    pros: "Todos os colaboradores agem de forma sinergética, fazendo com que todos os resultados da empresa saia como os conformes e com muita qualidade.",
    contra: "Em particular, a forma que os outros colaboradores lidam entre si não é muito boa, visto que alguns cargos não são efetuados como conforme..."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "13 de abr. de 2019 - Gerente",
    pros: "Pessoas muito motivadas e com vontade de crescer, depois de se tornar empresa do grupo HP teve alguma evolução e melhorou um pouco em alguns sentidos.",
    contra: "Empresa não pensa em evolução, é muito burocrática em todos os seus processos, não investe em tecnologia, só pensa em reduzir custos e tem péssima visão da necessidade dos funcionários para realizar um trabalho melhor."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "12 de mar. de 2019 - Técnico Em Eletrônica I",
    pros: "Salario em dia, PLR Ótima, ajuda a cobrir despesas. Plano de saúde/odontologico e VR bons, o VR poderia ser maior é de R$19,90, porém é bom.",
    contra: "Plano de carreira informado é totalmente ilusório, os gestores não liberam os técnicos para cargos dentro da empresa pois precisam deles. É uma empresa em que se tem muita lábia, gestor e supervisor sempre se aproveitando. Local da Matriz de difícil acesso."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "5 de fev. de 2019 - Técnico Residente I",
    pros: "PL, beneficios, muito interessante para quem é novo e esta começando no mercado de trabalho, se tiver paciência e perfil, oportunidades vão aparecer mas demoram.",
    contra: "Salário inicial baixo, pouca flexibilização de horário, cobrança excessiva em cima de temas pouco importantes, empresa ruim para quem ja tem mais de 30 anos e entrar como técnico residente"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de jan. de 2019 - Técnico Em Eletrônica Júnior",
    pros: "Excelentes treinamentos e boa remuneração sempre em dia, ótimos benefícios, inclusive benefícios preventivos...planos odontológicos, plano de saúde, plano para academia...universidade, auxílio educação.",
    contra: "Nada que mereça ser destacado."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "7 de fev. de 2019 - Técnico Em Implantação",
    pros: "Aprendizado e contato com clientes. Cliente são empresas grandes e bem conhecidas. A Simpress não atrasa salário e paga KM para técnicos volantes. Também é possível pegar carro da empresa",
    contra: "Se tiver azar e pegar um gerente ruim, você vai sofrer. Alguns querem controlar tudo o que você faz. Não sabem conversar com pessoas, falta a parte humana para conversar com funcionários. Péssimo"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "6 de fev. de 2019 - Assistente De Transportes",
    pros: "Benefícios como v.a, gympass, vr, convenio médicos, odontológicos e plr que e distribuído conforme a performasse duas vezes ao ano , ótimo valor .",
    contra: "Gerencia e salario ruins, plano de carreira, horário de trabalho, excesso de tarefas, localização ruin, cultura ruim, equipe de trabalho estruída a não ser unida"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "16 de jan. de 2019 - Vendedor Interno",
    pros: "Empresa boa, bons benefícios e comissão.",
    contra: "Péssima gestão da coordenação comercial, sem nenhum plano de carreira."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "14 de jan. de 2019 - Analista De Backoffice Júnior",
    pros: "Bons benefícios, salário compatível com o mercado, horário flexível, gestores bons, empresa de médio porte que soube crescer e aproveitar o mercado.",
    contra: "Localização, Santana de Parnaíba, sem fretado. Mesas e cadeiras velhas e ruins. Divisão de setores feitos com móveis velhos e divisão de setores mal feita."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de jan. de 2019 - Operador De Site Pleno",
    pros: "PLR Plano de Saúde Auxilio Academia Plano Odontológico Ticket Restaurante Baixa pressão. Seguro de vida Descontos em empresas conveniadas...",
    contra: "Muitos descontos. Falta de gestão. Falta de comunicação gestão colaborador. Falta de oportunidade de carreira. Carreira fica estagnada sem opções de melhoria."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de dez. de 2018 - Técnico Em Eletrônica Residente L",
    pros: "Benefícios, qualidade de trabalho, comprometimento dos supervisores e líderes. Não atrasa pagamentos de salários e política de PLR bastante coerente.",
    contra: "Falta de oportunidade de crescimento, área técnica desfavorecida e desmotivada, salário congelado na medida que a empresa cresce linearmente e os funcionários, principalmente da área técnica continua congelado. Sistema de gestão de pessoas inexistente, gestores se auto promovendo no trabalho coletivo dos técnicos e equipes afins."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "18 de dez. de 2018 - Auxiliar Administrativo",
    pros: "Pessoas dispostas a ensina, ambiente harmonioso, muito trabalho porem muito companheirismo tb, empresa oferece convênio e vr, em datas comemorativas sempre tem atividades diferentes.",
    contra: "Muito trabalho, alguns lideres não motivam o funcionário a crescer, mas só alguns departamentos são assim, empresa agora se localiza em Santana de Parnaiba o que fica muito distante."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de dez. de 2018 - Analista De Marketing",
    pros: "Remuneração sempre em dia, muitas oportunidades para novos colaboradores /cargos iniciais, grade de benefícios atraente, PLR com distribuição semestral, abertura das chefias para expor opiniões e soluções.",
    contra: "Plano de carreira limitado para cargos de nível médio e/ou avançado, quadro de funcionários reduzido, com sobrecarga em alguns departamentos."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de nov. de 2018 - Técnico Em Eletrônica Residente",
    pros: "Otimos beneficios, empresa organizada, valoriza o funcionário, plano de carreira bem estruturado, treinamentos periodicos, gestores acessiveis.",
    contra: "Por ter processos bem estruturados, as vezes o contato com certas areas da empresa (RH em especial), demasiada demanda em cima dos tecnicos volantes."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "24 de out. de 2018 - Analista De Backoffice Júnior",
    pros: "Recontratação de antigos funcionários. A empresa fornece a oportunidade de um antigo colaborador poder retornar a empresa. Nao necessáriamente no mesmo cargo.",
    contra: "Infelizmente é muito difícil conseguir promoção no departamento que se está ou mudar de departamento. Não temos retorno do RH como feedback para apontar melhorias necessárias."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "3 de dez. de 2018 - Operador De Site Júnior",
    pros: "O tratamento da empresa para com os funcionários é excelente, desde gestores até supervisores. Com relação a pagamento, tudo sempre feito corretamente e na data.",
    contra: "A empresa possui um plano de carreira bem interessante, porém, para quem não trabalha em alguma das sedes (sp, rj etc) não tem chance nenhuma de ascender dentro da empresa."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de out. de 2018 - Analista De Sistemas Pleno",
    pros: "Ambiente agradável de se trabalhar. Key users que dominam os processos da empresa e facilitam a especificação e desenvolvimento dos projetos em sua maioria.",
    contra: "Gestão da área de TI é amarrada e mais voltada a gestão de culpa e cronograma do que a gestão da qualidade do trabalho e da qualidade de vida de seus colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "3 de out. de 2018 - Técnico Eletrônico Júnior",
    pros: "Paga salario em dias nunca atrasou salário fornece curso apenas on-line para colaboradores de outro estado e nada mais a acrescentar. Apenas isso.",
    contra: "Atrasa reembolso paga mal aluguel do veículo paga mal pelo km rodado também atrasa o km depois de 30 dias rodados prtelam por mais 20 dias não a diálogo com funcionários em questão de melhoria. Mal qualidade de vida pra quem trabalha no campo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de ago. de 2018 - Operador De Site Júnior",
    pros: "Trabalhar em equipe, boa logística, organização excelente pl excelente, horário normal clientes muitos bem supervisores e líderes organizados e bem em matéria de tratar funcionário",
    contra: "O único ponto negativo é a compensação de horas é a reunião trimestral, é os baixos salários bem menor que o piso trabalhista e a dificuldade de se comunicar com a parte que libera consumíveis para empresa"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de ago. de 2018 - Auxiliar De Serviços Gerais/Auxiliar De Conferente",
    pros: "E uma empresa boa para trabalhar,tem plano de carreira, em pouco tempo dependendo do desempenho ha chances de crescimento profissional,bons benefícios,paga os salários e benefícios em dias, ótimo ambiente de trabalho,",
    contra: "O salário é abaixo da media,em relação aos mesmos cargos de outra empresa,tem unidades que ficam difícil o acesso e não disponibilizam fretados(só uma unidade que tem.),é muito alto as taxas de cooparticipação do convenio."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "20 de ago. de 2018 - Técnico Em Eletrônica I",
    pros: "Pagamento em dia, disponibilidade de cursos, abertura para escolha da data das férias, técnico trabalha de acordo com o horário do cliente..",
    contra: "Falta de oportunidade de crescimento, área técnica desfavorecida e desmotivada, salário congelado na medida que a empresa cresce linearmente e os funcionários, principalmente da área técnica continua congelado. Sistema de gestão de pessoas inexistente, gestores se auto promovendo no trabalho coletivo dos técnicos e equipes afins."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "8 de ago. de 2018 - Aprendiz",
    pros: "Benefícios e ambiente de trabalho, lugar bem flexível, não há de se importar com vestimenta nem estilo da pessoa, não interessa - lhe faculdade ou algo assim.",
    contra: "Empresa muito interessante, mas com uma política de pessoas e gestão de carreiras ainda carente, sem visão, e sem planos de carreiras, pessoas paradas no mesmo lugar mais de 8 anos."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "2 de ago. de 2018 - Analista",
    pros: "Com a chegada da HP, começa se a modelar uma nova cultura, trazendo pessoas com mente mais aberta, com foco em pessoas que deem resultados. No mais a PLR.",
    contra: "Cultura de empresa familiar, todas decisões centralizadas no presidente, escritório antigo sem mobiliário adequado, sem limpeza adequada, facilities que não funciona."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de jun. de 2018 - Técnico Em Eletrônica Residente L",
    pros: "Muitos de seus técnicos são grandes profissionais que ajudam um ao outro nas piores das situações, compartilhando conhecimento e descobrindo novas formas de ser um melhor profissional juntos.",
    contra: "Salário muito baixo, empresa muito exigente e injeçada que em muitas situações se aproveita da boa vontade dos funcionários e nem os recompensa por isso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de mai. de 2018 -",
    pros: "PLR, carreira, liberdade para criar, emitir opiniões, desenvolver melhorias. Chefias, processos bem estruturados. empresa líder no segmento e busca sempre inovar.",
    contra: "Não há. Os pontos acima resumem bem o que é a empresa. Não vejo pontos negativos como em toda empresa há possibilidades de melhorias, porém não carecem um destaque."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de out. de 2018 - Operador De Site Júnior",
    pros: "* Maioria dos clientes não trabalha final de semana. * Simpress não tem problemas com atraso de salário. * Simpress é organizada com pedido de material e manutenção das máquinas.",
    contra: "* A demora para o crescimento dentro da empresa é bem considerável. * Não trabalha com sistema de banco de horas. * A empresa tem uma política de não pagar horas extras, só se faz hora extra em ultima instância e com muita burocracia. * Não tem uma boa política de treinamento para os operadores."
  },
  {
    cargo: "Ex-funcionário(a), mais de 4 anos",
    date: "16 de mai. de 2018 - Analista De Importação Pleno",
    pros: "Empresa líder de seu segmento. Existe uma certa liberdade e autonomia para desempenhar o trabalho. Salário um pouco abaixo da média de mercado, compensado via PLR semestralmente. Benefícios evoluem ao longo do tempo,incentivando o colaborador a ficar mais tempo na empresa.",
    contra: "Falta clara de plano de carreira. O modelo de gestão de pessoas não é flexível e a tendência é que para crescer na empresa, você precisa esperar alguém que esteja acima de você sair da empresa, seja por razões pessoais, ou por arrumar algum outro trabalho ou mesmo ser demitida. Uma flexibilização da gestão de pessoas, incentivo à mudanças de carreiras e de departamentos é bem vinda, mas não é a solução definitiva, pois depois de algum tempo o trabalhador que se entrega pela empresa espera uma contrapartida, ou seja, um aumento salarial que não seja medíocre."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de abr. de 2018 - Operador De Site Pleno",
    pros: "estabilidade e oportunidade de crescimento, plano de carreira, um bom ambiente para trabalhar, empresa muito pontual, quase todos os meses o pagamento chega a cair antes da data prevista",
    contra: "salario um pouco baixo pra categoria, poderia ser um pouco melhor, porem a PLR É MUITO BOA, o que acaba compensando um pouco o salário,......"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "23 de abr. de 2018 - Gerente De Contas I",
    pros: "Ótima localização próximo a marginal Tietê ponte do Piqueri. Oportunidades de crescimento desde que tenha bom relacionamento com diretores e presidente.",
    contra: "Alta rotatividade de profissionais da área comercial gerando assim insegurança. Difícil acesso aos diretores e demais cargos executivos. Salário fixo baixo em relação do mercado para quem entra como GC I."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2018 - Técnico Eletrônico",
    pros: "Confiança entre gestor e funcionário, ambiente saudável e agradável, diversos clientes para trabalhar, segue as regras da ISO14001 e 9001, empresa multinacional.",
    contra: "Muita exigência de cursos para crescimento, pouco recrutamento interno, comunicação complicada entre setores administrativos e de apoio. dificuldade de observar as necessidades de cada cliente"
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "3 de abr. de 2018 - Técnico Em Eletrônica",
    pros: "Empresa reconhecida no mercado. Somente isso",
    contra: "Má gestão com os funcionários, falta de incentivo, se importa apenas com o cliente, salários baixos em todas as funções"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de mai. de 2018 -",
    pros: "Transparencia, ambiente de trabalho bom, espaço para o desenvolvimento. A empresa proporciona vários programas de desenvolvimento e valorização das pessoas.",
    contra: "Infraestrutura das filiais é muito deficitária. o novo sistema de telefonia da sede nova não é bom e tem muita instabilidade. No geral são pontos negativos muito simples de serem resolvidos."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "30 de abr. de 2018 - Jovem Aprendiz",
    pros: "A empresa conta com uma ótima localização e vários ramos em que se pode aprender muito e assim evoluir. Também conta com ótimos benefícios e ótimos planos de carreira.",
    contra: "A empresa podia melhorar na forma de avaliar seus funcionários, pois acaba perdendo talentos sem necessidade. Devia motivar mais os seus colaboradores."
  },
  {
    cargo: "Ex-funcionário(a), mais de 10 anos",
    date: "16 de abr. de 2018 - Gerente De Infraestrutura",
    pros: "Reconhecimento por meritocracia, bom pacote de benefícios e PLR, trabalho em grupo que possibilita sinergia entre as áreas",
    contra: "Gestão distante da operação trazendo excesso de prioridades que prejudicam o foco das atividades"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de abr. de 2018 - Técnico De Suporte Júnior",
    pros: "É uma empresa organizada, paga nas datas corretas sem atraso, o ambiente é tranquilo e tem uma estrutura boa no geral para acomodar os colaboradores. A PLR é ótima.",
    contra: "O salário poderia ser um pouco melhor devido ao fato de a empresa ser a líder do mercado e ter um faturamento alto. Porém a PLR compensa um pouco mas não tira o fato de que o salário poderia ser melhor."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de abr. de 2018 - Técnico Em Eletrônico Residente I",
    pros: "estabilidade e oportunidade de crescimento, plano de carreira, um bom ambiente para trabalhar, empresa muito pontual, quase todos os meses o pagamento chega a cair antes da data prevista.",
    contra: "salario um pouco baixo pra categoria, poderia ser um pouco melhor, porem a PLR É MUITO BOA, o que acaba compensando um pouco o salário,......"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de mar. de 2018 - Jovem Aprendiz Administrativo",
    pros: "Colaboradores eficientes,grandes chances de aprendizagem,restaurante em perfeito estado um benefício que vale a pena ser descontado,gestores que visão o melhor da empresa.",
    contra: "Uma empresa que deveria saber mais de seu colaborador,visando promove-lo futuramente para que assim o colaborador esteja satisfeito com a área que atua."
  },
  {
    cargo: "Ex-funcionário(a), mais de 8 anos",
    date: "28 de fev. de 2018 -",
    pros: "Oportunidades de crescimento são reais e oferecidas de acordo com o desempenho obtido. O clima organizacional entre os colaboradores é algo relativamente saudável",
    contra: "Má gestão na área de treinamento, pouco ou nenhum conhecimento relevante sobre as atividades desempenhadas pelos instrutores e o que realmente agrega valor real ao time. Falta visão sistêmica sobre as atividades desempenhadas na área"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de jan. de 2018 - Técnico Eletrônico Residente",
    pros: "A empresa realiza os pagamentos antes do prazo, nunca atrasou e também tem o PLR que é calculado pelo rendimento da equipe., tem treinamento especifico para os técnicos.",
    contra: "O salário é bem abaixo do praticado em outras empresas, o plano de carreira é muito marketing, diferentemente do explicado no site é muito difícil subir de cargo e receber feedback, a menos que você ficar cobrando o tempo todo."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "19 de jan. de 2018 - Assistente",
    pros: "Muito trabalho, acúmulo de serviço de um dia para o outro, o sistema que foi implantado no qual não dá flexibilidade de deslocamento fazendo com que a gente ande mais",
    contra: "Muito trabalho, acúmulo de serviço de um dia para o outro, o sistema que foi implantado no qual não dá flexibilidade de deslocamento fazendo com que a gente ande mais. Minha equipe, prédio onde se localiza, os benefícios, as pessoas que trabalham lá, o tipo de serviço que gosto muito de fazer, a flexibilidade de horário"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de abr. de 2018 - Técnico Eletrônico Júnior",
    pros: "as pessoas somente,chefia totalmente incompetente feedback é importante em diversas situações corporativas, seja para elogiar um trabalho bem desempenhado ou para ajudar o funcionário que esteja com dificuldades para realizar suas tarefas com excelência. Se o chefe prefere dar broncas quando o colaborador comete um erro ou omite uma mensagem positiva de ‘bom trabalho’ quando ele cumpriu o que foi delegado, há grandes chances do funcionário se desmotivar ou se frustrar.",
    contra: "salario baixo e sem chance de crescimento isso no laboratório Além do feedback, também é importante valorizar e reconhecer o trabalho dos seus colaboradores, uma vez que isso causa um bem-estar direto e maior satisfação pessoal e profissional. As principais formas de reconhecer seus colaboradores são: bônus no salário, premiações, voucher de experiências, efetivação e planos de crescimento na empresa."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "5 de mar. de 2018 - Operador De Site Júnior",
    pros: "Fornecer Ticket Restaurante, Convênio Odontológico, Convênio Médico (mesmo tendo acesso na minha vida, tendo que viajar para outra cidade para fazer exames), PLR, alguns descontos de faculdades (benefício para quem mora em São Paulo).",
    contra: "Não ter contato com os outros funcionários da Simpress que ficam na matriz, o salário estagnado, festas da empresa sendo realizado na matriz, mas nenhum auxilio para pegar os funcionários de outras cidades para participarem."
  },
  {
    pros: "Empresa boa para quem procura estabilidade e inicio de carreira, empresa com \"jeito familiar\", procura sempre reter talentos, pelo menos na área de TI.",
    contra: "Empresa está muita atrasada em tecnologia, está começando a aderir as tecnologias já existentes no mercado, sistemas necessitam de novos processos inovadores, porém, a hierarquia não colabora."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de fev. de 2018 - Analista De Treinamento Júnior",
    pros: "Uma proposta de mercado diferente para o CLIENTE. Boas idéias quando se fala de inovação em serviços e produtos para o CLIENTE. Foco total nos números e resultados.",
    contra: "Focado somente em resultados e zero em desenvolvimento de pessoas. Não trabalham o motivacional, salário não compatível com o mercado, inovação só pro cliente, inovação dentro da empresa é inexistente. Estrutura de trabalho, ferramentas, softwares para o trabalhador, extremamente precários."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "8 de fev. de 2018 - Líder De Equipe",
    pros: "Ascensão profissional (Plano de Carreira); Ambiente de trabalho descontraído; Excelente relação interpessoal com os colaboradores. Oportunidades de cursos correlatos à área de interesse.",
    contra: "Exige-se muita responsabilidade do colaborador para obter um salário abaixo de suas funções e atribuições. Precisam investir em mais palestras motivacionais."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "17 de fev. de 2018 - Assistente De Prospecção",
    contra: "O sálario é extremamente baixo para todas as áreas, empresa mostra de forma ilusória a questão de planos de carreira, reconhecimento é baseado apenas em números caso você não os atinja você é descartado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de mai. de 2016 - Operador De Site Júnior",
    pros: "Ótima empresa para começar carreira, empresa de estabilidade ao funcionário. Comprometida com a entrega do trabalho, com a situação do funcionário e do clientr",
    contra: "Como toda empresa em ramo internacional agora após se tornar subsidiária da Samsung, traz uma nova mudança e correria pra arrumar a casa em um certo período de tempo curto"
  },
  {
    cargo: "Ex-funcionário(a), mais de 3 anos",
    date: "9 de mai. de 2016 - Técnico Eletrônico",
    pros: "Boa Aprendizagem e benefícios, ante de ser comprada pela samsung valorizava mais os funcionários, empresa aberta ao diálogo e para bom aprendizado",
    contra: "Pouco valor do funcionários num todo, plano de carreira mal articulado, vagas não são abertas a todos os funcionários e sem evolução para outras áreas"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de abr. de 2016 - Analista De Sistemas Sênior",
    pros: "Ambiente bom para trabalhar, produtos sempre invoadores constante mudanças e constante aprendizado, disponibilidades de treinamentos online para as ferramentas da empresa.",
    contra: "Muitos cargos de chefia sem conhecimento assíduo dos processos, causando impacto na operação, muitos acabam apenas colocando o nome nas atividades entregues por equipes remotas."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de abr. de 2016 - Operador De Site",
    pros: "Ótima empresa para trabalho, pensa no funcionário, dedicada no que faz, agradar o cliente é a nossa primeira tarefa, trabalha em equipe sem mais delongas",
    contra: "Não vejo como ponto negativo, como qualquer empresa ela exige muito do funcionário, onde isso mostra que podemos fazer cada vez mais e melhor."
  },
  {
    cargo: "Ex-funcionário(a), mais de 10 anos",
    date: "28 de mar. de 2016 - Coordenador",
    pros: "A empresa possuía um bom pacote de remuneração. Trabalha fortemente a melhoria contínua. Esta aberta a propostas de mudanças nos processos. Foi comprada pela Samsung há um ano e há possibilidade de surgirem oportunidades fora do Brasil.",
    contra: "A matriz está localizada em Santana de Parnaíba e o trânsito no local é bem pesado, o que pode significar em alguns dias, gastar 1h e 30min só para chegar na rodovia Castelo Branco. A filial da Lapa está em uma região que frequentemente alaga. É necessário tomar cuidado com o carro. O plano de remuneração era excelente e após a compra pela Samsung ele tem mudado. É importante checar se não foi muito reduzido. No nível de gerência e coordenação a pressão é bem grande."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "11 de mar. de 2016 - Operador De Site",
    pros: "Empresa flexível nos horários. Técnicos competentes para realização de serviço , realizando sempre dentro do prazo da SLA, com alto conhecimento dos equipamentos , apesar de alguns darem muitos problemas .",
    contra: "Muitas cobranças , liders despreparados. Esforços repetitivos causando LER. Benefícios e salários com atraso de pagamento. E demandas de trabalhos distantes"
  },
  {
    cargo: "Ex-funcionário(a), mais de 6 anos",
    date: "29 de jan. de 2016 - Coordenador De Desenvolvimento",
    pros: "Remuneração adequada parar a função, sempre novos e bons desafios. Possibilidade de formar uma boa equipe.",
    contra: "O clima organizacional não é dos melhores, promessas e apena promessas de promoções. Gerenciamento por coflito"
  },
  {
    cargo: "Ex-funcionário(a), mais de 10 anos",
    date: "2 de fev. de 2016 - Coordenador De Vendas/De Administração De Vendas/De Faturamento",
    pros: "Até 2014, os gestores tinham muita autonomia e eram envolvidos em diversos projetos e portanto aprendia-se e desenvolvia-se muito. Era um excelente ambiente para se desenvolver.Possuía um excelente pacote de remuneração. Até 2015 foi possível os gestores receberem por ano até 5 salários de Participação nos lucros. Os gestores possuem um bom plano de saúde através da Amil. Diversos profissionais fizeram carreira na empresa. É possível mudar de área quando surgem oportunidades. As decisões na empresa eram bastante ágeis. Em 2015 a empresa foi comprada pela Samsung e portanto há possibilidade de surgiram oportunidades em outros países.",
    contra: "Algumas filiais de São Paulo, ficam muito mau localizadas e portanto é necessário se informar em qual delas você irá trabalhar. Há uma unidade no bairro da Lapa que está bem localizada, porém é uma região que as vezes alaga e portanto deve-se tomar cuidado onde estacionar o carro. Existem duas unidades em Santana do Parnaíba e o trânsito na região é muito ruim. Em alguns dias perde-se até 2h para se chegar à Castelo Branco.A Empresa foi comprada pela Samsung no início de 2015 e com isto os gestores perderam um pouco da autonomia, a pressão aumentou bastante e a jornada de trabalho com bastante frequência e longa. Às vezes invade o fim de semana. O inglês passou a ser bastante utilizado. O pacote de remuneração está sendo revisto, portanto é necessário checar se os ganhos do passado continuam sendo possíveis."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de fev. de 2016 - Analista De Crédito E Cobranca",
    pros: "Oportunidade de conhecimento, devido a empresa ter clientes de vários segmentos, também por ser uma empresa, que é muito rica em processos diversificado.",
    contra: "Dificuldade de reconhecimento do trabalho efetuado e nas tarefas executadas, acredito que elogios devam ser sim considerados, muita pressão."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de fev. de 2016 - Analista De Inteligência De Mercado",
    pros: "Empresa recém comprada pela Samsung. Boas oportunidades de crescimento profissional, se souber aproveitá-las. Algumas gestões oferecem boas oportunidades de destaque na empresa e não há um ambiente competitivo no sentido negativo.",
    contra: "RH muito atrasado. A empresa é muito presa ao ambiente físico e não há a possibilidade de fazer home office ou ter horários flexíveis. Nos pontos facultativos não há expediente na empresa, porém espere que essas horas sejam descontadas do seu banco, fazendo com que você tenha uma \"dívida\" obrigatória com a empresa."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "6 de jan. de 2016 - Gerente Comercial",
    pros: "Ambiente repleto de oportunidades tanto de desenvolvimento de negócios como de oportunidades em outras cidades. Estrutura da empresa favorece o trabalho e a carreira.",
    contra: "Personificação do principal executivo na organização cria certa dependência e temor por parte de alguns colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "1 de nov. de 2015 - Analista",
    pros: "Boa estrutura e equipamentos de trabalho para os funcionários. Cursos disponíveis de qualidade alta.",
    contra: "Burocracia, mentalidade fechada de empresa nacional - não visa home office e meios de corte de custos mais inteligentes, como o uso de notebooks. Demitem muitos funcionários e contratam outros novos, ou seja, visam mais um custo menor e atuação do que a competência do time. RH espera muito da Coordenação das equipes e pouco faz realmente para avaliar oportunidades de crescimento dos seus colaboradores. Temos muita insegurança, independente de resultados e competência. Essa é a impressão massiva dos colaboradores ali dentro, em todas as filiais, além de pagar abaixo do mercado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2015 - Auxiliar Técnico",
    pros: "A forma como a empresa valoriza seus colaboradores e preucupa-se com a qualidade do trabalhador. União entre os colaboradores.",
    contra: "Falta de um plano de carreira para seus a vida profissional de seus colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de nov. de 2015 - Técnico",
    pros: "Os Benefícios são super atrativos, em alguns aspectos podemos chama-la de mãe.",
    contra: "Alguns processos internos são arcaicos . Nada mais que isso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de out. de 2015 - Analista",
    pros: "Clima informal, certa liberdade, possível expor seu pensamento.",
    contra: "Cultura retrograda, ainda pensa que o colaborador é mão de obra."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de out. de 2015 - Assistente Administrativo",
    pros: "Oportunidade de desenvolvimento profissional",
    contra: "Salário pago abaixo do mercado"
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "5 de out. de 2015 - Account Manager",
    pros: "Empresa dinâmica, onde o nível de aprendizado e desafios e constante. Lugar bom para se ganhar dinheiro!",
    contra: "Nem todo mundo se adapta a este perfil dinâmico onde ha mudanças estratégicas com frequencia"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de out. de 2015 - Auxiliar Técnico",
    pros: "boa empresa e otimos beneficios",
    contra: "ajuda aos funcionarios residentes em clientes"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "7 de set. de 2015 - Auxiliar Técnico",
    pros: "Benefícios muito bons,pagamento em dia",
    contra: "Não consigo ver pontos negativos"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2015 - Assistente De Marketing",
    pros: "Paga em dia. Ambiente legal, dependendo do setor. Paga PLR para todos os colaboradores.",
    contra: "Salários abaixo da média, falta de alta chefia competente, departamentos bagunçados e muito difícil de crescer profissionalmente."
  },
  {
    cargo: "Ex-funcionário(a), mais de 6 anos",
    date: "25 de ago. de 2015 - Supervisor De Serviços",
    pros: "Uma empresa organizada e dinâmica. Sem dúvidas a melhor em seu segmento.",
    contra: "Unidade de serviços mudou para Santana de Parnaíba."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "11 de set. de 2015 - Analista",
    pros: "Oportunidades de carreira, aprendizado e ambiente.",
    contra: "Salários e benefícios , processos"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de ago. de 2015 - Operador",
    pros: "Paga em dia os benefícios são bons",
    contra: "Salario muito baixo da média ser bom ou ruim funcionário dá na mesma 😩"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de ago. de 2015 - Técnico",
    pros: "Benefícios e as condições de trabalho.",
    contra: "Muitos processos, falta de reconhecimento"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de ago. de 2015 - Operador De Site Pleno",
    pros: "Ambiente de trabalho, e também o respeito com o colaborador, sempre se colocando a disposição pra atender melhor as necessidades de cada um",
    contra: "Ainda não consigo observar críticas a serem feitas, talvez o fato da comunicação por quem faz a ponte dos superiores até o nível operacional, supervisores no caso."
  },
  {
    cargo: "Ex-funcionário(a), mais de 4 anos",
    date: "9 de ago. de 2015 - Assistente Administrativo",
    pros: "Liberdade para expor ideias,participar de reuniões independente do cargo e gestão transparente.",
    contra: "Não possui plano de carreira,salário abaixo do mercado e turn over de gestores."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "2 de jul. de 2015 - Estagiário",
    pros: "Empresa faz sempre os pagamentos em dia, ótimos benefícios, localidade da empresa também e excelente para que o funcionário não precise se locomover em locais exagerados para chegar ao local de trabalho.",
    contra: "Comprometimento dos coordenadores e gerentes das áreas que não apoiam o funcionário para o crescimento devido de quem merece."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de jun. de 2015 - Assistente De Monitoramento",
    pros: "A empresa diferente de muitas , se preocupa com a satisfação do funcionário e o crescimento profissional, através disso implanta vários projetos de crescimento interno, para que o funcionário possa ter a oportunidade de escolher o melhor para ele, e correr atrás das vagas disponíveis dentro da empresa , sem contar com ótimos salários e ótimos benefícios.",
    contra: "Acredito que como qualquer outro empresa a Simpress tem pontos negativos , mas não muitos , mas nada que não possa ser melhorado, com a entrada da Samsung na cia muita coisa ainda pode mudar e se tornar mais agradável, a minha sugestão hoje seria , \" Avaliação de clima no ambiente de trabalho \", acredito que isso resolveria muitos conflitos sem necessidade que ocorrem, mas claro sem prejudicar ninguém, somos todos profissionais e não crianças."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "10 de ago. de 2015 - Técnico Em Eletrônica",
    pros: "Oportunidade de trabalho, pois emprega vários funcionários em estágios e dá uma chance de treinamentos na função.",
    contra: "A empresa não tem controle sobre os sus próprios controles internos, tudo é muito amador, bagunçado mesmo, sempre existe divergências entre departamentos, que quando os técnicos descobrem, viram uma correria para corrigir, mas eles nunca assumem o erro e sempre ficam militando de que o técnico não pode apontar erros sistêmicos desse jeito. Esse foi o motivo da minha saída da empresa, pois não gosto de ficar sendo um fantoche e não ter autonomia de trabalho."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "13 de jul. de 2015 - Analista De Sistemas",
    pros: "flexibilidade horario era uma boa",
    contra: "Atrasa salario e familiar, mto arrumadinho"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de abr. de 2015 - Eletrotécnico Júnior",
    pros: "o ambiente de trabalho, os clientes",
    contra: "trabalha e estuda muto para receber quase nada de salaio o salario , é muito baixo para que se formou em um curso tecnico."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de jun. de 2015 - Técnico",
    pros: "Perspectiva de melhoria, empresa com muito setores",
    contra: "As oportunidades apresentadas se tornam muito moeda de troca com a liderança"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "19 de abr. de 2015 - Técnico De Eletrônica Volante Pleno",
    pros: "Apesar dos pesares, é bem estruturada!",
    contra: "Como qualquer empresa do mesmo porte, as mudanças ou aprimoramentos demoram para chegar aos superiores!"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de jun. de 2015 - Auxiliar Técnico",
    pros: "A participação nos lucros, ambiente bom para trabalhar.",
    contra: "Salario poderia ser melhor e as promoções poderiam ser mais acessiveis."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de jun. de 2015 - Estagiário",
    pros: "Bem dinâmica, ótimos gestores, uma empresa que possibilita efetivação",
    contra: "Uma empresa que não paga de acordo com as demais empresas de porte médio."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "3 de jun. de 2015 - Assistente",
    pros: "Organizada em alguns departamento",
    contra: "Infraestrutura ultrapassada, sem projeto/plano de crescimento para o funcionário bem alinhado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de abr. de 2015 - Analista De Processos Sênior",
    pros: "Solidez e Plano de Carreira Excelente.",
    contra: "Muita coisa em procedimentos a melhorar é ruim e ao mesmo tempo uma grande oportunidade na área."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de mai. de 2015 - Operador De Site Júnior",
    pros: "Empresa confiável, não atrasa salários.",
    contra: "Os processos internos poderiam ser mais rápidos."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Auxiliar Administrativo",
    pros: "Empresa incentiva o crescimento profissional, salario pago corretamente, bom plano de saúde, nosso lideres e supervisores nos apoiam",
    contra: "Não tenho o que reclamar da Simpress"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jun. de 2015 - Gerente De Contas Empresariais",
    pros: "O fato de ter sido comprada pela Samsung.",
    contra: "Desorganização, excesso de processos e burocracias, falta comunicação entre as áreas internas e comissionamento ruim."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de abr. de 2015 - Operador De Site Júnior",
    pros: "Trabalho leve , e localidades",
    contra: "Carga Horaria, 9 horas por dia. e salario baixo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de abr. de 2015 - Operador De Produção I",
    pros: "Benefícios , meus amigos , meus gestores",
    contra: "Falta de oportunidades em áreas específica ex tecnico segurança do trabalho"
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "16 de mar. de 2015 - Analista",
    pros: "Reconhecimento e plano de carreira",
    contra: "Estou satisfeita com o que a empresa, oferece e trata os colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de mar. de 2015 - Técnico Eletromecânico",
    pros: "Lugar muito bom de trabalhar, ótimos benefícios. Vejo muita transparência na gestão.",
    contra: "Salário as vezes deixa a desejar."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de mar. de 2015 - Operador De Site",
    pros: "Pontualidade nos pagamentos, benefícios .",
    contra: "Acho que a faixa salarial para a função que desempenho e baixa."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "29 de mar. de 2015 - Técnico De Campo II",
    pros: "me ajudou a iniciar minha carreira profissional",
    contra: "não valoriza o funcionário, no inicio ele tinha uma mentalidade de fazer o funcionário gostar de trabalhar la e isso era bom mais com o tempo mudou e era só cobrança e corte de benefícios exploração ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Auxiliar Técnico",
    pros: "Sobra algum tempinho para poder estudar e o benefícios são bons.",
    contra: "Pouca oportunidade interna, salario abaixo do piso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "9 de mar. de 2015 - Técnico Eletrônico Júnior",
    pros: "Bom beneficio pessoas bem receptiva.",
    contra: "Salario baixo , ticket refeição de 15 reais você fica nos lugares que comida e 20 reais."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Técnico",
    pros: "Os funcionários são bem dedicados .",
    contra: "O salario que ganhamos não e de Técnicos o piso esta abaixo do salario atual de técnicos, ( O VR mal dar pra almoçar .)"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "27 de fev. de 2015 - Operador De Empilhadeira",
    pros: "Muito gostoso de trabalhar, e não tem muita cobranca",
    contra: "Não tem chance de crescimento,não olham para o profissional"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de fev. de 2016 - Analista De Inteligência De Mercado",
    pros: "Empresa recém comprada pela Samsung. Boas oportunidades de crescimento profissional, se souber aproveitá-las. Algumas gestões oferecem boas oportunidades de destaque na empresa e não há um ambiente competitivo no sentido negativo.",
    contra: "RH muito atrasado. A empresa é muito presa ao ambiente físico e não há a possibilidade de fazer home office ou ter horários flexíveis. Nos pontos facultativos não há expediente na empresa, porém espere que essas horas sejam descontadas do seu banco, fazendo com que você tenha uma \"dívida\" obrigatória com a empresa."
  },
  {
    cargo: "Ex-funcionário(a), mais de 6 anos",
    date: "29 de jan. de 2016 - Coordenador De Desenvolvimento",
    pros: "Remuneração adequada parar a função, sempre novos e bons desafios. Possibilidade de formar uma boa equipe.",
    contra: "O clima organizacional não é dos melhores, promessas e apena promessas de promoções. Gerenciamento por coflito"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "1 de nov. de 2015 - Analista",
    pros: "Boa estrutura e equipamentos de trabalho para os funcionários. Cursos disponíveis de qualidade alta.",
    contra: "Burocracia, mentalidade fechada de empresa nacional - não visa home office e meios de corte de custos mais inteligentes, como o uso de notebooks. Demitem muitos funcionários e contratam outros novos, ou seja, visam mais um custo menor e atuação do que a competência do time. RH espera muito da Coordenação das equipes e pouco faz realmente para avaliar oportunidades de crescimento dos seus colaboradores. Temos muita insegurança, independente de resultados e competência. Essa é a impressão massiva dos colaboradores ali dentro, em todas as filiais, além de pagar abaixo do mercado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de out. de 2015 - Analista",
    pros: "Clima informal, certa liberdade, possível expor seu pensamento.",
    contra: "Cultura retrograda, ainda pensa que o colaborador é mão de obra."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de out. de 2015 - Assistente Administrativo",
    pros: "Oportunidade de desenvolvimento profissional",
    contra: "Salário pago abaixo do mercado"
  },
  {
    cargo: "Ex-funcionário(a), mais de 10 anos",
    date: "2 de fev. de 2016 - Coordenador De Vendas/De Administração De Vendas/De Faturamento",
    pros: "Até 2014, os gestores tinham muita autonomia e eram envolvidos em diversos projetos e portanto aprendia-se e desenvolvia-se muito. Era um excelente ambiente para se desenvolver.Possuía um excelente pacote de remuneração. Até 2015 foi possível os gestores receberem por ano até 5 salários de Participação nos lucros. Os gestores possuem um bom plano de saúde através da Amil. Diversos profissionais fizeram carreira na empresa. É possível mudar de área quando surgem oportunidades. As decisões na empresa eram bastante ágeis. Em 2015 a empresa foi comprada pela Samsung e portanto há possibilidade de surgiram oportunidades em outros países.",
    contra: "Algumas filiais de São Paulo, ficam muito mau localizadas e portanto é necessário se informar em qual delas você irá trabalhar. Há uma unidade no bairro da Lapa que está bem localizada, porém é uma região que as vezes alaga e portanto deve-se tomar cuidado onde estacionar o carro. Existem duas unidades em Santana do Parnaíba e o trânsito na região é muito ruim. Em alguns dias perde-se até 2h para se chegar à Castelo Branco.A Empresa foi comprada pela Samsung no início de 2015 e com isto os gestores perderam um pouco da autonomia, a pressão aumentou bastante e a jornada de trabalho com bastante frequência e longa. Às vezes invade o fim de semana. O inglês passou a ser bastante utilizado. O pacote de remuneração está sendo revisto, portanto é necessário checar se os ganhos do passado continuam sendo possíveis."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "6 de jan. de 2016 - Gerente Comercial",
    pros: "Ambiente repleto de oportunidades tanto de desenvolvimento de negócios como de oportunidades em outras cidades. Estrutura da empresa favorece o trabalho e a carreira.",
    contra: "Personificação do principal executivo na organização cria certa dependência e temor por parte de alguns colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2015 - Assistente De Marketing",
    pros: "Paga em dia. Ambiente legal, dependendo do setor. Paga PLR para todos os colaboradores.",
    contra: "Salários abaixo da média, falta de alta chefia competente, departamentos bagunçados e muito difícil de crescer profissionalmente."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de nov. de 2015 - Auxiliar Técnico",
    pros: "A forma como a empresa valoriza seus colaboradores e preucupa-se com a qualidade do trabalhador. União entre os colaboradores.",
    contra: "Falta de um plano de carreira para seus a vida profissional de seus colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de nov. de 2015 - Técnico",
    pros: "Os Benefícios são super atrativos, em alguns aspectos podemos chama-la de mãe.",
    contra: "Alguns processos internos são arcaicos . Nada mais que isso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de out. de 2015 - Auxiliar Técnico",
    pros: "boa empresa e otimos beneficios",
    contra: "ajuda aos funcionarios residentes em clientes"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "7 de set. de 2015 - Auxiliar Técnico",
    pros: "Benefícios muito bons,pagamento em dia",
    contra: "Não consigo ver pontos negativos"
  },
  {
    cargo: "Ex-funcionário(a), mais de 6 anos",
    date: "25 de ago. de 2015 - Supervisor De Serviços",
    pros: "Uma empresa organizada e dinâmica. Sem dúvidas a melhor em seu segmento.",
    contra: "Unidade de serviços mudou para Santana de Parnaíba."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "11 de set. de 2015 - Analista",
    pros: "Oportunidades de carreira, aprendizado e ambiente.",
    contra: "Salários e benefícios , processos"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de jun. de 2015 - Assistente De Monitoramento",
    pros: "A empresa diferente de muitas , se preocupa com a satisfação do funcionário e o crescimento profissional, através disso implanta vários projetos de crescimento interno, para que o funcionário possa ter a oportunidade de escolher o melhor para ele, e correr atrás das vagas disponíveis dentro da empresa , sem contar com ótimos salários e ótimos benefícios.",
    contra: "Acredito que como qualquer outro empresa a Simpress tem pontos negativos , mas não muitos , mas nada que não possa ser melhorado, com a entrada da Samsung na cia muita coisa ainda pode mudar e se tornar mais agradável, a minha sugestão hoje seria , \" Avaliação de clima no ambiente de trabalho \", acredito que isso resolveria muitos conflitos sem necessidade que ocorrem, mas claro sem prejudicar ninguém, somos todos profissionais e não crianças."
  },
  {
    cargo: "Ex-funcionário(a), mais de um ano",
    date: "10 de ago. de 2015 - Técnico Em Eletrônica",
    pros: "Oportunidade de trabalho, pois emprega vários funcionários em estágios e dá uma chance de treinamentos na função.",
    contra: "A empresa não tem controle sobre os sus próprios controles internos, tudo é muito amador, bagunçado mesmo, sempre existe divergências entre departamentos, que quando os técnicos descobrem, viram uma correria para corrigir, mas eles nunca assumem o erro e sempre ficam militando de que o técnico não pode apontar erros sistêmicos desse jeito. Esse foi o motivo da minha saída da empresa, pois não gosto de ficar sendo um fantoche e não ter autonomia de trabalho."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de ago. de 2015 - Operador De Site Pleno",
    pros: "Ambiente de trabalho, e também o respeito com o colaborador, sempre se colocando a disposição pra atender melhor as necessidades de cada um",
    contra: "Ainda não consigo observar críticas a serem feitas, talvez o fato da comunicação por quem faz a ponte dos superiores até o nível operacional, supervisores no caso."
  },
  {
    cargo: "Ex-funcionário(a), mais de 4 anos",
    date: "9 de ago. de 2015 - Assistente Administrativo",
    pros: "Liberdade para expor ideias,participar de reuniões independente do cargo e gestão transparente.",
    contra: "Não possui plano de carreira,salário abaixo do mercado e turn over de gestores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de ago. de 2015 - Operador",
    pros: "Paga em dia os benefícios são bons",
    contra: "Salario muito baixo da média ser bom ou ruim funcionário dá na mesma 😩"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de ago. de 2015 - Técnico",
    pros: "Benefícios e as condições de trabalho.",
    contra: "Muitos processos, falta de reconhecimento"
  },
  {
    cargo: "Ex-funcionário(a), mais de 4 anos",
    date: "9 de ago. de 2015 - Assistente Administrativo",
    pros: "Liberdade para expor ideias,participar de reuniões independente do cargo e gestão transparente.",
    contra: "Não possui plano de carreira,salário abaixo do mercado e turn over de gestores."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "2 de jul. de 2015 - Estagiário",
    pros: "Empresa faz sempre os pagamentos em dia, ótimos benefícios, localidade da empresa também e excelente para que o funcionário não precise se locomover em locais exagerados para chegar ao local de trabalho.",
    contra: "Comprometimento dos coordenadores e gerentes das áreas que não apoiam o funcionário para o crescimento devido de quem merece."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de jun. de 2015 - Técnico",
    pros: "Perspectiva de melhoria, empresa com muito setores",
    contra: "As oportunidades apresentadas se tornam muito moeda de troca com a liderança"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de jun. de 2015 - Auxiliar Técnico",
    pros: "A participação nos lucros, ambiente bom para trabalhar.",
    contra: "Salario poderia ser melhor e as promoções poderiam ser mais acessiveis."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jun. de 2015 - Gerente De Contas Empresariais",
    pros: "O fato de ter sido comprada pela Samsung.",
    contra: "Desorganização, excesso de processos e burocracias, falta comunicação entre as áreas internas e comissionamento ruim."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de jun. de 2015 - Estagiário",
    pros: "Bem dinâmica, ótimos gestores, uma empresa que possibilita efetivação",
    contra: "Uma empresa que não paga de acordo com as demais empresas de porte médio."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "3 de jun. de 2015 - Assistente",
    pros: "Organizada em alguns departamento",
    contra: "Infraestrutura ultrapassada, sem projeto/plano de crescimento para o funcionário bem alinhado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de abr. de 2015 - Analista De Processos Sênior",
    pros: "Solidez e Plano de Carreira Excelente.",
    contra: "Muita coisa em procedimentos a melhorar é ruim e ao mesmo tempo uma grande oportunidade na área."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de mai. de 2015 - Operador De Site Júnior",
    pros: "Empresa confiável, não atrasa salários.",
    contra: "Os processos internos poderiam ser mais rápidos."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "13 de jul. de 2015 - Analista De Sistemas",
    pros: "flexibilidade horario era uma boa",
    contra: "Atrasa salario e familiar, mto arrumadinho"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "23 de abr. de 2015 - Eletrotécnico Júnior",
    pros: "o ambiente de trabalho, os clientes",
    contra: "trabalha e estuda muto para receber quase nada de salaio o salario , é muito baixo para que se formou em um curso tecnico."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de mar. de 2015 - Operador De Site",
    pros: "Pontualidade nos pagamentos, benefícios .",
    contra: "Acho que a faixa salarial para a função que desempenho e baixa."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "9 de mar. de 2015 - Técnico Eletrônico Júnior",
    pros: "Bom beneficio pessoas bem receptiva.",
    contra: "Salario baixo , ticket refeição de 15 reais você fica nos lugares que comida e 20 reais."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Auxiliar Administrativo",
    pros: "Empresa incentiva o crescimento profissional, salario pago corretamente, bom plano de saúde, nosso lideres e supervisores nos apoiam",
    contra: "Não tenho o que reclamar da Simpress"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "31 de mar. de 2015 - Técnico Eletromecânico",
    pros: "Lugar muito bom de trabalhar, ótimos benefícios. Vejo muita transparência na gestão.",
    contra: "Salário as vezes deixa a desejar."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "29 de mar. de 2015 - Técnico De Campo II",
    pros: "me ajudou a iniciar minha carreira profissional",
    contra: "não valoriza o funcionário, no inicio ele tinha uma mentalidade de fazer o funcionário gostar de trabalhar la e isso era bom mais com o tempo mudou e era só cobrança e corte de benefícios exploração ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Auxiliar Técnico",
    pros: "Sobra algum tempinho para poder estudar e o benefícios são bons.",
    contra: "Pouca oportunidade interna, salario abaixo do piso."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de abr. de 2015 - Operador De Site Júnior",
    pros: "Trabalho leve , e localidades",
    contra: "Carga Horaria, 9 horas por dia. e salario baixo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de abr. de 2015 - Operador De Produção I",
    pros: "Benefícios , meus amigos , meus gestores",
    contra: "Falta de oportunidades em áreas específica ex tecnico segurança do trabalho"
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "16 de mar. de 2015 - Analista",
    pros: "Reconhecimento e plano de carreira",
    contra: "Estou satisfeita com o que a empresa, oferece e trata os colaboradores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "27 de fev. de 2015 - Operador De Empilhadeira",
    pros: "Muito gostoso de trabalhar, e não tem muita cobranca",
    contra: "Não tem chance de crescimento,não olham para o profissional"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de fev. de 2015 - Técnico Volante",
    pros: "Gosto de Trabalhar no Campo de volante",
    contra: "O salário o tratamento o reconhecimento não são compatíveis à exigência"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de fev. de 2015 - Técnico Eletrônico",
    pros: "Bons benefícios e trabalho em equipe",
    contra: "Oportunidades de plano de carreira lento"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de fev. de 2015 - Operador De Site Pleno",
    pros: "A empresa paga em dia seus funcionários",
    contra: "Muita chefia, excelente para funcionários dentro da base, mas funcionários fora da base são esquecidos, promete crescimento em certos cargos e não cumprem, e alem do esquecimento, não há amparo para o funcionário, certos profissionais NÃO SÃO QUALIFICADOS PARA EXERCER AS ATIVIDADES DE CHEFIA."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de jan. de 2015 - Técnico Eletrônico Júnior",
    pros: "A Simpress é uma ótima empresa em relação à aprendizado e aos beneficios dados a seus empregados, entre eles, PLR, VA, VR, Ticket Car para Técnicos Volantes, ajudas de custo para que possui e trabalha com o carro, planos de saude, planos odontologicos.",
    contra: "A Simpress deixa a desejar em suas metas para um futuro a longo prazo, em relação a planos de carreira e à discussoes de melhores beneficios e salarios."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "13 de jan. de 2015 - Líder De Equipe",
    pros: "Ótima empresa Esta atenta nas inovações do mercado",
    contra: "Algumas políticas internas"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de fev. de 2015 - Operador De Site Pleno",
    pros: "Pagamentos de salário e benefícios em dia.",
    contra: "Falta de visão por parte da empresa. funcionários com cargos pequenos não são vistos pela simpress."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de jan. de 2015 - Técnico Em Eletrônica II",
    pros: "Beneficios, por, flexibilidade de horario",
    contra: "Desorganização, planos de cargos e salarios confusos, desvios.de funcao para atender lacunas."
  },
  {
    cargo: "Ex-funcionário(a), mais de 7 anos",
    date: "8 de jan. de 2015 - Líder De Equipe",
    pros: "Além da chave de partida junto ao cliente, o processo em desenvolvimento em um todo",
    contra: "Baixa procura em lugares remotos onde a população é muito baixa"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 - Técnico",
    pros: "Os funcionários são bem dedicados .",
    contra: "O salario que ganhamos não e de Técnicos o piso esta abaixo do salario atual de técnicos, ( O VR mal dar pra almoçar .)"
  },
  {
    cargo: "Ex-funcionário(a), mais de 7 anos",
    date: "8 de jan. de 2015 - Líder De Equipe",
    pros: "Além da chave de partida junto ao cliente, o processo em desenvolvimento em um todo",
    contra: "Baixa procura em lugares remotos onde a população é muito baixa"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "9 de fev. de 2015 - Técnico Eletrônico",
    pros: "Pagamentos em dia sem atrasos.",
    contra: "Incoerência no que a empresa passa para seus colaboradores. Baixos salários."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "15 de jan. de 2015 - Técnico Em Eletrotécnica",
    pros: "Empresa não atrasa salários , te proporciona treinamentos básicos dos equipamentos",
    contra: "Supervisores não dão um suporte aos colaboradores , não realizam visitas aos clientes , somente quando há problema , técnicos indo para clientes para trabalhar em equipamentos que não tiveram treinamento , burocracia na liberação de peças de toner .PLR paga de forma injusta , todos deveriam receber uma valor fixo , não de acordo com seus salários , runners e operadores de site deveriam receber beneficio flexível , pois ganham menos que todos na CIA ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de jan. de 2015 - Analista Financeiro",
    pros: "Busca incessante pela inovação",
    contra: "Local físico de trabalho e infraestrutura"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de jan. de 2015 - Analista De Infraestrutura Pleno",
    pros: "Paga em dia, ambiente com os colegas muito bom, sempre tem inovações",
    contra: "muitas mudanças desnecessárias, as cadeiras e mobiliário em geral são ruins, falta investir em funcionários no sentido de qualidade de vida e ter gestores melhores preparados."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "14 de jan. de 2015 - Operador De Site Pleno",
    pros: "Trabalho em equipe,empresa ótima para trabalha...",
    contra: "Falta de treinamento, falta de interesse de lideres..."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de jan. de 2015 - Técnico Eletrônico",
    pros: "Uma empresa boa de se trabalhar, para técnicos de campo atendimento ao cliente e ajuda direta do Supervisor",
    contra: "Salários defasados, ultimamente esta tendo pouco treinamento, se houver alguma demora no envio de peças ou chamados perdidos os deméritos somente vão para o técnico não existe nenhum controle sobre o por que o chamado esta perdido para o pessoal de estoque ou mesa de operações ou ate mesmo suporte se alguma dessas áreas falhar o demérito vai para o técnico, e falta de aprimoramento nos recursos que a empresa tem como o FSA que não existe nenhum app para android ou ios somente via computador e pelo explorer."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jan. de 2015 - Operador De Site Júnior",
    pros: "Empresa de grande porte com bons benefícios e pontualidade com pagamentos",
    contra: "Salario muito abaixo tanto para técnicos como operadores de site"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de jan. de 2015 - Técnico Em Eletrônica II",
    pros: "Se recolocar no mercado de trabalho",
    contra: "Empresa sem nome no mercado quando for buscar outro desafio; Salário incompatível com o Mercado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de jan. de 2015 - Assistente De Gestão De Serviços",
    pros: "O endomarketing da empresa é muito bom, faz com que se saiba o que acontece e o funcionário se sente mais incluído na empresa. Os planos de carreira funcionam, a empresa sempre prioriza funcionários internos.",
    contra: "Na matriz de Santana sempre que falta luz, fato constante, o ar condicionado para e o local fica extremamente abafado, a ponto de os funcionários passarem mal."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de jan. de 2015 - Gerente De Contas",
    pros: "Empresa Solida, lider de mercado.",
    contra: "Muitos processos manuais, sistemas não conversam entre si."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "12 de nov. de 2014 - Assistente Administrativo",
    pros: "É uma empresa que pensa em seus funcionários visando e buscando o melhor para todos.",
    contra: "Tem equipes muito fracas, funcionários desmotivados buscam pessoas de fora da empresa para novos cargos ao invés de promover quem já esta la vestindo a camisa. Falta união entre os setores, e regras mais claras a Todos,"
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "27 de out. de 2014 - Auxiliar Administrativo",
    pros: "Liberdade de expressao.Pagamentos em dia.",
    contra: "Demora na homologacao quase 4 meses,nao tem RH em todas as filiais isso dificulta tudo."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de out. de 2014 - Técnico",
    pros: "o plano medico e odontológico é bom, a participação nos lucros é ótima e temos acesso a centenas de cursos gratuitos atraves da empresa.",
    contra: "o clube de beneficios contempla apenas a matriz e o atendimento do RH é demorado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "4 de out. de 2014 - Operador De Impressão E Acabamento",
    pros: "Empresa trabalha de forma organizada e incentivando funcionario até mesmo em seus projetos pessoais.",
    contra: "Salario baixo para as funções"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de jan. de 2015 - Gerente De Contas",
    pros: "A Simpress é uma escola e dá ótimas oportunidades de emprego para diversas pessoas que estejam interessadas e sejam esforçadas",
    contra: "Nem sempre encontramos o tão desejado plano e futuro de carreira."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de nov. de 2014 - Técnico Residente Júnior",
    pros: "Treinamentos voltados para área técnica cujo instrutores são bem avaliados pelo corpo de colaboradores.",
    contra: "* Falta de colaboração entre diferentes áreas contribuindo para o mal funcionamento de operações. *Processos internos lentos dificultando na continuidade da produtividade do funcionário ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "28 de out. de 2014 - Analista",
    pros: "É uma empresa que paga seus funcionários em dia, paga um salário compatível com mercado. Aprendemos muito trabalhando na Simpress.",
    contra: "Possuir várias pessoas que vieram da concorrência e com isso tentam fazer a empresa mudar sua metodologia."
  },
  {
    cargo: "Ex-funcionário(a), menos de um ano",
    date: "13 de jan. de 2015 - Analista Pleno",
    pros: "Clima organizacional",
    contra: "Estrutura física ruim, falta de perspectiva na carreira, forma de remuneração"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "18 de dez. de 2014 - Operador De Impressora",
    pros: "o trabalho manual é muito fácil é só tirar copias ,digitalizar documentos e encadernar menos de três meses você já esta apto para manusear o trabalho sem precisar de ajuda de um Profissional mais experiente. O vale refeição e eles dificilmente atrasa o pagamento honrando seus compromissos com o funcionário",
    contra: "o horário e muito extenso e desnecessário impedindo que o funcionário tenha uma boa qualidade de vida ,e também impedindo de exercer algum curso ,a comunicação é zero pra se ter uma ideia eu tenho dois anos de empresa e mal conheço a metade das pessoas que fazem parte da minha equipe ,quase não se tem noticias de alguma promoção e trabalho e muito monótono e infelizmente a empresa não motiva o funcionário ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "5 de jul. de 2014 - Técnico Em Eletrônica",
    pros: "ah vai ser difícil sair, pois me sinto orgulhoso e muito satisfeito com a empresa, com a politica que temos e com o salário e prêmios que recebo !!! #vamosganharomundojuntossim...!!!",
    contra: "Queria ganhar mais...kkk, mas o que faço não permite que eu venha ter um crescimento do que penso em ter, mas assim sempre queremos mais... e falo isso brincando pois eu amo minha empresa... caso a sim, venha pra fortaleza, já estou me preparando para um novo cargo !!!"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "10 de fev. de 2014 - Analista De Marketing Digital",
    pros: "Boa estrutura de trabalho e excelente clima organizacional.",
    contra: "Muito instável no seu planejamento e muito paternalista na sua gestão."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "14 de jul. de 2014 -",
    pros: "Bom a Simpress esta me dando a oportunidade de crescimento intelectual , levando em consideraçao que foi a porta de escape no momento de dificuldade ;o mais importante é a base de conhecimento que a cia vem me agregando",
    contra: "Bom temos um problema que todo funcionario reclama é o clube de beneficios que beneficia apenas os colaboradores da lapa porem aqui em santana nao temos nada referente a faculdades clubes etc e o nosso salario que para um operador de produçao esta abaixo do mercado"
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "7 de jul. de 2014 - Suporte técnico",
    pros: "Salários e benefícios não costumam atrasar.",
    contra: "Péssimo planos de carreira, falta de organização."
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "11 de jan. de 2022 - Técnico Residente Júnior",
    pros: "Benefícios de acordo com o mercado",
    contra: "Salário baixo e descaso com equipe técnica"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de jul. de 2014 - Supervisor De Estoque",
    pros: "É uma empresa bastante vibrante e dinâmica.",
    contra: "Falta suporte ao trabalho e também planejamento."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de jul. de 2014 -",
    pros: "Empresa com boas oportunidades de desenvolvimento, reconhecimento do trabalho realizado ao longo dos anos e espirito de ajuda entre parceiros e subordinados.",
    contra: "ambiente de pressão, grande volume de demandas e pouco tempo de solução."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de jul. de 2014 - Gerente",
    pros: "A empresa possui excelentes profissionais na área comercial, saúde financeira, capacidade de investimento e busca constante inovação. Seu corpo técnico é qualificado e consegue criar diferenciais em relação aos seus concorrentes. A meritocracia acontece ao meu ver.",
    contra: "Precisa amadurecer sua oferta nas áreas de BO em gestão documental e quem sabe criar diferentes estruturas para as unidades de negócios que oferta ao mercado."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "8 de jul. de 2014 - Líder De Serviços",
    pros: "Benefícios, PLR.",
    contra: "Empresa sempre erra com o funcionario, em questão de pagamentos, não explica as métricas de PLR - elas nao ficam claras - colaboradores que estão fora do polo São Paulo, praticamente não há perspectiva de plano de carreira."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de jul. de 2014 -",
    pros: "ambiente bom para se trabalhar plano de carreira",
    contra: "métricas e remuneração um pouco abaixo"
  },
  {
    cargo: "Funcionário(a) atual, mais de 3 anos",
    date: "11 de jan. de 2022 - Técnico Residente Júnior",
    pros: "Benefícios de acordo com o mercado",
    contra: "Salário baixo e descaso com equipe técnica"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de ago. de 2015 -",
    pros: "Grande possibilidade de crescimento",
    contra: "Rh ser de são Paulo e demorar kkmk"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "5 de ago. de 2015 -",
    pros: "Beneficios e remuneração, ambiemte de trabalho otimo.",
    contra: "Burocracia nos processos e morosidade das áreas de suporte, porem focam no resultado mesmo assim."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "7 de nov. de 2018 - Técnico Em Eletrônica I",
    pros: "Há bons benefícios e conta com bônus atrativo. Empresa líder no seguimento e reconhecido no mercado. A gestao sempre te desafia a ser o melhor e superar as barreiras para ter um bom crescimento profissional.",
    contra: "Diz que há plano de carreira na empresa, mas você passa anos na mesma posição até eles perceberem que você está existe e te ofereceretorno algo. Salário abaixo do mercado. Alta demanda de atividades para o cargo exercido."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de set. de 2015 - Operador De Site Júnior",
    pros: "Grande aprendizado com comunicação",
    contra: "Salário baixíssimo com todos os descontos (bem menor que um salário mínimo)"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "16 de ago. de 2015 -",
    pros: "Benefícios flexiveis, bom ambiente",
    contra: "Talvez falte um plano de carreira mais profundo e com critérios de competência para cada cargo"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de set. de 2018 -",
    pros: "É uma empresa que proporciona grandes desafios e oportunidade de crescimento. Uma ótima escola para quem quer ter experiência e atuar em grandes clientes.",
    contra: "Tem um formato muito centralizador. Falta conhecimento sobre definição de back office e front office, ambos são tratados da mesma forma e muitas vezes o front office é sobrecarregado prejudicando a qualidade do atendimento. Está em processo de mudança de cultura, mas para pior, a gestão está claramente mais interessada no promoção das ações do que no quanto elas estão sendo efetivas de fato. Existe uma grande distância entre o discurso e as ações. A falta de conhecimento do nível estratégico sobre as dificuldades do nível operacional é evidente, assim como a omissão do nível tático diante disso."
  },
  {
    cargo: "Ex-funcionário(a), mais de 2 anos",
    date: "8 de set. de 2017 -",
    pros: "Boa empresa para que procura o primeiro emprego, pagamentos e benefícios sempre em dia, ótima oportunidade para apresentação ao mercado de trabalho.",
    contra: "RH é uma área que precisa melhor principalmente com colaboradores que não estajam na cidade matriz, o salário para funções iniciais como operador, lider e auxiliar técnico poderiam ser maiores."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "22 de dez. de 2015 -",
    pros: "Grande oportunidade de primeiro emprego. Muitas vagas para aprendizes ingressarem no mercado de trabalho.",
    contra: "Há uma demora para resolver pendencias, tais como problema com VT, VR e etc."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de out. de 2015 -",
    pros: "Amigo de trabalho e trabalhos sempre equipe para melhoria da empresa",
    contra: "Não tem reconhecimento na empresa por chefes competentes . Ou chefe tem seu reconhecimento pelos funcionários"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "1 de jul. de 2015 -",
    pros: "É uma empresa certinha.. Paga o salário certo, é uma empresa tranquila.",
    contra: "Na parte de liderança. A onde eu trabalho, não tem um líder fixo, toda hora troca de líder. E precisamos de um líder para sempre tirar nossas dúvidas."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "13 de abr. de 2015 -",
    pros: "Flexibilidade, comprometimento",
    contra: "Atrazis na entrega d materiais."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de fev. de 2015 -",
    pros: "Os horarios os clientes sao bons de trabalhar",
    contra: "trabalho na renalt e o almoço la é 16reais e recebo so 15 ao dia"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "10 de abr. de 2015 - Gerente De TI",
    pros: "A gestão é feita com base indicadores e aplicam as melhores técnicas de mercado ! A empresa será em constante crescimento",
    contra: "necessário trabalhar sempre a 400 km por hora"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "9 de abr. de 2015 -",
    pros: "Relacionamento interpessoal e benefícios",
    contra: "Dificuldades para promoção. Você é reconhecido por diplomas e não por conhecimento e méritos."
  },
  {
    date: "13 de abr. de 2015 -",
    pros: "Ambiente de entrega dos colaboradores",
    contra: "Não ha reconhecimento financeiro"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "6 de mar. de 2015 - Analista De Implantação E Suporte",
    pros: "Uma empresa de oportunidades, já que entrei como estagiário e fazem 4 anos de efetivação",
    contra: "Melhor reconhecimento dos profissionais"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "2 de fev. de 2015 - Analista Fiscal Sênior",
    pros: "Muito pontos positivos pois os profissionais são reconhecidos e valorizados",
    contra: "Nao tem pontos negativos pois é uma ótima empresa. Os profissionais são reconhecidos e valorizados"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "21 de jan. de 2015 -",
    pros: "A empresa da muita oportunidade de crescimento e os contratos são de modo geral todos tranquilos.",
    contra: "A empresa acaba sendo vista como ruim por quem não busca melhorias e cobra oportunidades sem preparo, pode ser que haja opiniões contrarias em outras filiais, mas em Brasília, é tudo bem resolvido."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "29 de mar. de 2015 -",
    pros: "Refeitório , reconhecimento , programas sociais e fretado",
    contra: "Algumas pessoas da empresa não trabalham e deixam para os outros e muita fofoca e calor demais"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "17 de jan. de 2015 -",
    pros: "Oportunidade, Experiencia, respeito, ...",
    contra: "Nada a declarar, estou muito satisfeito"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "30 de jan. de 2015 -",
    pros: "É uma empresa que da oportunidade de crescimento",
    contra: "Existem líderes despreparados no qual se desperdiça muitos talentos. Vc só é reconhecido se for muito querido de um superior"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "26 de jan. de 2015 -",
    pros: "Conhecimento no dia dia, ótima empresa para se trabalhar.",
    contra: "Presença da supervisão para resposta."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "25 de jan. de 2015 - Analista De Back Office",
    pros: "Não atrasa salário,as demissões ocorrem em casos extremos",
    contra: "A gestão de pessoas não é administrada de forma adequada no departamento que trabalho"
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jan. de 2015 -",
    pros: "Pagamento e beneficios sempre em dia.",
    contra: "Exercer funções a mais do que é em comum a funçao do cargo que se encontra ."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jan. de 2015 -",
    pros: "Beneficios e qualidade de servico!",
    contra: "Estrutura em rh e logistica em melhorias."
  },
  {
    cargo: "Ex-funcionário(a)",
    date: "11 de jan. de 2015 -",
    pros: "Pessoas legais, plr semestral, serviço legal e tem como aprender muito.",
    contra: "Falta de respeito com os funcionarios, muitos são tratados com destinção e não dá oportunidade de crescimento."
  },
  {
    cargo: "Funcionário(a) atual",
    date: "12 de jan. de 2015 -",
    pros: "Não falta trabalho , pagam em dia e corretamente",
    contra: "falta apoio , liderança , e elogio"
  }
]

const wb = XLSX.utils.book_new();
wb.Props = {
  Title: 'Planilha de Feedbacks - Glassdor',
  Subject: 'Lista de Feedbacks',
  Author: 'Maxwell Alves',
  CreatedDate: new Date(),
};

const ws = XLSX.utils.json_to_sheet(data);

XLSX.utils.book_append_sheet(wb, ws, 'Feedbacks')

XLSX.writeFile(wb, 'Lista Feedback Maxwell Final2.xlsx', { bookType: 'xlsx', type: 'binary' });