import { writable, readable } from 'svelte/store';

const QuestionsStore = readable([
	{
		cat: "Presteza", ques: "Os títulos de telas, janelas e caixas de diálogo estão no alto, centrados ou justificados a à esquerda?"
		, id: 0, type: "Estrutural", affec: []
	},
	{
		cat: "Presteza", ques: "Cada campo de dados possui um rótulo de indentificação?"
		, id: 1, type: "Clareza", affec: ["label", "input", "select", "textarea"]
	},
	{
		cat: "Presteza", ques: "O formato do dado a ser entrado está de forma clara para cada campo de dados?"
		, id: 2, type: "Clareza", affec: ["input", "textarea"]
	},
	{
		cat: "Presteza", ques: "Dados com unidade de medida ou financeiros estão claramente especificados?"
		, id: 3, type: "Clareza", affec: ["input"]
	},
	{
		cat: "Presteza", ques: "Os campos de rótulos apresentão um caracter de convite a entrada de dados como ':'?"
		, id: 4, type: "Clareza", affec: ["label"]
	},
	{
		cat: "Presteza", ques: "Se um dado pertence a um intervalo, ou conjunto, está este especificado?"
		, id: 5, type: "Clareza", affec: ["label"]
	},
	{
		cat: "Presteza", ques: "Listas longas, se presente apresentam indicadores de continuação, de quantidade de itens e páginas?"
		, id: 6, type: "Estrutural", affec: []
	},
	{
		cat: "Presteza", ques: "Tabelas apresentam cabeçalhos para linhas e colunas consistentes e distinguíveis dos dados apresentados?"
		, id: 7, type: "Formatação", affec: []
	},
	{
		cat: "Presteza", ques: "Os gráficos possuem um título geral e rótulos para seus eixos?"
		, id: 8, type: "Formatação", affec: []
	},
	{
		cat: "Presteza", ques: "Os botões que comandam a apresentação de caixas de diálogo apresentam em seus rótulos o sinal '...' como indicador da continuidade do diálogo?"
		, id: 9, type: "Clareza", affec: ["button", "input"]
	},
	{
		cat: "Presteza", ques: "As páginas de menus possuem títulos, cabeçalhos ou convites à entrada?"
		, id: 10, type: "Estrutural", affec: []
	},
	{
		cat: "Presteza", ques: "As opções de menu que levam a outros painéis de menu apresentam o sinal '>' como indicador desse fato?"
		, id: 11, type: "Clareza", affec: []
	},
	{
		cat: "Presteza", ques: "O usuário encontra disponíveis as informações necessárias para suas ações?"
		, id: 12, type: "Clareza", affec: []
	},
	{
		cat: "Presteza", ques: "Nas caixas de mensagens de erro, o botão de comando 'AJUDA' está sempre presente?"
		, id: 13, type: "Formatação", affec: []
	},
	{
		cat: "Presteza", ques: "A resposta para uma solicitação de ajuda do usuário está estruturada no contexto da tarefa e da transação corrente?"
		, id: 14, type: "Clareza", affec: []
	},
	{
		cat: "Presteza", ques: "Na ocorrência de erros, o usuário pode acessar todas as informações necessárias ao diagnóstico e à solução do problema?"
		, id: 15, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "O espaço de apresentação está diagramado em pequenas zonas funcionais?"
		, id: 16, type: "Estrutural", affec: []
	},
	{
		cat: "Localização", ques: "A disposição dos objetos de interação de uma caixa de dialogo segue uma ordem lógica?"
		, id: 17, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "Nos agrupamentos de dados , os itens estão organizados espacialmente segundo um critério lógico?"
		, id: 18, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "Os códigos das teclas aceleradoras de opções de menu estão localizados à direita do nome da opção?"
		, id: 19, type: "Formatação", affec: []
	},
	{
		cat: "Localização", ques: "Nas listas de seleção , as opções estão organizadas segundo alguma ordem lógica?"
		, id: 20, type: "Clareza", affec: ["select"]
	},
	{
		cat: "Localização", ques: "Os paineis de menu são formados a partir de um critério lógico de agrupamento de opções?"
		, id: 21, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "Dentro de um painel de menu, as opções mutuamente exclusivas ou interdependentes estão agrupadas e separadas das demais?"
		, id: 22, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "As opções dentro de um painel de menu estão ordenadas segundo algum critério lógico?"
		, id: 23, type: "Clareza", affec: []
	},
	{
		cat: "Localização", ques: "A definição da opção de menu selecionada por default segue algum critério?"
		, id: 24, type: "Formatação", affec: []
	},
	{
		cat: "Localização", ques: "Os grupos de botões de comando estão dispostos em coluna e à direita, ou em linha e abaixo dos objetos aos quais estão associados?"
		, id: 25, type: "Estrutural", affec: ["button"]
	},
	{
		cat: "Localização", ques: "O botão de comando selecionado por default está na posição mais alta, se os botões estão dispostos verticalmente, ou na mais à esquerda, se os botões estão dispostos horizontalmente?"
		, id: 26, type: "Formatação", affec: []
	},
	{
		cat: "Formato", ques: "Os controles e comandos encontram-se visualmente diferenciados das informações apresentadas nas telas?"
		, id: 27, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Códigos visuais são empregados para associar diferentes categorias de dados distribuídos de forma dispersa nas telas?"
		, id: 28, type: "Formatação", affec: []
	},
	{
		cat: "Formato", ques: "Os diferentes tipos de elementos de uma tela de consulta (dados, comandos e instruções) são visualmente distintos uns dos outros?"
		, id: 29, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Os rótulos são visualmente diferentes dos dados aos quais estão associados?"
		, id: 30, type: "Formatação", affec: ["label"]
	},
	{
		cat: "Formato", ques: "Os cabeçalhos de uma tabela estão diferenciados através do emprego de cores diferentes, letras maiores ou sublinhadas?"
		, id: 31, type: "Formatação", affec: []
	},
	{
		cat: "Formato", ques: "Em situações anormais, os dados críticos e que requiram atenção imediata são diferenciados através do uso de cores brilhantes como por exemplo, o vermelho ou o rosa?"
		, id: 32, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Sinais sonoros são empregados para alertar os usuários em relação a uma apresentação visual?"
		, id: 33, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Na apresentação de textos, os recursos de estilo, como itálico, negrito, sublinhado ou diferentes fontes são empregados para salientar palavras ou noções importantes?"
		, id: 34, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Os itens selecionados para alteração, atualização ou acionamento estão destacados dos outros?"
		, id: 35, type: "Formatação", affec: []
	},
	{
		cat: "Formato", ques: "Nas situações de alarme e nas telas de alta densidade de informação, o recurso de intermitência visual é empregado para salientar dados e informações?"
		, id: 36, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Os campos obrigatórios são diferenciados dos campos opcionais de forma visualmente clara?"
		, id: 37, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Nas caixas de mensagens, o botão selecionado por default tem uma apresentação visual suficientemente distinta dos outros?"
		, id: 38, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Em situações em que se exija atenção especial do usuário, as mensagens de alerta e de aviso são apresentadas de maneira distinta?"
		, id: 39, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "A forma do cursor do mouse é diferente da de qualquer outro item apresentado?"
		, id: 40, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "As formas de cursores (dois ou mais) apresentados simultaneamente são suficientemente distintas umas das outras?"
		, id: 41, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "As caixas de agrupamento são empregadas para realçar um grupo de dados relacionados?"
		, id: 42, type: "Clareza", affec: []
	},
	{
		cat: "Formato", ques: "Quando apresenta opções não disponíveis no momento, o sistema as mostra de forma diferenciada visualmente?"
		, id: 43, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página fornece feedback para todas as ações do usuário?"
		, id: 44, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "Quando, durante a entrada de dados, a página torna-se indisponível ao usuário, devido a algum processamento longo, o usuário é avisado desse estado da página e do tempo dessa indisponibilidade?"
		, id: 45, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A imagem do cursor fornece feedback dinâmico e contextual sobre a manipulação direta?"
		, id: 46, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página fornece ao usuário informações sobre o tempo de processamentos demorados?"
		, id: 47, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página apresenta uma mensagem informando sobre o sucesso ou fracasso de um processamento demorado?"
		, id: 48, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página fornece feedabck imediato e contínuo das manipulações diretas?"
		, id: 49, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página define o foco das ações para os objetos recém criados ou recém abertos?"
		, id: 50, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "A página fornece feedback sobre as mudanças de atributos dos objetos?"
		, id: 51, type: "Clareza", affec: []
	},
	{
		cat: "Feedback", ques: "Qualquer mudança na situação atual de objetos de controle é apresentada visualmente de modo claro ao usuário?"
		, id: 52, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "As áreas livres são usadas para separar grupos lógicos em vez de tê-los todos de um só lado da tela, caixa ou janela?"
		, id: 53, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os grupos de objetos de controle e de apresentação que compõem as caixas de diálogo e outros objetos compostos encontram-se alinhados vertical e horizontalmente?"
		, id: 54, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os rótulos de campos organizados verticalmente e muito diferentes em tamanho estão justificados à direita?"
		, id: 55, type: "Clareza", affec: ["label"]
	},
	{
		cat: "Legibilidade", ques: "A largura mínima dos mostradores de texto é de 50 caracteres?"
		, id: 56, type: "Formatação", affec: ["textarea", "input"]
	},
	{
		cat: "Legibilidade", ques: "A altura mínima dos mostradores de texto é de 4 linhas?"
		, id: 57, type: "Formatação", affec: ["textarea"]
	},
	{
		cat: "Legibilidade", ques: "Os parágrafos de texto são separados por, pelo menos, uma linha em branco?"
		, id: 58, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "O uso exclusivo de maiúsculas nos textos é evitado?"
		, id: 59, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "O uso do negrito é minimizado?"
		, id: 60, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "O uso do sublinhado é minimizado?"
		, id: 61, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Nas tabelas, linhas em branco são empregadas para separar grupos?"
		, id: 62, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "As listas de dados alfabéticos são justificadas à esquerda?"
		, id: 63, type: "Formatação", affec: []
	},
	{
		cat: "Legibilidade", ques: "As listas contendo números decimais apresentam alinhamento pela vírgula?"
		, id: 64, type: "Formatação", affec: []
	},
	{
		cat: "Legibilidade", ques: "As linhas empregadas para o enquadramento e segmentação de menus (separadores, delimitadores etc.) são simples?"
		, id: 65, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "As bordas dos painéis dos menus estão suficientemente separadas dos textos das opções de modo a não prejudicar a sua legibilidade?"
		, id: 66, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "O uso de abreviaturas é minimizado nos menus?"
		, id: 67, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os nomes das opções estão somente com a inicial em maiúsculo?"
		, id: 68, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os números que indicam as opções de menu estão alinhados pela direita?"
		, id: 69, type: "Formatação", affec: []
	},
	{
		cat: "Legibilidade", ques: "Se a enumeração alfabética é utilizada, então as letras para seleção estão alinhadas pela esquerda?"
		, id: 70, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "As opções de uma barra de menu horizontal estão separadas por, no mínimo, 2 caracteres brancos?"
		, id: 71, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os rótulos de campos começam com uma letra maiúscula, e as letras restantes são minúsculas?"
		, id: 72, type: "Clareza", affec: ["label"]
	},
	{
		cat: "Legibilidade", ques: "Os itens de dados longos são particionados em grupos mais curtos, tanto nas entradas como nas apresentações?"
		, id: 73, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os ícones são legíveis?"
		, id: 74, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "A página utiliza rótulos (textuais) quando pode existir ambiguidade de ícones?"
		, id: 75, type: "Clareza", affec: []
	},
	{
		cat: "Legibilidade", ques: "Os dados a serem lidos são apresentados de forma contínua, não piscantes ?"
		, id: 76, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "A página oferece valores defaults para acelerar a entrada de dados?"
		, id: 77, type: "Facilitar", affec: []
	},
	{
		cat: "Concisão", ques: "A identificação alfanumérica da página é curta o suficiente para ser relembrada facilmente?"
		, id: 78, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "Os nomes das opções de menu são concisos?"
		, id: 79, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "Os ícones são econômicos sob o ponto de vista do espaço nas telas?"
		, id: 80, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "As denominações são breves?"
		, id: 81, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "As abreviaturas são curtas?"
		, id: 82, type: "Clareza", affec: []
	},
	{
		cat: "Concisão", ques: "Os rótulos são concisos?"
		, id: 83, type: "Clareza", affec: ["label"]
	},
	{
		cat: "Concisão", ques: "Na entrada de dados alfanuméricos, o sistema considera as letras maiúsculas e minúsculas como equivalentes?"
		, id: 84, type: "Formatação", affec: []
	},
	{
		cat: "Concisão", ques: "Na entrada de dados numéricos, o usuário é liberado do preenchimento do ponto decimal desnecessário?"
		, id: 85, type: "Facilitar", affec: []
	},
	{
		cat: "Concisão", ques: "Na entrada de dados numéricos, o usuário é liberado do preenchimento do zeros fracionários desnecessários?"
		, id: 86, type: "Facilitar", affec: []
	},
	{
		cat: "Concisão", ques: "Na entrada de valores métricos ou financeiros, o usuário é liberado do preenchimento da unidade de medida?"
		, id: 87, type: "Facilitar", affec: []
	},
	{
		cat: "Concisão", ques: "É permitido ao usuário reaproveitar os valores definidos para entradas anteriores, podendo inclusive alterá-los?"
		, id: 88, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Mínimas", ques: "Em formulário de entrada de dados a página posiciona o cursor no começo do primeiro campo de entrada?"
		, id: 89, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Mínimas", ques: "Na realização das ações principais em uma caixa de diálogo, o usuário tem os movimentos de cursor minimizados através da adequada ordenação dos objetos?"
		, id: 90, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Mínimas", ques: "O usuário dispõe de um modo simples e rápido (tecla TAB por exemplo) para a navegação entre os campos de um formulário?"
		, id: 91, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Mínimas", ques: "Os grupos de botões de comando possuem sempre um botão definido como default?"
		, id: 92, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Mínimas", ques: "A estrutura dos menus é concebida de modo a diminuir os passos necessários para a seleção?"
		, id: 93, type: "Facilitar", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "A densidade informacional da página é reduzida?"
		, id: 94, type: "Clareza", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "A página apresenta somente os dados e informações necessários e indispensáveis para o usuário em sua tarefa?"
		, id: 95, type: "Clareza", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "A página minimiza a necessidade do usuário lembrar dados exatos de uma página para outra?"
		, id: 96, type: "Facilitar", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "Na leitura da página, o usuário tem seus movimentos oculares minimizados através da distribuição dos objetos principais segundo as linhas de um “Z” ?"
		, id: 97, type: "Clareza", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "A página evita apresentar um grande número de quadros que podem desconcentrar ou sobrecarregar a memória do usuário?"
		, id: 98, type: "Clareza", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "Na manipulação dos dados apresentados pela página, o usuário está liberado da tradução de unidades?"
		, id: 99, type: "Facilitar", affec: []
	},
	{
		cat: "Densidade de Informação", ques: "As listas de seleção e combinação apresentam uma altura correspondente a um máximo de nove linhas?"
		, id: 100, type: "Formatação", affec: ["select", "input"]
	},
	{
		cat: "Densidade de Informação", ques: "Os painéis de menu apresentam como ativas somente as opções necessárias?"
		, id: 101, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Explícitas", ques: "A página posterga os processamentos até que as ações de entrada do usuário tenham sido completadas?"
		, id: 102, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Explícitas", ques: "Durante a seleção de uma opção de menu a página permite a separação entre indicação e execução da opção?"
		, id: 103, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Explícitas", ques: "Para iniciar o processamento dos dados, a página sempre exige do usuário uma ação explícita de confirmação?"
		, id: 104, type: "Facilitar", affec: []
	},
	{
		cat: "Ações Explícitas", ques: "É sempre o usuário quem comanda a navegação entre os campos de um formulário?"
		, id: 105, type: "Facilitar", affec: []
	},
	{
		cat: "Controle do Usuário", ques: "O usuário pode terminar um diálogo seqüencial repetitivo a qualquer instante?"
		, id: 106, type: "Facilitar", affec: []
	},
	{
		cat: "Controle do Usuário", ques: "O usuário pode interromper e retomar um diálogo seqüencial a qualquer instante?"
		, id: 107, type: "Facilitar", affec: []
	},
	{
		cat: "Controle do Usuário", ques: "O usuário pode reiniciar um diálogo seqüencial a qualquer instante?"
		, id: 108, type: "Facilitar", affec: []
	},
	{
		cat: "Controle do Usuário", ques: "Durante os períodos de bloqueio dos dispositivos de entrada, o sistema fornece ao usuário uma opção para interromper o processo que causou o bloqueio?"
		, id: 109, type: "Facilitar", affec: []
	},
]);

export default QuestionsStore;
