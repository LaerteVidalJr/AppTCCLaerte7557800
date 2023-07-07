<script>
	// Importa os componentes a ser usado na aplicação.
	import HtmlInjectorForm from "./components/HtmlInjectorForm.svelte";
	import InquiryForm from "./components/InquiryForm.svelte";
	// Importa as Stores de Seletores, Questões e Tipos de Questão
	import SelectorsStore from "./stores/SelectorsStore.js";
	import QuestionsStore from "./stores/QuestionsStore.js";
	import QuestionsTypeStore from "./stores/QuestionsTypeStore.js";

	// Define o modo de operação da aplicação
	let pageOri = "left";
	// Define a variável do código fonte a ser carregado
	let srcdoc = "";
	// Define a variável para os resultados do processamento da página montada no iframe
	let results = [];
	// Define a variável para o questionário
	let inquiry = [];

	// Define a função de processamento por seletor
	const processQuery = (cValue, index, array) => {
		const iFrameDoc =
			document.querySelector("iframe").contentWindow.document;
		const nodeSelection = iFrameDoc.querySelectorAll(cValue.param);
		return {
			className: cValue.name,
			amount: nodeSelection.length,
		};
	};

	// Define a função de processamento da página montada
	const processLoadedPage = () => {
		results = $SelectorsStore.map(processQuery);
	};

	// Define a função de trrancisão do modo de operação da aplicação
	const toggleApp = () => {
		if (pageOri == "left") {
			const questions = $QuestionsTypeStore.flatMap((tv) =>
				$QuestionsStore
					.filter((qv) => qv.type == tv)
					.filter((qv) => {
						let rand = Math.random();
						return rand < 0.3;
					})
			);
			inquiry = questions.map((qs, i) => {
				return {
					id: i,
					question: qs.ques,
					questionId: qs.id,
					answer: 0,
				};
			});
		}
		if(pageOri == 'right'){
			srcdoc = '';
			results = [];
			inquiry = [];
		}
		pageOri = pageOri == "left" ? "right" : "left";
	};

	// Define a função que monta o código HTML no <iframe/>
	const loadPage = (e) => {
		results = [];
		srcdoc = e.detail;
	};
</script>

<main>
	<div
		class:page-left={pageOri == "left"}
		class:page-right={pageOri == "right"}
	>
		{#if pageOri == "left"}
			<HtmlInjectorForm
				{srcdoc}
				{results}
				on:processPage={processLoadedPage}
				on:toggleApp={toggleApp}
				on:loadPage={loadPage}
			/>
		{/if}
		<iframe
			id="viewFrame"
			title="Frame para montar a página"
			src=""
			{srcdoc}
			frameborder="1"
		/>
		{#if pageOri == "right"}
			<InquiryForm {inquiry} on:toggleApp={toggleApp}/>
		{/if}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	.page-left {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		width: 100%;
		height: 100%;
		margin: 0;
	}

	.page-right {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
		width: 100%;
		height: 100%;
		margin: 0;
	}

	iframe {
		width: 100%;
		height: 90%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
