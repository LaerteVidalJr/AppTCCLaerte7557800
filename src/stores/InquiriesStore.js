import { writable } from 'svelte/store';

export const InquiriesStore = writable([]);

export const loadInquiries = () => { 
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    InquiriesStore.set(inquiries);
    return inquiries;
};
export const saveInquiries = newInquiry => {
    const inquiries = [...loadInquiries(), newInquiry];
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    InquiriesStore.update((currentInquiries)=>inquiries);
}

