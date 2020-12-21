let app = new Vue ({
    el: "#app",
    data : {
        contatti: [
            {
                name: "Ron",
                avatar: './assets/img/ron.jpg',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 15:30',
                        text: 'Harry!!!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:31',
                        text: 'Harryyyyy ci sei???',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:31',
                        text: 'Ho rotto di nuovo la bacchetta!!! 😭😭😭',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:12',
                        text: 'No NON CI CREDO! Fai sempre questo Ron! 🙆‍♂️',
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Hermione",
                avatar: './assets/img/hermione.jpg',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 17:22',
                        text: "Harry ho bisogno del tuo mantello dell'invisibilità! ",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 17:38',
                        text: 'Che devi fare?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 17:39',
                        text: 'Rubare dei libri in biblioteca! 🥷',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:12',
                        text: 'Sei la solita! Passa a prenderlo!',
                        status: 'sent'
                    }
                ]
            },
            {
                name: "Silente",
                avatar: './assets/img/silente.jpg',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 17:23',
                        text: "Signore, com è finita quella questione?",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 17:32',
                        text: 'Niente Harry, nulla da fare',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 17:33',
                        text: "Anche questa volta TU-SAI-CHI si è palesato così come immaginavamo...",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 17:33',
                        text: 'Finisco la lezione di Storia della Magia e vengo da Lei, ne parliamo da vicino...',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 17:35',
                        text: "A dopo, portami due Caramelle Tutti i Gusti +1, ho un calo di zuccheri 🍬",
                        status: 'received'
                    }
                ]
            },
            {
                name: "Piton",
                avatar: './assets/img/piton.jpg',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 19:32',
                        text: "Prof domani ho il Quidditch, entro 1 ora dopo...",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 19:38',
                        text: 'Stupide distrazioni.',
                        status: 'received'
                    },
                ]
            },
            {
                name: "Draco",
                avatar: './assets/img/draco.jpg',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 23:12',
                        text: "Che ci fai online a quest'ora? Ansia per domani? 🧹",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 23:13',
                        text: 'No!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 23:13',
                        text: "Tanto già sai come finirà: come l'ultima volta ✌️",
                        status: "sent"
                    },
                    {
                        date: '10/01/2020 23:14',
                        text: 'Sisi certo',
                        status: "received"
                    }
                ]
            }
        ],
        chatShown:{
            name: "Ron",
            avatar: './assets/img/ron.jpg',
            visible: true,
            messages:[
                {
                    date: '10/01/2020 15:30',
                    text: 'Harry!!!',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:31',
                    text: 'Harryyyyy ci sei???',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:31',
                    text: 'Ho rotto di nuovo la bacchetta!!! 😭😭😭',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:12',
                    text: 'No NON CI CREDO! Fai sempre questo Ron! 🙆‍♂️',
                    status: 'sent'
                }
            ]

        },
        userMessage : null,
        reply: null
    },
    methods: {
        clickToViewChat(contatto_cliccato) {
            this.chatShown = contatto_cliccato;
        },

        //funzione che agginge un messaggio dell'utente
        addMessage: function(){
            let newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm'),
                text: this.userMessage,
                status: 'sent'
            }
            this.chatShown.messages.push(newMessage);
            this.userMessage = '';
            setTimeout(this.addReply, 1000)
        },
        //Funzione che consente risposta automatica dopo 1secondo 
        addReply: function(){
            let newReply = {
                date: dayjs().format('DD/MM/YYYY HH:mm'),
                text: "Ok Harry!",
                status: 'received'
            }
            this.chatShown.messages.push(newReply);
        }
    },
    // mounted: function(){
       
    // }
});


































