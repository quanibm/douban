import axios from 'axios';

import fetchJsonp from 'fetch-jsonp';

const PORT = {
    defaultUrl: 'https://api.douban.com/v2/',
    fields: '&fields=author,images,summary,title,tags,rating,pubdate,id',
    setSrc(classArg, count, id, queryArg) {
        let src;
        switch (classArg) {
            case 'book':
                if (queryArg === '') {
                    src = `${this.defaultUrl}book/search?q=美女&count=${count}${this.fields}`
                } else {
                    src = `${this.defaultUrl}book/search?q=${queryArg}&count=${count}${this.fields}`
                };
                break;
            case 'bookDetail':
                src = `${this.defaultUrl}book/${id}`
                break;
            case 'movie':
                if (queryArg === '') {
                    src = `${this.defaultUrl}movie/top250?count=${count}`
                } else {
                    src = `${this.defaultUrl}movie/search?q=${queryArg}&count=${count}${this.fields}`
                };
                break;
            case 'movieDetail':
                src = `${this.defaultUrl}movie/${id}`
                break;
            case 'music':
                if (queryArg === '') {
                    src = `${this.defaultUrl}music/search?q=蓝调&count=${count}${this.fields}`
                } else {
                    src = `${this.defaultUrl}music/search?q=${queryArg}&count=${count}${this.fields}`
                };
                break;
            case 'musicDetail':
                src = `${this.defaultUrl}music/${id}`
                break;
        };
        return src;
    },
    getData(src, callback) {
        alert('我被调用了')

        fetchJsonp(src)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                callback(json)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    },
    callGet(classArg, count, id, queryArg, callback) {
        var src = this.setSrc(classArg, count, id, queryArg, callback)
        console.log('​callGet -> src', src);
        this.getData(src, callback);
    }
}


export default PORT


