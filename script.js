Vue.createApp({
    data(){
        return {
            myName: '',
            myAge: Number, 
            myAgein5Years: '',
            image: ''
        }
        
    },
    methods:{
        name(){
            const Name = prompt('Write your name');
            return this.myName = Name;
        },
        age(){
            const Age = +prompt('Write your age');
            return this.myAge = Age;
            
        },
        ageinFiveYears(){
            return this.myAge + 5;
        }, 
        favouriteNumber(){
            return Math.random();
        },
        imageFromGoogle(){
            const img = prompt('Put of link of image from Google');
            return this.image = img;
        }
        // info(){
        //     const Name = prompt('Write your name');
        //     const Age = prompt('Write your age');
        //     this.myName = Name;
        //     this.myAge = Age;
        //     this.myAgein5Years = Age + 5;
        //     console.log(myName);
        //     console.log(myAge);
        //     console.log(myAgein5Years);
        // }
        
    }
}).mount('#my-app')