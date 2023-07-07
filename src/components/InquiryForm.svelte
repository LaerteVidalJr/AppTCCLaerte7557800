<script>
    // Importa a store para salvar os questionários respondidos
    import { saveInquiries } from "../stores/InquiriesStore.js";

    // Importa e define a função para dispachar eventos
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // Define e disponibiliza a váriavel do questionário a responder.
    export let inquiry = [];

    // Define o método que registra o questionário respondido e sinaliza a aplicação a resetar o app.
    const registerInquiry = ()=>{
        saveInquiries(inquiry);
        dispatch('toggleApp');
    };

</script>

<form>
    <button on:click|preventDefault={()=>dispatch('toggleApp')}>Retornar a inserção de HTML.</button>
    {#each inquiry as question (question.id)}
        <div class="card">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>{question.question}</label><br />
            <label
                >Nota:
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={-3}
                />{-3}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={-2}
                />{-2}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={-1}
                />{-1}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={+0}
                />{+0}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={+1}
                />{+1}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={+2}
                />{+2}
                <input
                    type="radio"
                    bind:group={question.answer}
                    value={+3}
                />{+3}</label
            >
        </div>
    {/each}
    <button on:click|preventDefault={registerInquiry}>Registrar Questionario</button>
</form>

<style>
    form {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .card {
        border: 1px solid #555;
        border-radius: 6px;
    }
</style>
