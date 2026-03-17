
import React from 'react';
import { Plane, ShieldCheck, Map, BookOpen, Heart, Wind } from 'lucide-react';
import { Testimonial, Module, PricePlan } from './types';

export const COLORS = {
  primary: '#5B84B1',
  secondary: '#E3F2FD',
  accent: '#B0C4DE',
  text: '#2D3748',
};

export const MODULES: Module[] = [
  { id: 1, title: 'A História por trás do medo', description: 'Compreenda as raízes e os gatilhos iniciais.' },
  { id: 2, title: 'O Hiato de 12 anos', description: 'Como a vida acontece enquanto evitamos voar.' },
  { id: 3, title: 'O Ponto de Virada', description: 'O começo do enfrentamento e o primeiro "sim".' },
  { id: 4, title: 'A Preparação', description: 'Técnicas e ferramentas para o reencontro com o avião.' },
  { id: 5, title: 'O Processo de Libertação', description: 'O pós-voo e o início da verdadeira superação.' },
  { id: 6, title: 'Guia Prático', description: 'Estratégias testadas que realmente funcionam na prática.' },
  { id: 7, title: 'O que eu aprendi', description: 'A transformação interna que o enfrentamento traz.' },
  { id: 8, title: 'A liberdade é um voo interno', description: 'Conquistando a autonomia definitiva.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Paula',
    role: 'Executiva',
    content: 'O eBook me ajudou a entender que o medo não era do avião, mas do controle. Viajei semana passada depois de 5 anos!',
    imageUrl: 'https://picsum.photos/seed/ana/200/200',
  },
  {
    id: '2',
    name: 'Marcos Silva',
    role: 'Engenheiro',
    content: 'As dicas práticas do módulo 6 foram cruciais para o meu último voo. Senti-me seguro pela primeira vez.',
    imageUrl: 'https://picsum.photos/seed/marcos/200/200',
  },
  {
    id: '3',
    name: 'Clara Mendes',
    role: 'Autônoma',
    content: 'A escrita da Camila é acolhedora. Parece uma conversa de amiga que realmente entende o que sentimos.',
    imageUrl: 'https://picsum.photos/seed/clara/200/200',
  },
];

export const PLANS: PricePlan[] = [
  {
    id: 'standard',
    name: 'Digital',
    price: 'R$ 97,00',
    installment: '10x de R$ 11,66',
    period: 'Acesso Imediato',
    features: [
      'eBook Completo (PDF)',
      'Acesso vitalício',
      'Guia prático de exercícios',
      'Checklist de pré-voo',
    ],
  },
  {
    id: 'premium',
    name: 'Mentoria + eBook',
    price: 'R$ 197,00',
    installment: '10x de R$ 23,68',
    period: 'Vagas Limitadas',
    highlight: true,
    features: [
      'Tudo do Plano Digital',
      'Conversa individual com a autora',
      'Acesso à comunidade exclusiva',
      'Live mensal para dúvidas',
      'Material complementar em áudio',
      'Suporte prioritário',
    ],
  },
];
