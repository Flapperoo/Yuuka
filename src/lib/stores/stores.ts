import { writable } from "svelte/store";

export const category = writable<any[]>([]);
export const expenses = writable<any[]>([]);
export const funding = writable<any[]>([]);
export const reminders = writable<any[]>([]);
export const transactions = writable<any[]>([]);