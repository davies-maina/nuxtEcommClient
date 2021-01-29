export const state=()=>({
    product:[]
});


export const getters={
    product(state){
        return state.product;
    }
}

export const mutations={
    SET_PRODUCT(state,payload){
        state.product=payload
    }
}

export const actions={
    async fetchProduct({commit},slug){
        let response = await this.$axios.$get(`products/${slug}`);
        
        commit('SET_PRODUCT',response.data);
        
    }
}