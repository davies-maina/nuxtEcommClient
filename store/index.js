

export const state=()=>(
    {
        categories:[]
    }
);

export const getters={
    categories(state){
        return state.categories
    }
}


export const mutations={
    SET_CATEGORIES(state,payload){
        state.categories=payload
    }
}

export const actions={
    //make a request before we load the app 
    async nuxtServerInit({commit}){
        let response=await this.$axios.$get('categories');
        // console.log(response);
        commit('SET_CATEGORIES',response.data);
    }
}