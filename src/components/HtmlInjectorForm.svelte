<script>
    // Importa e define a função para dispachar eventos
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    // Define a váriavel para receber o código fonte da página
    let srcdoc = "";
    
    //// Define e disponibiliza a váriavel dos resultados obitidos pelo processamento da página montada no iframe
    export let results = [];

</script>

<div>
    <details id="detailscode" open>
        <summary>Entrada por código HML</summary>
        <form>
            <label for="sitecode">Código HTML da página a ser analisáda:</label
            ><br />
            <textarea id="sitecode" rows="25" bind:value={srcdoc} /><br />
        </form>
    </details>
    <form>
        <!-- Define o dispache do evento, para aplicação carregar o código fonte no iframe. -->
        <button on:click|preventDefault={()=>dispatch('loadPage',srcdoc)}>Carregar Página</button>
        <br/>
        <!-- Define o dispache do evento, para processar a página carregada no iframe-->
        <button on:click|preventDefault={()=>dispatch('processPage')}>Prossesar Página</button>
        <br/>
        <!-- Define o dispache do evento, para mudar o modo da aplicação para o questionário-->
        <button on:click|preventDefault={()=>dispatch('toggleApp')}>Montar Questionario</button>
        <fieldset id="resultsSet" disabled>
            <legend>Elementos Ativos</legend>
            {#each results as result (result.className)}
                <label for={result.className}>{result.className}</label>
                <input
                    id={result.className}
                    type="text"
                    value={result.amount}
                />
            {/each}
        </fieldset>
    </form>
</div>

<style>
    textarea {
        display: block;
        width: 90%;
        margin: 0 auto;
    }

    input:disabled{
        color: #333;
    }
</style>
