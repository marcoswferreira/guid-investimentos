# 💰 Plano de Investimentos Personalizado

Uma ferramenta web interativa e de lado do cliente (client-side) para ajudar usuários a criar um plano de investimentos personalizado. O projeto guia o usuário desde a análise da sua renda mensal até a definição de metas, construção de reserva de emergência, alocação de ativos de longo prazo e, finalmente, gera um relatório completo em PDF.

## ✨ Funcionalidades Principais

* **Análise de Renda:** Calcula automaticamente o salário líquido com base no salário bruto, estimando deduções de INSS e IRRF (com valores editáveis).
* **Metas de Curto Prazo:** Permite definir um objetivo financeiro e um prazo, calculando o aporte mensal necessário para atingi-lo.
* **Reserva de Emergência:** Ajuda a dimensionar o montante ideal para a reserva de segurança com base nos custos fixos mensais do usuário.
* **Alocação de Longo Prazo:** Sugere uma diversificação de carteira entre Renda Fixa, Renda Variável no Brasil e no Exterior.
* **Distribuição de Aportes:** Facilita a alocação da capacidade de investimento mensal entre os diferentes objetivos (curto prazo, reserva e longo prazo).
* **Geração de PDF:** Utiliza as bibliotecas `jsPDF` e `html2canvas` para gerar um relatório completo e estilizado do plano financeiro criado, pronto para ser salvo ou impresso.
* **Conteúdo Educacional:** Oferece textos explicativos sobre tipos de investimentos, tributação (IR, IOF), FGC, suitability e dicas para escolher uma corretora.
* **Totalmente Client-Side:** Funciona diretamente no navegador, sem a necessidade de um backend ou banco de dados.
* **Monetização:** Inclui espaços para anúncios do Google AdSense.
* **Responsivo:** Interface construída com Tailwind CSS para se adaptar a diferentes tamanhos de tela.

-----

## 🛠️ Tecnologias Utilizadas

* **Frontend:**
  * HTML5
  * CSS3 (com `style.css` para estilos personalizados)
  * [Tailwind CSS](https://tailwindcss.com/) (utilizado via CDN)
  * JavaScript (Vanilla JS, ES6 Modules)
* **Bibliotecas (via CDN):**
  * [jsPDF](https://github.com/parallax/jsPDF) - Para a criação do arquivo PDF.
  * [html2canvas](https://html2canvas.hertzen.com/) - Para renderizar o conteúdo HTML em uma imagem que é inserida no PDF.
  * [Google Fonts](https://fonts.google.com/) - Para a fonte 'Inter'.

-----

## ⚖️ Aviso Legal

Este projeto é uma ferramenta de propósito educacional e informativo, e **não deve ser considerado como aconselhamento financeiro profissional**. As sugestões e cálculos são baseados em regras e exemplos gerais do mercado brasileiro. As decisões de investimento são de responsabilidade exclusiva do usuário. Sempre consulte um profissional qualificado e certificado antes de tomar decisões de investimento.

-----
