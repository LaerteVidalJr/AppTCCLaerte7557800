/*
 * QuestionsTypeStore
 *
 * Mantem uma store dos tipos de perguntas que podem formar o questionário.
 * 
 * Os tipos subdividem o questionário em secsões.
 * 
 * A store é somente leitura
 *
 */

// Importa a definição de uma store que permite definição e leitura
import { readable } from 'svelte/store';

// Constroi a store de tipos de questões
const QuestionsTypeStore = readable([
    "Estrutural",
    "Clareza",
    "Formatação",
    "Facilitar"
]);

// Disponibiliza a store para uso por componentes
export default QuestionsTypeStore;
