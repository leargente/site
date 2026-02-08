document.addEventListener("alpine:init", () => {
    Alpine.data("alpine", () => ({

        menu: false,
        accordion: null,
        subscriptions: [
            {
                name: "Estratégia alimentar (sem vídeo)",
                description: "Indicada para quem busca orientação objetiva e ajustes de rotina pontuais, sem aprofundamento ou acompanhamento contínuo",
                price: "R$ 180",
                type: "- (pix ou 1x cartão)",
                link: "https://www.asaas.com/c/q9cf7dky7fh38iiy",
                included: [
                    "Questionário pré-atendimento",
                    "Entendimento da rotina alimentar e dos objetivos",
                    "Direcionamentos alimentares práticos e estratégicos com base nas informações fornecidas",
                    "Esclarecimento de dúvidas pontuais sobre a aplicação das orientações já utilizadas",
                ],
            },
            {
                name: "Atendimento online (com vídeo)",
                description: "Indicado para quem busca um direcionamento alimentar aprofundado",
                price: "R$ 300",
                type: "- (pix ou 2x cartão)",
                link: "https://www.asaas.com/c/xyo7dnwnjgup5yoz",
                included: [
                    "Questionário pré-atendimento",
                    "1º encontro: análise completa da rotina alimentar e dos objetivos",
                    "2º encontro (em até 45 dias): feedback e ajustes no direcionamento inicial",
                    "Direcionamento alimentar individualizado",
                    "Esclarecimento de dúvidas pontuais",
                    "Respostas via WhatsApp relacionadas exclusivamente à aplicação do direcionamento proposto",
                ],
            },
            {
                name: "Plano Essencial - 90 Dias",
                description: "Indicado para quem busca acompanhar a evolução alimentar",
                price: "R$ 560",
                type: "- (pix ou 3x cartão)",
                link: "https://www.asaas.com/c/hhcf9jltfc7eh7uf",
                included: [ 
                    "Questionário pré-atendimento",
                    "3 encontros dentro dos 90 dias",
                    "Encontro inicial: entendimento aprofundado da rotina e objetivos",
                    "Encontro de 45 dias: revisão, feedback e ajuste do plano base",
                    "Encontro final: refinamento, acompanhamento da evolução e estratégias para continuidade",
                    "Direcionamento alimentar de caráter educativo, adequado a cada fase",
                    "Esclarecimento contínuo de dúvidas por 90 dias (restritas à aplicação do direcionamento)",
                ],
            },
            {
                name: "Plano Premium - 6 Meses",
                description: "Indicado para quem deseja acompanhamento mais próximo e evolução contínua",
                price: "R$ 1.000",
                type: "- (pix ou 6x cartão)",
                link: "https://www.asaas.com/c/u15f4go1elv7ncyu",
                included: [
                    "5 encontros durante os 6 meses",
                    "Encontro inicial: mapeamento completo + direcionamento base",
                    "Encontro de 45 dias: primeiros ajustes finos",
                    "3 encontros de acompanhamento: evolução progressiva, refinamentos e suporte contínuo",
                    "Direcionamento alimentar educativo, ajustado conforme cada etapa",
                    "Feedbacks periódicos sobre a aplicação das orientações",
                    "Esclarecimento contínuo de dúvidas por 180 dias (restritas à aplicação do direcionamento)",
                ],
            },
        ],
        questions: [
            {
                title: "Qual a diferença entre o atendimento com vídeo e sem vídeo?",
                response: "No atendimento com vídeo, o encontro acontece ao vivo, permitindo uma conversa mais aprofundada, troca direta, esclarecimento imediato de dúvidas e melhor entendimento da rotina. No atendimento sem vídeo, o direcionamento é feito com base nas informações fornecidas via questionário, com retorno orientativo por escrito, sem encontro ao vivo",
            },
            {
                title: "O atendimento sem vídeo substitui o atendimento com vídeo?",
                response: "Não. O atendimento sem vídeo é uma opção mais objetiva, indicada para quem já tem alguma organização e busca direcionamento prático. O atendimento com vídeo permite maior aprofundamento, troca em tempo real e acompanhamento mais próximo",
            },
            {
                title: "Posso escolher qualquer opção independentemente do meu objetivo?",
                response: "Sim. Todas as opções oferecem direcionamento alimentar de caráter educativo. A escolha depende do nível de acompanhamento, do tempo disponível e da necessidade de esclarecimento de dúvidas ao longo do processo",
            },
            {
                title: "Há acompanhamento contínuo entre os encontros?",
                response: "Não. O acompanhamento contínuo não faz parte da “Estratégia Alimentar”. Nas opções “Atendimento on line” e planos Essencial e Premium, há espaço para esclarecimento de dúvidas e envio de feedbacks dentro do período contratado, conforme descrito em cada opção",
            },
            {
                title: "Os ajustes no direcionamento são feitos a qualquer momento?",   
                response: "Não. Os ajustes no direcionamento alimentar acontecem exclusivamente nos encontros previstos em cada plano. Fora desses momentos, são oferecidos apenas esclarecimentos sobre a aplicação do que já foi orientado",
            },
        ],

        init() {
            document.addEventListener("visibilitychange", () => {
                const video = document.getElementById("background-video")
                video.load()
                video.play()
            })
        },

    }))
})
