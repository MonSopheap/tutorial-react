import { Methods, Props } from "../models/enum";

const __token = localStorage.getItem(Props.Token);

const headers = {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data; application/json",
    //custom header of jwt bearer token
    "Authorization": `Bearer ${__token}`,
}

function joinURL(baseURL, url) {
    return `${baseURL}/${url}`;
}


export class HttpClientService {
    constructor() {
        this.domain = "https://localhost:5000";
    }

    request(url, method, data = {}) {
        url = this.joinURL(this.domain, url);
        var body = data ? JSON.stringify({ ...data }) : {};
        switch (method) {
            case Methods.POST:
                return this.request(url, Methods.POST, body).then(res => res.json());
            case Methods.GET:
                return this.request(url, Methods.GET,).then(res => res.json());
            case Methods.PUT:
                return this.request(url, Methods.PUT, body).then(res => res.json());
            case Methods.DELETE:
                return this.request(url, Methods.DELETE,).then(res => res.json());
            case Methods.PATCH:
                return this.request(url, Methods.PATCH,).then(res => res.json());
            default:
                return '';
        }
    }
}