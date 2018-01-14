import Cookie from 'js-cookie'
const app ={
    // 状态
    state:{
        language:Cookie.get('language') || 'en'
    },
    mutations:{
        //改变
        SET_LANGUAGE:(state,language) =>{
            state.language = language;
            Cookie.set('language',language);
        }
    },
    actions:{
        setLanguage({commit},language){
            commit('SET_LANGUAGE',language);
        }
    }
}

export default app