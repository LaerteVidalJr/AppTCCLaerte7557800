<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    let srcdoc = "";
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
        <button on:click|preventDefault={()=>dispatch('loadPage',srcdoc)}>Carregar Página</button>
        <br/>
        <button on:click|preventDefault={()=>dispatch('processPage')}>Prossesar Página</button>
        <br/>
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
</style>
