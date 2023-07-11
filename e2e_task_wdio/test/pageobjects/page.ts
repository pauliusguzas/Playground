export default class Page {
    
    public open (path: string) {
        return browser.url(`https://spectrocoin.com/en/${path}`);
    }
}
