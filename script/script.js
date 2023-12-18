const {createApp} = Vue;
let DateTime = luxon.DateTime;


createApp({
    data(){
        return{
            // variabile per il filtro 
            filter: '',
            // variabile per invio messaggio 
            new_message: '',
            // indice utente attivo 
            i: 0,
            // RISPOSTE 
            answer:["Mentalmente? Fisicamente? Finanziariamente? Dal punto di vista spirituale? Socioeconomicamente? Puoi essere un po' più specifico su cosa intendi?"," Hai qualcosa da spettegolare? Allora mi dispiace, non ho tempo.", "Il mio avvocato mi ha detto di non rispondere a questa domanda.", "Ho appena incontrato un vecchio amico. Pensa che dovrei uscire con te.", "Mi appello al quinto emendamento.","Sono un po' impegnato a uccidere draghi.", "Ok, sarebbe meglio se mi chiedessi di uscire.","Fantastico! Ma sono totalmente di parte.", "Perché tutte queste domande? Sei un poliziotto?","Quanto sei disposto a pagarmi se te lo dico?","Hai tempo di parlarne, visto che è una storia così lunga?", "Sono pronto per un pisolino."," Fantastico! Sono assolutamente entusiasta di ricevere questa domanda per la millesima volta oggi.", "Come sono? Diciamo che sono l'incarnazione della perfezione e lasciamo perdere."  ],
            menu_message:{
              show:false,
              index:false
            },
            contacts: [
                {
                  name: 'Michele',
                  avatar: './img/avatar_1.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: './img/avatar_2.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: './img/avatar_3.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Alessandro B.',
                  avatar: './img/avatar_4.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Alessandro L.',
                  avatar: './img/avatar_5.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Claudia',
                  avatar: './img/avatar_6.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  name: 'Federico',
                  avatar: './img/avatar_7.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Davide',
                  avatar: './img/avatar_8.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
              ]
        }
    },
    created(){
        this.filter_user();
        this.autoscroll()
    },
    methods:{
        active_user(index){
            this.i = index;
            this.menu_message.show = false
        },
        // invio messaggio e risposta 
        send_message(){
            let array = this.contacts;
            let index = this.i;
            let ora = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
            let ans = this.answer[Math.floor(Math.random()* this.answer.length)]

            this.contacts[this.i].messages.push({
                date: ora,
                message: this.new_message,
                status: 'sent'
            });
            this.new_message = ''
            setTimeout(() => {
                array[index].messages.push({
                    date: ora,
                    message: ans,
                    status: 'received'
                })
            },1000)
            setTimeout(function(){
              let chat = document.getElementById("chat")
              chat.scrollTop= 999 
              }, 1100);
            
        },
        // filtro utenti 
        filter_user(){
            let text = this.filter.toLowerCase()
            this.contacts.forEach(element => {  
                let username = element.name.toLowerCase()    
                if(!username.includes(text)){
                    element.visible = false
                }
                else{
                    element.visible = true
                }
            });   
        },
        // mostrare menu 
        show_menu(index){
          if(!this.menu_message.show || this.menu_message.index != index){
            this.menu_message.index = index
            if(this.menu_message.index == index){
              this.menu_message.show = true
            }
          }
          else{
            this.menu_message.show = false
          }
        },
        // che elimina messaggio 
        delete_msg(index){
          this.contacts[this.i].messages.splice(index, 1)
            this.menu_message.show = false
            this.menu_message.index = false
          
        },
        autoscroll(){
          setTimeout(function(){
          let chat = document.getElementById("chat")
          chat.scrollTop= 999 
          }, 500);
        }

    }
}).mount('#app')