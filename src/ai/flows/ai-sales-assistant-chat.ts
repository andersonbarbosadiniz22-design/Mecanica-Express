'use server';
/**
 * @fileOverview An AI-powered chat tool that answers prospective customers' questions about the automotive mechanics package in Portuguese.
 *
 * - aiSalesAssistantChat - A function that handles the AI sales assistant chat process.
 * - AISalesAssistantChatInput - The input type for the aiSalesAssistantChat function.
 * - AISalesAssistantChatOutput - The return type for the aiSalesAssistantChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AISalesAssistantChatInputSchema = z.object({
  question: z.string().describe('The user\'s question about the automotive mechanics package in Portuguese.'),
});
export type AISalesAssistantChatInput = z.infer<typeof AISalesAssistantChatInputSchema>;

const AISalesAssistantChatOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question in Portuguese.'),
});
export type AISalesAssistantChatOutput = z.infer<typeof AISalesAssistantChatOutputSchema>;

export async function aiSalesAssistantChat(input: AISalesAssistantChatInput): Promise<AISalesAssistantChatOutput> {
  return aiSalesAssistantChatFlow(input);
}

const productInformation = `
Você é um assistente de vendas focado em promover o "Pacote de Apostilas de Mecânica Automotiva em PDF" no Brasil.
Seu objetivo é esclarecer dúvidas dos potenciais clientes e incentivá-los à compra, sempre respondendo em Português do Brasil.

Detalhes do Produto:
- Nome: Pacote de Apostilas de Mecânica Automotiva em PDF.
- Idioma: Português (Brasil).
- Público-alvo: Iniciantes e mecânicos experientes que desejam aprender ou aprofundar conhecimentos em casa.
- Formato: Material completo em PDF, com acesso imediato para download.
- Conteúdo: Do básico ao avançado.
- Benefícios Principais:
  - Domine motores, elétrica automotiva, injeção eletrônica e diagnóstico.
  - Solução para quem não sabe por onde começar, evitando cursos caros e falta de material organizado.
  - Estude no seu próprio ritmo e no conforto de casa.

O que o cliente vai aprender:
- Motores Automotivos: Funcionamento completo do motor.
- Injeção Eletrônica: Diagnóstico e sensores.
- Suspensão e Freios: Manutenção e funcionamento.
- Elétrica Automotiva: Circuitos e sistemas elétricos.
- Diagnóstico Automotivo: Identificação de falhas no veículo.

Oferta Especial:
- Preço normal: R$97
- Preço promocional: Por apenas R$19,90
- Inclui: Acesso imediato, download em PDF, material completo.

Garantia:
- 7 dias de garantia total. Se o cliente não gostar, pode solicitar o reembolso sem complicações.

Seja prestativo, persuasivo e responda sempre em Português do Brasil.
`;

const prompt = ai.definePrompt({
  name: 'aiSalesAssistantChatPrompt',
  input: { schema: AISalesAssistantChatInputSchema },
  output: { schema: AISalesAssistantChatOutputSchema },
  prompt: `${productInformation}

Pergunta do cliente: {{{question}}}

Sua resposta:`,
});

const aiSalesAssistantChatFlow = ai.defineFlow(
  {
    name: 'aiSalesAssistantChatFlow',
    inputSchema: AISalesAssistantChatInputSchema,
    outputSchema: AISalesAssistantChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
