import { readable } from 'svelte/store';

const QuestionsTypeStore = readable([
    "Estrutural",
    "Clareza",
    "Formatação",
    "Facilitar"
]);

export default QuestionsTypeStore;
