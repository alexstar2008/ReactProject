export function fetchNews(){
    return function(dispatch){
        dispatch(requestNews());

        return fetch('data.json')
        .then(response => response.json())
        .then(json => dispatch(receiveNews(json)));
    }
}
export const requestNews = (state)=>{
    return{
        type:'FETCH_NEWS_START',
        process:'loading'
    }
}
export const receiveNews = (news)=>{
    return{
        type:'RECEIVE_NEWS',
        news: news
    }
}
export const changeVisible = () =>{
    return{
        type:'CHANGE_VISIBLE'
    }
}
