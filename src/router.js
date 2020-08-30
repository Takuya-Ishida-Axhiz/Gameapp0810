import Vue from 'vue';
import Router from 'vue-router';
import Account from 'Account';
import Mypage from 'Mypage';
import Chat from 'Chat';
import Test from 'Test';
import Mainmenu from 'Mainmenu';
import Home from 'Home';
import Profile from 'Profile';


import Login from 'Login';



Vue.use(Router)

export default
new Router({
    routes:[
        
        {path: '/' ,component: Home},

        {path: '/Mypage:uid', component: Mypage, props:true},
        
        {path:'profile', component: Profile},
        {path:'account', component: Account},
        
        {path: '/Login' ,component: Login,  isPublic: true},
        {path: '/chat' ,component: Chat},
        {path: '/account' ,component: Account},
        {path: '/account' ,component: Account},
        {path: '/account' ,component: Account},
        
        {path:'*' ,redirect:'/'}

        

    ]
});


