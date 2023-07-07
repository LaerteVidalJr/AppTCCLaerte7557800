/*
 * InquireisStore
 *  
 * Registra os questionários respondidos na localstorage do navegador usando a chave 'inquiries'.
 * 
 * Permite também a recuperação de todos os questionários respondidos na máquina.
 */

//  Importa a definição de uma store que permite leitura e escrita.
import { writable } from 'svelte/store';

//  Constroi e disponibiliza a variável da store com um array vazio.
export const InquiriesStore = writable([]);

//  Define e disponibiliza o método para recuperar todos os questionários
export const loadInquiries = () => {
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    InquiriesStore.set(inquiries);
    return inquiries;
};

//  Define e disponibiliza o método para recordar um novo questionario na store e no localstorage
export const saveInquiries = newInquiry => InquiriesStore.update(currentInquiries => {
    const inquiries = [...currentInquiries, newInquiry];
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    return inquiries;
});