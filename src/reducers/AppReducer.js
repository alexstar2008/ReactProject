const AppReducer = (state={news: [],visible:8,hasMore:true}, action) => {
    switch (action.type) {
        case 'FETCH_NEWS_START': {
            return {...state,fetching:true,news:[]};
            break;
    }
        case 'RECEIVE_NEWS':{
            return {...state,fetching:false,fetch:true,news: action.news};
            break;
        }
        case 'CHANGE_VISIBLE':{
            let newValue = state.visible+8;
            let amount = state.news.length;
            let visible=state.visible;
            let hasMore = state.hasMore;
            if(newValue>=amount){
                visible = amount;
                hasMore = false;
            }else{
                visible+=8;
            }
            return {...state,visible,hasMore};
            break;
        }
        default:{
            return state;
            break;
        }

    } 
}
module.exports = AppReducer;