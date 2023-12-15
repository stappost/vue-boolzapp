const {createApp} = Vue;
let DateTime = luxon.DateTime;


createApp({
    data(){
        return{
            filter: '',
            new_message: '',
            i: 0,
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
        this.filter_user()
    },
    methods:{
        active_user(index){
            this.i = index;
            this.menu_message.show = false
        },
        send_message(){
            let array = this.contacts;
            let index = this.i;
            let ora = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

            this.contacts[this.i].messages.push({
                date: ora,
                message: this.new_message,
                status: 'sent'
            });
            this.new_message = ''
            setTimeout(() => {
                array[index].messages.push({
                    date: ora,
                    message: 'ok',
                    status: 'received'
                })
            },1000)
        },
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
        delete_msg(index){
          console.log(index)
          this.contacts[this.i].messages.splice(index, 1)
          this.menu_message.show = false
          this.menu_message.index = false
        }

    }
}).mount('#app')