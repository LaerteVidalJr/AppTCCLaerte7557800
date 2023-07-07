/*
 * SelectorsStore
 * 
 * Mantem uma store das máscaras de seleção para indentificar elementos no código do iframe
 * 
 * A store é somente leitura 
 * 
 */

// Importa a definição de uma store que permite definição e leitura
import { readable } from 'svelte/store';

// Constroi a store de máscaras de seleção
const SelectorsStore = readable([
    { name: "a_link", param: "a[href]" },
    { name: "audio", param: "audio[controls]" },
    { name: "button", param: "button" },
    { name: "details", param: "details" },
    { name: "embed", param: "embed" },
    { name: "iframe", param: "iframe" },
    { name: "image", param: "img[usemap]" },
    { name: "input", param: 'input:not([type="hidden"])' },
    { name: "label", param: "label" },
    { name: "select", param: "select" },
    { name: "textarea", param: "textarea" },
    { name: "video", param: "video[controls]" }
]);

// Disponibiliza a store para uso por componentes
export default SelectorsStore;
