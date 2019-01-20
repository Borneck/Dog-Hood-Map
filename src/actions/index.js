import superagent from 'superagent';
import jsonp from 'superagent-jsonp';


export function scriptLoader(url) {
      const index = window.document.getElementsByTagName('script')[0];
      const script = window.document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      index.parentNode.insertBefore(script, index);
}

export function wikipediaSearch(keyword) {
    return function(dispatch) {
        let url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&format=json&callback=JSONP_CALLBACK";
        superagent
            .get(url)
            .use(jsonp({
                callbackName: 'JSONP_CALLBACK'
            }))
            .end((err, res) => {
                dispatch({type: "WIKIPEDIA_SEARCH", keyword: keyword, res: res})
            })
    
        
    }
}
